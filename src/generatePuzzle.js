import * as Language from "./language.js";
import * as Stack from "./stack.js";

const MAXINSTRUCTION = 1000;
const MAXFUNCTION = 50;
const MAXFUNCTIONINPROGRAM = 5;

/**
 * Returns an array which represents the init board with black squares
 * @returns {Array} board initialized
 */
function boardInit() {
    return Array.from(Array(12), () => Array.from(Array(16))).map((el, i) => el.map((square, j) => Language.cons("", "", "")));
}

/**
 * Returns an initial empty puzzle
 * @returns {object} puzzle with no colors, obstacles and robot on position (6, 7) facing up
 */
function puzzleInit() {
    return {"robotInit": {"row":6, "col":7, "dir": 1}, "board": boardInit(), "achievementRequired": {"stars" : 1}};
}

/**
 * Returns a random number between min (included) and max (excluded)
 * @param {number} min  Included
 * @param {number} max  Excluded
 * @returns {number} A random number between min (included) and max (excluded)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

  
/**
 * Returns a random number with a 20% probability of being between 0 and size - 1, and 80% probability of being between size and max
 * @param {number} max max included
 * @param {number} size Smallest number with a 80% probability of being returned
 * @returns {number} A random number
 */
function getBiasedInt(max, size) {
    if (Math.random() < 0.2) {
        return Math.floor(getRandomArbitrary(0, size));
    }
    else {
        return Math.floor(getRandomArbitrary(size, max + 1));
    }
}

/**
 * 
 * @param {Array} colors An array of the possible colors for the program
 * @returns Generates a program with only colors instead of instructions and function calls
 */
function generateColorProgram(colors) {
    return Array.from(Array(5), () => Array.from(Array(5)).map((square, i) => colors[getBiasedInt(colors.length - 1, 2)]));
}

/**
 * 
 * @param {instructions} instructions Array of possible instructions and functions that can be called
 * @returns A program
 */
function generateProgram(instructions) {
    return Array.from(Array(5), () => Array.from(Array(5)).map((square, i) => instructions[getBiasedInt(instructions.length - 1, 5)]));
}

/**
 * Returns a solvable puzzle
 * @param {array of array} program A sequence of instructions
 * @param {array of array} programColor A sequence of colors
 * @param {object} puzzle A puzzle with no colors the robot on a position of the board
 * @returns A puzzle
 */
function generateSolvablePuzzle(program, programColor, puzzle) {
    const achievementAcquired = {"stars" : 0};
    function isDone(achievementAcquired) { // Verify if puzzle is done
        return (puzzle.achievementRequired.stars === achievementAcquired.stars);
    }
    function update(robot, puzzle, achievementAcquired) { // Create new object containing achievement acquiered by the robot when called
        const nextAchievementAcquired = Object.assign({}, achievementAcquired);
        if (puzzle.board[robot.row][robot.col].achievement === "star") {
            return {"stars" : nextAchievementAcquired.stars + 1}; 
        }
        return nextAchievementAcquired;
    }
    function jumppad(robot,obstacle) {
        switch (obstacle) {
            case "jumppadE" :
                return {"row":robot.row,"col":robot.col+3,"dir":robot.dir};
            case "jumppadN" :
                return {"row":robot.row-3,"col":robot.col,"dir":robot.dir};
            case "jumppadW" :
                return {"row":robot.row,"col":robot.col-3,"dir":robot.dir};
            case "jumppadS" :
                return {"row":robot.row+3,"col":robot.col,"dir":robot.dir};
            default :
                throw Error("Unknown instruction error");
        }
    }
    function addDebug(currentFunction, currentInstruction, functionNumber, instructionNumber, debug, program) {
        if (program[functionNumber-1][instructionNumber+1] === undefined) {
            return Stack.stackPush(String(currentInstruction.number)+"0", debug);
        } else {
            return Stack.stackPush(String(currentInstruction.number)+"0", Stack.stackPush(String(functionNumber)+String(instructionNumber+1), debug));
        }
    }
    function addLastAchievement(board, coord, achievement) {
        return board.map((el, i) => el.map((square, j) => {
            if (i === coord.row && j === coord.col) {
                if (board[i][j].color === "") {
                    throw Error("Color error");
                }
                else {
                    return Language.cons(board[i][j].color, achievement, "");  
                }
            } else {
                return board[i][j];
            } 
        }));
    }

    function updateBoard(board, coord, achievement, obstacle, instruction) {
    if (instruction !== undefined) {
        return board.map((el, i) => el.map((square, j) => {
            if (i === coord.row && j === coord.col) {
                if  (instruction.function === undefined) {
                    return Language.cons(programColor[instruction.number - 1][instruction.instruction], achievement, obstacle);
                } else {
                    return Language.cons(programColor[instruction.function- 1][instruction.instruction], achievement, obstacle);
                }
            } else {
                return board[i][j];
            } 
        }));
    } else {
        return board;
    }
    }
    function addInstructionFromOldFunction(currentFunction, currentInstruction, functionNumber, instructionNumber, s, program) {
        if (program[functionNumber-1][instructionNumber+1] === undefined) {
            return Stack.stackPush({"function" : currentInstruction.number, "instruction" : 0}, s);
        } else {
            return Stack.stackPush({"function" : currentInstruction.number, "instruction" : 0}, Stack.stackPush({"function" : functionNumber, "instruction" : instructionNumber+1}, s));
        }
    }
    function evalRec(robot, instructCount, functionCount, callStack, achievementAcquired, debug, board) {
        if (robot.row < 0 || robot.col < 0 || robot.row >= 12 || robot.col >= 16) {
            return {"robotInit": puzzle.robotInit, "board": addLastAchievement(board, robot, "star"), "achievementRequired": {"stars": 1}};
        }
        if (isDone(achievementAcquired)) {
            return {"robotInit": puzzle.robotInit, "board": addLastAchievement(board, robot, "star"), "achievementRequired": {"stars": 1}};
        }
        if (Stack.stackIsEmpty(callStack)) {
            return {"robotInit": puzzle.robotInit, "board": addLastAchievement(board, robot, "star"), "achievementRequired": {"stars": 1}};
        }
        if (instructCount === MAXINSTRUCTION) {
            return {"robotInit": puzzle.robotInit, "board": addLastAchievement(board, robot, "star"), "achievementRequired": {"stars": 1}};
        }
        if (functionCount === MAXFUNCTION) {
            return {"robotInit": puzzle.robotInit, "board": addLastAchievement(board, robot, "star"), "achievementRequired": {"stars": 1}};
        }
        if (puzzle.board[robot.row][robot.col].obstacle.substring(0,7) === "jumppad") {
            const newCoords = jumppad(robot, puzzle.board[robot.row][robot.col].obstacle); 
            return evalRec(newCoords,instructCount,functionCount,callStack,update(newCoords, puzzle, achievementAcquired),debug, updateBoard(board, robot, "", "", currentFunction));
        }
        else if (puzzle.board[robot.row][robot.col].obstacle === "spike" && (instructCount%2)===0) {
            throw Error("Robot was pricked to death");
        }
        const currentFunction = Stack.stackPeek(callStack);
        const currentInstruction = program[currentFunction.function-1][currentFunction.instruction];
        if (currentFunction.instruction === program[currentFunction.function-1].length - 1) {
            return evalRec(robot, instructCount, functionCount, Stack.stackPop(Object.assign({}, callStack)), update(robot, puzzle, achievementAcquired), Stack.stackPop(debug), updateBoard(board, robot, "", "", currentFunction));
        }
        else if (typeof(currentInstruction) === "function") {
            try {
            const newCoords = currentInstruction(robot, board); // <function> might throw "Out of ground error"
            const newStack = Stack.stackPop(Object.assign({}, callStack));
            return evalRec(newCoords, instructCount+1, functionCount, Stack.stackPush({"function" : Stack.stackPeek(callStack).function, "instruction" : Stack.stackPeek(callStack).instruction+1}, newStack), update(newCoords, puzzle, achievementAcquired), Stack.stackPush(String(currentFunction.function)+String(currentFunction.instruction+1), Stack.stackPop(debug)), updateBoard(board, robot, "", "", currentFunction));
            } catch {
                return {"robotInit": puzzle.robotInit, "board": addLastAchievement(board, robot, "star"), "achievementRequired": {"stars": 1}};
            }
        }
        else if (typeof(currentInstruction) === "object" && currentInstruction.number > 0 && currentInstruction.number <= MAXFUNCTIONINPROGRAM) {
            const newStack = Stack.stackPop(Object.assign({}, callStack));
            if ((currentInstruction.color === puzzle.board[robot.row][robot.col].color) || (currentInstruction.color === "")) {
                return evalRec(robot, instructCount+1, functionCount+1, addInstructionFromOldFunction(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, newStack, program), achievementAcquired, addDebug(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, Stack.stackPop(debug), program), updateBoard(board, robot, "", "", currentFunction));
            }
            else {
                if (Stack.stackIsEmpty(newStack) && program[currentFunction.function-1][currentFunction.instruction+1] === undefined) {
                    throw Error("End of function");
                }
                else {
                    return evalRec(robot, instructCount, functionCount, Stack.stackPush({"function" : Stack.stackPeek(callStack).function, "instruction" : Stack.stackPeek(callStack).instruction+1}, newStack), achievementAcquired, Stack.stackPush(String(currentFunction.function)+String(currentFunction.instruction+1), Stack.stackPop(debug)), updateBoard(board, robot, "", "", currentFunction)); 
                }
            }
        }
        else {
            throw Error("Unknown instruction error");
        }
    }
    return evalRec(puzzle.robotInit, 0, 0, Stack.stackPush({"function" : 1, "instruction" : 0}, Stack.stackCreateEmpty()), achievementAcquired, Stack.stackPush("10", Stack.stackCreateEmpty()), puzzle.board);
}

export {generateSolvablePuzzle, generateProgram, generateColorProgram, puzzleInit};

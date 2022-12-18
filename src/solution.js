import * as Stack from "./stack.js";
import * as Program from "./solutionSwitch.js";

const MAXINSTRUCTION = 1000;
const MAXFUNCTION = 50;
const MAXFUNCTIONINPROGRAM = 5;

/**
 * Evaluates a program on a puzzle
 * @param {array of array} program A sequence of instructions
 * @param {object} puzzle A puzzle
 * @returns true if the execution is correct, -1 if error, the number of movements of the robot (rotates and functions calls excluded) otherwise
 */
function evaluatorSolution(program, puzzle) {
    const counter = 0;
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
    function addInstructionFromOldFunction(currentFunction, currentInstruction, functionNumber, instructionNumber, s, program) {
        if (program[functionNumber-1][instructionNumber+1] === undefined) {
            return Stack.stackPush({"function" : currentInstruction.number, "instruction" : 0}, s);
        } else {
            return Stack.stackPush({"function" : currentInstruction.number, "instruction" : 0}, Stack.stackPush({"function" : functionNumber, "instruction" : instructionNumber+1}, s));
        }
    }
    function evalRec(robot, instructCount, functionCount, callStack, achievementAcquired, debug, counter) {
        if (isDone(achievementAcquired)) {
            return true;
        }
        if (Stack.stackIsEmpty(callStack)) {
            return counter;
        }
        if (instructCount === MAXINSTRUCTION) {
            return -1;
        }
        if (functionCount === MAXFUNCTION) {
            return -1;
        }
        if (puzzle.board[robot.row][robot.col].obstacle.substring(0,7) === "jumppad") {
            const newCoords = jumppad(robot, puzzle.board[robot.row][robot.col].obstacle); 
            return evalRec(newCoords,instructCount,functionCount,callStack,update(newCoords, puzzle, achievementAcquired),debug,counter);
        }
        else if (puzzle.board[robot.row][robot.col].obstacle === "spike" && (instructCount%2)===0) {
            return -1;
        }
        const currentFunction = Stack.stackPeek(callStack);
        const currentInstruction = program[currentFunction.function-1][currentFunction.instruction];
        if (currentFunction.instruction === program[currentFunction.function-1].length) {
            return evalRec(robot, instructCount, functionCount, Stack.stackPop(Object.assign({}, callStack)), update(robot, puzzle, achievementAcquired), Stack.stackPop(debug), counter);            
        }
        else if (typeof(currentInstruction) === "function") {
            const newCoords = currentInstruction(robot, puzzle.board); // <function> might throw "Out of ground error"
            if (newCoords.dir === -1) {
                return -1;
            }
            const newStack = Stack.stackPop(Object.assign({}, callStack));
            return evalRec(newCoords, instructCount+1, functionCount, Stack.stackPush({"function" : Stack.stackPeek(callStack).function, "instruction" : Stack.stackPeek(callStack).instruction+1}, newStack), update(newCoords, puzzle, achievementAcquired), Stack.stackPush(String(currentFunction.function)+String(currentFunction.instruction+1), Stack.stackPop(debug)), (newCoords.row !== robot.row || newCoords.col !== robot.col) ? counter+1 : counter); 
        }
        else if (typeof(currentInstruction) === "object" && currentInstruction.number > 0 && currentInstruction.number <= MAXFUNCTIONINPROGRAM) {
            const newStack = Stack.stackPop(Object.assign({}, callStack));
            if ((currentInstruction.color === puzzle.board[robot.row][robot.col].color) || (currentInstruction.color === "")) {
                return evalRec(robot, instructCount+1, functionCount+1, addInstructionFromOldFunction(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, newStack, program), achievementAcquired, addDebug(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, Stack.stackPop(debug), program), counter);
            }
            else {
                if (Stack.stackIsEmpty(newStack) && program[currentFunction.function-1][currentFunction.instruction+1] === undefined) {
                    return -1;
                }
                else {
                    return evalRec(robot, instructCount, functionCount, Stack.stackPush({"function" : Stack.stackPeek(callStack).function, "instruction" : Stack.stackPeek(callStack).instruction+1}, newStack), achievementAcquired, Stack.stackPush(String(currentFunction.function)+String(currentFunction.instruction+1), Stack.stackPop(debug)), counter); 
                }
            }
        }
        else {
            return -1;
        }
    }
    return evalRec(puzzle.robotInit, 0, 0, Stack.stackPush({"function" : 1, "instruction" : 0}, Stack.stackCreateEmpty()), achievementAcquired, Stack.stackPush("10", Stack.stackCreateEmpty()), counter);
}

/**
 * Converts the number n in base b
 * @param {number} n A number
 * @param {number} b A number of base
 * @param {string} rep A string (empty at start, reverse number n in base b at end)
 * @returns A string which is the number n in base b
 */
function convert(n, b, rep) {
    const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-*/~#()[]";
    if (Math.floor(n/b) !== 0) {
        return convert(Math.floor(n/b), b, rep + alphabet.charAt(n%b));
    }
    rep = rep + alphabet.charAt(n%b);
    return rep.split("").reverse().join("");
}

/**
 * Creates a dictionary
 * @param {string} s A string
 * @param {number or boolean} res A number or a boolean 
 * @returns A dictionary where s is the program and res the counter
 */
function create(s, res) {
    return {"program": s, "counter": res};
}

/**
 * Returns the max of instructionAllowed
 * @param {Array} instructionAllowed Array of numbers of instructions allowed for each function (f1, f2, f3)
 * @returns Max of instructionAllowed
 */
function max(instructionAllowed) {
    let a = instructionAllowed[0];
    if (instructionAllowed[1] > a) {
        a = instructionAllowed[1];
    }
    if (instructionAllowed[2] > a) {
        a = instructionAllowed[2];
    }
    return a;
}

/**
 * Selects the best programs
 * @param {array} arr An array of dictionary
 * @returns The array with the best programs (with the programs of greatest counter), error if all programs failed
 */
function selection(arr, instructionAllowed) {
    function greatestCounter(a, b) {
        return (a.counter > b.counter) ? -1 : 1;
    }
    const arr2 = arr.sort(greatestCounter);
    if (arr2[0].counter < 0) {
        throw Error("No selection");
    }
    if (instructionAllowed[1] === 0 && instructionAllowed[2] === 0) {
        return arr2.filter( x => x.counter === arr2[0].counter ).map( x => x.program );
    }
    else {
        return arr2.filter( x => (x.counter >= arr2[0].counter-max(instructionAllowed)) && (x.counter !== -1) ).map( x => x.program );
    }
}

/**
 * Returns the number of cases
 * @param {Array} instructionAllowed Array of numbers of instructions allowed for each function (f1, f2, f3)
 * @returns Number of cases
 */
function caseNumber(instructionAllowed) {
    if (instructionAllowed[0] === 0) {
        throw Error("Nothing to solve");
    }
    else if (instructionAllowed[1] === 0 && instructionAllowed[2] === 0) {
        return 16;
    }
    else if (instructionAllowed[2] === 0) {
        return 40;
    }
    else {
        return 72;
    }   
}

/**
 * Generates programs
 * @param {array} arr An array of dictionary
 * @param {array} instructionAllowed Array of numbers of instructions allowed for each function (f1, f2, f3)
 * @returns The array with the new programs, error if no instructions allowed
 */
function generate(arr, instructionAllowed) {
    const c = caseNumber(instructionAllowed);
    if (arr.length !== 0) {
        const arr2 = Array(c*arr.length).fill(0);
        return arr2.map( (s, i) => arr[Math.floor(i/c)]+convert(i%c, c, "") );
    }
    return Array(c).fill(0).map( (x, i) => convert(i, c, "") );
}

/**
 * Solves a puzzle
 * @param {puzzle} puzzle A puzzle
 * @param {array} functionAllowed Array of functions allowed, always equals to ["f1", "f2", "f3"]
 * @param {array} instructionAllowed Array of numbers of instructions allowed for each function (f1, f2, f3)
 * @returns The array with the solution programs, an error otherwise
 */
function solution(puzzle, functionAllowed, instructionAllowed) {
    function solutionRec(puzzle, acc, counter) {
        if (counter < instructionAllowed[0]+instructionAllowed[1]+instructionAllowed[2]) {
            const arr = generate(acc, instructionAllowed).map( s => create(s, evaluatorSolution(Program.strProgram(s, functionAllowed, instructionAllowed), puzzle)) );
            const arr2 = arr.filter( x => x.counter === true );
            if (arr2.length === 0) {
                return solutionRec(puzzle, selection(arr, instructionAllowed), counter);
            }
            return arr2;
        }
        throw Error("No solution");
    }
    return solutionRec(puzzle, [], 0).map( x => x.program );
}

/**
 * Returns the real programs from strings
 * @param {array} arr Array of string programs
 * @param {array} functionAllowed Array of functions allowed, always equals to ["f1", "f2", "f3"]
 * @param {array} instructionAllowed Array of numbers of instructions allowed for each function (f1, f2, f3)
 * @returns Array with real programs from strings
 */
function solutionProgram(arr, functionAllowed, instructionAllowed) {
    return arr.map( x => Program.strProgram(x, functionAllowed, instructionAllowed) );
}

export { solution , solutionProgram };

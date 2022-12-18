import * as Stack from "./stack.js";

const MAXINSTRUCTION = 1000;
const MAXFUNCTION = 50;
const MAXFUNCTIONINPROGRAM = 5;

/**
 * Evaluates a program on a puzzle
 * @param {array of array} program A sequence of instructions
 * @param {object} puzzle A puzzle
 * @returns A boolean (true if the execution is correct, throws an error otherwise)
 */
function evaluator(program, puzzle) {
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
    function evalRec(robot, instructCount, functionCount, callStack, achievementAcquired, debug) {
        if (isDone(achievementAcquired)) {
            return {"achieved" : true};
        }
        if (Stack.stackIsEmpty(callStack)) {
            throw Error("Puzzle unsolved");
        }
        if (instructCount === MAXINSTRUCTION) {
            throw Error("Infinite loop error");
        }
        if (functionCount === MAXFUNCTION) {
            throw Error("Stack overflow error");
        }
        if (puzzle.board[robot.row][robot.col].obstacle.substring(0,7) === "jumppad") {
            const newCoords = jumppad(robot, puzzle.board[robot.row][robot.col].obstacle); 
            return evalRec(newCoords,instructCount,functionCount,callStack,update(newCoords, puzzle, achievementAcquired),debug);
        }
        else if (puzzle.board[robot.row][robot.col].obstacle === "spike" && (instructCount%2)===0) {
            throw Error("Robot was pricked to death");
        }
        const currentFunction = Stack.stackPeek(callStack);
        const currentInstruction = program[currentFunction.function-1][currentFunction.instruction];
        if (currentFunction.instruction === program[currentFunction.function-1].length) {
            return evalRec(robot, instructCount, functionCount, Stack.stackPop(Object.assign({}, callStack)), update(robot, puzzle, achievementAcquired), Stack.stackPop(debug));
        }
        else if (typeof(currentInstruction) === "function") {
            const newCoords = currentInstruction(robot, puzzle.board); // <function> might throw "Out of ground error"
            const newStack = Stack.stackPop(Object.assign({}, callStack));
            return evalRec(newCoords, instructCount+1, functionCount, Stack.stackPush({"function" : Stack.stackPeek(callStack).function, "instruction" : Stack.stackPeek(callStack).instruction+1}, newStack), update(newCoords, puzzle, achievementAcquired), Stack.stackPush(String(currentFunction.function)+String(currentFunction.instruction+1), Stack.stackPop(debug))); 
        }
        else if (typeof(currentInstruction) === "object" && currentInstruction.number > 0 && currentInstruction.number <= MAXFUNCTIONINPROGRAM) {
            const newStack = Stack.stackPop(Object.assign({}, callStack));
            if ((currentInstruction.color === puzzle.board[robot.row][robot.col].color) || (currentInstruction.color === "")) {
                return evalRec(robot, instructCount+1, functionCount+1, addInstructionFromOldFunction(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, newStack, program), achievementAcquired, addDebug(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, Stack.stackPop(debug), program));
            }
            else {
                if (Stack.stackIsEmpty(newStack) && program[currentFunction.function-1][currentFunction.instruction+1] === undefined) {
                    throw Error("End of function");
                }
                else {
                    return evalRec(robot, instructCount, functionCount, Stack.stackPush({"function" : Stack.stackPeek(callStack).function, "instruction" : Stack.stackPeek(callStack).instruction+1}, newStack), achievementAcquired,Stack.stackPush(String(currentFunction.function)+String(currentFunction.instruction+1), Stack.stackPop(debug))); 
                }
            }
        }
        else {
            throw Error("Unknown instruction error");
        }
    }
    return evalRec(puzzle.robotInit, 0, 0, Stack.stackPush({"function" : 1, "instruction" : 0}, Stack.stackCreateEmpty()), achievementAcquired, Stack.stackPush("10", Stack.stackCreateEmpty()));
}

export { evaluator };

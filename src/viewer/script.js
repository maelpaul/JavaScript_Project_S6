import * as Instruction from "../src/language.js";
import * as Stack from "../src/stack.js";
import * as GeneratePuzzle from "../src/generatePuzzle.js";

// 'robots.ttf' defines 16 ad-hoc icons, using codes from \uEE00 to \uEE0F :
// 0 = robot pointing east, 1 = robot pointing south, 2 = robot pointing west,
// 3 = robot pointing north, 4 = star, 5 = disk, 6 = box, 7 = flash,
// 8 = heart, 9 = broken heart, A = lock, B = open lock, C = key,
// D = droplet, E = rocket, F = empty

const MAXINSTRUCTION = 1000;
const MAXFUNCTION = 50;
const MAXFUNCTIONINPROGRAM = 5;

/**
 * Evaluates a program on a puzzle
 * @param {Array} program A sequence of instructions
 * @param {Array} programName A sequence of instruction names
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} puzzle A puzzle
 * @returns A boolean (true if the execution is correct, throws an error otherwise)
 */
function evaluator(program, programName, aBoardID, puzzle) {
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

    async function evalRec(robot, instructCount, functionCount, callStack, achievementAcquired, debug) {
        await sleep(1000);
        updateRobot(aBoardID, robot);
        displayCallStack(callStack, program, programName);
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
                    return evalRec(robot, instructCount, functionCount, Stack.stackPush({"function" : Stack.stackPeek(callStack).function, "instruction" : Stack.stackPeek(callStack).instruction+1}, newStack), achievementAcquired, Stack.stackPush(String(currentFunction.function)+String(currentFunction.instruction+1), Stack.stackPop(debug))); 
                }
            }
        }
        else {
            throw Error("Unknown instruction error");
        }
    }
    return evalRec(puzzle.robotInit, 0, 0, Stack.stackPush({"function" : 1, "instruction" : 0}, Stack.stackCreateEmpty()), achievementAcquired, Stack.stackPush("10", Stack.stackCreateEmpty()));
}

/**
 * Display the call stack
 * @param {Stack} s A stack
 * @param {Array} program A sequence of instructions
 * @param {Array} programName programName A sequence of instruction names
 */
function displayCallStack(s, program, programName) {
    function displayElement(s, i) {
        if (!Stack.stackIsEmpty(s)) {
            changeNameInstructionStack(i, getContentFromStackElement(Stack.stackPeek(s), program, programName));
            displayElement(Stack.stackPop(s), i+1);
        }
    }
    cleanStack(20);
    displayElement(Stack.stackReverse(s), 0);
}

/**
 * 
 * @param {Object} element 
 * @param {Array} program A sequence of instructions
 * @param {Array} programName programName A sequence of instruction names
 * @returns 
 */
function getContentFromStackElement(element, program, programName) {
    if (element.number !== undefined) {
        return {"function": "F" + element.number, "color" : element.color};
    } else {
        return programName[element.function-1][element.instruction];
    }   
}

/**
 * Change the name and the color of an instruction from the callstack to update the user interface
 * @param {number} positionStack Position in the stack, 0 : first value, 1 : second value of the callstack 
 * @param {String} content Name of the instruction
 * @param {Color} color Color of the instruction
 */
 function changeNameInstructionStack(positionStack, element) {
    if (element !== undefined && element.function !== undefined) {
        let elt = document.getElementById("elt-"+positionStack);
        elt.innerHTML = element.function;
        elt.style.backgroundColor = element.color;
        elt.style.borderStyle = "solid";
    }
}



const icons = {
    robotEast:   { string: '\uEE00', color: 'pink' },
    robotSouth:  { string: '\uEE03', color: 'pink' },
    robotWest:   { string: '\uEE02', color: 'pink' },
    robotNorth:  { string: '\uEE01', color: 'pink' },
    star:        { string: '\uEE04', color: 'yellow' },
    disk:        { string: '\uEE05', color: 'red' },
    box:         { string: '\uEE06', color: 'brown' },
    flash:       { string: '\uEE07', color: 'red' },
    heart:       { string: '\uEE08', color: 'red' },
    heartBroken: { string: '\uEE09', color: 'red' },
    lock:        { string: '\uEE0A', color: 'red' },
    lockOpen:    { string: '\uEE0B', color: 'red' },
    key:         { string: '\uEE0C', color: 'red' },
    droplet:     { string: '\uEE0D', color: 'red' },
    rocket:      { string: '\uEE0E', color: 'red' },
    empty:       { string: '\uEE0F', color: 'red' },
};

const black = Instruction.cons("black", "", "");
const blue = Instruction.cons("blue", "", "");
const red = Instruction.cons("red", "", "");
const star = Instruction.cons("blue", "star", "");


const learningStack = {
    robotInit:{"row":12,"col":1,"dir":1},
    board:[[black , black , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , red , blue , blue , blue , blue , blue , blue , blue , blue , blue , blue , blue , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , star , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , blue , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , black , black , black , black , black , black , black , black , black , black , black , black , black]],  
    achievementRequired:{
        stars:1
    }
};

const puzzle = {
    robotColInit:7,
    robotRowInit:7,
    robotDirInit:0,
    board:[ [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("green", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("green", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("green", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "star", "") , Instruction.cons("black", "", "") , Instruction.cons("green", "", "") , Instruction.cons("red", "", "") , Instruction.cons("green", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("green", "", "") , Instruction.cons("blue", "", "box") , Instruction.cons("blue", "", "") , Instruction.cons("green", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ],
            [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") ] ]
};

const puzzleSE = {
    robotInit:{"row":0,"col":0,"dir":3},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzle2 = {
    robotInit:{"row":3,"col":0,"dir":1},
    board:[[Instruction.cons("blue", "star", "")],
    [Instruction.cons("blue", "", "") ],
    [Instruction.cons("blue", "", "") ],
    [Instruction.cons("blue", "", "") ]],
    achievementRequired:{
        stars:1
    }
};

const puzzleDemo = {
    robotInit:{"row":2,"col":0,"dir":1},
    board:[[Instruction.cons("red", "", ""), Instruction.cons("blue", "", ""), Instruction.cons("green", "", "")],
    [Instruction.cons("blue", "", ""), Instruction.cons("black", "", ""), Instruction.cons("blue", "star", "")],
    [Instruction.cons("blue", "", "") ]],
    achievementRequired:{
        stars:1
    }
};

const puzzles = {"puzzle" : puzzle, "puzzleSE" : puzzleSE, "puzzle2" : puzzle2, "learningStack" : learningStack, "demo" : puzzleDemo};

const robotID = "robot";

/**
 * Remove the robot from the board
 */
function removeRobot() {
    const rCell = document.getElementById(robotID);
        rCell.removeAttribute('id');
        rCell.removeAttribute('style');
    rCell.innerText = icons.empty.string;
}

/**
 * Add a robot on the board 
 * @param {String} aBoardID ID in of the div in the html
 * @param {Object} aRobot Dictionnary with the row, column and the robot direction
 */
function addRobot(aBoardID, aRobot) {
    let aBoard = document.getElementById(aBoardID);
    let aCell  = aBoard.rows[aRobot.row].cells[aRobot.col];
    let anIcon = icons[Object.keys(icons)[aRobot.dir]];
    aCell.id = robotID;
    aCell.innerText = anIcon.string;
    aCell.style.color = anIcon.color;
}

/**
 * Add a star in the cell of the board
 * @param {Object} aCell 
 */
function addStar(aCell) {
aCell.innerText = icons.star.string;
    aCell.style.color = icons.star.color;
}

/**
 * Add a box in the cell of the board
 * @param {Object} aCell 
 */
function addBox(aCell) {
    aCell.innerText = icons.box.string;
        aCell.style.color = icons.box.color;
}

/**
 * Fill the board with a puzzle
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} aPuzzle 
 */
function fillBoard(aBoardID, aPuzzle) {
    const tbody = document.getElementById(aBoardID);
    aPuzzle.board.forEach((aLine) => {
        const newRow = tbody.insertRow();
        aLine.forEach((square) => {
            const newCell = newRow.insertCell();
            switch (square.color) {
            case 'red': newCell.className += " red_tile"; break;
            case 'green': newCell.className += " green_tile"; break;
            case 'blue': newCell.className += " blue_tile"; break;
            case 'black': newCell.className += " black_tile"; break;
            }
            switch (square.achievement) {
                case "star" : addStar(newCell); break;
            }
            switch (square.obstacle) {
                case "box" : addBox(newCell); break;
            }
        });
    });
}

/**
 * Clean the board with a puzzle
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} aPuzzle 
 */
 function cleanBoard(aBoardID) {
    const tbody = document.getElementById(aBoardID);
    tbody.innerHTML = ""    ;
}

/**
 * Return a promise in order to delay the time to compute
 * @param {number} ms Time to wait in ms 
 * @returns An object which is a promise
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Update the robot position in the board
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} robot Dictionnary with the folowing key : function, instruction, robot (row, col, dir)
 */
function updateRobot(aBoardID, robot) { 
    removeRobot();
    addRobot(aBoardID, robot);
}

/**
 * Clean the ith element of the stack from the viewer
 * @param {Number} i 
 */
function cleanElementStack(i) {
    let elt = document.getElementById("elt-"+i);
    elt.innerHTML = "";
    elt.style.backgroundColor = "#404040";
    elt.style.borderStyle = "None";
}

/**
 * Clean the element of the stack from iMax to iMin
 * @param {Number} iMax 
 */
function cleanStack(iMax) {
    if (iMax >= 0) {
        cleanElementStack(iMax);
        cleanStack(iMax-1);
    }
}


/**
 * Display a message on the user interface to know if the execution is a success or not
 * @param {boolean} success Indicates if the execution or not
 */
function displayResult(success) {
    let message = document.getElementById("message");
    if (success) {
        message.innerHTML = "Mission réussie";
        message.style.color = "green";
    } else {
        message.innerHTML = "Mission échouée";
        message.style.color = "red";
    }
    message.style.textAlign = "center";
    message.style.marginTop = "10%";
}

/**
 * Return the name of the puzzle selected 
 */
function getPuzzleChoice() {
    if(document.getElementById('demo').checked === true) {   
        return "demo";  
    } else {  
        return "learningStack";
    }  
}

/**
 * 
 * @param {Array} programs Dictionnary of array of 5 function with 5 instructions, the value is a function : (robot, board) => {return Instruction.move(robot, 'blue', board);};
 * @param {Array} programsName Dictionnary of array of 5 function with 5 instructions, the value are dictionnary with the following keys : {"function" : "Move", "color" : "dodgerblue"}
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} puzzles 
 */
 async function display(programs, programsName, aBoardID, puzzles) {
    try {
        const resultEval = await evaluator(programs[getPuzzleChoice()], programsName[getPuzzleChoice()], aBoardID, puzzles[getPuzzleChoice()]);
        console.log(resultEval);
        displayResult(resultEval.achieved);
    } catch {
        displayResult(false);
    }
}

/**
 * Clean and generate a map randomly
 * @param {Object} aBoardID ID in of the div in the html
 */
function generateMap(aBoardID) {
    document.getElementById("message").innerHTML = "";
    cleanBoard(aBoardID);
    fillBoard(aBoardID, GeneratePuzzle.generateSolvablePuzzle(GeneratePuzzle.generateProgram([{"number" : 1, "color" : ""}, {"number" : 2, "color" : ""}, {"number" : 3, "color" : ""}, {"number" : 4, "color" : ""}, {"number" : 5, "color" : ""}, (robot, board) =>Instruction.rotateLeft(robot, "", board), (robot, board) =>Instruction.rotateRight(robot, "", board), (robot, board) =>Instruction.move(robot, "", board), (robot, board) =>Instruction.teleport(robot, "", 1, board)]), GeneratePuzzle.generateColorProgram(["red", "green", "blue"]), GeneratePuzzle.puzzleInit()));
}

window.onload = () => {
    const aBoardID = "visualizer_board";
    fillBoard(aBoardID, puzzles.demo);
    let function1 = [];
    let function2 = [];
    let function3 = [];
    let function4 = [];
    let function5 = [];
    let function1_name = [];
    let function2_name = [];
    let function3_name = [];
    let function4_name = [];
    let function5_name = [];
    function1[0] = {"number" : 2, "color" : ""};
    function1[1] = (robot, board) => {return Instruction.rotateRight(robot, '', board);};
    function1[2] = (robot, board) => {return Instruction.move(robot, '', board);};
    function2[0] = (robot, board) => {return Instruction.move(robot, '', board);};
    function2[1] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
    function2[2] = {"number" : 2, "color" : "blue"};
    function2[3] = (robot, board) => {return Instruction.move(robot, '', board);};
    const programLearningStack =  [[...function1], [...function2], [...function3], [...function4], [...function5]];  

    function1_name[0] = {"function" : "F1,1 : F2", "color" : ""};        
    function1_name[1] = {"function" : "F1,2 : Rotate Right", "color" : ""};       
    function1_name[2] = {"function" : "F1,3 : Move", "color" : ""};  
    function2_name[0] = {"function" : "F2,1 : Move", "color" : ""};        
    function2_name[1] = {"function" : "F2,2 : Rotate Right", "color" : "red"};       
    function2_name[2] = {"function" : "F2,3 : F2", "color" : ""};  
    function2_name[3] = {"function" : "F2,4 : Move", "color" : ""};  
    const programNameLearningStack = [[...function1_name], [...function2_name], [...function3_name], [...function4_name], [...function5_name]];
    function1[0] = (robot, board) => {return Instruction.move(robot, '', board);};
    function1[1] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
    function1[2] = {"number" : 1, "color" : "blue"};
    function1[3] = (robot, board) => {return Instruction.move(robot, '', board);};
    function1[4] = {"number" : 2, "color" : "green"};
    function2[0] = (robot, board) => {return Instruction.rotateRight(robot, '', board);};
    function2[1] = (robot, board) => {return Instruction.move(robot, '', board);};
    function2[2] = [];
    function2[3] = [];
    const programDemo = [[...function1], [...function2], [...function3], [...function4], [...function5]];

    function1_name[0] = {"function" : "F1,1 : Move", "color" : ""};        
    function1_name[1] = {"function" : "F1,2 : Rotate Right", "color" : "red"};       
    function1_name[2] = {"function" : "F1,3 : F1", "color" : ""};  
    function1_name[3] = {"function" : "F1,4 : Move", "color" : ""};  
    function1_name[4] = {"function" : "F1,5 : F2", "color" : "green"};  
    function2_name[0] = {"function" : "F2,1 : Rotate Right", "color" : ""};        
    function2_name[1] = {"function" : "F2,2 : Move", "color" : ""};    
    function2_name[2] = [];
    function2_name[3] = [];  
    const programNameDemo = [[...function1_name], [...function2_name], [...function3_name], [...function4_name], [...function5_name]];  

    const programs = {"demo" : programDemo, "learningStack" : programLearningStack};
    const programsName = {"demo" : programNameDemo, "learningStack" : programNameLearningStack};

    addRobot(aBoardID, puzzles.demo.robotInit);
    document.
        getElementById("button_move")
        .addEventListener("click", () => display(programs, programsName, aBoardID, puzzles));    
    document.
        getElementById("button_generate_map")
            .addEventListener("click", () => generateMap(aBoardID));      
};
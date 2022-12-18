import * as Instruction from "../src/language.js";
import * as GeneratePuzzle from "../src/generatePuzzle.js";
import * as Eval from "./eval.js";
import * as Solution from "./solution.js";

function displayNTimesFunction(f, n) {
     if (n !== 0) {
        console.log(f(1));
        displayNTimesFunction(f, n-1);
     } 
}

//Proof of the generation puzzle
console.log("Exemple de board généré avec GeneratePuzzle");
displayNTimesFunction((x) => GeneratePuzzle.generateSolvablePuzzle(GeneratePuzzle.generateProgram([{"number" : 1, "color" : ""}, {"number" : 2, "color" : ""}, {"number" : 3, "color" : ""}, {"number" : 4, "color" : ""}, {"number" : 5, "color" : ""}, (robot, board) =>Instruction.rotateLeft(robot, "", board), (robot, board) =>Instruction.rotateRight(robot, "", board), (robot, board) =>Instruction.move(robot, "", board), (robot, board) =>Instruction.teleport(robot, "", 1, board)]), GeneratePuzzle.generateColorProgram(["red", "green", "blue"]), GeneratePuzzle.puzzleInit()).board, 1);

//Proof of evaluator 
//Puzzle
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

const puzzleDemo = {
    robotInit:{"row":3,"col":1,"dir":1},
    board:[[Instruction.cons("black", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", ""), Instruction.cons("red", "", ""), Instruction.cons("blue", "", ""), Instruction.cons("green", "", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", ""), Instruction.cons("blue", "", ""), Instruction.cons("black", "", ""), Instruction.cons("blue", "star", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", ""), Instruction.cons("blue", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", ""), Instruction.cons("black", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzles = {"learningStack" : learningStack, "puzzleDemo" : puzzleDemo};

let function1 = [];
let function2 = [];
let function3 = [];
let function4 = [];
let function5 = [];

function1[0] = (robot, board) => {return Instruction.move(robot, '', board);};
function1[1] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
function1[2] = {"number" : 1, "color" : "blue"};
function1[3] = (robot, board) => {return Instruction.move(robot, '', board);};
function1[4] = {"number" : 2, "color" : "green"};
function2[0] = (robot, board) => {return Instruction.rotateRight(robot, '', board);};
function2[1] = (robot, board) => {return Instruction.move(robot, '', board);};
let program = [function1,function2,function3,function4,function5];
console.log("Démonstration de l'évaluateur");
console.log("Premier exemple :");
console.log("Réussi : " + Eval.evaluator(program, puzzles.puzzleDemo).achieved);

function1[0] = {"number" : 2, "color" : ""};
function1[1] = (robot, board) => {return Instruction.rotateRight(robot, '', board);};
function1[2] = (robot, board) => {return Instruction.move(robot, '', board);};
function2[0] = (robot, board) => {return Instruction.move(robot, '', board);};
function2[1] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
function2[2] = {"number" : 2, "color" : "blue"};
function2[3] = (robot, board) => {return Instruction.move(robot, '', board);};
program = [function1,function2,function3,function4,function5];
console.log("Learning Stack :");
console.log("Réussi : " + Eval.evaluator(program, puzzles.learningStack).achieved);
console.log("Fin démonstration évaluateur");

//Proof of the solver
console.log("Démonstration solveur");
console.log("Learning Stack");
let arr = Solution.solution(puzzles.learningStack, ["f1", "f2", "f3"], [3, 4, 0]);
let arr2 = Solution.solutionProgram(arr, ["f1", "f2", "f3"], [3, 4, 0]);
for (let i = 0; i < arr2.length; ++i) {
    console.log("Réussi : "+Eval.evaluator(arr2[i], puzzles.learningStack).achieved);
}
console.log("Démo");
let arr3 = Solution.solution(puzzles.puzzleDemo, ["f1", "f2", "f3"], [5, 2, 0]);
let arr4 = Solution.solutionProgram(arr3, ["f1", "f2", "f3"], [5, 2, 0]);
for (let i = 0; i < arr4.length; ++i) {
    console.log("Réussi : "+Eval.evaluator(arr4[i], puzzles.puzzleDemo).achieved);
}
console.log("Fin démonstration solveur");

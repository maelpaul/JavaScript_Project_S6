import * as Eval from "./eval.js";
import * as Solution from "./solution.js";
import * as Instruction from "./language.js";

const black = Instruction.cons("black", "", "");
const blue = Instruction.cons("blue", "", "");
const blues = Instruction.cons("blue", "star", "");
const red = Instruction.cons("red", "", "");
// const green = Instruction.cons("green", "", "");
const star = Instruction.cons("blue", "star", "");

const puzzleNEModified = {
    robotInit:{"row":1,"col":1,"dir":0},
    board:[[Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("red", "", "box"), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("red", "", "") , Instruction.cons("green", "", "") , Instruction.cons("blue", "star", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleNEImpossible = {
    robotInit:{"row":1,"col":1,"dir":0},
    board:[[Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("red", "", "box"), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("red", "", "") , Instruction.cons("green", "", "") , Instruction.cons("blue", "", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleNEFakeDir = {
    robotInit:{"row":1,"col":1,"dir":10},
    board:[[Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("red", "", "box"), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("red", "", "") , Instruction.cons("green", "", "") , Instruction.cons("blue", "", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleNEOut = {
    robotInit:{"row":1,"col":1,"dir":0},
    board:[[Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleTest = {
    robotInit:{"row":1,"col":1,"dir":0},
    board:[[Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", ""), Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", ""), Instruction.cons("black", "", "")]],
    achievementRequired:{
        stars:1
    }
};

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

const Stairs = {
    robotInit:{"row":10,"col":1,"dir":0},
    board:[[black , black , black , black , black , black , black , black , black , black , black , black , black],
    [black , black , black , black , black , black , black , black , black , black , blue , blues , black],
    [black , black , black , black , black , black , black , black , black , blue , blue , black , black],
    [black , black , black , black , black , black , black , black , blue , blue , black , black , black],
    [black , black , black , black , black , black , black , blue , blue , black , black , black , black],
    [black , black , black , black , black , black , blue , blue , black , black , black , black , black],
    [black , black , black , black , black , blue , blue , black , black , black , black , black , black],
    [black , black , black , black , blue , blue , black , black , black , black , black , black , black],
    [black , black , black , blue , blue , black , black , black , black , black , black , black , black],
    [black , black , blue , blue , black , black , black , black , black , black , black , black , black],
    [black , blue , blue , black , black , black , black , black , black , black , black , black , black],
    [black , black , black , black , black , black , black , black , black , black , black , black , black]],  
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

// const FollowDirections2 = {
//     robotInit:{"row":10,"col":1,"dir":1},
//     board:[[black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , black],
//     [black , black , black , black , star , blue , blue , green , black , black , black , black , black , black , black , black , black , black],
//     [black , black , black , black , black , black , black , blue , black , black , black , black , black , black , black , black , black , black],
//     [black , black , green , blue , blue , blue , blue , green , black , green , blue , blue , blue , blue , blue , blue , green , black],
//     [black , black , blue , black , black , black , black , black , black , blue , black , black , black , black , black , black , blue , black],
//     [black , black , blue , black , black , black , black , black , black , green , blue , blue , green , black , black , black , blue , black],
//     [black , black , blue , black , black , black , black , black , black , black , black , black , green , blue , green , black , blue , black],
//     [black , black , green , blue , blue , blue , blue , blue , blue , blue , green , black , black , black , blue , black , blue , black],
//     [black , black , black , black , black , black , black , black , black , black , green , blue , blue , blue , green , black , blue , black],
//     [black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , blue , black],
//     [black , blue , green , red , red , green , green , red , green , green , green , red , green , red , red , red , blue , black],
//     [black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , black , black]],  
//     achievementRequired:{
//         stars:1
//     }
// };

describe('Tests solution', () => {

    test('Program', () => {
        
        let arr = Solution.solution(puzzleNEModified, ["f1", "f2", "f3"], [5, 5, 5]);
        let arr2 = Solution.solutionProgram(arr, ["f1", "f2", "f3"], [5, 5, 5]);
        for (let i = 0; i < arr2.length; ++i) {
            expect(Eval.evaluator(arr2[i], puzzleNEModified).achieved).toBe(true);
        }
    });
    
    test('Can\'t find a program', () => {

        expect(() => { Solution.solution(puzzleNEImpossible, ["f1", "f2", "f3"], [1, 1, 1]); }).toThrow(Error);
    });

    test('Can\'t find a program 2', () => {

        expect(() => { Solution.solution(puzzleNEFakeDir, ["f1", "f2", "f3"], [1, 1, 1]); }).toThrow(Error);
    });

    test('Can\'t find a program 3', () => {

        expect(() => { Solution.solution(puzzleNEImpossible, ["f1", "f2", "f3"], [1, 1, 0]); }).toThrow(Error);
    });

    test('Can\'t find a program 4', () => {

        expect(() => { Solution.solution(puzzleNEImpossible, ["f1", "f2", "f3"], [5, 0, 0]); }).toThrow(Error);
    });    

    test('No solution', () => {

        expect(() => { Solution.solution(puzzleNEImpossible, ["f1", "f2", "f3"], [5, 0, 0]); }).toThrow(Error);
    });

    test('No selection', () => {

        expect(() => { Solution.solution(puzzleNEOut, ["f1", "f2", "f3"], [2, 0, 0]); }).toThrow(Error);
    });

    test('Nothing to solve', () => {

        expect(() => { Solution.solution(puzzleNEOut, ["f1", "f2", "f3"], [0, 0, 0]); }).toThrow(Error);
    });

    test('Learning stack', () => {
        
        let arr = Solution.solution(learningStack, ["f1", "f2", "f3"], [3, 4, 0]);
        let arr2 = Solution.solutionProgram(arr, ["f1", "f2", "f3"], [3, 4, 0]);
        for (let i = 0; i < arr2.length; ++i) {
            expect(Eval.evaluator(arr2[i], learningStack).achieved).toBe(true);
        }
    });

    test('Stairs', () => {
        
        let arr = Solution.solution(Stairs, ["f1", "f2", "f3"], [10, 0, 0]);
        let arr2 = Solution.solutionProgram(arr, ["f1", "f2", "f3"], [10, 0, 0]);
        for (let i = 0; i < arr2.length; ++i) {
            expect(Eval.evaluator(arr2[i], Stairs).achieved).toBe(true);
        }
    });

    test('Démo', () => {
        
        let arr = Solution.solution(puzzleDemo, ["f1", "f2", "f3"], [5, 2, 0]);
        let arr2 = Solution.solutionProgram(arr, ["f1", "f2", "f3"], [5, 2, 0]);
        for (let i = 0; i < arr2.length; ++i) {
            expect(Eval.evaluator(arr2[i], puzzleDemo).achieved).toBe(true);
        }
    });

    test('Test 3 fonctions', () => {
        
        let arr = Solution.solution(puzzleTest, ["f1", "f2", "f3"], [1, 1, 2]);
        let arr2 = Solution.solutionProgram(arr, ["f1", "f2", "f3"], [1, 1, 2]);
        for (let i = 0; i < arr2.length; ++i) {
            expect(Eval.evaluator(arr2[i], puzzleTest).achieved).toBe(true);
        }
    });

    // test('Follow Directions 2', () => {
        
    //     let arr = Solution.solution(FollowDirections2, ["f1", "f2", "f3"], [5, 5, 5]);
    //     let arr2 = Solution.solutionProgram(arr, ["f1", "f2", "f3"], [5, 5, 5]);
    //     for (let i = 0; i < arr2.length; ++i) {
    //         expect(Eval.evaluator(arr2[i], FollowDirections2).achieved).toBe(true);
    //     }
    // });

});

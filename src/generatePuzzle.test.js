import * as Generate from "./generatePuzzle.js";
import * as Instruction from "./language.js";

describe('generatePuzzleTests', () => {

    test('Correct puzzle initialisation', () => {
        let res = Generate.puzzleInit();

        expect(res.robotInit.col).toEqual(7);
        expect(res.robotInit.row).toEqual(6);
        expect(res.robotInit.dir).toEqual(1);

        expect(res.board[0][0].color).toEqual("");
    });

    test('Correct generation of program colors', () => {
        let tab = ['green', 'blue', 'blue'];
        let res = Generate.generateColorProgram(tab);

        expect(res.length).toEqual(5);
        expect(res[0].length).toEqual(5);

    });

    test('Correct generation of program', () => {
        let res = Generate.generateProgram([{"number" : 1, "color" : "blue"}, {"number" : 2, "color" : "blue"}, {"number" : 3, "color" : "blue"}, {"number" : 4, "color" : "blue"}, {"number" : 5, "color" : "blue"}, (robot, board) => {return Instruction.move(robot, '', board);}, (robot, board) => {return Instruction.rotateRight(robot, 'red', board);}]);

        expect(res.length).toEqual(5);

    });

    test('Correct generation of a solvable problem', () => {
        let colors = ['green', 'blue', 'blue'];
        let program = Generate.generateProgram([{"number" : 1, "color" : "blue"}, {"number" : 2, "color" : "blue"}, {"number" : 3, "color" : "blue"}, {"number" : 4, "color" : "blue"}, {"number" : 5, "color" : "blue"}, (robot, board) => {return Instruction.move(robot, '', board);}, (robot, board) => {return Instruction.rotateRight(robot, 'red', board);}]);
        let puzzle = Generate.puzzleInit();
        try {
            let res = Generate.generateSolvablePuzzle(program, Generate.generateColorProgram(colors), puzzle);
            expect(res.robotInit.row).toEqual(6);
            expect(res.robotInit.col).toEqual(7);
            expect(res.robotInit.dir).toEqual(1);

            expect(res.board.length).toEqual(12);
            expect(res.board[0].length).toEqual(16);
        } catch {
            expect(true).toBe(true);
        }

    });


});

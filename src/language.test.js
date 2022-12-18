import * as Language from "./language.js";

describe('Unit testing', () => {
    const puzzle = {
        robotColInit:7,
        robotRowInit:7,
        robotDirInit:0,
        board:[ [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("green", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "star", "") , Language.cons("black", "", "") , Language.cons("green", "", "") , Language.cons("red", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("green", "", "") , Language.cons("blue", "", "box") , Language.cons("blue", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ] ]
    };

    test('Move to right on right color', () => {
        let robot = {
            "row" : 4,
            "col" : 5,
            "dir" : 0
        };
        let res = Language.move(robot, "green", puzzle.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(6);
        expect(res.dir).toEqual(0);
    });

    test('Move to right on wrong color', () => {
        let robot = {
            "row" : 4,
            "col" : 5,
            "dir" : 0
        };
        let res = Language.move(robot, "blue", puzzle.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(0);
    });

    test('Try to move right on out of ground', () => {
        let robot = {
            "row" : 4,
            "col" : 12,
            "dir" : 0
        };
        expect(() =>  Language.move(robot, "green", puzzle.board)).toThrow(Error);
    });

    test('Move to left on right color', () => {
        let robot = {
            "row" : 4,
            "col" : 12,
            "dir" : 2
        };
        let res = Language.move(robot, "green", puzzle.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(11);
        expect(res.dir).toEqual(2);
    });

    test('Move to left on no color', () => {
        let robot = {
            "row" : 4,
            "col" : 12,
            "dir" : 2
        };
        let res = Language.move(robot, "", puzzle.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(11);
        expect(res.dir).toEqual(2);
    });

    test('Move to left on wrong color', () => {
        let robot = {
            "row" : 4,
            "col" : 12,
            "dir" : 2
        };
        let res = Language.move(robot, "blue", puzzle.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(12);
        expect(res.dir).toEqual(2);
    });

    test('Try to move left on out of ground', () => {
        let robot = {
            "row" : 4,
            "col" : 5,
            "dir" : 2
        };
        expect(() => Language.move(robot, "green" , puzzle.board)).toThrow(Error);
    });

    test('Move to up on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.move(robot, "blue", puzzle.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(1);
    });

    test('Move to up on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.move(robot, Language.cons("green", "", "") , puzzle.board);
        expect(res.row).toEqual(5);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(1);
    });

    test('Try to move up on out of ground', () => {
        let robot = {
            "row" : 4,
            "col" : 5,
            "dir" : 1
        };
        expect(() => Language.move(robot, "green", puzzle.board)).toThrow(Error);
    });

    test('Move to bottom on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.move(robot, "blue", puzzle.board);
        expect(res.row).toEqual(6);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(3);
    });

    test('Move to bottom on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.move(robot, "red", puzzle.board);
        expect(res.row).toEqual(5);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(3);
    });

    test('Try to move down on out of ground', () => {
        let robot = {
            "row" : 4,
            "col" : 6,
            "dir" : 3
        };
        expect(() => Language.move(robot, "blue", puzzle.board)).toThrow(Error);
    });

    test('Try to move with an unkown direction', () => {
        let robot = {
            "row" : 4,
            "col" : 12,
            "dir" : 5
        };
        expect(() => Language.move(robot, Language.cons("green", "", "") , puzzle.board)).toThrow(Error);
    });

    test('Rotate left from up direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.rotateLeft(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(2);
    });

    test('Rotate left from up direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.rotateLeft(robot, "red", puzzle.board);
        expect(res.dir).toEqual(1);
    });

    test('Rotate right from up direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.rotateRight(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(0);
    });

    test('Rotate right from up direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.rotateRight(robot, "red", puzzle.board);
        expect(res.dir).toEqual(1);
    });

    test('Rotate left from left direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 2
        };
        let res = Language.rotateLeft(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(3);
    });

    test('Rotate left from left direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 2
        };
        let res = Language.rotateLeft(robot, "red", puzzle.board);
        expect(res.dir).toEqual(2);
    });

    test('Rotate right from left direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 2
        };
        let res = Language.rotateRight(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(1);
    });

    test('Rotate right from left direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 2
        };
        let res = Language.rotateRight(robot, "red", puzzle.board);
        expect(res.dir).toEqual(2);
    });

    test('Rotate left from bottom direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.rotateLeft(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(0);
    });

    test('Rotate left from bottom direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.rotateLeft(robot, "red", puzzle.board);
        expect(res.dir).toEqual(3);
    });

    test('Rotate right from bottom direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.rotateRight(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(2);
    });

    test('Rotate right from bottom direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.rotateRight(robot, "red", puzzle.board);
        expect(res.dir).toEqual(3);
    });

    test('Rotate left from right direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 0
        };
        let res = Language.rotateLeft(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(1);
    });

    test('Rotate left from right direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 0
        };
        let res = Language.rotateLeft(robot, "red", puzzle.board);
        expect(res.dir).toEqual(0);
    });

    test('Rotate right from right direction on right color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 0
        };
        let res = Language.rotateRight(robot, "blue", puzzle.board);
        expect(res.dir).toEqual(3);
    });

    test('Rotate right from right direction on wrong color', () => {
        let robot = {
            "row" : 5,
            "col" : 5,
            "dir" : 0
        };
        let res = Language.rotateRight(robot, "red", puzzle.board);
        expect(res.dir).toEqual(0);
    });
    
    const puzzle2 = {
        robotColInit:7,
        robotRowInit:7,
        robotDirInit:0,
        board:[ [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("green", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "box") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "box") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("blue", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "star", "") , Language.cons("black", "", "") , Language.cons("green", "", "") , Language.cons("red", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("blue", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("green", "", "") , Language.cons("blue", "", "box") , Language.cons("blue", "", "") , Language.cons("green", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ],
                [Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") , Language.cons("black", "", "") ] ]
    };

    test('Teleport to left on right color', () => {
        let robot = {
            "row" : 11,
            "col" : 5,
            "dir" : 2
        };
        let res = Language.teleport(robot, "blue", 2, puzzle2.board);
        expect(res.row).toEqual(11);
        expect(res.col).toEqual(3);
        expect(res.dir).toEqual(2);
    });

    test('Teleport to left on wrong color', () => {
        let robot = {
            "row" : 11,
            "col" : 5,
            "dir" : 2
        };
        let res = Language.teleport(robot, "red", 2, puzzle2.board);
        expect(res.row).toEqual(11);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(2);
    });

    test('Teleport to right on right color', () => {
        let robot = {
            "row" : 4,
            "col" : 8,
            "dir" : 0
        };
        let res = Language.teleport(robot, "blue", 2, puzzle2.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(10);
        expect(res.dir).toEqual(0);
    });

    test('Teleport to right on wrong color', () => {
        let robot = {
            "row" : 4,
            "col" : 8,
            "dir" : 0
        };
        let res = Language.teleport(robot, "red", 2, puzzle2.board);
        expect(res.row).toEqual(4);
        expect(res.col).toEqual(8);
        expect(res.dir).toEqual(0);
    });

    test('Teleport to bottom on right color', () => {
        let robot = {
            "row" : 6,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.teleport(robot, "blue", 2, puzzle2.board);
        expect(res.row).toEqual(8);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(3);
    });

    test('Teleport to bottom on wrong color', () => {
        let robot = {
            "row" : 6,
            "col" : 5,
            "dir" : 3
        };
        let res = Language.teleport(robot, "red", 2, puzzle2.board);
        expect(res.row).toEqual(6);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(3);
    });

    test('Teleport to up on right color', () => {
        let robot = {
            "row" : 8,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.teleport(robot, "blue", 2, puzzle2.board);
        expect(res.row).toEqual(6);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(1);
    });

    test('Teleport to up on wrong color', () => {
        let robot = {
            "row" : 8,
            "col" : 5,
            "dir" : 1
        };
        let res = Language.teleport(robot, "red", 2, puzzle2.board);
        expect(res.row).toEqual(8);
        expect(res.col).toEqual(5);
        expect(res.dir).toEqual(1);
    });


});


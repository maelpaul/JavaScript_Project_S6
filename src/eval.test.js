import * as Eval from "./eval.js";
import * as Instruction from "./language.js";

const black = Instruction.cons("black", "", "");
const blue = Instruction.cons("blue", "", "");
const blues = Instruction.cons("blue", "star", "");
const red = Instruction.cons("red", "", "");
const star = Instruction.cons("blue", "star", "");

const puzzleNE = {
    robotInit:{"row":0,"col":0,"dir":0},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", "")],
    [Instruction.cons("red", "", "") , Instruction.cons("green", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleSW = {
    robotInit:{"row":0,"col":0,"dir":3},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("red", "star", "") , Instruction.cons("green", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleSE = {
    robotInit:{"row":0,"col":0,"dir":3},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleSEModified = {
    robotInit:{"row":1,"col":1,"dir":3},
    board:[[Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "") , Instruction.cons("black", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleNEOutofGround = {
    robotInit:{"row":0,"col":0,"dir":0},
    board:[[Instruction.cons("black", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", "")],
    [Instruction.cons("red", "", "") , Instruction.cons("green", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleNEobstacle = {
    robotInit:{"row":0,"col":0,"dir":0},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "box")],
    [Instruction.cons("red", "", "") , Instruction.cons("green", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleNEfakeDir = {
    robotInit:{"row":0,"col":0,"dir":4},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", "")],
    [Instruction.cons("red", "", "") , Instruction.cons("green", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleJumppadS = {
    robotInit:{"row":0,"col":0,"dir":1},
    board:[[Instruction.cons("blue", "", "jumppadS") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "star", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleJumppadN = {
    robotInit:{"row":3,"col":0,"dir":1},
    board:[[Instruction.cons("blue", "star", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "jumppadN") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleJumppadFake = {
    robotInit:{"row":0,"col":0,"dir":1},
    board:[[Instruction.cons("blue", "", "jumppadMoon") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "star", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleJumppadMultiple = {
    robotInit:{"row":0,"col":0,"dir":1},
    board:[[Instruction.cons("blue", "", "jumppadE") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "jumppadS")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")],
    [Instruction.cons("blue", "star", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "jumppadW")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleSpikeDeath = {
    robotInit:{"row":0,"col":0,"dir":3},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("blue", "star", "")],
    [Instruction.cons("blue", "", "spike") , Instruction.cons("blue", "", "")]],
    achievementRequired:{
        stars:1
    }
};

const puzzleSpikeAlive = {
    robotInit:{"row":0,"col":0,"dir":3},
    board:[[Instruction.cons("blue", "", "") , Instruction.cons("black", "", "")],
    [Instruction.cons("blue", "", "spike") , Instruction.cons("blue", "star", "")],
    [Instruction.cons("blue", "", "") , Instruction.cons("blue", "", "")]],
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

describe('Evaluator test suite', () => {

    test('Get star in one move (NE)', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,puzzleNE).achieved).toBe(true);
    });

    test('Get star in one move (SW)', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,puzzleSW).achieved).toBe(true);
    });

    test('Get star in two moves (one function) (SE)', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[1] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};        
        function1[2] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,puzzleSE).achieved).toBe(true);
    });

    test('Get star with three functions', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[1] = (robot, board) => {return Instruction.move(robot, 'red', board);};
        function1[2] = (robot, board) => {return Instruction.rotateLeft(robot, 'red', board);};
        function1[3] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
        function1[4] = {"number" : 2, "color" : "blue"};
        function1[5] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};          
        function1[6] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function2[0] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function2[1] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};               
        function2[2] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function2[3] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function2[4] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function2[5] = {"number" : 3, "color" : "blue"};
        function2[6] = (robot, board) => {return Instruction.move(robot, 'red', board);};
        function3[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};

        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,puzzleSEModified).achieved).toBe(true);
    });

    test('Get star', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[1] = (robot, board) => {return Instruction.move(robot, 'red', board);};
        function1[2] = (robot, board) => {return Instruction.rotateLeft(robot, 'red', board);};
        function1[3] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
        function1[4] = {"number" : 2, "color" : "red"};
        function1[5] = {"number" : 2, "color" : "green"};
        function1[6] = {"number" : 2, "color" : "black"};
        function1[7] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};        
        function1[8] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,puzzleSEModified).achieved).toBe(true);
    });

    test('Stack overflow error', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 1, "color" : ""};
        let program = [function1,function2,function3,function4,function5];
        
        expect(() => { Eval.evaluator(program,puzzleSE); }).toThrow(Error);
    });

    test('Infinite loop error', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 2, "color" : ""};
        for (let i = 0; i < 200; ++i) {           
            function2[6*i] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
            function2[6*i+1] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
            function2[6*i+2] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};  
            function2[6*i+3] = (robot, board) => {return Instruction.move(robot, 'red', board);}; 
            function2[6*i+4] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
            function2[6*i+5] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        }
        let program = [function1,function2,function3,function4,function5];

        expect(() => { Eval.evaluator(program,puzzleSE); }).toThrow(Error);
    });

    test('Puzzle unsolved', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];                      
        let program = [function1,function2,function3,function4,function5];
        
        expect(() => { Eval.evaluator(program,puzzleNE); }).toThrow(Error);
    });

    test('Unknown instruction error', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 10, "color" : ""};                        
        let program = [function1,function2,function3,function4,function5];
        
        expect(() => { Eval.evaluator(program,puzzleNE); }).toThrow(Error);
    });

    test('Infinite loop error 2', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        for (let i = 0; i < 1200; i++) {
            function1[i] = (robot, board) => {return Instruction.rotateRight(robot, 'blue', board);};
        }                        
        let program = [function1,function2,function3,function4,function5];
        
        expect(() => { Eval.evaluator(program,puzzleSE); }).toThrow(Error);
    });

    test('Out of ground error', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function1[1] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];
        
        expect(() => {Eval.evaluator(program,puzzleNEOutofGround);}).toThrow(Error);
    });

    test('Obstacle error', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];
        
        expect(() => {Eval.evaluator(program,puzzleNEobstacle);}).toThrow(Error);
    });

    test('Direction Unknown', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.teleport(robot, 'blue', 1, board);};
        let program = [function1,function2,function3,function4,function5];
        
        expect(() => {Eval.evaluator(program,puzzleNEfakeDir);}).toThrow(Error);
    });

    test('End of function', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 2, "color" : "red"}; 
        let program = [function1,function2,function3,function4,function5];

        expect(() => {Eval.evaluator(program,puzzleSEModified);}).toThrow(Error);
    });

    test('Jumppad south', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 2, "color" : ""}; 
        let program = [function1,function2,function3,function4,function5];

        expect(Eval.evaluator(program,puzzleJumppadS).achieved).toBe(true);
    });

    test('Jumppad north', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 2, "color" : ""}; 
        let program = [function1,function2,function3,function4,function5];

        expect(Eval.evaluator(program,puzzleJumppadN).achieved).toBe(true);
    });

    test('Fake jumppad', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 2, "color" : ""}; 
        let program = [function1,function2,function3,function4,function5];

        expect(() => {Eval.evaluator(program,puzzleJumppadFake);}).toThrow(Error);
    });    

    test('Multiple jumppads', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 2, "color" : ""}; 
        let program = [function1,function2,function3,function4,function5];

        expect(Eval.evaluator(program,puzzleJumppadMultiple).achieved).toBe(true);
    });

    test('Spiked to death', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[1] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];

        expect(() => {Eval.evaluator(program,puzzleSpikeDeath);}).toThrow(Error);
    });

    test('Spike survival', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[1] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[2] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function1[3] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[4] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function1[5] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        let program = [function1,function2,function3,function4,function5];

        expect(Eval.evaluator(program,puzzleSpikeAlive).achieved).toBe(true);
    });

    test('Get star with three functions', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[1] = (robot, board) => {return Instruction.move(robot, 'red', board);};
        function1[2] = (robot, board) => {return Instruction.rotateLeft(robot, 'red', board);};
        function1[3] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
        function1[4] = {"number" : 2, "color" : "blue"};
        function1[5] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function1[6] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};          
        function1[7] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function2[0] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function2[1] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};               
        function2[2] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
        function2[3] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function2[4] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};
        function2[5] = {"number" : 3, "color" : "blue"};
        function2[6] = (robot, board) => {return Instruction.move(robot, 'red', board);};
        function3[0] = (robot, board) => {return Instruction.move(robot, 'green', board);};
    
        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,puzzleSEModified).achieved).toBe(true);
    });

    test('Learning stack', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = {"number" : 2, "color" : ""};
        function1[1] = (robot, board) => {return Instruction.rotateRight(robot, '', board);};
        function1[2] = (robot, board) => {return Instruction.move(robot, '', board);};
        function2[0] = (robot, board) => {return Instruction.move(robot, '', board);};
        function2[1] = (robot, board) => {return Instruction.rotateRight(robot, 'red', board);};
        function2[2] = {"number" : 2, "color" : "blue"};
        function2[3] = (robot, board) => {return Instruction.move(robot, '', board);};

        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,learningStack).achieved).toBe(true);
    });

    test('Stairs', () => {
        let function1 = [];
        let function2 = [];
        let function3 = [];
        let function4 = [];
        let function5 = [];
        function1[0] = (robot, board) => {return Instruction.move(robot, '', board);};
        function1[1] = (robot, board) => {return Instruction.rotateLeft(robot, '', board);};
        function1[2] = (robot, board) => {return Instruction.move(robot, '', board);};
        function1[3] = (robot, board) => {return Instruction.rotateRight(robot, '', board);};
        function1[4] = {"number" : 1, "color" : ""};

        let program = [function1,function2,function3,function4,function5];
        
        expect(Eval.evaluator(program,Stairs).achieved).toBe(true);
    });

    test("Démo", () => {
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
        
        expect(Eval.evaluator(program,puzzleDemo).achieved).toBe(true);
    });        
    

});

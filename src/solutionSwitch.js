import * as Instruction from "./languageSolution.js";

/**
 * Converts the string s in a program
 * @param {string} s A string
 * @param {array} functionAllowed Array of functions allowed, always equals to ["f1", "f2", "f3"]
 * @param {array} instructionAllowed Array of numbers of instructions allowed for each function (f1, f2, f3)
 * @returns The program corresponding to s, an error if there is no program, a fake program if there is a letter which can't be read
 */
 function strProgram(s, functionAllowed, instructionAllowed) {
    let f1 = [];
    let f2 = [];
    let f3 = [];
    let f4 = [];
    let f5 = [];
    let program = [f1, f2, f3, f4, f5];
    function convertRec(s, i, program, functionAllowed, instructionAllowed) {
        if (s.length === i) {
            return program;
        }
        if (functionAllowed.length >= 1 && program[0].length < instructionAllowed[0]) {
            switch (s[i]) {
                case "0":
                    program[0].push( (robot, board) => {return Instruction.move(robot, '', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "1":
                    program[0].push( (robot, board) => {return Instruction.rotateLeft(robot, '', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "2":
                    program[0].push( (robot, board) => {return Instruction.rotateRight(robot, '', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "3":
                    program[0].push( (robot, board) => {return Instruction.move(robot, 'blue', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "4":
                    program[0].push( (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "5":
                    program[0].push( (robot, board) => {return Instruction.rotateRight(robot, 'blue', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "6":
                    program[0].push( (robot, board) => {return Instruction.move(robot, 'red', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "7":
                    program[0].push( (robot, board) => {return Instruction.rotateLeft(robot, 'red', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "8":
                    program[0].push( (robot, board) => {return Instruction.rotateRight(robot, 'red', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "9":
                    program[0].push( (robot, board) => {return Instruction.move(robot, 'green', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "A":
                    program[0].push( (robot, board) => {return Instruction.rotateLeft(robot, 'green', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "B":
                    program[0].push( (robot, board) => {return Instruction.rotateRight(robot, 'green', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "C":
                    program[0].push( {"number" : 1, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "D":
                    program[0].push( {"number" : 1, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "E":
                    program[0].push( {"number" : 1, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "F":
                    program[0].push( {"number" : 1, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "G":
                    program[0].push( {"number" : 2, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "H":
                    program[0].push( {"number" : 2, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "I":
                    program[0].push( {"number" : 2, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "J":
                    program[0].push( {"number" : 2, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "e":
                    program[0].push( {"number" : 3, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "f":
                    program[0].push( {"number" : 3, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "g":
                    program[0].push( {"number" : 3, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "h":
                    program[0].push( {"number" : 3, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                default:
                    break;
            }
        }
        if (functionAllowed.length >= 2 && program[1].length < instructionAllowed[1]) {
            switch (s[i]) {
                case "K":
                    program[1].push( (robot, board) => {return Instruction.move(robot, '', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "L":
                    program[1].push( (robot, board) => {return Instruction.rotateLeft(robot, '', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "M":
                    program[1].push( (robot, board) => {return Instruction.rotateRight(robot, '', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "N":
                    program[1].push( (robot, board) => {return Instruction.move(robot, 'blue', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "O":
                    program[1].push( (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "P":
                    program[1].push( (robot, board) => {return Instruction.rotateRight(robot, 'blue', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "Q":
                    program[1].push( (robot, board) => {return Instruction.move(robot, 'red', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "R":
                    program[1].push( (robot, board) => {return Instruction.rotateLeft(robot, 'red', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "S":
                    program[1].push( (robot, board) => {return Instruction.rotateRight(robot, 'red', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "T":
                    program[1].push( (robot, board) => {return Instruction.move(robot, 'green', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "U":
                    program[1].push( (robot, board) => {return Instruction.rotateLeft(robot, 'green', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "V":
                    program[1].push( (robot, board) => {return Instruction.rotateRight(robot, 'green', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "W":
                    program[1].push( {"number" : 1, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "X":
                    program[1].push( {"number" : 1, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "Y":
                    program[1].push( {"number" : 1, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "Z":
                    program[1].push( {"number" : 1, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "a":
                    program[1].push( {"number" : 2, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "b":
                    program[1].push( {"number" : 2, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "c":
                    program[1].push( {"number" : 2, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "d":
                    program[1].push( {"number" : 2, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "i":
                    program[1].push( {"number" : 3, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "j":
                    program[1].push( {"number" : 3, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "k":
                    program[1].push( {"number" : 3, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "l":
                    program[1].push( {"number" : 3, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                default:
                    break;
            }
        }
        if (functionAllowed.length >= 3 && program[2].length < instructionAllowed[2]) {
            switch (s[i]) {
                case "m":
                    program[2].push( (robot, board) => {return Instruction.move(robot, '', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "n":
                    program[2].push( (robot, board) => {return Instruction.rotateLeft(robot, '', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "o":
                    program[2].push( (robot, board) => {return Instruction.rotateRight(robot, '', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "p":
                    program[2].push( (robot, board) => {return Instruction.move(robot, 'blue', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "q":
                    program[2].push( (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "r":
                    program[2].push( (robot, board) => {return Instruction.rotateRight(robot, 'blue', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "s":
                    program[2].push( (robot, board) => {return Instruction.move(robot, 'red', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "t":
                    program[2].push( (robot, board) => {return Instruction.rotateLeft(robot, 'red', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "u":
                    program[2].push( (robot, board) => {return Instruction.rotateRight(robot, 'red', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "v":
                    program[2].push( (robot, board) => {return Instruction.move(robot, 'green', board);} );
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "w":
                    program[2].push( (robot, board) => {return Instruction.rotateLeft(robot, 'green', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);
                case "x":
                    program[2].push( (robot, board) => {return Instruction.rotateRight(robot, 'green', board);} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "y":
                    program[2].push( {"number" : 1, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "z":
                    program[2].push( {"number" : 1, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "+":
                    program[2].push( {"number" : 1, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "-":
                    program[2].push( {"number" : 1, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "*":
                    program[2].push( {"number" : 2, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "/":
                    program[2].push( {"number" : 2, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "~":
                    program[2].push( {"number" : 2, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "#":
                    program[2].push( {"number" : 2, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "(":
                    program[2].push( {"number" : 3, "color" : ""} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case ")":
                    program[2].push( {"number" : 3, "color" : "blue"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "[":
                    program[2].push( {"number" : 3, "color" : "red"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                case "]":
                    program[2].push( {"number" : 3, "color" : "green"} );    
                    return convertRec(s, i+1, program, functionAllowed, instructionAllowed);                
                default:
                    break;
            }
        }
        if (program[0].length === instructionAllowed[0] && program[1].length === instructionAllowed[1] && program[2].length === instructionAllowed[2]) {
            throw Error("Can't find a program");
        }
        return [[{"number" : 1, "color" : ""}],[{"number" : 2, "color" : ""}],[{"number" : 3, "color" : ""}],[],[]];
    }
    return convertRec(s, 0, program, functionAllowed, instructionAllowed);
}

export { strProgram };

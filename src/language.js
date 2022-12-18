/**
 * Return the new position of the robot after teleportation otherwise Out of ground error, Obstacle error
 * @param {Object} robot dictionnary with direction (robot.dir), colomn (robot.col), row (robot.row) 
 * @param {Object} position_final dictionnary with colomn (position.col), row (position.row) in the end
 * @param {String} color 
 * @param {Array} board 
 * @returns 
 */
function teleport_from_start_to_end(robot, position_final, color, board) {
    if (position_final.row < 0 || position_final.row >=12 || position_final.col < 0 || position_final.col >= 16) {
        throw new Error("Out of board error");
    }
    else {
        if ((color === board[robot.row][robot.col].color) || (color === "")) {
            if (board[position_final.row][position_final.col].color === "black") {
                throw new Error("Out of ground error");
            } else {
            return {"row" : position_final.row, "col" : position_final.col, "dir" : robot.dir};
            }
        } else {
            return {"row" : robot.row, "col" : robot.col, "dir" : robot.dir};
        }
    }
}

/**
 * Return the new position of the robot after teleportation otherwise Out of ground error, Obstacle error, Direction Unknown
 * @param {Object} robot dictionnary with direction (robot.dir), colomn (robot.col), row (robot.row) 
 * @param {String} color 
 * @param {number} distance 
 * @param {Array} board 
 * @returns 
 */
function teleport(robot, color, distance, board) {
    switch (robot.dir) {
        case 0:
            return teleport_from_start_to_end(robot, {"row" : robot.row, "col" : robot.col + distance}, color, board);
        case 1:
            return teleport_from_start_to_end(robot, {"row" : robot.row - distance, "col" : robot.col}, color, board);
        case 2:
            return teleport_from_start_to_end(robot, {"row" : robot.row, "col" : robot.col - distance}, color, board);
        case 3:
            return teleport_from_start_to_end(robot, {"row" : robot.row + distance, "col" : robot.col}, color, board);
        default:
            throw new Error("Direction Unknown");
    }
}

/**
 * Return the new position of the robot after teleportation
 * @param {Object} robot dictionnary with direction (robot.dir), colomn (robot.col), row (robot.row) 
 * @param {String} color 
 * @param {number} distance 
 * @param {Array} board 
 * @returns 
 */
 function move(robot, color, board) {
    return teleport(robot, color, 1, board);
 }

/**
 * Rotate to left the robot from initial direction
 * @param {Object} robot dictionnary with direction (robot.dir), colomn (robot.col), row (robot.row)
 * @param {String} color Color
 * @param {Array} board Board
 * @returns New direction (number)
 */
function rotateLeft(robot, color, board) {
    if ((color === board[robot.row][robot.col].color) || (color === "")){
        return {"row": robot.row, "col" : robot.col, "dir" : (robot.dir + 1) % 4};
    } else {
        return {"row": robot.row, "col" : robot.col, "dir" : robot.dir};
    }
}

/**
 * Rotate to right the robot from initial direction
 * @param {Object} robot dictionnary with direction (robot.dir), colomn (robot.col), row (robot.row)
 * @param {String} color Color
 * @param {Array} board Board
 * @returns New direction (number)
 */
function rotateRight(robot, color, board) {
    if ((color === board[robot.row][robot.col].color) || (color === "")){
        return {"row": robot.row, "col" : robot.col, "dir" : (robot.dir + 3) % 4};
    } else {
        return {"row": robot.row, "col" : robot.col, "dir" : robot.dir};
    }
}

/**
 * Create a dictionary that represents a square on the board
 * @param {String} c string with color
 * @param {String} a string with achievement
 * @param {String} o string with obstacle
 * @returns dictionary
 */
function cons(c, a, o) { 
    return {color : c, achievement : a, obstacle : o};
}

export { move, rotateLeft, rotateRight, teleport, cons };

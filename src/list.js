// Functions on pointed pairs
function cons(_car, _cdr) { return { car: _car, cdr: _cdr }; }
const nil = {};
function car(cons)        { return cons['car']; }
function cdr(cons)        { return cons['cdr']; }

// Functions on lists
/**
 * Peeks the element at the head of a list
 * @param {list} l A list
 * @returns The head of the list 'l'
 */
function head(l)    { return car(l); }

/**
 * Peeks the element at the tail of a list
 * @param {list} l A list 
 * @returns The tail of the list 'l'
 */
function tail(l)    { return cdr(l); }

/**
 * Checks is a list is empty
 * @param {list} l A list
 * @returns A boolean (true if 'l' is an empty list, false otherwise)
 */
function isEmpty(l) { return l === nil; }

/**
 * Displays a list
 * @param {list} l A list
 * @returns A string representing the content of the list 'l'
 */
function listDisp(l) {
    function listDispRec(l) {
        if (isEmpty(l))
            return "";
        else if (isEmpty(tail(l)))
            return `${head(l)}`;
        else
            return `${head(l)},${listDispRec(tail(l))}`;
    }
    return `[${listDispRec(l)}]`;
}

export { cons, head, tail, isEmpty, listDisp, nil };

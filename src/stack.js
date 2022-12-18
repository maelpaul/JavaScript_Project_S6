import * as List from "./list.js";

/**
 * Creates an empty stack
 * @returns An empty stack
 */
function stackCreateEmpty() {
    return List.nil;
}

/**
 * Checks if a stack is empty
 * @param {stack} s A stack 
 * @returns A boolean (true if 's' is an empty stack, false otherwise)
 */
function stackIsEmpty(s) {
    return List.isEmpty(s);
}

/**
 * Pushes an element on top of a stack
 * @param {element} e An element 
 * @param {stack} s A stack
 * @returns A new stack where the element 'e' has been pushed on top of the stack 's'
 */
function stackPush(e, s) {
    return List.cons(e, s);
}

/**
 * Pops the top of a stack
 * @param {stack} s A stack
 * @returns A new stack where the top of the stack 's' has been popped (throws an error if 's' is empty)
 */
function stackPop(s) {
    if (stackIsEmpty(s)) {
        throw Error("Impossible to pop on an empty stack");
    }
    return List.tail(s);
}

/**
 * Peeks the element at the top of a stack
 * @param {stack} s A stack
 * @returns The element at the top of the stack 's' (throws an error if 's' is empty) 
 */
function stackPeek(s) {
    if (stackIsEmpty(s)) {
        throw Error("Impossible to peek on an empty stack");
    }
    return List.head(s); 
}

/**
 * Displays a stack
 * @param {stack} s A stack
 * @returns A string representing the content of the stack 's'
 */
function stackDisplay(s) {
    return List.listDisp(s);
}

/**
 * Appends a stack to another stack
 * @param {stack} s1 A stack
 * @param {stack} s2 A stack
 * @returns A new stack where 's1' is has been append to 's2' 
 */
function stackAppend(s1,s2) {
    if (stackIsEmpty(s1)) {
        return s2;
    } 
    return List.cons(List.head(s1),stackAppend(List.tail(s1),s2));
}

/**
 * Reverse a stack
 * @param {stack} s A stack to reverse
 * @returns A new stack reversed
 */
function stackReverse(s) {
    function reverse(initialStack, finalStack) {
        if (List.isEmpty(initialStack)) {
            return finalStack;
        } else {
            return reverse(stackPop(initialStack), List.cons(List.head(initialStack), finalStack));
        }
    }
    return reverse(s, stackCreateEmpty());
}

/**
 * Return the length of a stack
 * @param {stack} s A stack
 * @returns Length of the stack
 */
function stackLength(s) {
    if (stackIsEmpty(s)) {
        return 0;
    } else {
        return stackLength(stackPop(s)) + 1;
    }
}

export { stackCreateEmpty, stackIsEmpty, stackPush, stackPop, stackPeek, stackDisplay, stackAppend, stackReverse, stackLength }; 

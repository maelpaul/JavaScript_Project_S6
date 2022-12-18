import * as Stack from "./stack.js";

describe('Stack test suite', () => {

    test('Empty stack should be empty', () => {
        let s = Stack.stackCreateEmpty();
        expect(Stack.stackIsEmpty(s)).toBe(true);
    });
    
    test('Raise error when peeking empty stack', () => {
        let s = Stack.stackCreateEmpty();
        expect(() => { Stack.stackPeek(s); }).toThrow(Error);
    });

    test('Raise error when poping empty stack', () => {
        let s = Stack.stackCreateEmpty();
        expect(() => { Stack.stackPop(s); }).toThrow(Error);
    });
    
    test('Display an empty stack', () => {
        let s = Stack.stackCreateEmpty();
        expect(Stack.stackDisplay(s)).toBe("[]");
    });

    test('Push an element on top of an empty stack', () => {
        let s1 = Stack.stackCreateEmpty();
        let s2 = Stack.stackPush(1, s1);
        expect(Stack.stackDisplay(s2)).toBe("[1]");
    });

    test('Display a stack', () => {
        let s1 = Stack.stackCreateEmpty();
        let s2 = Stack.stackPush(3, s1);
        let s3 = Stack.stackPush(2, s2);
        let s4 = Stack.stackPush(1, s3);
        expect(Stack.stackDisplay(s4)).toBe("[1,2,3]");
    });

    test('Testing peeking non-empty stack', () => {
        let s = Stack.stackCreateEmpty();
        let s1 = Stack.stackPush(1,s);
        expect(Stack.stackPeek(s1)).toBe(1);
    });

    test('Testing poping non-empty stack', () => {
        let s = Stack.stackCreateEmpty();
        let s1 = Stack.stackPush(1,s);
        expect(Stack.stackPop(s1)).toBe(Stack.stackCreateEmpty());
    });

    test('Testing stack appending of the non-empty stacks', () => {
        let s = Stack.stackCreateEmpty();
        let s1 = Stack.stackPush(1,s);
        let s2 = Stack.stackPush(2,s);
        expect(Stack.stackDisplay(Stack.stackAppend(s1,s2))).toBe("[1,2]");
    });

    test('Testing stack appending of empty stacks', () => {
        let s = Stack.stackCreateEmpty();
        expect(Stack.stackAppend(s,s)).toBe(s);
    });

    test('Testing to reverse a stack', () => {
        let s = Stack.stackCreateEmpty();
        s = Stack.stackPush(1,s);
        s = Stack.stackPush(2,s);
        s = Stack.stackPush(3,s);
        expect(Stack.stackDisplay(Stack.stackReverse(s))).toBe("[1,2,3]");
    });

    test('Testing length', () => {
        let s = Stack.stackCreateEmpty();
        s = Stack.stackPush(1,s);
        s = Stack.stackPush(2,s);
        s = Stack.stackPush(3,s);
        expect(Stack.stackLength(s)).toBe(3);
    });    

});

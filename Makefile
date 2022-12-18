SRC = src
PUBLIC = public

JST = npx jest
NDFLAGS = NODE_OPTIONS=--experimental-vm-modules
JSTFLAGS = --coverage

.PHONY: all

all: main test

main:
	node ${SRC}/main.js

test :  
	${NDFLAGS} ${JST} ${JSTFLAGS}

eval_test :
	${NDFLAGS} ${JST} ${SRC}/eval.test.js ${JSTFLAGS}

generatePuzzle_test :
	${NDFLAGS} ${JST} ${SRC}/generatePuzzle.test.js ${JSTFLAGS}

language_test :
	${NDFLAGS} ${JST} ${SRC}/language.test.js ${JSTFLAGS}

solution_test :
	${NDFLAGS} ${JST} ${SRC}/solution.test.js ${JSTFLAGS}

stack_test :
	${NDFLAGS} ${JST} ${SRC}/stack.test.js ${JSTFLAGS}

gen : 
	cp src/viewer/robot.html public/
	cp src/viewer/script.js public/
	cp src/viewer/style.css public/
	cp src/viewer/robot.ttf public/

clean : 
	rm -f public/robot.html
	rm -f public/script.js
	rm -f public/style.css
	rm -f public/robot.ttf

---
tags:
  - public
---
[[Primitively recursive]]
# BlooP

**BlooP** (named for bounded loops) is a simple programming language proposed in [[Sources/@hofstadterGodelEscherBach1999|Gödel, Escher, Bach: An eternal golden braid]] that can only compute [[Primitively recursive]] functions and predicates.
Thus the main property of BlooP is that all loops have an upper bound on the number of times they run, prior to computation.

An extension of BlooP is given by [[FlooP]].

## Language design

A function in BlooP returns a natural number ($\mathbb{N}_{0}$) from any number of natural number arguments,
and its name is written in all caps.
A test returns `YES` or `NO` and its name is written in all caps followed by `?`.

```BlooP
DEFINE PROCEDURE “MINUS” [M,N]:
BLOCK 0: BEGIN
  IF M < N, THEN:
  QUIT BLOCK 0;
  LOOP AT MOST M + 1 TIMES:
  BLOCK 1: BEGIN
    IF OUTPUT + N = M, THEN:
    ABORT LOOP 1;
    OUTPUT <== OUTPUT + 1;
  BLOCK 1: END;
BLOCK 0: END;

DEFINE PROCEDURE “REMAINDER” [M,N]:
BLOCK 0: BEGIN
  CELL(0) <== 0
  LOOP AT MOST M TIMES:
  BLOCK 1: BEGIN
    OUTPUT <== MINUS [M, CELL(0)];
    IF OUTPUT < N:
      QUIT BLOCK 0;
    CELL(0) <== CELL(0) + N
  BLOCK 1: END;
BLOCK 0: END;

DEFINE PROCEDURE “PRIME?” [N]:
BLOCK 0: BEGIN
  IF N = 0, THEN:
  QUIT BLOCK 0;
  CELL(0) <== 2;
  LOOP AT MOST MINUS [N,2] TIMES:
  BLOCK 1: BEGIN
    IF REMAINDER [N,CELL(0)] = 0, THEN:
    QUIT BLOCK 0;
    CELL(0) <== CELL(0) + 1;
  BLOCK 1: END;
  OUTPUT <== YES;
BLOCK 0: END.
```

The above program illustrates the main features of BlooP

- Procedures may only call procedures defined before them, so [[Recursion]] is not permitted.
- The only primitives (and only values) are of $\mathbb{N}_{0}$ or $\mathbb{Z}_{2}$.
- The `OUTPUT` of a function is `0`, the output of a predicate is `NO` by default.
- `QUIT` jumps to below the last line of a block whereas `ABORT` jumps outside a block. Hence in a loop, `QUIT` can be used to skip a single iterative step while `ABORT` exits the loop.
#
---
#state/develop | #lang/en | #SemBr

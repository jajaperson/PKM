---
aliases:
  - row space
  - column space
tags:
  - public
---
[[Linear algebra MOC]]
# Row and column space
The **column space** $\colsp A$ of a matrix $A$ is the [[Span|span]] of its columns, #m/def/linalg 
or considered as a [[Linear map]],
the target [[Vector subspace]].
Hence it is sometimes referred to as the **range** or the **image** of a matrix.

Dually, the **row space** $\rowsp A$ of a matrix $A$ is the span of its rows. #m/def/linalg 
It is therefore the range of [[Linear form|linear functionals]] made by premultiplying the matrix by a linear functional.

## Basis
A basis for a **row space** can be performed by performing [[Gaußian elimination]] on the matrix $A$,
since all non-zero rows of a matrix in [[Row echelon form]] are independent.

Likewise, the basis of a **column space** of a matrix $A$ 
is found by performing gaussian elimination on the transpose $\tp A$,
and then transposing the results back to column vectors.
#
---
#state/tidy | #SemBr

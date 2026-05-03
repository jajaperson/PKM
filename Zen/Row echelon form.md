---
tags:
  - public
---
[[Linear equations MOC]]
# Row echelon form
**Row echelon form** (REF) is a manipulated form of a [[system of linear equations]]
that enables [[back substitution]] in order to find a solution.
A system may be converted to this form by the process of [[Gaußian elimination]]. 
$$
\left[
\begin{array}{ccc|c}
1 & 0 & 2 & 1 \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 0
\end{array}
\right]
\qquad
\left[
\begin{array}{ccc|c}
1 & 1 & 2 & 3 \\
0 & 2 & 1 & -1 \\
0 & 0 & 3 & 0
\end{array}
\right]
\qquad
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & 0 \\
0 & 2 & 1 & 1 \\
0 & 0 & 0 & 1
\end{array}
\right]
$$
A [[Matrix of a system of linear equations|matrix]] is in row echelon form iff.[^2022]
1. Any rows of the matrix consisting entirely of zeros occur as the last rows of the matrix, and
2. The first non-zero entry of each row is in a column strictly to the right of the first non-zero entry in any of the earlier rows,

[^2022]: 2022\. [[Sources/@bassomMATH1012MathematicalTheory2022|MATH1012: Mathematical theory and methods]], p. 14

A matrix in reduced row echelon form allows the identification of [[Basic and free variables]].

## Reduced row echelon form
**Reduced row echelon form** (RREF) is a modified version of REF 
which allows solutions to be read off the matrix trivially.
Similarly, they may be produced by the process of [[Gauß-Jordan elimination]].
$$
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & 3 \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 0
\end{array}
\right]
\qquad
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & \frac{7}{2} \\
0 & 1 & 0 & -\frac{1}{2} \\
0 & 0 & 1 & 0
\end{array}
\right]
\qquad
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & 0 \\
0 & 1 & \frac{1}{2} & \frac{1}{2} \\
0 & 0 & 0 & 1
\end{array}
\right]
$$
The additional conditions for a matrix to be in RREF are
1. All leading entries are $1$, and
2. All leading entries are the only entry in their respective column.

#
---
#state/tidy | #SemBr

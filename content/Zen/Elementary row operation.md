---
tags:
  - public
---
[[Linear equations MOC]]
# Elementary row operation
An **elementary row operation** is any one of three operations
which may be performed on a [[system of linear equations]]
without changing the solution: #m/def/linalg 
1. Swapping of rows (changing the order of equations):
   $r_{1} \leftrightarrow r_{2}$
2. Scalar multiplication of rows: 
   $r_{1} \leftarrow 2r_{1}$
3. Addition of rows: 
   $r_{1} \leftarrow 3r_{1} + 2r_{2}$

These operations are used by both [[Gaußian elimination]],
and the more advanced [[Gauß-Jordan elimination]].

In the sense that these operations may be performed on a system without altering it,
a [[Homogenous system of linear equations|homogenous system]] may therefore be seen as an example of a [[vector space]],
with the addition of equations
and their multiplication by a scalar
as its two operations.

## Effects on determinant
Each elementary row operation affects the [[Matrix determinant]] in predictable ways.

1. Swapping of rows ($r_{1} \leftrightarrow r_{2}$) gives
   $$
\begin{align*}
\det(A') = -\det(A)
\end{align*}
$$
2. Scalar multiplication ($r_{1} \leftarrow \alpha r_{1}$) gives
   $$
\begin{align*}
\det(A') = \alpha \det(A)
\end{align*}
$$
3. Addition of rows ($r_{1} \leftarrow \alpha r_{1} + \beta r_{2}$) gives
      $$
\begin{align*}
\det(A') = \alpha \det(A)
\end{align*}
$$

This is useful, since a [[Types of square matrix|upper-triangle matrix]] (i.e. [[Row echelon form]]) has a determinant equal to the product of the main diagonal.
Hence [[Gaußian elimination]] provides a useful method for finding the [[Matrix determinant]].
These properties can be derived by considering the [[Exterior algebra]].

#
---
#state/tidy | #SemBr

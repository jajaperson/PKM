---
tags:
  - public
---
[[Linear algebra MOC]]
# Matrix algebra
A matrix algebra involves _rectangular arrays_ with entries from some [[Field]] $\mathbb{K}$,
and the following operations

1. **Matrix addition** 
   — Two matrices of the same number of rows and columns are added piecewise,
   so for $C = A + B$, 
   the resulting matrix is obtained by 
    $$
    c_{ij} = a_{ij} + b_{ij}
    $$
3. **Matrix multiplication** 
   — If $A = (a_{ij})$ is $m \times p$
   and $B = (a_{ij})$ is $p \times n$,
   then the matrix product $AB$ exists and is obtained from
  $$
  \begin{align*}
  c_{ij} = \sum^{k=p}_{k=1}a_{ik}b_{kk}
  \end{align*}
  $$
  Which more intuitively involves taking the dot product of each row of $A$ with each column of $B$,
  and arranging them in a matrix such that the row position matches $A$ and the column position matches $B$.
3. **Matrix transposition**
   — Every matrix $A$ of size $m \times n$ has a transpose $\tp A$ of size $n \times m$, such that if $\tp A = (c_{ij})$
  $$
  \begin{align*}
  c_{ji} = a_{ij}
  \end{align*}
  $$
  The matrix transpose is closely related to [[Duality]].
  For example, covectors are the transpose of vectors.
4. **Scalar multiplication**
   — Every entry of matrix $A = (a_{ij})$ is multiplied by the scalar $\alpha$,
   i.e. if $\alpha A = (c_{ij})$
  $$
  \begin{align*}
  c_{ij} = \alpha a_{ij}
  \end{align*}
  $$

Note a matrix of size $m \times n$ has $m$ rows and $n$ columns.
[[Matrix multiplication algebra as a category]].

## Properties
From the definitions of the operations above,
it follows that[^2022]
1. $A + B = B + A$ _(matrix addition is associative)_
2. $(A + B) + C = A + (B + C)$ _(matrix addition is associative)_
3. $\alpha(A + B) = \alpha A + \alpha B$ _(scalar multiplication is distributive over matrix addition)_
4. $(\alpha + \beta)A = \alpha A + \beta A$ _(scalar multiplication is distributive over scalar addition)_
5. $(\alpha \beta)A = \alpha (\beta A)$ _(scalar multiplication is associative)_
6. $A(BC) = (AB)C$ _(matrix multiplication is associative)_
7. $(\alpha A)B = \alpha(AB)$ and $A(\alpha B) = \alpha (AB)$ _(scalar multiplication is commutative)_
8. $A(B+C) = AB + AC$ _(matrix multiplication is left-distributive over addition)_
9. $(A+B)C = AC + BC$ _(matrix multiplication is right-distributive over addition)_
10. $\tp{(\tp A)}$ _(transposition is an [[involution]])_
11. $\tp{(A + B)} = \tp A + \tp B$ _(transposition is distributive over addition)_
12. $\tp{(AB)} = \tp B \tp A$ _(transposition is anti-distributive over square matrix multiplication)_

[^2022]: 2022\. [[Sources/@bassomMATH1012MathematicalTheory2022|MATH1012: Mathematical theory and methods]], pp. 52n.

Notable differences between matrix algebra and the real numbers are

- Matrix multiplication is not distributive
- The multiplicative identity, and therefore the multiplicative inverse,
  only exist in **square matrices**.
  See [[Types of square matrix]].

#
---
#state/tidy | #SemBr

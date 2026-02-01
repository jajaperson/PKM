---
tags:
  - public
---
[[Linear algebra MOC]]
# Wronskian
The **Wronskian** generalizes the technique for showing a set is [[Linear (in)dependence|linearly independent]] by showing they form a [[Types of square matrix|singular matrix]] matrix
$$
\begin{align*}
A \vab v = \vab 0 \implies \vab v = A^{-1}
\end{align*}
$$
to vector spaces of differentiable functions.[^2022]
A Wonskrian of zero need not imply linear dependence…

[^2022]: 2022\. [[Sources/@grassoMathematicalPhysicsLecture2022|Mathematical physics lecture notes]], p. 140 (§9.7)

## Other notes

- [!] The Wronskian is identically nonzero iff the solutions are linearly independent.
      A Wronskian of zero at a specific point $t_{0}$ indicates there is no solution at that point.

- [i] As a consequence of this, it is possible to determine whether a specific function is even eligible to be one of the basis solutions:
      if both it and its derivative are zero at a specific point $t_{0}$,
      the Wronskian will be zero at that point (irregardless of the other basis solution\*) 
      and hence it is not a solution at this point.


#
---
#state/stub | #lang/en
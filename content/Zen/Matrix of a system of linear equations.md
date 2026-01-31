---
tags:
  - public
---
[[System of linear equations]]
# Matrix  of a system of linear equations
For a system of $n$ unknowns and $m$ equations;
given $A$ is the $n \times m$ matrix containing the coefficients,
$\vab x$ is the column vector of unknowns,
and $\vab b$ is the column vector of results;
a system may be represented as
$$
\begin{align*}
A \vab x = \vab b
\end{align*}
$$
e.g. the following system
$$
\begin{matrix*}
3x & + & 2y &= & 5 \\
2x & - & 9y &= & 0
\end{matrix*}
$$
can also be stated as
$$
\begin{align*}
\begin{bmatrix}
3 & 2 \\
2 & -15
\end{bmatrix} 
\vtwo{x}{y}
=
\vtwo{5}{0}
\end{align*}
$$

## Augmented matrix
When solving systems of linear equations by, for example, [[Gaußian elimination]], 
it is common to form the "augmented matrix" $[\left.C \right| \vab b]$.
Using the example above
$$
\left[
  \begin{array}{cc|c}
  3 & 2 & 5 \\
  2 & -15 & 0 
  \end{array}
\right]
$$

#
---
#state/tidy | #SemBr 
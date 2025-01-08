---
tags:
  - public
---
[[Homogenous polynomial]]
# Quadratic form

A **quadratic form** over a field $\mathbb{K}$ is a map $Q : V \to \mathbb{K}$ from a finite [[vector space]] $\mathbb{K}$ such that
$$
\begin{align*}
Q(\lambda x)=\lambda^2Q(x)
\end{align*}
$$
for all $x \in V$ and the function $Q(u+v) - Q(u) - Q(v)$ is a [[bilinear form]]. #m/def/linalg 
A vector space equipped with a quadratic form is a [[Quadratic space]].
Equivalently, $q$ is an [[Homogenous polynomial|algebraic form]] of degree 2
$$
\begin{align*}
Q(x_{1},\dots,x_{n}) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_{i}x_{j}
\end{align*}
$$
or using a matrix $A = (a_{ij})$
$$
\begin{align*}
Q(x) = \tp x A x
\end{align*}
$$
If the [[Characteristic]] $\mathrm{char} (\mathbb{K}) \neq 2$, multiple choices of $A$ are possible for the same quadratic form,
a quadratic form is uniquely specified by a [[Types of square matrix|symmetric matrix]] given by $(A + \tp A) / 2$.

A space equipped with a quadratic form is called a **quadratic space**.

## Properties

- [[Correspondence between quadratic forms and symmetric bilinear forms away from 2]]
- [[Diagonalization of a quadratic form away from 2]]

## Related

- [[Projective quadric]]

#
---
#state/tidy | #lang/en | #SemBr

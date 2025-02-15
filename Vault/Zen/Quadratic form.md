---
tags:
  - public
aliases:
  - polar form
---
[[Homogenous polynomial]]
# Quadratic form

A **quadratic form** over a field $\mathbb{K}$ is a map $q : V \to \mathbb{K}$ from a finite [[vector space]] $\mathbb{K}$ such that
$$
\begin{align*}
q(\lambda x)=\lambda^2q(x)
\end{align*}
$$
for all $x \in V$ and the corresponding **polar form** $b_{q}(u,v) = q(u+v) - q(u) - q(v)$ is a [[bilinear form]]. #m/def/linalg 
A vector space equipped with a quadratic form is a [[Quadratic space]].
Equivalently, $q$ is an [[Homogenous polynomial|algebraic form]] of degree 2
$$
\begin{align*}
q(x_{1},\dots,x_{n}) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_{i}x_{j}
\end{align*}
$$
or using a matrix $A = (a_{ij})$
$$
\begin{align*}
q(x) = \tp x A x
\end{align*}
$$
A space equipped with a quadratic form is called a [[quadratic space]].

## Further terminology

- See [[Quadratic space#Further terminology]]

## Properties

- [[Correspondence between quadratic forms and symmetric bilinear forms away from 2]]
- [[Correspondence between quadratic forms and alternating bilinear forms at 2]]
- [[Diagonalization of a quadratic form away from 2]]

## Related

- [[Projective quadric]]

#
---
#state/tidy | #lang/en | #SemBr

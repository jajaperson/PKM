---
tags:
  - public
---
[[Differential equations MOC]]
# Laplace's equation
**Laplace's differential equation** is the statement that a scalar-valued function's [[Laplacian|Laplacian]] is zero.
$$
\begin{align*}
\nabla^2 f= 0
\end{align*}
$$

## Properties of solutions
A solution $f : \mathbb{R}^n \to \mathbb{R}$ to Laplace's equation has the following properties in general

- It has the shape of something under tension, e.g. a rubber band or rubber sheet under tension.
- Let $\vab x \in \mathbb{R}^n$, and $\partial B_{r}(\vab x) \sube \mathbb{R}^n$ be the set of all points with distance $r$ from $\vab x$. Then
  the average of the image $f(\partial B_{r}(\vab x))$ is $f(\vab x)$.
- The value of $f$ within a region $R \sube \mathbb{R}^n$ is completely and uniquely determined by the values of $f$ on the boundary $\partial R$.
- There are no local maxima or minima (this follows from the previous property)

## Holomorphic extension
Any function $u : \mathbb{R}^2 \to \mathbb{R}$ satisfying Laplace's equation may be extended to a holomorphic function $f : \mathbb{C} \to \mathbb{C}$ with $u(x,y) = \Re(x+iy)$ unique up to an imaginary constant.
This follows directly from the [[Cauchy-Riemann equations]].

## See also

- [[Poisson's equation]]

#
---
#state/tidy  | #lang/en | #SemBr

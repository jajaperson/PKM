---
tags:
  - public
---
[[Homotopy theory MOC]]
# Homotopy group

Given a based space $(X, x_{0})$ and $n \in \mathbb{N}$, we define an $n$-dimensional loop with base $x_{0}$ to be a continuous function $\alpha :(\mathbb{I}^n, \partial \mathbb{I}^n) \to (X,x_{0})$, i.e. mapping the boundary of the unit hypercube to the basepoint.
Given loops $\alpha,\beta \in \Top_{•}((\mathbb{I}^n, \partial \mathbb{I}^n), (X,x_{0}))$ we define their concatenation as

$$
\begin{align*}
\alpha \odot  \beta (t_{1}, \dots, t_{n}) = \begin{cases}
\beta(2t_{1}, t_{2}, \dots, t_{n}) & t_{1} \in\left[ 0, \frac{1}{2} \right] \\
\alpha(2t_{1}-1, t_{2}, \dots, t_{n}) & t_{1} \in \left[ \frac{1}{2}, 1 \right]
\end{cases}
\end{align*}
$$
The $n$th **homotopy group** $\pi_{n}(X,x_{0})$ is the set of [[Homotopy of maps|homotopy classes]] of such loops with the concatenation operation, i.e. as a set $\pi_{n}(X,x_{0}) = \hTop_{•}((\mathbb{I}^n, \partial \mathbb{I}^n),(X,x_{0}))$. #m/def/homotopy
Equivalently, $\pi_{n}(X,x_{0})= \hTop_{•}((\mathbb{S}^n,1),  (X,x_{0}))$.

## Properties

- $n=1$ gives the [[fundamental group]]
- [[Non-fundamental homotopy groups are abelian]]
- [[Non-fundamental homotopy groups of a circle are trivial]]

#
---
#state/develop | #lang/en | #SemBr

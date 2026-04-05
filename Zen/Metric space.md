---
mathLink-blocks:
  M1: symmetry
  M2: triangle inequality
  M3: positive definite
tags:
  - public
---
[[Analysis MOC]]
# Metric space
A metric space $(M, d)$ is a set $M$ equipped with a **metric** $d: M \times M \to [0, \infty)$ such that #m/def/anal 
1. **Symmetry:** $d(x, y) = d(y, x)$ for all $x,y \in M$ ^M1
2. **Triangle inequality:** $d(x, y) + d(y, z) \geq d(x, z)$ for all $x, y, z \in M$ ^M2
3. **Positive definite:** $d(x,y) = 0$ iff. $x = y$ ^M3


It immediately follows that $f(x,y) > 0$ iff. $x \neq y$
Metric spaces are the objects in the [[Category of metric spaces]].

## Examples
The quintessential example is the pythagorean distance function on euclidean space, 
which in one dimension is simply the difference
$$
\begin{align*}
d : (x_{1},x_{2}) \mapsto \abs{x_{1}-x_{2}}
\end{align*}
$$
A trivial example is the [[Discrete topology|discrete metric]], which yields the [[Discrete topology]].
$$
\begin{align*}
\rho(x_{1},x_{2}) = \begin{cases}
1 & \text{if } x \neq y \\
0 & \text{if } x = y
\end{cases}
\end{align*}
$$

## Properties

- [[Reverse triangle inequality]]
- Metric spaces _induce_ a [[Metric topology]] with the open balls as its [[Topological basis]].
  Thus a metric space gives the most intuitive definition of [[Metric topology#Open and closed sets|open and closed sets]], which is generalised by a [[topological space]].


#
---
#state/develop  | #SemBr

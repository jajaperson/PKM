---
aliases:
  - Lipschitz continuous
tags:
  - public
---
[[Analysis MOC]]
# Lipschitz continuity
A function $f:X \to Y$ between metric spaces $(X, d_{X})$ and $(Y, d_{Y})$ is **Lipschitz continuous** iff. there exists $L$ such that
$$
\begin{align*}
d_{Y}(f(x), f(y)) \leq L\,d_{X}(x,y)
\end{align*}
$$
for all $x, y \in X$. #m/def/anal 
The smallest $L$ with this property is called the **Lipschitz constant** of $f$,
so that $\text{Lip}(f) \leq L$.
As the name implies, a **Lipschitz continuous** function is also [[Continuity|continuous]].

A [[Contraction map]] is a Lipschitz continuous map with $0 \leq L < 1$. #m/def/anal 

A Lipschitz function is almost [[Continuous differentiability|continuously differentiable]].
The [[measure]] of the set of points for which the derivative is undefined is zero.

If the derivative of a function is bounded, than it is Lipschitz.

#
---
#state/develop | #lang/en | #SemBr

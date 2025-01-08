---
aliases:
  - strictly convex function
tags:
  - public
---
[[Analysis MOC]]
# Convex function

Let $X$ be a [[convex subset]] of $\mathbb{R}^n$.
A function $f : X \to \mathbb{R}$ is said to be **convex** iff its _epigraph_ (the set of points above its [[graph]]) is a [[convex subset]] of $\mathbb{R}^{n+1}$. #m/def/anal 
Equivalently, for all $t \in [0,1]$ and $x_{1},x_{2} \in X$,
 $$
\begin{align*}
f(tx_{1}+(1-t)x_{2}) \leq tf(x_{1}) + (1-t)f(x_{2})
\end{align*}
$$
i.e. the secant lies above the graph.
This is sometimes referred to as [[Jensen's inequality]] for two points.
Such a function is **strictly convex** iff 
$$
\begin{align*}
f(tx_{1}+(1-t)x_{2}) < tf(x_{1}) + (1-t)f(x_{2})
\end{align*}
$$
for all $t \in [0,1]$ and $x_{1},x_{2} \in X$.

## Properties

- [[A twice-differentiable function is convex iff its second derivative is nonnegative everywhere]]
- [[Jensen's inequality]]
- [[Convexity on the positive reals and negative f(0) implies superadditivity]]

#
---
#state/tidy | #lang/en | #SemBr

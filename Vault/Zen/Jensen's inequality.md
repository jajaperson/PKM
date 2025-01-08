---
tags:
  - public
---
[[Probability theory MOC]]
# Jensen's inequality

Let $(\xi,\mathcal{F},\mathbb{P})$ be a [[probability model]],
$X : \xi \to \mathbb{R}$ be a [[real random variable]]^[i.e. $\mathbb{P}$-[[measurable function]]],
and $\varphi : \mathbb{R} \to \mathbb{R}$ be a [[Convex function]].
Then #m/thm/measure 
$$
\begin{align*}
\varphi \left( \int _{\xi} X \, d\mathbb{P}  \right) &\leq \int _{\xi}\varphi \circ X \, d\mathbb{P} \\
\varphi(\Ex[X]) &\leq \Ex[\varphi(X)]
\end{align*}
$$
with equality iff $\varphi(X) = a + bX$.


#
---
#state/develop | #lang/en | #SemBr

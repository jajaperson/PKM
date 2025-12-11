---
tags:
  - public
---
[[Lie theory MOC]]
# 1-parameter group

A **1-parameter group** is a continuous [[group homomorphism]]
$$
\begin{align*}
\varphi^? : \mathbb{R}^+ \to G
\end{align*}
$$
where $G$ is a [[topological group]]. #m/def/lie
Often, we abuse terminology and conflate $\varphi$ with $\im \varphi$.

## Local 1-parameter group
A **local 1-parameter group** is a weakening akin to a [[Local topological group|local group]].[^1]
We restrict to a **flow domain** $(\epsilon_{-},\epsilon_{+})$ for $\epsilon_{-} < 0 < \epsilon_{+}$, and take
$$
\begin{align*}
\varphi^? : (\epsilon_{-}, \epsilon_{+}) \to G.
\end{align*}
$$
We require that $\varphi^0 = 1_{G}$ and $\varphi^a\varphi^b = \varphi^{a+b}$ for all $a,b \in (\epsilon_{-}, \epsilon_{+})$ such that $a+b \in (\epsilon_{-},\epsilon_{+})$.

## See also

- [[Flow on a manifold]]

#
---
#state/develop | #lang/en | #SemBr

[^1]: In fact, $G$ may be a local group.

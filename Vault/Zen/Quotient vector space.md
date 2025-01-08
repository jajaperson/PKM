---
tags:
  - public
---
[[Linear algebra MOC]]
# Quotient vector space

Given a [[vector space]] $A$ over a field $\mathbb{K}$ and a [[vector subspace]] $B \leq A$,
the **quotient space** $A/B$ is just $A$ with all the elements of $B$ collapsed to zero, #m/def/linalg 
More formally, using the [[congruence relation]]
$$
\begin{align*}
x \equiv y \iff x - y \in B
\end{align*}
$$
we have $A / B = A / {\equiv}$ with $\alpha[a] + \beta [b] = [\alpha a + \beta b]$.
Hence this is a special case of a [[quotient module]].

#
---
#state/develop | #lang/en | #SemBr

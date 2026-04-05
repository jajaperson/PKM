---
tags:
  - public
---
[[Metric space]]
# Reverse triangle inequality

For any metric space $(M, d)$, the **reverse triangle inequality**
$$
\begin{equation*}
\abs{d(x,y) - d(y,z)} \leq d(x,z)
\end{equation*}
$$
holds for any $x,y,z \in M$. #m/thm/anal 

> [!check]- Proof
> Consider some $x,y,z \in M$.
> By the triangle inequality, $d(x,y) \leq d(x,z) + d(y,z)$, 
> and hence $d(x,y) - d(y,z) \leq d(x,z)$.
> Likewise $d(y,z) \leq d(x,y) + d(x,z)$,
> implying $d(y,z) - d(x,y) \leq d(x,z)$. 
> Therefore $\abs{d(x,y) - d(y,z)} \leq d(x,z)$.
> <span class="QED"/>

It follows immediately that the analogous reverse triangle inequality holds for any [[Normed vector space]] $V$:
$$
\begin{align*}
\abs{\|v\| - \|u\|} \leq \|v - u\|
\end{align*}
$$
for any $v,u \in V$.

#
---
#state/tidy | #lang/en | #SemBr

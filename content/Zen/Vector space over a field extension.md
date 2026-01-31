---
tags:
  - public
---
[[Linear algebra MOC]]
# Vector space over a field extension

Let $L:K$ be a [[field extension]] and $V$ be an $L$-[[vector space]].
Then $V$ is also a $K$-vector space, and #m/thm/linalg 
$$
\begin{align*}
\dim_{K} V = [L:K] \dim_{L} V = (\dim_{K}L)(\dim_{L}V)
\end{align*}
$$

> [!check]- Proof
> That $V$ is a vector space over any subfield of $L$, so in particular it is an $L$-vector space.
> Let $\alpha : I \hookrightarrow L$ be an $I$-indexed $K$-basis for $L$ and $v : J \hookrightarrow V$ be a $J$-indexed $L$-basis for $V$.
> We claim that
> $$
> \begin{align*}
> \alpha : I \times J &\to V \\
> (i,j) &\mapsto \alpha(i) \, v(j)
> \end{align*}
> $$
> forms an $(I\times J)$-indexed $K$-basis for $V$.
> Indeed, for any $u \in V$, we have
> $$
> \begin{align*}
> u = \sum_{j \in J_{u}}  \lambda_{j} \, v(j)
> \end{align*}
> $$
> for some finite subset $J_{u} \sube J$,
> and for each $\lambda_{j} \in L$ we have
> $$
> \begin{align*}
> \lambda_{j} = \sum_{i \in I_{\lambda_{j}}} \kappa_{i} \, \alpha(i)
> \end{align*}
> $$
> for some finite subset $I_{\lambda_{j}} \sube I$.
> Therefore
> $$
> \begin{align*}
> u = \sum_{j \in J_{u}} \sum_{i \in I_{\lambda_{j}}} \kappa_{i}\,\alpha(i)\,v(j)
> \end{align*}
> $$
> is a finite linear combination. <span class="QED"/>

## Corollaries

- [[Intermediate field extension]]

#
---
#state/tidy | #lang/en | #SemBr

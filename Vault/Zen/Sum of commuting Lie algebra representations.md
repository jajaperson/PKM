---
tags:
  - public
---
[[Lie algebra representation]]
# Sum of commuting Lie algebra representations

Let $\mathfrak{g}$ be a [[Lie algebra]] over $\mathbb{K}$, and $\pi_{1},\pi_{2} : \mathfrak{g} \to \mathfrak{gl}(V)$ be [[Lie algebra representation|representations]] of $\mathfrak{g}$ on a $\mathbb{K}$-[[Vector space|linear space]] $V$ that commute in the sense that for any $x,y \in \mathfrak{g}$
$$
\begin{align*}
[\pi_{1}(x),\pi_{2}(y)] = 0
\end{align*}
$$
Then $\pi = \pi_{1} + \pi_{2}$ is a representation of $\mathfrak{g}$ on $V$. #m/thm/lie

> [!check]- Proof
> Since
> $$
> \begin{align*}
> \pi([x,y])
> &= \pi_{1}([x,y]) + \pi_{2}([x,y])  \\
> &= \pi_{1}(x)\pi_{1}(y) - \pi_{1}(y)\pi_{1}(x) + \pi_{2}(x)\pi_{2}(y) - \pi_{2}(y)\pi_{2}(x) \\
> &= \begin{matrix}
> \pi_{1}(x)\pi_{1}(y) + \pi_{2}(x)\pi_{2}(y) - \pi_{1}(y)\pi_{1}(x) - \pi_{2}(y)\pi_{2}(x) \\
> \phantom.+\pi_{1}(x)\pi_{2}(y) + \pi_{2}(x)\pi_{1}(y) - \pi_{2}(y) \pi_{1}(x)- \pi_{1}(y)\pi_{2}(x)
> \end{matrix} \\
> &= \pi(x)\pi(y) - \pi(y)\pi(x)
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

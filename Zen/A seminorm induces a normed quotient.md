---
alias: normed quotient
tags:
  - public
---
[[Seminormed vector space]]
# A seminorm induces a normed quotient

Let $(V, \mathbb{K}, \|\cdot\|)$ be a [[Seminormed vector space]] and let
$$
\begin{align*}
\mathcal{N} = \{ x \in V : \|x\| = 0 \}
\end{align*}
$$
Then the [[Quotient vector space]] $V / N$ carries a unique [[Normed vector space|norm]] such that #m/def/anal/vec
$$
\begin{align*}
\|x + N\| = \|x\|
\end{align*}
$$

> [!check]- Proof
> Note that for any $y \in N$, $\|x+y\| \leq \|x\| + \|y\| = \|x\|$.
> Now
> $$
> \begin{align*}
> \|\alpha(x+N)\| &= \|\alpha x + N\| = \|\alpha x\| = \|\alpha\|\|x\| = |\alpha|\|x+N\|
> \end{align*}
> $$
> proving [[Normed vector space#^N1|absolute homogeneity]].
> Similarly
> $$
> \begin{align*}
> \|(x + N) + (y + N)\| &= \|x+y+N\| = \|x+y\| \\&\leq \|x\| + \|y\| \\&= \|x+N\| + \|y+N\|
> \end{align*}
> $$
> proving the [[Normed vector space#^N2|triangle inequality]].
> Finally $\|x + N\| = \|x\| = 0$ implies $x = N$,
> so $x+N = N$, thus we have [[Normed vector space#^N3|positive definiteness]]. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Bounded set]]
# Compact sets in a metric space are bounded

Let $(X, d)$ be a [[metric space]] and $K \sube X$ be [[Compact space|compact]].
Then $K$ is [[Bounded set|bounded]]. #m/thm/anal 

> [!check]- Proof
> The set $\{ \mathrm{B}_{1}(x) \}_{x \in X}$ forms an [[Cover set|open cover]] of $K$,
> so it has a finite subcover $\{ \mathrm{B}_{1}(x_{i}) \}_{i=1}^n$.
> Let
> $$
> \begin{align*}
> M = \max \{ d(x_{i},x_{j}) : i ,j = 1, \dots, n \}
> \end{align*}
> $$
> Then for any $p,q \in X$, $p \in \mathrm{B}_{1}(x_{i})$ and $q \in \mathrm{B}_{1}(x_{j})$ for some $i,j$,
> hence
> $$
> \begin{align*}
> d(p,q) &\leq d(p,x_{i}) + d(x_{i}, x_{j}) + d(x_{j}, q) \\
> &\leq 1 + M + 1 \leq M + 2
> \end{align*}
> $$
> therefore $K$ is bounded.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

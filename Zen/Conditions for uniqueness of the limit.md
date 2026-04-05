---
tags:
  - public
---
[[Convergence]]
# Conditions for the uniqueness of the limit

Let $(X, \mathcal{T})$ be a topological space.
If $X$ is [[Hausdorff space|Hausdorff]] then every [[Convergence|convergent sequence]] $(a_n)_{n=1}^\infty$ has a unique limit, #m/thm/topology 
i.e. every sequence has at most one limit point.
Moreover, if $X$ is [[First countability axiom|first-countable]],
then it is hausdorff iff all limits are unique.

> [!check]- Proof
> First assume $X$ is [[Hausdorff space|Hausdorff]].
> Let $(a_{n}) \to a$ in $X$,
> and some $b \neq a$.
> Then there exist open neighbourhood $A \in \mathcal{T}(a)$ and $B \in \mathcal{T}(b)$
> such that $A \cap B = \0$.
> Moreover there exists $N$, such that $a_{n} \in A$ for all $n > N$.
> Then $a_{n} \notin B$ for all such $n$
> and hence $(a_{n}) \not\to b$.
> Thus limits are unique for any hausdorff space,
> without invoking first-countability.
> 
> Now assume $X$ is [[First countability axiom|first-countable]] with unique limit,
> and let $a,b \in X$ such that $a \neq b$.
> Let $(A_{n})_{n \in \mathbb{N}}$ and $(B_{n})_{n \in \mathbb{N}}$ be [[Nested neighbourhood basis|nested open neighbourhood bases]] of $a$ and $b$ respectively.
> Assume $X$ is not hausdorff,
> i.e. $A_{n} \cap B_{n} \neq \0$ for all $n \in \mathbb{N}$.
> Then we can construct a sequence $(x_n)_{n=1}^\infty$ in $X$
> such that $x_{n} \in A_{n} \cap B_{n}$ for all $n \in \mathbb{N}$,
> in which case $(x_{n}) \to a$ and $(x_{n}) \to b$
> violating the uniqueness of limits.
> Therefore $X$ must be hausdorff.
> <span class="QED"/>

#
---
#state/tidy| #lang/en | #SemBr

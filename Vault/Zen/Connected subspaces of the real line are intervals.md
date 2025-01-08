---
tags:
  - public
---
[[Connectedness]]
# Connected subspaces of the real line are intervals

The only connected subspaces of $\mathbb{R}$ with the standard topology are intervals. #m/thm/topology 

> [!check]- Proof
> Let $A$ be a connected subspace of $\mathbb{R}$ that is not an interval.
> Then there exist $a,b \in A$ such that $a < x < b$ for some $x \notin A$.
> Then $A$ may be partitioned into two disjoint open sets as follows
> $$
> \begin{align*}
> A = (A \cap (-\infty , z)) \cup (A \cap (z, \infty))
> \end{align*}
> $$
> contradicting our requirement that $A$ be connected.
> 
> Conversely, let $I$ be an interval and $I = U \cup V$ for some nonempty disjoint open $U, V$.
> Without loss of generality assume there exists $x \in U, y \in V$ such that $x < y$.
> By the [[Complete metric space|completeness]] of $\mathbb{R}$, the supremum $s = \sup U \cap [0,y)$ exists,
> and $x < s \leq y$,
> so either $s \in U$ or $s \in V$,
> and from openness $(s - \delta, s + \delta)$ is either a subset of $U$ or $V$.
> Both situations are a contradiction.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

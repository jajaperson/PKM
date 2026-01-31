---
aliases:
  - equivalent norms
tags:
  - public
---
[[Normed vector space]]
# Equivalence of norms

Given a vector space $(V, \mathbb{K})$,
two norms $p, q : V \to \mathbb{R}$ are said to be **equivalent** iff there exist $b \geq a > 0$ such that 
$$
\begin{align*}
aq(v) \leq p(v) \leq bq(v)
\end{align*}
$$
for all $v \in V$. #m/def/linalg 
This defines an [[Equivalence relation]] on norms.

> [!tip] Proving equivalence on the unit sphere
> Since the above equation always holds for $v = 0$,
> we may divide by $q(v)$ to get
> $$
> \begin{align*}
> a \leq p(u) \leq b
> \end{align*}
> $$
> for all $u \in V$ with $q(u) = 1$.

## Properties

- [[All norms on a finite dimensional space are equivalent]]
- [[Norms are equivalent iff they induce the same topology]].

#
---
#state/tidy | #lang/en | #SemBr

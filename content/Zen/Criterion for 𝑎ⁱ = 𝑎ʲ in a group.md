---
aliases:
  - equality of powers in a group
tags:
  - public
---
[[Group]]
# Criterion for $a^i = a^j$ in a group
For a group element $a \in G$, $a^i = a^j$ iff either: #m/thm/group 

- $\abs a = \infty$ and $i=j$
- $\abs a \in \mathbb{N}$ and $n \mid (i-j)$

> [!check]- Proof
> If $a$ has infinite order there exists no nonzero $n$ such that $a^n = e$,
> and since $a^i = a^j$ implies $a^{i-j} = e$,
> it follows $i = j$.
> 
> If $\abs a = n$ then we again have the implication $a^{i-j} = e$.
> By the division algorithm $i-j = pq + r$, with $0 \leq r < n$.
> Then $e = a^{i-j} = a^{pn + r} = a^r = e$,
> and since $n$ is the lowest positive integer such that $a^n = e$,
> it follows that $r = 0$.
> Hence $n \mid (i-j)$.
> <span class="QED"/>

## Corollary

It immediately follows that $a^k = a$ implies $\abs a$ divides $k$.

#
---
#state/tidy | #lang/en | #SemBr

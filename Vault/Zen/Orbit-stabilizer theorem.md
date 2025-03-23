---
tags:
  - public
---
[[Group action]]
# Orbit-stabilizer theorem

Given an [[Group action|action]] of a finite group $G$ on a set $M$,
for a given point $m \in M$
the cardinality of the [[Group action orbit|orbit]] times the order of the [[Stabilizer group]] equals the order of $G$, i.e. #m/thm/group 
$$
\begin{align*}
\abs{Gm} \cdot \abs{G_{m}} = \abs{G}
\end{align*}
$$


> [!check]- Proof
> The group $G$ acts on the set $M$.
> Let $m \in M$.
> For any $g_{1},g_{2} \in G$ follows
> $$
> \begin{align*}
> &g_{1}m = g_{2}m \\
> \iff &m = g_{1}^{-1}g_{2}m \\
> \iff &g_{1}^{-1}g_{2} \in G_{m} \\
> \iff &g_{2} \in g_{1}G_{m}
> \end{align*}
> $$
> Therefore each [[coset]] of the [[Stabilizer group]] $G_{m}$ corresponds to a different point in the [[Group action orbit|orbit]] of $m$,
> whence $\abs{Gm} = [G_{m} : G]$,
> and by [[Lagrange's theorem]],
> $\abs{G_{m}} \cdot \abs{Gm} = \abs{G}$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

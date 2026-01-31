---
tags:
  - public
---
[[Group theory MOC]]
# Normalizer in a group

Let $G$ be a [[group]] and $S \sube G$ be a subset.
An element $g \in G$ **normalizes** $S$ iff it leaves $S$ invariant under [[Conjugation by an element|conjugation]], i.e.
$$
\begin{align*}
gSg^{-1} = S
\end{align*}
$$
The **normalizer** $\opn N_{G}(S)$ of $S$ in $G$ is the subgroup of all elements normalizing $S$, #m/def/group 
i.e.
$$
\begin{align*}
\opn N_{G}(S) = \{ S \in P : gSg^{-1} = S\}
\end{align*}
$$

> [!check]- Proof of subgroup
> This is just the [[Stabilizer group|setwise stabilizer]] of $S$ under the [[Conjugation by an element|conjugation action]]. <span class="QED"/>

## See also

- [[Normalizer in a Lie algebra]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Group theory MOC]]
# Group commutator

The **commutator** $[a,b]$ of two group members $a,b \in G$ is a way of describing how far two elements are from commuting with each other.
For any $a,b \in G$ the commutator is defined as #m/def/group 
$$
\begin{align*}
[a,b] = aba^{-1}b^{-1}
\end{align*}
$$
Thus $a$ and $b$ commute iff $[a,b] = e$.
The commutators of all elements forms a normal subgroup called the [[Commutator subgroup]].

## Properties

1. $[b,a] = [a,b]^{-1}$ ^P1
2. $[ab,c] = (^a[b,c])[a,c]$ ^P2

> [!check]- Proof of 1–2
> [[#^P1]] is obvious.
> Note the identity
> $$
> \begin{align*}
> [ab,c] = a b c b^{-1} a^{-1} c^{-1} 
> = a b c b^{-1} c^{-1}a^{-1} a c a^{-1} c^{-1} = (^a[b,c])[a,c]
> \end{align*}
> $$
> proving [[#^P2]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

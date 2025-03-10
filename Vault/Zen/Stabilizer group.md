---
tags:
  - public
---
[[Group action]]
# Stabilizer group

Given an action of a group $G$ on a set $M$, the **stabilizer**[^Standgruppe] $G_{m}$ of a point $m \in M$ is the set of all group elements that map $m$ to itself, i.e. #m/def/group 
$$
\begin{align*}
G_{m} = \{ g \in G : gm = m \}
\end{align*}
$$
The stabiliser is a subgroup. #m/thm/group 
We may also talk about the **pointwise stabilizer** $G_{(\Delta)}$ and the **setwise stabilizer** $G_{\Delta}$ of a subset $\Delta \sube M$

> [!check]- Proof of subgroup
> Clearly $e \in G_{m}$.
> Next, assume $a,b \in G_{m}$.
> Then $ab^{-1}m = ab^{-1} bm = am = m$,
> and hence $ab^{-1} \in G_{m}$.
> Therefore $G_{m}$ is a subgroup by [[Subgroup#One step subgroup test]].
> <span class="QED"/>

[^Standgruppe]: German _Standgruppe_

## Properties

- [[Orbit-stabilizer theorem]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - invariant subgroup
---
[[Subgroup]]
# Normal subgroup

A **normal subgroup**, also called an **invariant subgroup**, is a subgroup $H \sube G$ whose only [[Conjugate subgroups|conjugate subgroup]] is itself[^keppler], #m/def/group  i.e. for all $g \in G$ and $h \in H$
$$
\begin{align*}
ghg^{-1} \in H
\end{align*}
$$
This is often denoted as $H \trianglelefteq G$.

[^keppler]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations]], p. 13

Every group has two trivial normal subgroups, $\{ e \}$ and $G$.
A finite group with no non-trivial normal subgroup is called a [[Simple group]].

## Alternative definition

**Normal subgroups** are sometimes given the following equivalent definition using [[Coset|cosets]]:[^gallian]

> A subgroup $H$ of a group $G$ is called a **normal subgroup** of $G$ 
> iff. $aH = Ha$ for all $a \in G$,
> i.e. the left and right [[Coset]] in every element the same.

[^gallian]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], p. 174

> [!check]- Proof of equivalence of definitions
> Clearly
> $$
> \begin{align*}
> gHg^{-1} = H \quad \forall g \in G \iff gH = Hg \quad \forall g \in G
> \end{align*}
> $$
> Hence the two definitions are equivalent. <span class="QED"/>

## Properties

1. Normal subgroups uniquely specify all [[congruence relation|congruence relations]] on the group, see [[Correspondence between normal subgroups and congruence relations]].
2. As a consequence of the above property, a normal subgroup $N \trianglelefteq G$ may be used to form a [[Quotient group]] $G / N$
    Indeed this construction is only possible if a subgroup is normal.
3. [[The intersection of normal subgroups is a normal subgroup]].

#
---
#state/tidy | #lang/en | #SemBr 
---
tags:
  - public
---
[[Equivalence relation]]
# Congruence relation
A **congruence relation** is to an equivalence relation what a [[Morphism|homomorphism]] is to a function:
it is an equivalence relation which somehow respects the algebraic structure of the set being partitioned;
i.e. it is [[structure-preserving]].
Indeed, congruence relations correspond exactly to equivalence relations induced by a [[Morphism|homomorphism]].

Due to the [[structure-preserving]] property, a congruence relation defines a new algebraic structure on the [[Equivalence relation#Equivalence class|equivalence classes]] under the relation,
known as the [[Algebraic quotient]].

## Examples
### Group congruence relation
Given a [[group]] $(G, \cdot)$ then an [[Equivalence relation]] $\equiv$ is a congruence relation iff.
$$
\begin{align*}
g_{1} \equiv g_{2} \land h_{1} \equiv h_{2} \implies g_{1} \cdot h_{1} \equiv g_{2} \cdot h_{2}
\end{align*}
$$
#### Properties

- Due to the [[correspondence between normal subgroups and congruence relations]], congruence relations are usually represented by a normal subgroup, especially in constructions like the [[Quotient group]].

### Category congruence relation

Given a category $\cat C$ then a a family of equivalence relations on every hom-set $\equiv$  is an equivalence relation iff. $f_{1} \equiv f_{2} : X\to Y$ and $g_{1} \equiv g_{2} : Y\to Z$ implies $g_{1}f_{1} \equiv g_{2}f_{2} : X \to Z$.

See [[Quotient category]]

#
---
#state/tidy | #lang/en | #SemBr 
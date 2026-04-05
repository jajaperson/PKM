---
tags:
  - public
---
[[Homological algebra MOC]]
# Exact sequence

An **exact sequence**[^exakt] $(M_{•}, f_{•})$ is a sequence $(M_{k})_{k \in \mathbb{Z}}$ of group-like objects[^group] and a sequence of morphisms $(f_{k} : M_{k} \to M_{k-1})$ such that $f_{k+1}(M_{k+1}) = \ker f_{k}$ for all $k$.[^loose] #m/def/homology 
Thus for modules it is a [[chain complex]] with only trivial chain homologies, and $H_{k}(M)$ is a measure of the failure of a chain complex to be exact.

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], ¶3.1.6ff, p. 129
[^group]: The objects have some kind of group structure, hence groups, modules, and thus any objects of an [[Abelian category]] will do.
[^exakt]: German _exakte Sequenz_

## Further terminology

- An exact sequence with no more than three non-trivial objects is a [[Short exact sequence]].

## Properties

- Any $0 \to A \xrightarrow f B$ guarantees injective $f$, since $\ker f = 0$.
- Any $A \xrightarrow f B \to 0$ guarantees surjective $f$, since $f(A) = B$.
- Any partial exact sequence may be extended to $\mathbb{Z}$ by duplicating the ends and adding trivial tails.
- [[Five lemma]]

#
---
#state/tidy | #lang/en | #SemBr

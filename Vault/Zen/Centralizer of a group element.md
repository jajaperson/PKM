---
aliases:
  - centralizer group
tags:
  - public
---
[[Group theory MOC]]
# Centraliser of a group element
The **centralizer** $C(a)$ of an element $a \in G$ is a [[Subgroup]] of $G$ containing all elements that commute with $a$,
i.e. $C(a) = \{ b \in G \mid ab = ba \}$.[^gallian] #m/def/group #m/thm/group

[^gallian]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], p. 68

> [!check]- Proof of subgroup
> Let $a \in G$.
> Clearly $e \in C(a)$,
> Given any $b,c \in C(a)$,
> clearly $(bc)a = b(ca) = b(ac) = (ba)c = (ab)c = a(bc)$,
> hence $C(a)$ is closed under the binary operation.
> Similarly, $ab = ba$ may be both pre- and postmultiplied by $b^{-1}$ to obtain $b^{-1}a = ab^{-1}$,
> so $C(a)$ is closed under the inverse operation.
> Hence $C(a)$ is a subgroup of $G$ by [[Subgroup#Two step subgroup test]].
> <span class="QED"/>

A related notions include the [[Centralizer of a subgroup]], which extends notion to elements which commute with a set of elements,
and the [[Centre of a group]],
which includes only those elements that commute with all group elements.

## Additional properties

- Clearly the centraliser itself need not be abelian,
  since the centraliser of any $z \in Z(G)$ will be the entire group.
  For example, in the non-abelian group $D_{4}$, the centraliser $C(R_{180^º}) = D_{4}$.

#
---
#state/tidy | #lang/en | #SemBr 
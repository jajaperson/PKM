---
tags:
  - public
---
[[Group theory MOC]]
# Centre of a group
The **centre** $\mathrm{Z}(G)$ of a group $G$ is a [[Normal subgroup]] of all elements of $G$ that commute with every other element, i.e. $\mathrm{Z}(G) = \{ a \in G \mid ax = xa \quad \forall x\in G \}$.
Note that at the very least $e \in \mathrm{Z}(G)$.[^gallian] #m/def/group #m/thm/group

[^gallian]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], pp. 67

> [!check]- Proof of normal subgroup
> As shown above, $e \in Z(G)$.
> Additionally, for any $a,b \in Z(G)$ it is clear that $ab \in Z(G)$
> since $abx = bxa = xab$, so $Z(G)$ is closed under the binary operation.
> Since $ax = xa$ for any $x \in G$ 
> we can both pre- and postmultiply both sides to obtain $xa^{-1} = a^{-1}x$ for any $x$,
> therefore $a^{-1} \in Z(G)$, 
> so $Z(G)$ is closed under the inverse.
> Hence $Z(G)$ is a subgroup of $G$
> by [[Subgroup#Two step subgroup test]].
> Now let $g \in G$ and $h \in Z(G)$.
> Clearly $ghg^{-1} = gg^{-1}h=h \in Z(G)$.
> Hence $Z(G)$ is a [[Normal subgroup]].
> <span class="QED"/>

A related notion is the [[Centralizer of a group element]].
The centre is the intersection of all centralisers.

## Properties

- The centre is necessarily abelian. 

#
---
#state/tidy | #lang/en | #SemBr 

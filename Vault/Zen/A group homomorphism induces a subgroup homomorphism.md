---
tags:
  - public
---
[[Group homomorphism]]
# A group homomorphism induces a subgroup homomorphism

Given a [[Group homomorphism]] $\phi : G \to G'$ and a subgroup $H \sube G$,
the map $\phi_{H} : H \to G' : h \mapsto \phi(h)$ is also a homomorphism. #m/thm/group 
Quite trivial.

> [!check]- Proof
> $\phi$ is a group homomorphism
> iff $\phi(ab) = \phi(a)\phi(b)$ for all $a,b \in G$.
> Clearly if $a,b \in H \sube G$, the property still holds,
> hence $\phi'$ is a homomorphism.
> <span class="QED"/>

## Corollary

It follows that a group [[Morphism|automorphism]] establishes isomorphisms between subgroups,
since the [[the image of a group homomorphism is a subgroup]],
which for an automorphism will be a subgroup of equal size.

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Invariant subspace]]
# The orthogonal complement of an invariant subspace under a unitary operator is invariant

Let $(V, \mathbb{K}, \braket{ \cdot | \cdot })$ be an [[Inner product space]] with [[invariant subspace]] $W \sube V$ under unitary endomorphism $U : V \to V$.
Then the [[Orthogonal complement]] $W^\perp$ is also invariant under $U$. #m/thm/linalg 

> [!check]- Proof
> Let $W \sube V$ be an [[invariant subspace]] under $U : V \to V$.
> Then $W$ is also invariant under $U^{-1} = U^{\dagger}$, and thus for any $v \in W^\perp$ and $w \in W$
> $$
> \begin{align*}
> \braket{ v | Uw } =\braket{ U^{-1}v | w } = 0
> \end{align*}
> $$
> as required.
> <span class="QED"/>

This extends to a [[Unitary representation]] of a finite group easily.
Since [[Every representation of a compact group is equivalent to a unitary representation]], this doesn't hold iff a representation is not unitary and non-finite.

#
---
#state/tidy | #lang/en | #SemBr

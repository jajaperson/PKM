---
tags:
  - public
---
[[Linear algebra MOC]]
# Invariant subspace

An **invariant subspace** of a [[Linear endomorphism]] $T : V \to V$ is a [[vector subspace]] $W \sube V$ that is preserved by $T$, i.e. $Tw \in W$ for all $w \in W$. #m/def/linalg 
It follows every [[Eigenvectors, eigenvalues, and eigenspaces|eigenspace]] is also an invariant subspace.
Every linear endomorphism has two **trivial invariant subspaces**,
namely the [[null space]] $\{ \vab 0 \}$ and the full space $V$.
Any other invariant subspace is nontrivial.

[[Jordan canonical form]] essentially decomposes a matrix into operators on invariant subspaces.
In general, if $V = W \oplus W'$ we can reduce $T$ to $U \oplus U'$, where $U : W \to W$ and $U' : W' \to W'$.

## Representations

For collections of linear endomorphisms, such as a [[Group representation]],
an invariant subspace is preserved by all members of the collection.
Let $\Gamma : G \to \mathrm{GL}(V)$ be a representation and $W \sube V$ be a subspace.
Then $W$ is $\Gamma$-invariant iff $\Gamma(g)w \in W$ for all $g \in G$ and $w \in W$. #m/def/rep

A representation with no non-trivial invariant subspaces is called [[Reducibility of representations|irreducible]].

## Properties

- [[The orthogonal complement of an invariant subspace under a unitary operator is invariant]]

#
---
#state/tidy | #lang/en | #SemBr

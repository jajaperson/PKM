---
tags:
  - public
---
[[Linear algebra MOC]]
# Complement subspace

Let $V$ be a [[vector space]] over $\mathbb{K}$ and $U \leq V$ be a subspace.
A **complement** $U^c \leq V$ is a subspace such that the [[Direct sum of vector spaces#internal direct sum|internal direct sum]] $U \oplus U^c = V$.

## Properties

1. Every $U \leq V$ has a (in general not unique) complement $U^c \leq V$. ^Existence

> [!check]- Proof of 1.
> The existence of the compliment follows from [[Every vector space has a basis]]:
> Let $\mathcal{A}$ be a basis of $U$.
> Then there exists a basis $\mathcal{\Spanf $V$ such that $\mathcal{A} \sube \mathcal{B}$.
> Then $U^c = \Span(\mathcal{B}\setminus \mathcal{A})$ is a complement of $U$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 
---
tags:
  - public
---
[[1-dimensional irrep]]
# Tensor product with a 1-dimensional representation

Let $\chi : G \to \mathbb{K}$ be an arbitrary [[1-dimensional irrep|1-dimensional representation]] and $\Gamma^\mu : G \to \mathrm{GL}(V)$ be an [[irrep]] over $\mathbb{K}$.
Then $\chi \otimes \Gamma^\mu : g \mapsto \chi(g) \cdot \Gamma^\mu(g)$ is an irrep. #m/thm/rep 

> [!check]- Proof
> For any $v \in U \sube V$ where $U$ is a subspace, $\chi(g)v \in U$,
> Hence the invariant subspaces of $\Gamma$ are the same as those of $\chi \cdot \Gamma$,
> and thus if $\Gamma$ is irreducible so is $\chi \cdot\Gamma$.
> <span class="QED"/>

As a result, 1-dimensional irreps form a group.

#
---
#state/tidy | #lang/en | #SemBr

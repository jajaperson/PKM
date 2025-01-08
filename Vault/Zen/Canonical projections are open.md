---
tags:
  - public
---
[[Product topology]]
# Canonical projections are open

Let $\pi_{\alpha} : X \twoheadrightarrow X_{\alpha}$ be the canonical projections of the [[product topology]].
Then each $\pi _\alpha$ is an [[Open and closed maps|open map]]. #m/thm/topology 

> [!check]- Proof
> Denote with $\mathcal{T}_{\alpha}$ the topology of $X_{\alpha}$.
> Consider the [[topological subbasis|subbasis]] $\mathcal{A}_{X} = \{ \pi_{\alpha}^{-1}U : U \in \mathcal{T}_{\alpha} : \alpha \in A \}$ of $X$, 
> and let $U \in \mathcal{A}_{X}$ be a subbasic open set.
> Then $U = \pi^{-1}_{\alpha}(V)$ for some $V \in \mathcal{T}_{\alpha}$,
> and since $\pi_{\alpha}$ is surjective, $\pi_{\alpha}(\pi_{\alpha}^{-1}(V)) = V = \pi_{\alpha}(U)$.
> Hence $\pi_{\alpha}(U)$ is open.
> Thus, by [[Proving open map with a subbasis]], each $\pi_{\alpha}$ is an [[Open and closed maps|open map]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

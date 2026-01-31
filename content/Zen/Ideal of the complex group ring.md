---
aliases:
  - minimal left ideal
tags:
  - public
---
[[Group ring]]
# Ideal of the complex group ring

A **[[Ideal|left ideal]]** $L$ of the group ring $\mathbb{C}[G]$ is a subspace of the group ring that is invariant under left-convolution, i.e. $b * a \in L$ for all $a \in L$ and $b \in \mathbb{C}[G]$.
In other words, $L$ is an [[invariant subspace]] of the [[Regular group representation]] $\Lambda$ and $\Lambda_{\mathbb{C}[G]}$[^coï].
If $L$ is irreducible it is called a **minimal left-ideal**.

Since [[The regular representation contains all irreducible representations]],
each irrep $\Gamma^\mu$ of $G$ is carried by $d_{\mu}$ left-ideäls $L^{\mu\alpha}$ with $1 \leq \alpha \leq d_{\mu}$,
which collectively form a (non-minimal) left-ideäl $L^\mu$ transforming under $\Gamma^\mu$.

[^coï]: since [[Invariant subspaces of ∗-representations and unitary representations coïncide]]

## Projection operators

If $P^{\mu\alpha}$ is a [[Generalized projection operator of a representation|projection operator]] onto $L^{\mu\alpha}$, i.e.

1. $P^{\mu\alpha} \mathbb{C}[G]= L^{\mu\alpha}$
2. $P^{\mu\alpha} \restriction L^{\mu\alpha} = \mathbf{I}$
3. $P^{\nu\beta}P^{\mu\alpha} = \delta_{\mu\nu}\delta_{\alpha\beta}P^{\mu\alpha}$

it follows

4. $\Lambda_{\mathbb{C}[G]}(q)  P^{\mu\alpha} = P^{\mu\alpha}\Lambda_{\mathbb{C}[G]}(q)$ for all $q \in \mathbb{C}[G]$

> [!check]- Proof
> Let $r \in \mathbb{C}[G]$, with its unique decomposition into minimal left-ideäls $r= \sum_{\mu;\alpha} r^{\mu\alpha}$.
> Then
> $$
> q * P^{\mu\alpha} r = q * P^{\mu\alpha} \sum_{\mu;\alpha} r^{\mu\alpha} = q * r^{\mu\alpha}
> $$
> and
> $$
> P^{\mu\alpha} (q * r) = P^{\mu\alpha} \sum_{\mu;\alpha}  \underbrace{ q *r^{\mu\alpha} }_{ \in L^{\mu\alpha} } = q * r^{\mu\alpha}
> $$
> so $\Lambda_{\mathbb{C}[G]}(q)  P^{\mu\alpha} = P^{\mu\alpha}\Lambda_{\mathbb{C}[G]}(q)$ for all $q \in \mathbb{C}[G]$.
> <span class="QED"/>

The projection operator $P^\mu = \sum_{\alpha = 1}^{d_{\mu}} P^{\mu\alpha}$ onto $L^\mu$ is given by right multiplication by an [[Idempotent of the complex group ring]] $e_{\mu}$, i.e. $P^{\mu} = \Rho_{\mathbb{C}[G]}(e_{\mu})$ where $\Rho$ is the right [[Regular group representation]].

## Properties

- [[Equivalence of irreps on left ideals criterion]]
- [[Trivial irrep carrying ideal of the group ring]]

#
---
#state/tidy | #lang/en | #SemBr

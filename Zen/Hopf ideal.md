---
tags:
  - public
---
[[Hopf theory MOC]]
# Hopf ideal

Let $\mathcal{H}$ be a [[Hopf algebra]] over [[commutative ring|$\mathcal K$]].
A **Hopf ideal** $I \leq \mathcal{H}$ is a [[biïdeal]] which is additionally stable under the antipous, #m/def/ralg/hopf i.e. $\sigma(I) \sube I$.

- Given a Hopf ideal $I$ one may construct a [[Quotient Hopf algebra]] $\mathcal{H} / I$.

## Theorem

Let $\mathcal{I} \leq \mathcal{H}$ be an ideal such that
$$
\begin{align*}
\Delta \mathcal{I} \sube \mathcal{I} \otimes \mathcal{H} + \mathcal{H} \otimes \mathcal{I}
\end{align*}
$$
and $\mathcal{I} \cap \mathcal{K} = 0$.
Then any of the following ensure $\mathcal{I}$ is a Hopf ideal:[^1978]

1. $\mathcal{H}$ is [[Finitely generated module|finitely generated]] as a $\mathcal{K}$-module.
2. $\mathcal{K}$ is [[Noetherian ring|Noetherian]], and $\mathcal{H} / \mathcal{I}$ is [[Module-finite R-monoid]].
3. $\mathcal{K}$ is [[Noetherian ring|Noetherian]], and $\mathcal{H} / \mathcal{I}$ is a [[Commutative R-monoid of finite type]].

If instead $\mathcal{H}$ is a Hopf algebra over [[field|$\mathbb{K}$]], then any of the following are sufficient.

4. $\mathcal{H} / \mathcal{I}$ is commutative.
5. $\mathcal{H}$ is [[Pointed Hopf algebra|pointed]].
6. $\mathcal{H}$ is cocommutative.

> [!missing]- Proof
> #missing/proof 
> See op. cit.

[^1978]: 1978\. [[Sources/@nicholsQuotientsHopfAlgebras1978|Quotients of Hopf algebras]]

#
---
#state/develop | #lang/en | #SemBr

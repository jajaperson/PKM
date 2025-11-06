---
tags:
  - public
---
[[Differential geometry MOC]]
# Killing field

Let $(M,g)$ be a [[Semi-Riemannian manifold|semi-Riemannian $C^\alpha$-manifold]].
A **Killing field** $\xi^a \in \mathfrak{iso}(M,g)$ is a [[vector field]] which generates a [[Flow on a manifold|flow]] which is an [[Isometry of a semi-Riemannian manifold|isometry]]. #m/def/geo/diff 
Equivalently, the [[Lie derivative]] of the [[Semi-Riemannian manifold|metric tensor]] $g_{ab}$ along $\xi^a$ vanishes
$$
\begin{align*}
\mathcal{L}_{\xi} g_{ab} = 0,
\end{align*}
$$
or the symmetrization of the [[covariant derivative]] by the [[Levi-Civita connexion]] vanishes
$$
\begin{align*}
\nabla_{(a} \xi_{b)} = 0.
\end{align*}
$$

> [!missing]- Proof of equivalence
> #missing/proof

The space $\mathfrak{iso}(M,g)$ of all Killing fields form a [[Lie subalgebra]] of $\mathfrak{X}(M)$,
with the corresponding Lie group being the [[Isometry of a semi-Riemannian manifold|isometries]] $\opn{Iso}(M,g)$.
#
---
#state/develop | #lang/en | #SemBr

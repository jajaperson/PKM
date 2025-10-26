---
tags:
  - public
---
[[Differential geometry MOC]]
# Affine connexion

An **affine connexion** is additional[^1] structure on a $C^\alpha$-[[Differentiable manifold|manifold]] $(M, \mathscr{A})$ which _connects_ nearby [[tangent space|tangent spaces]] so as to enable [[parallel transport]] as in an [[affine space]]. #m/def/geo/diff 
With an affine connexion one can define

- [[Parallel transport]]
- [[Covariant derivative]]
- [[Torsion tensor]]
- [[Riemannian curvature]]

## As a differential operator

An **affine connexion** $\nabla$ is an $\mathbb{R}$-linear map
$$
\begin{align*}
\mathfrak{X}(M) &\to \mathcal{T}^1_{1}(M) \\
X^a &\mapsto \nabla_{b}X^a
\end{align*}
$$
from [[Vector field|vector fields]] to $(1,1)$-[[Tensor field|tensor fields]] which satisfies a [[Derivation on an algebra|Leibniz rule]]
$$
\begin{align*}
\nabla_{b}(f \, X^a) = (\mathrm{d}f)_{b} \, X^a + f \, \nabla_{b}X^a
\end{align*}
$$
where $(\mathrm{d}f)_{b}$ is the [[exterior derivative]].
We write
$$
\begin{align*}
\nabla_{Y} X^a := Y^b \, \nabla_{b}X^a \in \mathfrak{X}(M)
\end{align*}
$$
for $Y^a \in \mathfrak{X}(M)$.
This can then be extended to all tensor fields as the [[Covariant derivative]].
#
---
#state/develop | #lang/en | #SemBr

[^1]: In some cases other structure on the manifold provides a canonical choice of connexion, e.g. a [[Semi-Riemannian manifold|semi-Riemannian metric]] gives the [[Levi-Civita connexion]].

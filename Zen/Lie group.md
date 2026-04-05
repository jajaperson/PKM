---
tags:
  - public
---
[[Lie theory MOC]]
# Lie group

A **Lie group** $G$ is a [[topological group]] $G$ on an [[differentiable manifold|analytic manifold]] $G$ such that the group operation $(\cdot) : G \times G \to G$ and the inverse map $(-)^{-1} : G \to G$ are [[Differentiability|analytic]]. #m/def/lie 
Equivalently, the map $gh \mapsto gh^{-1}$ is analytic.

> [!info]- Charts and atlases of a Lie group
> Due to properties of a Lie group as a [[Homogenous space]], it is possible to build an [[atlas]] for the entire group from a single [[coördinate chart]] $(U, \varphi)$.
> For if $(U, \varphi)$ is a chart with $\varphi(e) = \vab 0$, then $(gU, \varphi_{g})$ may be defined as
> $$
> \begin{align*}
> \varphi_{g} : gU &\to \varphi_{g}(gU) \\
> h &\mapsto \varphi_{g}(g^{-1}h)
> \end{align*}
> $$
> so that $\varphi_{g}(g) = \vab 0$.

Every Lie group has a corresponding [[Lie algebra]] given by the [[Tangent space]] at identity. #to/clarify


#
---
#state/develop | #lang/en | #SemBr 
---
tags:
  - public
aliases:
  - flat manifold
---
[[Differential geometry MOC]]
# Riemannian curvature

Let $M$ be a $C^\alpha$-[[Differentiable manifold|manifold]] equipped with an [[affine connexion]] $\nabla$.
The **Riemannian curvature** $R^c{}_{dab} \in \mathcal{T}^1_{3}(M)$ is a [[tensor field]] defined so that
$$
\begin{align*}
R^c{}_{dab} \, X^a \, Y^b\, Z^d &= [\nabla_{X} , \nabla_{Y}] Z^c - \nabla_{[X,Y]} Z^c
\end{align*}
$$
and thus
$$
\begin{align*}
R^c{}_{dab}Z^d = [\nabla_{a},\nabla_{b}] Z^c  + T^d{}_{ab} \nabla_{d} Z^c
\end{align*}
$$
where $T^c{}_{ab}$ is the [[torsion tensor]].
A manifold with null Riemannian curvature is said to be **flat**.

> [!check]- Proof of equality and tensoriality
> Let $X^a,Y^a,Z^a \in \mathfrak{X}(M)$ be vector fields.
> Then
> $$
> \begin{align*}
> \nabla_{X}\nabla_{Y}Z^c 
> &= X^a \nabla_{a} Y^b \nabla_{b} Z^c 
> = X^a Y^b\nabla_{a}\nabla_{b}Z^c + (X^a\nabla_{a}Y^b)\nabla_{b}Z^c \\
> &= X^a Y^b \nabla_{a} \nabla_{b} Z^c + \nabla_{\nabla_{X}Y}Z^c
> \end{align*}
> $$
> and thus using the first equation
> $$
> \begin{align*}
> R^c{}_{dab} X^a Y^b Z^d 
> &= \nabla_{X}\nabla_{Y}Z^c - \nabla_{Y}\nabla_{X}Z^c - \nabla_{[X,Y]}Z^c \\
> &= X^a Y^b \nabla_{a} \nabla_{b} Z^c + \nabla_{\nabla_{X}Y}Z^c - X^a Y^b \nabla_{b}\nabla_{a}Z^c - \nabla_{\nabla_{Y}X} Z^c - \nabla_{[X,Y]}Z^c  \\
> &= X^a Y^b \nabla_{a}\nabla_{b} Z^c - X^a Y^b \nabla_{b}\nabla_{a}Z^d + X^a Y^b T^d{}_{ab} \nabla_{d} Z^c
> \end{align*}
> $$
> for any $X^a,Y^a \in \mathfrak{X}(M)$, so indeed
> $$
> \begin{align*}
> R^c{}_{dab}Z^d = \nabla_{a}\nabla_{b} Z^c - \nabla_{b}\nabla_{a}Z^d + T^d{}_{ab} \nabla_{d} Z^c
> \end{align*}
> $$
> as claimed.
> 
> To show tensoriality it suffices to show that the map $Z^d \mapsto R^c{}_{dab}Z^d$ is $C^\alpha(M)$-linear.
> To this end let $f \in C^\alpha(M)$ be a scalar field.
> Then
> $$
> \begin{align*}
> \nabla_{a}\nabla_{b}fZ^c 
> &= \nabla_{a}(f \nabla_{b}Z^c + Z^c \,\mathrm{d}f_{b}) 
> = f \nabla_{a}\nabla_{b}Z^c + \mathrm{d}f_{a} \nabla_{b}Z^c + \mathrm{d}f_{b}\nabla_{a}Z^c + Z^c \nabla_{a} \nabla_{b}f
> \end{align*}
> $$
> and
> $$
> \begin{align*}
> T^d{}_{ab}\nabla_{d}fZ^c
> &= T^d{}_{ab}(f\nabla_{d} Z^c +  Z^c \, \mathrm{d}f_{d}) = f T^d{}_{ab} \nabla_{d}Z^c + T^d{}_{ab}Z^c \mathrm{d}f_{d}.
> \end{align*}
> $$
> Thus 
> $$
> \begin{align*}
> R^c{}_{dab}(fZ)^d 
> &= f R^c{}_{dab}Z^d + Z^c [\nabla_{a}, \nabla_{b}] f+ Z^c T^d{}_{ab} \nabla_{d}f
> \end{align*}
> $$
> where the final terms cancel since [[Torsion tensor#^eq2]]. <span class="QED"/>

> [!info]- Conflicting conventions
> The convention used here is that used by [[Evgeny Buchbinder]] and (for the most part) Wikipedia.
> Wald's [[@waldGeneralRelativity2009|General relativity]] defines the torsion-free case acting on a [[1-form]] $\omega_{a} \in \Omega^1(M)$ so that
> $$
> \begin{align*}
> \tilde{R}_{abc}{}^d \omega_{d} = [\nabla_{a},\nabla_{b}]\omega_{c}\
> \end{align*}
> $$
> meaning the action on a [[vector field]] $X^a \in \mathfrak{X}(M)$ is
> $$
> \begin{align*}
> \tilde{R}_{abd}{}^c X^d = - [\nabla_{a},\nabla_{b}]X^c
> \end{align*}
> $$
> meaning $\tilde{R}_{abd}{}^c = R^c{}_{dba}$.

Given [[Coördinate chart|local coördinates]] $x : U \to \mathbb{R}^m$, the components of $R^\gamma{}_{\delta\alpha\beta}$ can be computed explicitly in terms of the [[Connexion disagreement tensor|connexion coëfficients]] $\Gamma^\gamma{}_{\alpha\beta}$ as[^1]
$$
\begin{align*}
R^\gamma{}_{\delta\alpha\beta} = \partial_{\alpha} \Gamma^\gamma{}_{\beta\delta} - \partial_{\beta}\Gamma^\gamma{}_{\alpha\delta} + \Gamma^\sigma{}_{\beta\delta} \Gamma^\alpha{}_{\alpha\sigma} - \Gamma^\sigma{}_{\alpha\delta} \Gamma^\alpha{}_{\beta\sigma}.
\end{align*}
$$


> [!check]- Derivation
> We have
> $$
> \begin{align*}
> R^c{}_{dab} \, (\partial_{\alpha})^a \, (\partial_{\beta})^b \, (\partial_{\delta})^d 
> &= [\nabla_{\alpha}, \nabla_{\beta}] (\partial_{\delta})^c - \cancel{ \nabla_{[\partial_{a}, \partial_{\beta}]}(\partial_{\delta})^c } \\
> &= \nabla_{\alpha} \Gamma^\gamma{}_{\beta\delta} (\partial_{\gamma})^c - \nabla_{\beta}\Gamma^\gamma{}_{\alpha\delta} (\partial_{\gamma})^c \\
> &= \partial_{\alpha} \Gamma^\gamma{}_{\beta\delta} - \partial_{\beta}\Gamma^\gamma{}_{\alpha\delta} + \Gamma^\sigma{}_{\beta\delta} \Gamma^\alpha{}_{\alpha\sigma} - \Gamma^\sigma{}_{\alpha\delta} \Gamma^\alpha{}_{\beta\sigma}.
> \end{align*}
> $$
> as required. <span class="QED"/>

## Relation to parallel transport

The **curvature** of an (intrinsic) space can be thought of as the failure a vector to return to its initial value after [[parallel transport]] along a loop,
explaining why the structure of an affine connexion is a prerequisite.

#to/complete

## Properties

1. $R^c{}_{dab} = R^c{}_{d[ab]}$, i.e. $R^c{}_{dab} = - R^c{}_{dba}$.

### For a torsion free connexion
Assume $\nabla$ is torsion-free.

1. **Bianchi Identity I.** $\tfrac 1 2 R^{d}{}_{[cab]} = R^d{}_{cab} + R^d{}_{abc} + R^d{}_{bca} = 0$.


> [!missing]- Proof
> #missing/proof

See also the [[Levi-Civita connexion#Properties|properties of the Levi-Civita connexion]].

## See also

- The Riemannian curvature can be used to define two “weaker” notions of curvartures,
  the [[Ricci curvature]] and [[Scalar curvature]].

#
---
#state/develop | #lang/en | #SemBr

[^1]: Note that this expression requires a [[Holonomic frame]].

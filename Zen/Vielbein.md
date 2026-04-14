---
tags:
  - public
---
[[Differential geometry MOC]]
# Vielbein

A **vielbein**[^1] is a (local) [[orthonormal basis]] for a [[Semi-Riemannian manifold]] $M$. #m/def/geo/diff 
This amounts to being a [[Manifold frame|local frame]] $(e_{\mu})^a$ satisfying
$$
\begin{align*}
(e_{\mu})^a (e_{\nu})_{a} = \eta_{\mu\nu}
\end{align*}
$$
for an appropriate diagonal “Minkowski” metric $\eta$.[^2]
It immediately follows
$$
\begin{align*}
(e_{\mu})^a (e^\nu)_{b} = \eta^{\mu\nu} (e_{\mu})^a(e_{\nu})_{b} = \delta^a_{b}.
\end{align*}
$$
Note that such a local frame is only unique up to a local [[Lorentz group|Lorentz transformation]] or analogous group.

> [!warning]+ Index notation
> This Zettel mixes Latin indices for [[abstract index notation]] and Greek indices for concrete indices with [[Einstein summation convention]],
> sometimes within the same expression.
> Note that since the metric in this frame is $\eta_{\mu\nu}$, this is the appropriate way to [[Raising and lowering of indices|raise and lower]] concrete indices.

## Curvature



Suppose $\nabla$ is the [[Levi-Civita connexion]].
The **connexion 1-forms** are defined by
$$
\begin{align*}
\omega^\mu{}_{\nu a} = (e^{\mu})_b \nabla_{a} (e_{\nu})^{b} \in \Omega^1(M).
\end{align*}
$$
We let $\boldsymbol{\omega}^\mu{}_{\nu } = \omega^\mu{}_{\nu a}$ and $\boldsymbol{e}^{\mu} = (e^{\mu}){}_{a}$.
The compatibility with the metric becomes
$$
\begin{align*}
\boldsymbol{\omega}_{\mu\nu} = -\boldsymbol{\omega}_{\nu\mu}.
\end{align*}
$$
The torsion-free condition becomes
$$
\begin{align*}
\mathrm{d}\boldsymbol{e}^\mu + \boldsymbol{\omega}^\mu{}_{\nu} \wedge \boldsymbol{e}^\nu = 0
\end{align*}
$$
[[Riemannian curvature#^B1]] becomes
$$
\begin{align*}
\boldsymbol{R}^\mu{}_{\nu} \wedge \boldsymbol{e}^\nu = 0 
\end{align*}
$$
and [[Levi-Civita connexion#^B2]] becomes
$$
\begin{align*}
\mathrm{d} \boldsymbol{R}^\mu{}_{\nu} + \boldsymbol{\omega}^\mu{}_{\sigma} \wedge \boldsymbol{R}^\sigma{}_{\nu} - \boldsymbol{R}^\mu{}_{\sigma} \wedge \boldsymbol{\omega}^\sigma{}_{\nu}.
\end{align*}
$$

Letting $\boldsymbol{R}^\mu{}_{\nu} = R^\mu{}_{\nu ab} \in \Omega^2(M)$ be the 2-form part of the [[Riemannian curvature]], we have
$$
\begin{align*}
\boldsymbol{R}^\mu{}_{\nu} = \mathrm{d}\boldsymbol{\omega}^\mu{}_{\nu} + \boldsymbol{\omega}^\mu{}_{\sigma} \wedge \boldsymbol{\omega}^\sigma{}_{\nu}.
\end{align*}
$$


> [!missing]- Proof
> #missing/proof

> [!info]- Generality
> This can be generalized to other connexions.



#
---
#state/develop | #lang/en | #SemBr

[^1]: Physicists often call this a **non-coördinate basis**, even though not being a coördinate basis is insufficient to guarantee this property.

[^2]: If $M$ is a [[Riemannian manifold]] we take the [[Kronecker delta]]. Otherwise $\eta$ is chosen so that its [[Signature of a semi-Riemannian manifold|signature]] matches $g$.

---
tags:
  - public
aliases:
  - Lorentz transformation
---
[[Special relativity MOC]]
# Lorentz group

The **Lorentz group** $L=\mathrm{O}(3,1)$ is the [[group]] of all [[Linear map|linear transformations]] on [[Minkowski spacetime]] that preserve the [[Minkowski metric]], #m/def/group/lorentz
i.e.
$$
\begin{align*}
\mathrm{O}(3,1) &= \{ \Lambda \in \mathrm{GL}_{4}(\mathbb{R}) : \eta(\Lambda x,\Lambda y) = \eta(x,y) \quad \forall x,y \in \mathbb{R}^4 \} \\ 
&= \{ \Lambda \in \mathrm{GL}_{\mathbb{4}}(\mathbb{R}) : \tp \Lambda \eta \Lambda = \eta \} \\
&= \{ (\Lambda^\mu{}_{\nu}) \in \mathrm{GL}_{4}(\mathbb{R}) : \Lambda^\mu{}_{\kappa}\eta_{\mu \nu}\Lambda^\nu{}_{{\lambda}} = \eta_{\kappa\lambda}  \}
\end{align*}
$$
where $\eta$ is the Minkowski metric tensor.[^2018]
The [[Semidirect product]] acting on the translation group $\mathbb{R}^4$ forms the [[Poincaré group]].

[^2018]: 2018\. [[Sources/@oblakLorentzGroupCelestial2018|From the Lorentz Group to the Celestial Sphere]], §1.2.3, p. 8

> [!check]- Proof of group
> That $\mathrm{O}(3,1)$ is a group is obvious, since it consists of invertible matrices which preserve a certain property
> Let $\Lambda, \Lambda' \in \mathrm{O}(3,1)$.
> Then clearly
> $$
> \begin{align*}
> \eta(\Lambda'\Lambda^{-1} x,\Lambda'\Lambda^{-1} ) 
> = \eta(\Lambda^{-1}x, \Lambda^{-1}y)
> =\eta(\Lambda\Lambda^{-1}x, \Lambda\Lambda^{-1}y)
> = \eta(x,y)
> \end{align*}
> $$
> for all $x,y \in \mathbb{R}^4$.
> Hence by [[Subgroup#One step subgroup test]] $\mathrm{O}(3,1)$ is a group.
> <span class="QED"/>

This forms a 6-dimensional [[Lie group]].

## Subgroups

The most important subgroups are

- The [[Proper Lorentz group]] is the group of Lorentz transformations of determinant 1,
  i.e. preserving the orientation of space.
- The [[Orthochronous Lorentz group]] is the group of Lorentz transformations $(\Lambda^\mu{}_{\nu})$ with $\Lambda^0{}_{0} > 0$, i.e. preserving the direction of time.
- The [[Proper orthochrounous Lorentz group]] is proper and orthochronous, and is the path [[connected subgroup]]
#
---
#state/develop | #lang/en | #SemBr 
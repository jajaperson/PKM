---
tags:
  - public
---
[[Electrodynamics MOC]]
# Electric field
The **electric field** is an abstraction which describes how electric forces will act upon a test charge.
$$
\begin{align*}
\vab F = Q \vab E
\end{align*}
$$
The electric field follows the [[Principle of Superposition]],
so the effects of different charge distributions may be combined easily.
It describes the force per unit charge, so its SI units are $\pu{ N.C^{-1} }$.
If a charge distribution is static,
i.e. the source charges do not move,
then the field is [[Conservative vector field|irrotational]] and may therefore be given an [[Electrostatic potential]].
For the more general case see [[Electric and magnetic potentials]].

## Calculation

It follows from [[Maxwell's equations]] that
$$
\begin{align*}
\vab E (\vab r) = \frac{1}{4\pi\epsilon_{0}} \iiint _{\mathbb{R}^3} \frac{\rho(\vab r')}{\Sr^2}\unitv \SR \,d\tau'
\end{align*}
$$
although historically this result is derived from consideration of [[Coulomb's law]].


## Properties
- See [[Gauß's law]]
- When crossing a surface charge distribution, the electric field undergoes a discontinuity of magnitude $\sigma / \epsilon_{0}$ in its component normal to the surface, whereas parallel to the surface the field is continuous.[^disco]
  This gives the boundary conditions
    $$
  \begin{align*}
  \lim_{ \alpha \to 0^+ } \vab E(\vab r + \alpha\unitv n) - \vab E(\vab r - \alpha \unitv n) = \frac{\sigma}{\epsilon_{0}}\unitv n
  \end{align*}
  $$
  or more simply
  $$
  \begin{align*}
  \vab E_\text{above} - \vab E_\text{below} = \frac{\sigma}{\epsilon_{0}}\unitv n
  \end{align*}
  $$

[^disco]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], p. 87–89 (§2.3.5)

#
---
#state/tidy | #lang/en | #SemBr

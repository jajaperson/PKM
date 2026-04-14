---
tags:
  - public
---
[[Stellar astrophysics MOC]]
# Forces on the stellar mass element

In the simple geometric model, a [[Stellar mass element]] $d m$ experiences forces due to gravity and pressure,
both in the radial direction.
We take the outward radial direction as positive.
The gravitational force on a mass element is given by [[Newton's law of universal gravitation]]
$$
\begin{align*}
d F_{G} = -\frac{GM(r) \rho(r)}{r^2} \,dA\,dr
\end{align*}
$$
whereas the forces due to pressure are
$$
\begin{align*}
dF_{\text{inner}} &= P(r) \, dA \\
dF_{\text{outer}} &= - P(r + dr) \, dA \\
&= -P(r) \, dA - dP(r) \, dA \\
dF_{P} &= dF_{\text{inner}} + dF_{\text{outer}} \\
&= - dP(r) dA
\end{align*}
$$
hence the pressure force arrises from the pressure gradient.
A stable star is a [[Star in hydrostatic equilibrium]], i.e. $dF_{G} + dF_{P} =0$ at all $r$.

#
---
#state/tidy | #lang/en | #SemBr

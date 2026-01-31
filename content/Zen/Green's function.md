---
tags:
  - public
---
[[Differential equations MOC]]
# Green's function

Let $L$ be some translation-invariant linear [[differential operator]].
A **Green's function** $G$ is a solution to the differential equation[^phys] #m/def/anal/fun 
$$
\begin{align*}
LG = \delta
\end{align*}
$$
where $\delta$ is the [[Dirac delta]] —
hence it may be thought of as the **convolution kernel** of $L$.
Green's functions can be used to solve inhomogenous differential equations by [[Convolution]] of the source function.
Specifically, the differential equation $Lf = \rho$ is solved by $f = G * \rho + f_{H}$ (plus a homogenous solution),
which can be made unique after applying boundary conditions.

> [!check]- Proof
> Since
> $$
> \begin{align*}
> L[G*\rho](t) &= L\int_{\mathbb{R}^n} G(t-\tau)\,\rho(\tau) \, d\tau \\
> &= \int_{\mathbb{R}^n} L [G(t-\tau)]\,\rho(\tau) \, d\tau \\
> &= \int _{\mathbb{R}^n}\delta(t-\tau) \, \rho(\tau) \, d\tau \\
> &= \rho(t)
> \end{align*}
> $$
> as claimed. <span class="QED"/>

If $L$ is not translation-invariant, then one replaces $G(x-x')$ with $G(x,x')$.

[^phys]: In physics there is a convention to write $LG = -\delta$.

## Properties

1. If $G$ is a Green's function and $Lg = 0$ then $G + g$ is a Green's function.

## Examples

- [[Heaviside function]] (Green's function for $D$)
- [[Green's function for the Laplacian]]

#
---
#state/tidy | #lang/en | #SemBr
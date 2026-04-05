---
aliases:
  - virial theorem
tags:
  - public
---
[[Stellar astrophysics MOC]]
# Star in hydrostatic equilibrium

A star in hydrostatic equilibrium is a star for which the nett [[forces on a stellar mass element]] is zero
i.e. the inward force due to gravity and outward force due to the pressure gradient match.
It follows that
$$
\begin{align*}
E_{G} = -3 \langle P \rangle V
\end{align*}
$$

^70a07e

or in terms of energy density
$$
\begin{align*}
\langle P \rangle = -\frac{1}{3} \frac{E_{G}}{V}
\end{align*}
$$
which is the **virial theorem** for a star.

> [!check]- Derivation
> For a star in hydrostatic equilibrium,
> $$
> \begin{align*}
> 0 &= dF_{P} + dG_{G} \\
> &= -dP(r) dA - \frac{GM(r) \rho(r)}{r^2} \,dr
> \end{align*}
> $$
> which is an ODE for the pressure gradient
> $$
> \begin{align*}
> \frac{dP(r)}{dr} = - \frac{GM(r)\rho(r)}{r^2}
> \end{align*}
> $$
> and since all terms on the RHS are positive, the pressure gradient must be negative,
> implying that the maximum pressure occurs at the centre of the star and decreases towards zero as $r$ increases.
> We take boundary conditions
> $$
> M(0)=0, \qquad M(R_{\star})=M_{\star}, \qquad P(R_{\star}) = 0, \qquad\rho(R_{\star})=0
> $$
> Hence the [[Gravitational potential energy]] is given by
> $$
> \begin{align*}
> E_{G} &= -\int_{0}^{R_{\star}} \frac{GM(r)}{r} \, dM(r) \\
> &= -\int_{0}^{R_{\star}} \frac{GM(r)\rho(r)}{r^2} 4\pi r^3 \, dr \\
> &= \int_{0}^{R_{\star}} \frac{dP(r)}{dr} 4\pi r^3 \, dr \\
> &= \left[ 4\pi r^3 P(r) \right]_{r=0}^{r=R_{\star}} -3 \int_{0}^{R_{\star}} P(r) \, 4\pi r^2 \, dr  \\
> &= -3  \langle P \rangle  V
> \end{align*}
> $$
> as claimed.
> <span class="QED"/> ^viriald

## Ideal gas

Assuming the star is composed entirely of an ideal gas, the virial theorem becomes
$$
\begin{align*}
E_{G} &= -3 N_{\star} k_{B} \langle T \rangle \\
\langle T \rangle  &= -\frac{1}{3k_{B}} \frac{E_{G}}{N_{\star}}
\end{align*}
$$
where $k_{B}$ is [[Boltzmann's constant]] and $N_{\star}$ is the number of particles in the star.

> [!check]- Derivation
> In addition to the quantities defined in the [[#^viriald|derivation above]],
> let $\mu$ be average particle mass,
> $T(r)$ be the temperature at radius $r$,
> and $N(r)$ be the number of particles in the sphere at radius $r$.
> Let $n(r)$ be the average particles per unit volume at radius $r$
> Then the density is given by $\rho(r) = n(r) \mu$
> and $N(r) = M(r) / \mu$
> Thus
> $$
> \begin{align*}
> E_{G} &= - 3 \int_{0}^{R_{\star}} P(r) \, 4\pi r^2 \, dr \\ 
> &= -3 \int_{0}^{R_{\star}} \frac{P(r)}{\rho(r)} \rho(r) \, 4\pi r^2 \, dr \\
> &= -3 \int_{0}^{R_{\star}} \frac{n(r) k_{B} T(r)}{n(r)\mu} \frac{dM(r)}{dr} \, dr \\
> &= -3 k_{B} \int_{0}^{N_{\star}} T(N) \, dN \\
> &= -3 N_{\star} k_{B} \langle T \rangle 
> \end{align*}
> $$
> as claimed.
> <span class="QED"/>

It follows from equipartition of energy that $E_{G} = -2E_{K}$,
and from this it follows that $E_{T} = \frac{1}{2} E_{G} = -E_{K}$.

## Ultrarelativistic gas

As particle speeds increase, the condition for hydrostatic equilibrium approaches
$$
\begin{align*}
E_{K} + E_{G} = E_{T} = 0
\end{align*}
$$

> [!missing]- Derivation
> #missing/proof

#
---
#state/tidy | #lang/en | #SemBr

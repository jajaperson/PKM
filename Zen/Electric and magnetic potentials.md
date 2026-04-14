---
tags:
  - public
aliases:
  - electric potential
  - magnetic potential
---
[[Electrodynamics MOC]]
# Electric and magnetic potentials

[[Gauß's law for magnetic flux]] and [[Faraday's law of induction]] are satisfied by the [[electric field]] $\vab E$ and [[Magnetic field]] $\vab B$ iff there exists an **electric potential** $V$ and a **magnetic potential** $\vab A$ such that
$$
\begin{align*}
\vab E &= -\vab\nabla V - \frac{ \partial \vab A }{ \partial t } & \vab B &= \vab\nabla\times\vab A
\end{align*}
$$

> [!check]- Proof
> [[Gauß's law for magnetic flux]] is satisfied iff the $\vab B$-field is [[Incompressible vector field|incompressible]],
> which is equivalent to the statement that there exists a [[Incompressible vector field|vector potential]] $\vab A$ with $\vab B = \vab\nabla \times\vab A$.
> Then inspecting [[Faraday's law of induction]],
> $$
> \begin{align*}
> \vab \nabla \times\vab E + \frac{ \partial \vab B }{ \partial t } &= \vab 0 \\
> \iff \vab\nabla \times \vab E + \frac{ \partial }{ \partial t } \left( \vab\nabla \times \vab A \right) &= \vab 0 \\
> \iff \vab \nabla \times \left( \vab E + \frac{ \partial\vab A }{ \partial t }  \right) &= \vab 0
> \end{align*}
> $$
> we find it holds iff $\vab E + \frac{ \partial \vab A }{ \partial t }$ is [[Conservative vector field|irrotational]], i.e. admits a [[Conservative vector field|scalar potential]] $V$ such that $-\vab \nabla V = \vab E + \frac{ \partial \vab A }{ \partial t }$.
> Therefore $\vab E = -\vab\nabla V - \frac{ \partial \vab A}{ \partial t }$.
> <span class="QED"/>

The electric and magnetic fields are [[Gauge invariant]] under the transformation
$$
\begin{align*}
\vab A &\to \vab A + \vab\nabla f & V &\to V - \frac{ \partial f}{ \partial t } 
\end{align*}
$$

> [!check]- Proof
> Applying the identity $\vab{\nabla}\times(\vab{\nabla}f) = 0$ it immediately follows that $\vab A' = \vab A + \vab{\nabla}f$ gives the same $\vab B$-field as $\vab A$, however if we want $\vab E$ to also be the same we require that
> $$
> \begin{align*}
> -\vab{\nabla}V - \frac{ \partial \vab A }{ \partial t } = -\vab{\nabla}V' - \frac{ \partial }{ \partial t } (\vab A + \vab{\nabla}f) = -\nabla \left( V' + \frac{ \partial f }{ \partial t }  \right)  - \frac{ \partial \vab A }{ \partial t } 
> \end{align*}
> $$
> hence $V' = V - \frac{ \partial f }{ \partial t }$. <span class="QED"/>

## Possible gauges

- [[Coulomb gauge]]
- [[Lorenz gauge]]

#
---
#state/develop | #lang/en | #SemBr 
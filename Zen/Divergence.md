---
aliases:
  - flux density
  - public
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Divergence
The **divergence** of a vector field, also called the **flux density**,
is a scalar measure of a vector field's tendency to move away (i.e. _to diverge_) from a given point.
It is given by
$$
\begin{align*}
\opn{div} \vab F = \vab \nabla \cdot \vab F = \Tr D\vab{F}
\end{align*}
$$
where $\vab \nabla$ is the gradient operator (sometimes called $\grad$).
Interpreting $\vab F$ as a velocity field of a fluid,
the divergence represents the rate at which an infinitesimal volume changes with time.

## Properties
- If $\opn{div} \vab F = \vab 0$ everywhere, then $\vab F$ is an [[Incompressible vector field]],
  meaning it has a vector potential.
- Conversely, $\opn{div} \curl \vab F = 0$ given continuous second order derivatives exist for $\vab F$.

## Practice problems
See [[Curl#Practice problems]].

#
---
#state/tidy | #lang/en | #SemBr

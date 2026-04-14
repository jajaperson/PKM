---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Lagrangian function
In its essence, the Lagrangian function $\Lambda$ is a way 
to package all the information 
required to optimise a function under a constraint
into a single function 
which can be optimised in the normal (unconstrained) fashion.
For a function $f (\vab v)$ 
under a constraint $g(\vab v) = k$,
the corresponding Lagrangian function is given by
$$
\begin{align*}
\Lambda (\vab v, \lambda) = f(\vab v) - \lambda
\left( g (\vab v) - k\right)
\end{align*}
$$
Using this function, optimising $f$ is a matter of solving $\vab\nabla \Lambda (\vab c, \lambda) = \vab 0$.
This has the same effect as solving the system of equations used for a [[Lagrange multiplier]].

In order to determine the nature of these **saddle points** of the Lagrangian,
one must use the [[Second derivative test for multivariable functions]] by taking the [[Hessian matrix]] of the Lagrangian:
1. If $\det(\jacob^2 \Lambda ) > 0$ it is a local maximum
2. If $\det(\jacob^2 \Lambda ) < 0$ it is a local minimum
3. If $\det(\jacob^2 \Lambda ) = 0$ it is neither a local maximum nor a local minimum.

---
#state/tidy | #SemBr | #lang/en
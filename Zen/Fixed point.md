---
aliases: []
tags:
  - public
---
[[Dynamics MOC]]
# Fixed point

A **fixed point** $x^*$, also called an **equilibrium solution**, of a dynamical system is a [[phase space|phase point]] which remains constant for all time, i.e. a system in this state will remain this way. #m/def/dynamics 

- For a [[differential system]] this means $f(\mathbf{x}) = 0$; whereas
- For an [[iterated map]] this means $f(\mathbf{x}) = \mathbf{x}$.

A fixed point corresponds precisely to an [[Invariant set]] of cardinality one.

## Classification 
### Stability

A fixed point may be

- **stable**, meaning small perturbations decay back to the point
  - **Lyapunov stable** if for every neighbourhood $U$ of $x^*$ 
    there exists a neighbourhood $V$ of $x^*$
    such that $\Phi^t x \in U$ for all $t > 0$ and $x \in V$.
  - **Asymptotically stable** if it Lyapunov stable of in addition to being Lyapunov stable,
    there exists a neighbourhood $U$ of $x^*$ such that $\lim_{ t \to \infty }\Phi^t x = x^*$ for all $x \in U$.
- **unstable**, meaning small perturbations increase away from the point
  - **Lyapunov unstable** if for every neighbourhood $U$ of $x^*$ 
    there exists a neighbourhood $V$ of $x^*$
    such that $\Phi^t x \in U$ for all $t < 0$ and $x \in V$.
  - **Asymptotically unstable** if it Lyapunov stable of in addition to being Lyapunov stable,
    there exists a neighbourhood $U$ of $x^*$ such that $\lim_{ t \to -\infty }\Phi^t x = x^*$ for all $x \in U$.
- A [[Centre (dynamics)|centre]].

These can be identified qualitatively in a [[Phase portrait]].
Quantitatively it is described by 

- [[Linear stability analysis]]
- [[Lyapunov stability criterion]]


[^uns]: Some texts such as [[@datserisNonlinearDynamicsConcise2022|Nonlinear dynamics: A concise introduction interlaced with code]] consider this to be unstable, whereas [[@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos]] gives it its own term.

### Contraction

The dynamics at a fixed point is said to be **contracting** iff an infinitesimal ball of initial conditions around a fixed point shrink over time.
This can occur for both unstable and half-stable points.
Using [[Linear stability analysis]],
contracting dynamics corresponds to a negative [[Jacobian matrix|Jacobian]] [[trace]] in the continuous case
and a [[Jacobian matrix|Jacobian]] [[Matrix determinant|determinant]] less than one in the discrete case.
A system that is contracting at all points (fixed or not) is called a [[Dissipative system]].

#
---
#state/develop | #lang/en | #SemBr

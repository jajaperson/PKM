---
tags:
  - public
---
[[Dynamics MOC]]
# Trajectory

A **trajectory** is a solution to a [[Dynamical system]] and corresponds to a path in the [[Phase space]] intersecting the initial condition (i.e. initial state).[^2024]
In principle, there are three kinds of trajectories:

1. A trajectory at a [[Fixed point|fixed point]] remains there for all time,
2. A [[Periodic solution]] consists of a finite number of points (discrete) or a closed curve (continuous)
3. All other trajectories are infinite and never intersect themselves

Collectively trajectories are described by $q : T \times M \to M : (t,x) \mapsto q(t,x)$,
where $q(0,x) = x$ is the initial condition and $T$ is $\mathbb{R}$, $\mathbb{Z}$, or $\mathbb{N}$.
These have the so-called **semigroup property**
$$
\begin{align*}
q(t+s, x) = q(s,q(t,x))
\end{align*}
$$
the name of which becomes more clear when written using the [[Time evolution operator]] $\Phi^{t} : \mathbb{R}^n \to \mathbb{R}^n : x \mapsto q(t,x)$
$$
\begin{align*}
\Phi^{t+s} = \Phi^{s} \circ \Phi^{t}
\end{align*}
$$

## Differential system

Since in principle any initial state is possible, every point in phase space belongs to a trajectory.
Furthermore, since given an initial state the whole system evolves deterministically both forwards and backwards in time, no two trajectories may intersect in finite time.
This depends on the [[Picard-Lindelöf theorem]], which requires [[Lipschitz continuity]] of $f$.[^2022]

[^2022]: 2022\. [[Sources/@datserisNonlinearDynamicsConcise2022|Nonlinear Dynamics: A Concise Introduction Interlaced with Code]]
[^2024]: 2024\. [[Sources/@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering]], §1.2, p. 8

### Continuity of trajectories

If $F : \mathbb{R}^n \to \mathbb{R}^n$ is a differentiable vector field,
then for each $x_{0} \in \mathbb{R}^n$
there is an $\epsilon>0$ and $T>0$
such that $\dot{x} = F(x)$ has solutions $q(t,x)$
for $-T < t < T$ and $\|x-x_{0}\|<0$
where $q(0,x) = x$
and $q(t,x)$ is continuous in $t$ and $x$[^cn].

[^cn]: See [[MATH3021]] lecture 2. Citation needed.

## Iterated map

In the discrete case forward-time uniqueness is guaranteed,
but reverse uniqueness only holds if $f$ is invertible.

#
---
#state/develop | #lang/en | #SemBr

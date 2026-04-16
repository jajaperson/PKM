---
aliases:
  - dissipative dynamics
tags:
  - public
---
[[Dynamical system]]
# Dissipative system

A **dissipative system** is a [[dynamical system]] which is contracting for all but finitely many points,
i.e. nearly all infinitesimal balls of initial conditions shrink over time.[^2022] #m/def/dynamics 
A distinct but related class of system is the [[Conservative system]].

[^2022]: 2022\. [[Sources/@datserisNonlinearDynamicsConcise2022|Nonlinear Dynamics: A Concise Introduction Interlaced with Code]], §1.5, pp. 12–13

## Characterization
### Differential system

For a [[differential system]] the evolution of an infinitesimal volume follows
$$
\begin{align*}
\dot{v} = \Tr(D f(\mathbf{x})) \, v
\end{align*}
$$
and dissipative dynamics is characterised by $\lim_{ t \to \infty }v(t) \to 0$.

### Iterated map

For an [[Iterated map]] the evolution of an infinitesimal volume follows
$$
\begin{align*}
v_{n+1} = \det(Df (\mathbf{x}_{n})) \, v_{n}
\end{align*}
$$
and again dissipative dynamics is characterised by $\lim_{ n \to \infty }v_{tn} = 0$.

## Properties

The [[phase space]] of a dissipative system is populated by [[Attractor|attractors]] and may be divided into [[Basin of attraction|basins of attraction]].

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Differential system]]
# Equivalence of differential systems

Two autonomous systems $\dot{x}= f(x)$ and $\dot{y}=g(y)$ with $x,y \in \mathbb{R}^n$ are **topologically equivalent** (sometimes called **conjugate**) on a domains $U_{x}, U_{y} \in \mathbb{R}^n$
iff there exists a [[homeomorphism]] $\Psi : U_{x} \to U_{y}$ which preserves [[Trajectory|trajectories]],
i.e. if $q(t,x)$ and $r(t,y)$ give the trajectories of $x$ and $y$ respectively, then $r(t, \Psi(x)) = \Psi(q(t,x))$ for all $x \in \mathbb{R}^n$, $t \in \mathbb{R}$ with $q(t,x) \in U_{x}$. #m/def/dynamics/flow

#
---
#state/tidy | #lang/en | #SemBr

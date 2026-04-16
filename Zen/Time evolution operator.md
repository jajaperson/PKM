---
tags:
  - public
---
[[Dynamics MOC]]
# Time evolution operator

A **time evolution operator** $\Phi^t$ on some smooth manifold $M$ is a (not necessarily linear) operator describing the evolution of some point $\psi(t) \in M$ of a [[dynamical system]]. #m/def/dynamics
In the case where time evolution is governed by a differential equation
$$
\begin{align*}
\frac{d}{dt} \psi = Q(t, \psi)
\end{align*}
$$
where $Q$ is a time-dependent [[vector field]],
then $\Phi^t$ is the [[vector flow]] along $Q$
so given any initial condition $\psi_{0} \in M$ a solution is $\psi(t) = \Phi^t(\psi_{0})$.
In general $\Phi^t$ has the **semigroup property** $\Phi^t \Phi^s = \Phi^{t+s}$ and thus $(\Phi^t)^n = \Phi^{nt}$.

## Properties

- In the case where $Q(t,\ket{\psi}) = \hat{Q}\ket{\psi}$ is given by a [[Linear endomorphism|linear operator]] with $\frac{d}{dt}\ket{\psi} = \hat{Q} \ket{\psi}$, 
  time evolution is given by the [[matrix exponential]] $\Phi^1 = e^{\hat{Q}}$.
  See [[Quantum time evolution operator]].


#
---
#state/develop | #lang/en | #SemBr

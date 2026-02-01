---
aliases: []
sr-due: 2024-03-24
sr-interval: 9
sr-ease: 210
tags:
  - public
---

[[Differential equations MOC]]
# Existence and uniqueness theorem for IVPs

In general, given an initial value problem

$$
\begin{align*}
\frac{d^ny}{dx^n} &= f(x, y^{(0)}, \dots y^{(n-1)}) 
\end{align*}
$$

with initial conditions
$$
\begin{align*}
y(x_{0}) &= y_{0} \\
y^{(1)}(x_{0}) &= y^{(1)}_{0} \\
\vdots \\
y^{(n-1)}(x_{0}) &= y^{(n-1)}_{0}
\end{align*}
$$
the **existence and uniqueness theorem** guarantees the existence of a unique solution for initial conditions in the region for which the functions $f, \frac{ \partial f }{ \partial y }, \dots, \frac{ \partial f }{ \partial y^{(n-1)} }$ are real, finite, and continuous.
This solution may only be defined for a small neighbourhood around the initial condition.

## First order

> Given an initial value problem
> $$
> \frac{dy}{dx} = f(x,y) \qquad \land \qquad y(x_{0}) = y_{0}
> $$
> If $f(x,y)$ and $\frac{ \partial f }{ \partial y }(x,y)$ continuous[^r] over some region $R \sube \mathbb{R}^2$ where $(x_{0}, y_{0}) \in R$,
> then there must exist one and only one solution to the initial value problem.[^2017][^2024]


[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 51, p. 84
[^r]: As well as real, finite, and single-valued.

[^2024]: 2024\. [[Sources/@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering]], §2.5, p. 29

This solution may be [[Analytical and numerical solutions|analytical or numerical]], the only thing guaranteed is that some solution exists.
Note that the EUT can not tell you when a solution does not exist,
as the implication only goes one way.
The EUT condition may not hold for an IVP that is solvable.

## Practice problems

- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 57 (§2.4 Problems)

#
---
#state/tidy | #lang/en | #SemBr | #review

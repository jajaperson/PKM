---
tags:
  - public
---
[[Complex analysis MOC]]
# Cauchy-Riemann equations
The **Cauchy-Riemann equations** are conditions imposed on the form of a complex-valued [[Differentiability|analytic]] (holomorphic) function.
which naturally arise from the properties of complex arithmetic and [[Complex function decomposition]].
Namely, if a function $f(x+yi) = u(x,y) + iv(x,y)$ is differentiable,
then
$$
\begin{align*}
\frac{ \partial u }{ \partial x } = \frac{ \partial v }{ \partial y } 
\qquad\land\qquad
\frac{ \partial u }{ \partial y } = - \frac{ \partial v }{ \partial x } 
\end{align*}
$$

which may be written in the equivalent complex form
$$
\begin{align*}
i \frac{ \partial f }{ \partial x } = \frac{ \partial f }{ \partial y } 
\end{align*}
$$
As an immediate consequence of this,
any holomorphic function will satisfy [[Laplace's equation]] when considered as a vector field $\mathbb{R}^2 \to \mathbb{R}^2$.
It also follows that integrals over complex numbers are path-independent,
i.e. as a vector field holomorphic functions are [[Conservative vector field|irrotational]].
This simplifies [[Complex integration]].

#
---
#state/develop | #lang/en | #SemBr

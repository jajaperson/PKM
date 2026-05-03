---
tags:
  - public
---
[[Thermodynamics MOC]]
# Heat equation
The **heat equation** is the partial differential equation
$$
\begin{align*}
\dot{u} = \alpha\, \Delta u
\end{align*}
$$
where $\Delta = \vab \nabla \cdot \vab \nabla$ is the [[Laplacian]] with respect to space
and $\dot{u} = \frac{ \partial u }{ \partial t }$ is the partial derivative of $u$ with respect to time.
Thus the one dimensional version is
$$
\begin{align*}
\frac{ \partial u }{ \partial t } = \alpha \frac{ \partial^{2} u }{ \partial x^{2} } 
\end{align*}
$$

## Separation of variables of the heat equation
Given the heat equation
$$
\begin{align*}
\dot{u}(\vab x, t) = \alpha\, \nabla^2 u(\vab x, t)
\end{align*}
$$
separation of variables
$$
\begin{align*}
u(\vab x, t) = X(\vab x)\,T(t)
\end{align*}
$$
leads to the relationship
$$
\begin{align*}
\frac{\nabla^2 X(\vab x)}{X(\vab x)} = \frac{1}{\alpha^2} \frac{\dot{T}(t)}{T(t)} = -\lambda
\end{align*}
$$

## In one dimension
Under homogenous boundary conditions the solution for $X(x)$ is the odd [[Fourier series]] with coëfficients[^2017]
$$
\begin{align*}
b_{n} = \frac{2}{L}\int_{0}^{L} f(x) \sin \left( \frac{n\pi x}{L} \right)  \, dx 
\end{align*}
$$

[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 492 (§10.5 equation 21)

## Practice problems
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 495 (§10.5)

#
---
#state/stub | #lang/en | #SemBr | #review 

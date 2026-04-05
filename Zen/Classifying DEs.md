---
tags:
  - public
---
[[Differential equations MOC]]
# Classifying Differential Equations
Differential equations (DEs) come in two basic forms 

- **Ordinary differential equations (ODEs)**
   — those that involve the relation between two variables only.
- **Partial differential equations (PDEs)** 
  — those that involve more than two variables and hence partial derivatives.
  These are generally trickier.
  Importantly, the presence of a $\partial$ symbol does not imply a DE is a PDE,
  for if there are only two variables present it is an ODE.

## Other attributes
### Order
Both types of DE have **order**,
that is the highest order of derivative (mixed or unmixed) in the equation.
- $\frac{d^2y}{dx^2} - 2 = y$ is order 2.
- $\frac{\partial^5 f}{\partial x^3 \partial t^2} + \frac{\partial^2 f}{\partial x^2} + \frac{\partial f}{\partial t} = 0$ is order 5.

### Degree
The **degree** of a DE is the highest power of the highest derivative.
An example of a degree 2 DE is the DE for the [[Brachistochrone]] problem.
$$
\begin{align*}
\left[1 + \left( \frac{dy}{dy} \right)^2\right]y = k^2
\end{align*}
$$

### Linearity
Both can also be either **linear** or **non-linear**.
For a DE to be linear means it is a linear combination of derivatives (of any order),
i.e. there are no products of derivatives.

#### Homogeneousness
A second order _linear_ differential equation can be **homogeneous** or **non-homogeneous**.
In general, they have the form
$$
\begin{align*}
\frac{d^2 y}{dx^2} + p(x) \frac{dy}{dx} + q(x) = g(x)
\end{align*}
$$
If $g(x)=0$, the equation is homogeneous.
#
---
#state/tidy | #SemBr 
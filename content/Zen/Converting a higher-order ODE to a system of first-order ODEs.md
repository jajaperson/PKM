---
tags:
  - public
---
[[Differential system]]
# Converting a higher-order ODE to a system of first-order ODEs
Any higher-order ODE may be converted to a [[System of linear ODEs]].
Consider
$$
\begin{align*}
u'' - a u' - b u = 0
\end{align*}
$$
If we let $x_{1}=u$ and $x_{2} = u'$, we get the system
$$
\begin{align*}
x_{1}' &= x_{2} \\
x_{2}' &= ax_{2} + bx_{1}
\end{align*}
$$
which can be written in the matrix form
$$
\begin{align*}
\frac{d}{dt} \vab x ' = \begin{bmatrix}
0 & 1 \\
a & b
\end{bmatrix}
\vab x
\end{align*}
$$

See also [[Differential system]].

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Differential equations MOC]]
# Homogenous linear ODE with constant coëfficients
In the majority of cases solving a homogenous linear ODE with constant coëfficients 
$$
\begin{align*}
a_{0}y + a_{1}y^{(1)} + a_{2} y^{(2)} + \dots + y^{(n)} = 0
\end{align*}
$$
equates to solving the **characteristic equation**
$$
\begin{align*}
a_{0} + a_{1} r + a_{2}r^2 + \dots + a_{n}r^n = 0
\end{align*}
$$
where for any such $r$ a solution is given by $y=e^{rx}$. 
In the cases where there are [[repeated roots]],
a method such as [[Reduction of order (homogenous second-order differential equation)|reduction of order]] must be used to find a complete basis of solutions.

## Second order
In the second order case
$$
\begin{align*}
y'' + ay' + by = 0
\end{align*}
$$
the **characteristic polynomial** is
$$
\begin{align*}
r^2 + ar + b = 0
\end{align*}
$$
and a solution is given by
$$
\begin{align*}
y = C_{1} e^{r_{1}x} + C_{2}e^{r_{2}x} 
\end{align*}
$$
If $r_{1} = r_{2}$ ([[repeated roots]]), then an additional linearly independent solution is
$$
\begin{align*}
y = C_{2}xe^{rx}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

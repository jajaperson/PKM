---
tags:
  - public
---
[[Differential equations MOC]]
# Solving non-homogenous second order ODEs
For any second-order ODE
$$
\begin{align*}
L[y] = y'' + p(t)y' + q(t)y = g(t)
\end{align*}
$$
it is clear that the difference of any two solutions solves the related homogenous ODE.
Namely, given $L[Y_{1}] = g(t)$ and $L[Y_{2}] = g(t)$, 
it is clear that
$$
\begin{align*}
L[Y_{1} - Y_{2}] &= L[Y_{1}] - L[Y_{2}] \\
&= g(t) - g(t) \\
&= 0
\end{align*}
$$
It follows that given the general solution to the related homogenous ODE $y_{c}(t)$,
called the **complimentary solution**,
and any one particular solution to the full ODE $y_{p}$,
then
$$
\begin{align*}
y &= y_{c} + y_{p} \\
&= c_{1}y_{1} + c_{2}y_{2} + y_{p}
\end{align*}
$$
since
$$
\begin{align*}
L[y_{c} + y_{p}] &= L[y_{c}] + L[y_{p}] \\
&= g(t)
\end{align*}
$$

### Finding a particular solution

In practice, a variety of methods may be used to find a particular solution once $y_{c}$ has been found
- [[Method of undetermined coëfficients]] (uses an Ansatz)
- [[Method of annihilation]]
- [[Method of variation of parameters]] (similar to [[Reduction of order (homogenous second-order differential equation)]])


#
---
#state/tidy | #lang/en | #SemBr

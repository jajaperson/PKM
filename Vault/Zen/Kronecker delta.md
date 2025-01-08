---
tags:
  - public
---
[[Mathematics MOC]]
# Kronecker delta

The **Kronecker delta** is a symbol used across many areas of mathematics. In these notes it is defined as follows: #m/def/general 
$$
\begin{align*}
\delta_{k} = [k=0] = \begin{cases}
1 & k=0 \\
0 & k \neq 0
\end{cases}
\end{align*}
$$
where we have used an [[Iverson bracket]],
and for multiple subscripts
$$
\begin{align*}
\delta_{k, j_{1}, \dots , j_{n}} = \prod_{i=1}^n \delta_{k-j_{1}} =
[k=j_{1} = \dots = j_{n}]
=
\begin{cases}
1 & k=j_{1} = \dots = j_{n}  \\
0  & \text{otherwise}
\end{cases}
\end{align*}
$$

See also [[Dirac delta]] for a continuous (distributional) analogue.

#
---
#state/tidy | #lang/en | #SemBr

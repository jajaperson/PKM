---
tags:
  - public
---
[[Solving non-homogenous second order ODEs]]
# Method of undetermined coëfficients
The **method of undetermined coëfficients** is a method for finding a particular solution to an ODE 
that involves taking a guess (_Ansatz_) of the particular solution based on the form of the non-homogenous term $g(t)$.
$$
\begin{align*}
L[y] = y'' + p(t)y' + q(t)y = g(t)
\end{align*}
$$
The Ansatz is then substituted into the ODE to determine the coëfficients.
The following table shows functions and their corresponding guesses,
where $p_{n}(x)$, $P_{{n}}(x)$ $Q_{n}$ are polynomials of order, determined and undetermined respectively.

| Non-homogenous term $g(x)$                                                 | Ansatz                                                        |
| -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| $p_{n}(x)$                                                                 | $P_{n}(x)$                                                    |
| $p_{n}(x)e^{\alpha x}$                                                     | $P_{n}(x)$                                                    |
| $p_{n}(x)\sin(\beta x)$ or $p_{n}(x)\cos(\beta x)$                         | $P_{n}(x)\sin(\beta x) + Q_{n}(x)\cos(\beta x)$               |
| $p_{n}(x)e^{\alpha x}\sin(\beta x)$ or $p_{n}(x)e^{\alpha x}\cos(\beta x)$ | $e^{\alpha x}[P_{n}(x)\sin(\beta x) + Q_{n}(x)\cos(\beta x)]$ |


Note that a linear combination of such non-homogenous terms leads to a linear combination of their corresponding Ansätze.
**No term of the Ansatz can be a solution of the homogenous equation, if this is the case the Ansatz is multiplied by $x$.**[^2017]

[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 139 (§3.5)

A special case occurs with [[Cauchy-Euler differential equations]] due to their equidimensional structure.

## Practice problems
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], pp. 141–142 (§3.5 problems)

#
---
#state/tidy | #lang/en | #SemBr | #review

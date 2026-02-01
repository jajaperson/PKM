---
tags:
  - public
---
[[Differential equations MOC]]
# Method of variation of parameters
Variation of parameters is a more general way of solving 
second-order, linear, non-homogenous differential equation;
i.e. of the form
$$
\begin{align*}
y’’ + by’ + cy = g(x)
\end{align*}
$$
Variation of parameters concerns the discovery of a _particular solution_,
which can then be combined with the _general solution_ of the complimentary homogenous equation.
If the general solution is of the form
$$
\begin{align*}
y_c(x) = k_1y_1(x) + k_2y_2(x)
\end{align*}
$$
where $k_i$ are constants and $y_i$ are functions of $x$,
the particular solution involves _varying_ the constants as functions
$$
\begin{align*}
y_p(x) = u(x)y_1(x) + v(x)y_2(x)
\end{align*}
$$
which are given by the [[Wronskian]]
$$
\begin{align*}
u’(x) &= -\frac{y_2(x)g(x)}{W[y_1,y_2]} \\
v’(x) &= \frac{y_1(x)g(x)}{W[y_1,y_2]}
\end{align*}
$$

This is in fact just an application of [[Cramer's rule]].

## Generalisation to higher orders
A good explanation of the generalisation is given by [this LibreText](https://math.libretexts.org/Courses/Reedley_College/Differential_Equations_and_Linear_Algebra_(Zook)/15%3A_Linear_Higher_Order_Differential_Equations/15.04%3A_Variation_of_Parameters_for_Higher_Order_Equations)

## Practice problems
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], pp. 146–147 (§3.6 problems)

#
---
#state/tidy | #SemBr | #lang/en | #review

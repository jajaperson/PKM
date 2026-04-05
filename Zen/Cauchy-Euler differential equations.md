---
aliases:
  - scale-free ODE
  - equidimensional ODE
tags:
  - public
---
[[Differential equations MOC]]
# Cauchy-Euler differential equations
A **Cauchy-Euler ODE** or **equidimensional ODE** is a linear ODE
in which each term has equal dimension of the independent variable.


## Second order
In the second-order, they have the standard form
$$
\begin{align*}
x^2 y'' + ax y' + by = 0
\end{align*}
$$
Solutions are found by finding the roots of the quadratic
$$
\begin{align*}
m^2 + (a-1) m + b = 0
\end{align*}
$$
and then
1. If $m_{1} \neq m_{2}$ in general,
  $$
  \begin{align*}
  y = C_{1}x^{m_{1}} + C_{2} x^{m_{2}}
  \end{align*}
  $$
2. In the case $m_{1} = m_{2}^*$ and $m_{1}, m_{2} \notin \mathbb{R}$ this may be rewritten as
  $$
  \begin{align*}
  y = C_{1}x^a \cos \circ \ln(x^b) + C_{2} x^a \sin\circ\ln(x^b)
  \end{align*}
  $$
3. If $m$ is a [[repeated roots|repeated root]]
  $$
\begin{align*}
  y = C_{1} x^m + C_{2} x^m \ln x
  \end{align*}
  $$
## Practice problems
- [Libretext: §2.5 Cauchy-Euler equations](https://math.libretexts.org/Bookshelves/Differential_Equations/A_First_Course_in_Differential_Equations_for_Scientists_and_Engineers_(Herman)/02%3A_Second_Order_ODEs/2.05%3A_Cauchy-Euler_Equations) (worked examples)
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 133 (§3.4 problems 31–34)

#
---
#state/tidy | #lang/en | #SemBr | #review

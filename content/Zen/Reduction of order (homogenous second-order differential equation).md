---
tags:
  - public
---
[[Differential equations MOC]]
# Reduction of order (homogenous second-order differential equation)
**Reduction of order** is a technique for finding the general solution of a homogenous second order linear DE[^gen]
when a particular $y_{1}x$ solution is known.

[^gen]: Perhaps generalisable to higher orders when $(n-1) / n$ solutions are given?

We begin by assuming that $y(x) = u(x)y_{1}(x)$ for some function $u(x)$ to be determined. It follows from this that
$$
\begin{align*}
y' &= u'y_{1} + uy_{1}' \\
y'' &= u''y_{1} + 2u'y_{1}' + uy_{1}''
\end{align*}
$$
Given that $y_{1}$ is indeed a solution, this substitution will reduce the DE to a first order separable DE on the independent variable $u'$ (see reasoning [[#Explanation|below]]),
which can be then used to determine the general solution.

## Explanation
We write the DE as $L[y] = 0$, where the linear operation $L$ is defined by
$$
\begin{align*}
L = D^2 + p \,D + q\, \mathbb{1}
\end{align*}
$$
We are given that $L[y_{1}] = 0$.
Then
$$
\begin{align*}
L[uy_{1}] &= D^2[uy_{1}] + p \,D[uy_{1}]  + q \,\mathbb{1}[uy_{1}] \\
&= y_{1}\,D^2 [u] + 2D[u]\,D[y_{1}] + u\, D^2 [y_{1}] +p y_{1} \, D[u] + pu\, D[y_{1}] + quy_{1} \\
&= u(D^2[y_{1}] + p\,D[y_{1}] + q \,\mathbb{1} [y_{1}]) + y_{1}\, D^2 [u] + (py_{1} + 2D[y_{1}]) \,D[u] \\
&= \cancel{ u\,L[y_{1}] } + K[D[u]]
\end{align*}
$$
where $K$ is the second order linear operator
$$
\begin{align*}
K = y_{1} \,D + (py_{1} + 2y_{1}') \, \mathbb{1}
\end{align*}
$$

## Method
In general, I have found it most effective to only substitute the particular solution $y_{1}$ after the gathering different $u$ terms.
Consider the ODE[^2017]
$$
\begin{align*}
x^2y'' + xy' + \left( x^2 - \frac{1}{4} \right)y = 0
\end{align*}
$$
with particular solution $y_{1} = x^{-1/2}\sin x$, so
$$
\begin{align*}
y_{1}' &= -\frac{1}{2}x^{-3/2} \sin x + x^{-1/2}\cos x \\
y_{1}'' &= \frac{3}{4}x^{-5/2}\sin x - x^{-3/2}\cos x - x^{-1/2}\sin x
\end{align*}
$$
We assume $y=uy_{1}$ is a solution to the ODE, thus
$$
\begin{align*}
0 &= x^2(u''y_{1} + 2u'y_{1}' + uy_{1}'') + x(u'y_{1} + uy_{1}') + \left( x^2 - \frac{1}{4} \right) uy_{1} \\
&= u'' (x^2y_{1}) + u' (2x^2y_{1}' + xy_{1}) + u\left( x^2y_{1}'' + xy_{1}' + x^2y_{1} - \frac{1}{4}y_{1} \right) \\
&= u''(x^{3/2}\sin x) + u'(\cancel{ -x^{1/2}\sin x } + 2x^{3/2}\cos x + \cancel{ x^{1/2}\sin x }) \\
&+ u
\cancel{ \begin{pmatrix}
\frac{3}{4}x^{-1/2}\sin x - x^{1/2}\cos x - x^{3/2}\sin x - \frac{1}{2}x^{-1/2}\sin x  \\+\, x^{1/2}\cos x + x^{3/2}\sin x - \frac{1}{4} x^{-1/2}\sin x
\end{pmatrix} } \\
&= x^{3/2}\sin (x) \frac{du'}{dx} + 2x^{3/2}\cos (x) u'
\end{align*}
$$
which is a separable ODE of order 2.

[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 133 (§3.4 problem 22)

## Practice problems
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 133 (§3.4 problems 18–22)

#
---
#state/tidy | #lang/en | #SemBr | #review

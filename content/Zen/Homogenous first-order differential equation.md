---
tags:
  - public
---
[[Differential equations MOC]]
# Homogenous first-order differential equation
A [[Classifying DEs#Order|first-order]] ODE in the form
$$
\begin{align*}
M(x,y) \,dx + N(x,y)\,dy = 0
\end{align*}
$$
is **homogenous of order $n$** 
if the functions $M(x,y)$ and $N(x,y)$ are both [[Homogenous function|homogenous of order 𝑛]];
$$
\begin{align*}
M(sx, sy) &= s^n M(x, y) \\
N(sx, sy) &= s^n N(x, y)
\end{align*}
$$
Such an ODE may be converted to a [[Separable differential equation]] using either the substitution
$$
\begin{align*}
y = ux &\quad\implies\quad dy=x\,du + u\,dx\\ 
x = vy &\quad\implies\quad dv=y\,dv + v\,dy
\end{align*}
$$
The former is advantageous if $N(x, y)$ is easier to integrate.

## Motivation
Because of the characteristic property of homogenous functions, 
the ratio of the functions can be expressed as a function of a single variable $u = x / y$.
Let $s = x^{-1}$.
Then,
$$
\begin{align*}
\frac{M(x,y)}{N(x, y)}
=
\frac{M(sx,sy)}{N(sx,sy)}
=
\frac{M(1,x / y)}{N(1, x / y)}
=
\frac{M(1, u)}{N(1, u)}
\end{align*}
$$

## Practice problems
- <https://www.mathsisfun.com/calculus/differential-equations-homogeneous.html>

#
---
#state/tidy | #lang/en | #SemBr | #review

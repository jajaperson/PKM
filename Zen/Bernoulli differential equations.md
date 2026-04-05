---
tags:
  - public
---
[[Differential equations MOC#First order ODEs]]
# Bernouli differential equations
A **Bernouli** ODE is a [[Classifying DEs#order|first-order]], [[Classifying DEs#Linearity|non-linear]] ODE with the standard form
$$
\begin{align*}
\frac{dy}{dx} + f(x)y = g(x)y^n
\end{align*}
$$
which in the case of $n = 0$ is a [[First-order linear differential equation]];
and for $n=1$ is a [[Separable differential equation|separable differential equation]].
In all other cases, the ODE may be made linear by using a $w$-substitution:
$$
\begin{align*}
w &= y^{1-n} \\
\implies \frac{dw}{dx} &= (1-n)y^{-n} \frac{dy}{dx} \\
\implies \frac{dy}{dx} &= (1-n)^{-1}y^{n} \frac{dw}{dx}
\end{align*}
$$
which when entered into the original ODE gives
$$
\begin{align*}
(1-n)^{-1}y^{n} \frac{dw}{dx} + f(x) y &= g(x)y^n \\
\frac{dw}{dx} + (1-n)f(x)y^{1-n} &= (1-n)g(x) \\
\frac{dw}{dx} + (1-n)f(x)w &= (1-n)g(x)
\end{align*}
$$
which is linear for $w$.

## Practice problems
- https://tutorial.math.lamar.edu/Classes/DE/Bernoulli.aspx
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], p. 665 (§9.5 exercises 23–25)

#
---
#state/tidy | #lang/en | #SemBr | #review

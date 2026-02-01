---
tags:
  - public
---
[[Differential equations MOC]]
# Exact differential equations

Exact differential equations are solved by finding a [[Conservative vector field|scalar potential]] that generates the multiplying functions of the first order ODE.
Hence a first-order ODE is exact if and only if such a potential exists,
i.e. the field $\vab F$ (defined below) is conservative.

Consider a function of the form
$$
\begin{align*}
M(x,y) + N(x,y) \frac{dy}{dx} = 0
\end{align*}
$$
We rewrite this in terms of a covector field $\vab F$ and a function $\vab v : x \mapsto \tp{[x\quad y(x)]}$[^assum] so that
$$
\begin{align*}
(\vab F \circ \vab v) (t) \, D v(t) = 0
\end{align*}
$$
[^assum]: We assume $y$ to be a function of $x$.

If $\vab F$ is conservative, via the multivariable chain rule this can be rewritten as
$$
\begin{align*}
0 &= (D \Psi \circ \vab v)(x)\, D \vab v(x) \\
  &= D(\Psi \circ \vab v)(x)
\end{align*}
$$
Since this is a function of a single variable, both sides of the equation can be integrated giving
$$
\begin{align*}
0 &= \int \frac{d}{dx} (\Psi \circ \vab v)(x) \, dx \\
 &= (\Psi \circ \vab v)(x) + C \\
 &= \psi (\begin{bmatrix}
x \\ y(x)
\end{bmatrix}) + C
\end{align*}
$$
Which can then be rearranged for $y(x)$.[^note]

[^note]: The above explanation of exact equations differs slightly from the conventional one: it has been shaped by my preference for explicit functions and the matrix-based chain rule.

It follows from this exploration that the solutions to an exact equation are just the [[Level set]] of its generating potential,
or equivalently that the solutions correspond to each path through the field $\vab F$ for which there is no work done in any segment.

## Integrating factor
Sometimes a first order ODE will be _almost exact_,
in that it can be made exact via an **integrating factor** $\mu(x, y)$,
in a similar vein to [[First-order linear differential equation#Integrating factor]].
If such a $\mu$ exists, then $(\mu \, \vab F)(\vab v)$ is conservative,
and hence we get the following first order partial differential equation
$$
\begin{align*}
\frac{ \partial \mu }{ \partial x } N  - \frac{ \partial \mu }{ \partial y }  M + \mu\left( \frac{ \partial N }{ \partial x } - \frac{ \partial M }{ \partial y }  \right)
\end{align*}
= 0
$$
Which is unfortunately usually just as difficult to solve if not more so than the original differential equation.[^2017]
However, if we assume that $\mu$ is _only_ a function of $x$ or _only_ a function of $y$,
and test for each of these cases.

[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 74

## Higher order
- [?] Exact differential equations can be extended to arbitrary higher orders,[^higher]
  which is somehow related to adjointness?

[^higher]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], pp. 119–120 (§3.2 problems 31ff.)

## Practice problems
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 75 (§2.6 problems 1–10)

#
---
#state/tidy | #lang/en | #SemBr | #review

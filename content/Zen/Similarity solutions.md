---
tags:
  - public
---
[[Differential equations MOC]]
# Similarity solutions

**Similarity solutions** is a technique for finding the solutions to a PDE by first observing _symmetries_ of the PDE,
that is transformations to dependent and independent variables under which the PDE is _invariant_.
These symmetries are then exploited to produce **similarity variables**,
which can be used to convert the PDE to an ODE.

## Symmetries
### Dilatational symmetry
Perhaps the simplest kind of symmetry is _dilatational_.
Consider a PDE with with independent variables $x,t$
and dependent variable $u$,
e.g.
$$
\begin{align*}
0= \frac{ \partial u }{ \partial t } + 6u \frac{ \partial u }{ \partial x } + \frac{ \partial^{3} u }{ \partial x^{3} }
\end{align*}
$$
We apply the transformation
$$
\begin{align*}
\vthree{x}{t}{u} \mapsto \vthree{kx}{k^\beta}{k^\gamma}
\end{align*}
$$
where $\beta$ and $\gamma$ are to be determined (although one may turn out to be free).
In this example,
$$
\begin{align*}
0 = k^{\gamma-\beta} \frac{ \partial u }{ \partial t } + 6k^{2\gamma-1} u \frac{ \partial u }{ \partial t }  + k^{\gamma-3}\frac{ \partial^{3} u }{ \partial x^{3} } 
\end{align*}
$$
In order for this to still be a solution, the coëfficients must be equal
$$
\begin{align*}
k^{\gamma-\beta} = k^{2\gamma-1} &= k^{\gamma-3} \\
\implies \gamma-\beta = 2\gamma -1 &= \gamma-3
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr

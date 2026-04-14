---
tags:
  - public
---
[[Fundamental theorem of calculus]]
# Green's theorem
**Green's theorem** is a generalisation of the [[Fundamental theorem of calculus]]
for evaluating a [[Double integral]].
It is a special case of [[Stokes's theorem]] and [[Острогра́дский's divergence theorem]] in two dimensions,
relating “two-dimensional curl” and [[Circulation]].
It is similar to the [[Fundamental theorem for line integrals]],
in that one integral is lost by moving from a field to its potential,
but in this case it is a [[Incompressible vector field|vector potential]].

Let $D$ be a region bounded by a positively oriented, piecewise smooth, simple closed curve in the plane.
If $P$ and $Q$ have continuous partial derivatives on an open region that contains $D$, then #m/thm/calculus 
$$
\iint_{D}{\left( \frac{ \partial Q }{ \partial x } - \frac{ \partial P }{ \partial y }  \right)\,dA}
=\oint_{\partial B}P\,dx+Q\,dy

$$
Note that the right hand side is equivalent to the circulation integral $\Gamma$.[^2016]


[^2016]: 2016\. [[Sources/@stewartCalculus2016|Calculus]], p. 1136

## Extended version
Green's theorem may be extended to a set difference of simply connected regions $A$ and $B$ where $A \subset B$
$$
\begin{align*}
\iint_{B \setminus A}{\left( \frac{ \partial Q }{ \partial x } - \frac{ \partial P }{ \partial y }  \right)\,dA}
=
\oint_{\partial B}P\,dx+Q\,dy
- \oint_{\partial A}P\,dx+Q\,dy
\end{align*}
$$
the principle here being that a "cut" may be made which cancels itself out 
(since it is traversed between $\partial B$ and $\partial A$ in both directions).

## Practice problems
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 1141–1143 (§16.4 exercises)
- 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 44 (§2 problems 1–4)

#
---
#state/develop | #lang/en | #SemBr | #review

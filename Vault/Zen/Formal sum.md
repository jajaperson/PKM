---
tags:
  - public
aliases:
  - formal series
---
[[Formal calculus MOC]]
# Formal sums

Generally, **formal sums** are purely formal, i.e. notational, invocations of infinite sums, without considering convergence &c.
Specifically, a formal sum #m/def/fcalc 
$$
\begin{align*}
\sum_{s \in S} a_{s} x^s \in R^{S;x} \cong R^S
\end{align*}
$$
with coëfficients in $R$ and exponents in $S$
may be identified with a function
$$
\begin{align*}
a : S &\to R \\
s &\mapsto a_{s}
\end{align*}
$$
The **formal variable** $x$ is then simply a bookkeeping device.
In most applications, $R$ is a [[commutative monoid]],
in which case $R^{S;x}$ is a [[commutative monoid]] under pointwise addition,
and in many cases the structure is richer.

## Special cases

- [[Series ring]]: For a ring $R$, we have $R[[x]] = R^{\mathbb{N}_{0};x}$
- [[Formal sums over a vector space]]: $V \{ x \} = V^{\mathbb{K};x}$

## See also

- [[Generalized binomial coëfficient]]

#
---
#state/develop | #lang/en | #SemBr

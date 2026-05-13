---
aliases: Local minimum, Local maximum
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Local extrema
Local extrema are either **local minima** or **local maxima**.
Every extremum is a [[Critical point]], but not the converse.

Put simply, a point is a local minimum of a function $f$
iff. all points in the immediate neighbourhood are greater,
and vice versa for maxima.
More formally, we say $c$ is a local minimum iff.
$$
\begin{align*}
\exists{\epsilon \in (0, \infty)}\ .\ \forall{x \in (c - \epsilon, c + \epsilon)}\ .\ f(x) > f(c)
\end{align*}
$$
and a maximum iff.
$$
\begin{align*}
\exists{\epsilon \in (0, \infty)}\ .\ \forall{x \in (c - \epsilon, c + \epsilon)}\ .\ f(x) < f(c)
\end{align*}
$$
The **absolute extrema** are guaranteed to exist for certain functions and domains —
see [[Extreme Value Theorem]].


## First derivative test
For any critical point $c$,
$f'(c) = 0$.
See [[Critical point]] on classifying critical points.

---
#state/develop | #SemBr 

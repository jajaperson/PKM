---
tags:
  - public
---
[[Tests for series divergence]]
# Ratio test for absolute convergence
The **ratio test** for [[Absolute and conditional convergence|absolute divergence]] of infinite series $\sum_{ n = 1 }^{ \infty } a_{n}$
uses the limit of the magnitude of the ratio of subsequent terms in a series
to bound the (absolute) series [[Geometric series|geometrically]]
and therefore deduce absolute convergence.
Using the ratio
$$
\begin{align*}
L = \lim_{ n \to \infty } \abs{\frac{a_{n+1}}{a_{n}}}
\end{align*}
$$
it can be shown[^2022] that for

1. **$L < 1$** the series $\sum_{ n = 1 }^{ \infty } a_{n}$ is [[Absolute and conditional convergence|absolutely convergent]].
2. **$L > 1$** the series $\sum_{ n = 1 }^{ \infty } a_{n}$ is divergent[^div]
3. **$L = 1$** no information is given.

Note that in the case of [[Absolute and conditional convergence|conditional convergence]], $L = 1$.

  [^div]: This already follows from the [[Test for divergence by sequence limit]].
  [^2022]: 2022\. [[Sources/@bassomMATH1012MathematicalTheory2022|MATH1012: Mathematical theory and methods]], pp. 129ff

#
---
#state/tidy | #SemBr

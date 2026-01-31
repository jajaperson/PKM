---
aliases:
  - absolute convergence
  - absolutely convergent
  - absolute divergence
  - absolutely divergent
  - conditional convergence
  - conditionally convergent
  - absolutely and conditionally divergent
tags:
  - public
---
[[Infinite series]]
# Absolute and conditional convergence

A series $\sum_{k=1}^\infty a_{k}$ in a [[normed vector space]] $V$ converges **absolutely** iff the series $\sum_{k=1}^\infty \|a_{k}\|$ converges. #m/def/anal 

## Real or complex

Given any series $\sum_{ n = 1 }^{ \infty } a_{n}$, the series is said to be **absolutely convergent** iff
$$
\begin{align*}
\sum_{ n = 1 }^{ \infty } \abs{a_{n}}
\end{align*}
$$
converges.
It can be shown that whenever a series is absolutely convergent the series itself is convergent.
However, as can be seen with the [[Alternating series test]],
some absolutely divergent series are convergent,
and these are said to be **conditionally convergent**.
The [[Ratio test for absolute convergence]] is a valuable tool for showing a series is absolutely convergent.

### Terminology
- conditionally convergent $\implies$ convergent, but absolutely divergent
- absolutely convergent $\implies$ convergent
- divergent $\implies$ absolutely and conditionally divergent


#
---
#state/develop | #SemBr | #lang/en

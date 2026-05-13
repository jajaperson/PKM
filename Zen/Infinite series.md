---
aliases: series
tags:
  - public
---
[[Mathematics MOC]]
# Infinite Series
An **infinite series** is a summation across an infinite [[sequence]] $(a_{n})_{n=1}^\infty$,
where if $s_n$ is the partial sum up to the $n$th term
$$
\begin{align*}
s = \sum_{k=1}^\infty a_{k}
=
\lim_{ n \to \infty } s_{n} = \lim_{ n \to \infty } \sum_{k=1}^n a_{k}
\end{align*}
$$
An infinite series is said to be convergent precisely when the above limit converges,
and divergent when the limit does not exist.
See [[Tests for series divergence]].
Another important concept is [[Absolute and conditional convergence]].

## Examples
Well known infinite series include
- The [[Geometric series]] $\sum_{n=0}^\infty r^n$, 
  convergent for $\abs{r} < 1$
  with value $s = \frac{1}{1-r}$
- The [[𝑝-series]] $\sum_{n=1}^\infty \frac{1}{n^p}$, convergent for $p > 1$.
- [[Alternating series]] are a group of series which alternate between positive and negative terms.
- [[Power series]] are a ubiquitous way of constructing $\aleph_{0}$-order polynomials using an underlying infinite sequence.
- [[Fourier series]] are a way to represent periodic functions as the sum of sines and cosines.

#
---
#state/tidy | #SemBr

---
tags:
  - public
---
[[Tests for series divergence]]
# Test for divergence by sequence limit
The **test for divergence** is based on the observation that if the [[Convergence|limit of a sequence]] is not $0$,
the corresponding series must diverge.
$$
\begin{align*}
\lim_{ n \to \infty } a_{n} = 0 \impliedby \sum_{ n = 1 }^{ \infty } a_{n} \in \mathbb{R}
\end{align*}
$$
Clearly, if $\lim_{ n \to \infty } a_n = \ell \neq 0$,
then for sufficiently large $n$ the series is approximated by the trivially divergent $\sum_{n=1}^\infty \ell$.

Note that the implication only goes one way.
A sequence term limit of $0$ is not sufficient to show a series converges.
For example, the [[𝑝-series|harmonic series]] does not converge.

#
---
#state/tidy | #SemBr

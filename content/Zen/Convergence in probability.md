---
aliases:
  - converges in probability
tags:
  - public
---
[[Convergence concepts in probability MOC]]
# Convergence in probability

A sequence $(X_i)_{i=1}^\infty$ of [[real random variable|real random variables]] is said to **converge in probability** to $X$ iff either of the equivalent conditions are met for all $\epsilon > 0$: #m/def/prob 
$$
\begin{align*}
\lim_{ i \to \infty } \mathbb{P}(|X_{i}-X| >\epsilon) &= 0 \\
\lim_{ i \to \infty } \mathbb{P}(|X_{i}-X | < \epsilon) &= 1
\end{align*}
$$
This is precisely [[convergence]] under the [[Ky Fan metric]].

#
---
#state/tidy | #lang/en | #SemBr

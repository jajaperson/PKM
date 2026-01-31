---
tags:
  - public
aliases:
  - almost sure convergence
  - converges almost surely
---
[[Convergence concepts in probability MOC]]
# Convergence almost surely

**Convergence almost surely** is [[convergence almost everywhere]] on [[Real random variable|real random variables]]. #m/def/prob 
A sequence $(X_i)_{i=1}^\infty$ of real random variables converges almost surely to a real random variable $X$ iff
$$
\begin{align*}
\mathbb{P}\left( \lim_{ i \to \infty }X_{i} = X  \right) = 1
\end{align*}
$$
which is equivalent to either of the following conditions holding for all $\epsilon>0$
$$
\begin{align*}
\mathbb{P}\left( \lim_{ i \to \infty }|X_{n}-X| < \epsilon  \right)&= 1 \\
\lim_{ i \to \infty } \mathbb{P}\left( \sup_{j \geq i} |X_{i} - X| > \epsilon \right) &= 0 \\
\sum_{i=1}^\infty \mathbb{P}(|X_{i}-X|>\epsilon) &< \infty
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

## Properties

- See [[Convergence concepts in probability MOC#Relation between convergence concepts]]

#
---
#state/develop | #lang/en | #SemBr
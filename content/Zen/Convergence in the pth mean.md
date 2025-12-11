---
tags:
  - public
mathLink: Convergence in the $p$th mean
---
[[Convergence concepts in probability MOC]]
# Convergence in the $p$th mean

**Convergence in the $p$th mean** is simply [[convergence]] in the [[Lebesgue space]] $L^p(\xi,\mathbb{P})$ of [[Real random variable|real random variables]]. #m/def/prob 
If $(X_i)_{i=1}^\infty$ is a sequence of real random variables and $X$ is a real random variable,
for each of which the $p$-norm $\Ex[|X|^p]$ exists,
then $X_{\bullet} \stackrel{L^p}{\to} X$ iff
$$
\begin{align*}
\lim_{ i \to \infty } \Ex[|X_{i}-X|^p] = 0
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr 
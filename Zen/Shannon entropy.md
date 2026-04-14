---
tags:
  - public
---
[[Information theory MOC]]
# Shannon entropy

The **Shannon entropy** or **information-theoretic entropy** of a discrete [[General random variable|random variable]] $X : \xi \to M$ is the [[Expectation]] of its [[Shannon information]] $I_{X}$, #m/def/info
$$
\begin{align*}
H[X] &= \Ex[I_{X}(X)] = - \sum_{x \in M} p_{X}(x) \log_{b} p_{X}(x)
\end{align*}
$$
where $b=2$ corresponds to the unit $\pu{Sh}$, $b=e$ corresponds to the unit $\pu{nat}$,
and $b=10$ corresponds to the unit $\pu{Hart}$.
Shannon entropy is closely related to thermodynamic [[entropy]].

#
---
#state/develop | #lang/en | #SemBr

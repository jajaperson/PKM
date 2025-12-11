---
tags:
  - public
---
[[Probability theory MOC]]
# Ky Fan metric

The **Ky Fan metric** is a [[Metric space|metric]] $d : \mathrm{RV} \times \mathrm{RV} \to \mathbb{R}$ on the space of [[Real random variable|real random variables]] defined by #m/def/prob 
$$
\begin{align*}
d(X,Y)  &= \inf \{ \epsilon > 0 : \mathbb{P}(|X-Y| > \epsilon) \leq \epsilon \} \\
&= \Ex[\min (|X-Y|, 1)]
\end{align*}
$$
The [[convergence]] given by the Ky Fan metric is precisely [[Convergence in probability]].

> [!missing]- Proof
> #missing/proof
#
---
#state/develop | #lang/en | #SemBr

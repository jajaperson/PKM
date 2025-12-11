---
aliases:
  - essential supremum
  - essential infimum
tags:
  - public
---
[[Measure theory MOC]]
# Essential supremum and infimum

The **essential supremum** and **infinimum** of a [[measurable function]] $f : X \to Y$[^Y] are the [[Poset|supremum and infimum]] of a function [[almost everywhere]], #m/def/measure i.e.
$$
\begin{align*}
\mathrm{ess}\sup f &= \inf \{ C \in Y : \mu(\{ s \in X : f(s) > C \}) = 0 \} \\
\mathrm{ess}\inf f &= \sup \{ C \in Y : \mu(\{ s \in X : f(s) < C \}) = 0 \}
\end{align*}
$$

  [^Y]: Typically $Y=\mathbb{R}$, but it may be any ordered measure space.

#
---
#state/tidy | #lang/en | #SemBr

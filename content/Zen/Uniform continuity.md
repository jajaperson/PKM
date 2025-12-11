---
aliases:
  - uniformly continuous
tags:
  - public
---
[[Analysis MOC]]
# Uniform continuity

**Uniform continuity**[^de] is a stronger notion than [[continuity]] in [[Metric space|metric spaces]].
A function $f : X \to Y$ between metric spaces is **uniformly continuous** iff for every $\epsilon > 0$ there exists $\delta(\epsilon) > 0$ such that #m/def/anal 
$$
\begin{align*}
d_{X}(x,y) < \delta(\epsilon) \implies d_{Y}(f(x), f(y)) < \epsilon
\end{align*}
$$
[^de]: German _gleichmäßige Stetigkeit_.

## Properties

- [[Heine-Cantor theorem]] — Continuous functions with compact domain are uniformly continuous.

#
---
#state/tidy | #lang/en | #SemBr

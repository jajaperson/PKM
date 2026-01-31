---
tags:
  - public
---
[[Graded vector space]]
# Tensor product of graded vector spaces

Let $V, W$ be $\mathfrak{A}$-[[graded vector space|graded vector spaces]] over $\mathbb{K}$ for some [[monoid]] $(\mathfrak{A}, +)$.
The **tensor product** $V \otimes W$ is the [[Tensor product of vector spaces over a field]] with the unique $\mathfrak{A}$-[[Graded vector space|gradation]] specified by #m/def/linalg
$$
\begin{align*}
V_{\alpha} \otimes W_{\beta} \leq (V \otimes W)_{\alpha + \beta}
\end{align*}
$$
for all $\alpha,\beta \in \mathfrak{A}$.
This extends to any finite number of factors inductively.

> [!missing]- Proof of uniqueness
> #missing/proof

## Properties

1. The [[Degree operator]] is given by $d_{V \otimes W} = d_{V} \otimes 1 + 1 \otimes d_{W}$.

#
---
#state/develop | #lang/en | #SemBr

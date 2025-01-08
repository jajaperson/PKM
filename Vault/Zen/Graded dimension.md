---
tags:
  - public
---
[[Graded vector space]]
# Graded dimension

Let $V = \bigoplus_{\alpha \in S} V_{\alpha}$ be an $S$-[[graded vector space]].
Then $V$ has a **graded dimension** iff $\dim V_{\alpha} < \infty$ for all $\alpha \in S$
and it is given by the [[Formal sums]][^1988] #m/def/linalg 
$$
\begin{align*}
\dim_{*}(V;x) = \sum_{\alpha \in S} (\dim V_{\alpha}) x^\alpha \in \mathbb{N}^{S;x}
\end{align*}
$$
where $\mathbb{N} \{ x;S \}$ is a sort of [[rig]] of functions.

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.10, p. 42

## Properties

The following hold when they are well-defined

1. [[Quotient graded vector space]]: $\dim_{*}(V/W) = \dim_{*} V - \dim_{*}W$ ^P1
2. [[Direct sum of graded vector spaces]]: $\dim_{*} \bigoplus_{i \in I} V^i = \sum_{i \in I} \dim_{*}V^i$ ^P2

In addition, if $V,W$ are $\mathfrak{A}$-graded where $(\mathfrak{A},+)$ is a [[monoid]],

3. [[Tensor product of graded vector spaces]]: $\dim_{*}(V \otimes W) = (\dim_{*}V)(\dim_{*}W)$ ^P3
4. [[Shifted graded module]]: Under the shifting $V_{\alpha} \mapsto V_{\alpha + \beta}$ we have $(\dim_{*} V)_{{\text{new}}} = x^\beta(\dim_{*} V)_{\text{old}}$

#
---
#state/develop | #lang/en | #SemBr

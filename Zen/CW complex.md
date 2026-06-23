---
date: 2026-06-04
tags:
  - public
---
[[Topology MOC]]
# CW complex

An $n$-dimensional <dfn>CW complex</dfn> $X_n$ is a [[topological space]] formed by gluing $n$-cells ($n$-[[Disc space|discs]], up to homeomorphism) at their boundaries to a “skeleton” $(n-1)$-dimensional CW complex $X_{n-1}$.
$$
\begin{align*}
\0 = X_{-1} \hookrightarrow X_{0} \hookrightarrow X_{1} \hookrightarrow \cdots
\end{align*}
$$
More formally, given an indexed family of continuous maps $\varphi_{\alpha} : \mathbb{S}^{n - 1} \to X_{n-1}$,
we form $X_{n}$ as the [[Fibre product and coproduct|fibre coproduct]]

![[multicellular-attachment.svg#invert|c]]

i.e. the [[Quotient topology|quotient space]]
$$
\begin{align*}
X_{n} = \frac{X_{n-1} \amalg  \coprod_{\alpha} \mathbb{D}_{n}}{\sim}
\end{align*}
$$
by the relation induced by  $\iota_{\alpha}(x) \sim \varphi_{\alpha}(x)$ for all $x \in \mathbb{S}^{n-1} = \partial \mathbb{D}^{n}$.
A more general (i.e. possibly infinite dimensional) CW complex is the [[Limits and colimits|colimit]] of a sequence of CW complexes. #m/def/topology 

#
---
#state/tidy | #lang/en | #SemBr

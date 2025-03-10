---
tags:
  - public
---
[[Filtered algebra]]
# Associated graded algebra

Let $A$ be a [[filtered algebra]] over $\mathbb{K}$ with filtration $(F_{i}A)_{i=1}^\infty$.
The **associated graded algebra** $G_{\bullet}A$ is the [[direct sum of vector spaces]] $\bigoplus_{i=1}^\infty G_{i}A$ where $G_{0}A = F_{0}A$ and $G_{i+1}A = F_{i+1}A / F_{i} A$^[[[Quotient vector space]]]
with multiplication given by #m/def/falg
$$
\begin{align*}
(x + F_{i}A) \cdot (y + F_{j}A) = x \cdot y + F_{i+j}A
\end{align*}
$$
for $x \in F_{i+1}A$ and $y \in F_{j+1}A$.

#
---
#state/develop  | #lang/en | #SemBr

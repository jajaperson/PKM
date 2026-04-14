---
tags:
  - public
---
[[Inner product space]]
# Parallelogram law

A [[normed vector space]] $V$ over $\mathbb{K} =\mathbb{C}$ or $\mathbb{K} =\mathbb{R}$ 
is induced by a unique [[Inner product space|inner product]] iff it satisfies the **parallelogram law** #m/thm/anal/vec
$$
\begin{align*}
2 \|x\|^2 + 2 \|y\|^2 = \|x+y\|^2 + \|x-y\|^2
\end{align*}
$$
for all $x,y \in V$ ,
where the unique inner product is given by the **polarization identity**
$$
\begin{align*}
\braket{ y | x } = \frac{\|x+y\|^2 - \|x-y\|^2}{4} + \underbrace{ i \frac{\|ix-y\|^2 - \|ix+y\|^2}{4}  }_{ \text{for $\mathbb{K}=\mathbb{C}$} }
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

## Further properties

1. The parallelogram law is equivalent to the inequality $2 \|x\|^2 + 2 \|y\|^2 \leq \|x+y\|^2 + \|x-y\|^2$ by $x \leftarrow \frac{1}{2}(x+y)$, $y \leftarrow \frac{1}{2}(x-y)$.


## Corollaries

- [[Lebesgue space forms an inner product space iff p=2]]

#
---
#state/develop | #lang/en | #SemBr

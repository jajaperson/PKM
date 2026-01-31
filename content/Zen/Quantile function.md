---
tags:
  - public
---
[[Cumulative distribution function]]
# Quantile function

The **quantile function** or **(generalized) inverse distribution function** of a [[real random variable]] with [[cumulative distribution function]] $F : \mathbb{R} \to [0,1]$ is defined as #m/def/prob 
$$
\begin{align*}
F^{-1} : (0,1) &\to \mathbb{R} \\
p &\mapsto \inf \{ x \in \mathbb{R} : F(x) \geq p \}
\end{align*}
$$
and is thus a left inverse of $F$.

> [!check]- Proof of left-inverse
> Note that since $F$ is monotone increasing, $F(y) \geq F(x)$ implies $y \geq x$, so
> $$
> \begin{align*}
> F^{-1}F(x) &= \inf \{  y \in \mathbb{R} : F(y) \geq F(x) \}  = x
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

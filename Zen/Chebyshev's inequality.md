---
tags:
  - public
---
[[Probability theory MOC]]
# Chebyshev's inequality

Let $X : \xi \to \mathbb{R}$ be a [[real random variable]] with mean $\mu$ and variance $\sigma^2$.
Then for any $a > 0$ #m/thm/prob 
$$
\begin{align*}
\mathbb{P}(|X - \mu| \geq a) \leq \frac{\sigma^2}{a^2}
\end{align*}
$$

> [!check]- Proof
> By [[Markov's inequality]]
> $$
> \begin{align*}
> \mathbb{P}((X-\mu)^2 \geq a^2) = \frac{\Ex[(X-\mu)^2]}{a^2}
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Probability theory MOC]]
# Markov's inequality

For any [[real random variable]] $X : \xi \to \mathbb{R}$ and $a \geq 0$ we have #m/thm/prob 

$$
\begin{align*}
\mathbb{P}(|X| \geq a) \leq \frac{\Ex[|X|]}{a}
\end{align*}
$$

> [!check]- Proof
> Since $|X| \geq a 1_{\{ |X| \geq a \}}$ and therefore
> $$
> \begin{align*}
> \Ex[|X|] \geq a \Ex[1_{\{ |X| \geq a \}}] = a \mathbb{P}(|X| \geq a)
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

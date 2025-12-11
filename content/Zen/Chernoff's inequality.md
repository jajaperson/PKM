---
tags:
  - public
---
[[Probability theory MOC]]
# Chernoff's inequality

Let $X : \xi \to \mathbb{R}$ be a [[real random variable]] and $a \geq 0$ and $t \geq 0$.
Then #m/thm/prob 
$$
\begin{align*}
\mathbb{P}(X \geq a) 
\leq \frac{\Ex[\mathrm{e}^{tX}]}{\mathrm{e}^{ta}}
\end{align*}
$$

> [!check]- Proof
> By [[Markov's inequality]]
> $$
> \begin{align*}
> \mathbb{P}(\mathrm{e}^{tX} \geq \mathrm{e}^{ta}) \leq \frac{\Ex[\mathrm{e}^{tX}]}{\mathrm{e}^{ta}}
> \end{align*}
> $$
> as required. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

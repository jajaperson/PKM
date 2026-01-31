---
tags:
  - public
---
[[Exponential distribution]]
# Minimum of independent exponentially distributed random variables

Let $T_{j} \sim \Exp(\lambda_{j})$ be [[Independence of random variables|independently distributed]] for $j \in \mathbb{N}_{n}$
and $T = \min \{ L_{j} \}_{j=1}^n$.
Then $T \sim \Exp\left( \sum_{j=1}^n T_{j} \right)$. #m/thm/prob 

> [!check]- Proof
> Consider the [[Survival function]] of $T$:
> $$
> \begin{align*}
> \mathbb{P}(T > t) &= \mathbb{P}\left(\min \{ T_{j} \}_{j=1}^n > t\right) \\
> &= \mathbb{P}\left(\bigcap_{j=1}^n \{ T_{j } > t \}\right) \\
> &= \prod_{j=1}^n \mathbb{P}(T_{j} > t) \\
> &= \prod_{j=1}^n \exp (-\lambda_{j}t) \\
> &= \exp \left( -t \sum_{j=1}^n \lambda_{j} \right) 
> \end{align*}
> $$
> as required. <span class="QED"/>

Considering a [[Poisson process]], this result is intuitive.

#
---
#state/tidy | #lang/en | #SemBr

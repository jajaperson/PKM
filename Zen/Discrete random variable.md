---
tags:
  - public
---
---
alias: probability mass function
---
[[Real random variable]]
# Discrete random variable
A **discrete random variable** is a [[Real random variable]] with a range $R$ of cardinality $\leq \aleph_{0}$, #m/def/prob 
that is a set of either finite size or with a bijection to the natural numbers.
For any discrete random variable $X$ it is possible to define a **probability mass function** $p_X : \mathbb{R} \to \mathbb{R}$ such that
$$
\begin{align*}
p_{X}(x) = \mathbb{P}(X = x)
\end{align*}
$$
from which it follows the series
$$
\begin{align*}
\sum_{x \in \mathrm{supp}(X)}p_{X}(x) = 1
\end{align*}
$$
Similarly we may define the [[Cumulative distribution function]] of a discrete random variable 
(See [[Variable distribution equivalence]]).

## Distributions
The most common distributions of discrete random variables are
- [[Bernoulli trial]]
- [[Binomial distribution]]
- [[Hypergeometric distribution]]
- [[Discrete uniform distribution]]
- [[Geometric distribution]]
- [[Negative binomial distribution]]
- [[Negative hypergeometric distribution]]
- [[Poisson distribution]]

|                 | with replacement                   | without replacement                      |
| --------------- | ---------------------------------- | ---------------------------------------- |
| fixed trials    | [[Binomial distribution]]          | [[Hypergeometric distribution]]          |
| fixed successes | [[Negative binomial distribution]] | [[Negative hypergeometric distribution]] |
| until success   | [[Geometric distribution]]         |                                          |

#
---
#state/tidy | #SemBr

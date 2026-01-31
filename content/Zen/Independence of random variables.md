---
tags:
  - public
aliases:
  - independent random variables
  - independently distributed
  - independent and identically distributed
---
[[Real random variable]]
# Independence of random variables
Two or more random variables may be defined as **independent** 
in much the same way as [[Independence of events|events]].
Some random variables $X_{i}: \xi \to \mathbb{R}$ for $i = 1,\dots, n$ are independent iff #m/def/prob 
$$
\begin{align*}
\mathbb{P}\left(\bigcap_{i=1}^n \{ X_{i} \leq x_{i} \}\right) = \prod_{i=1}^n \mathbb{P}(X_{i}\leq x_{i})
\end{align*}
$$
for all $\{ x_{i} \}_{i=1}^n \sube \mathbb{R}$,
i.e. the [[Joint cumulative distribution function|joint CDF]] is the product of individual [[Cumulative distribution function|CDFs]]

> [!tip] Discrete random variables
> In the case of [[Discrete random variable|discrete random variables]] the above is equivalent to
> $$
> \begin{align*}
> \mathbb{P}\left(\bigcap_{i=1}^n \{ X_{i} = x_{i} \}\right) = \prod_{i=1}^n \mathbb{P}(X_{i}= x_{i})
> \end{align*}
> $$
> for all $\{ x_{i} \}_{i=1}^n \sube \mathbb{R}$.

A common phrase is **independent and identically distributed**, often abbreviated as **i.i.d.**.

## Conditional independence

Random variables $\{ X_{i} \}_{i=1}^n$ are **conditionally independent** given a random variable $Y$ iff
$$
\begin{align*}
\mathbb{P}\left(\bigcap_{i=1}^n \{ X_{i} \leq x_{i} \mid Y = y \}\right) = \prod_{i=1}^n \mathbb{P}(X_{i}\leq x_{i} \mid Y = y)
\end{align*}
$$
for all $\{ x_{i} \}_{i=1}^n \sube \mathbb{R}$ and $y \in \mathrm{supp}(Y)$.

#
---
#state/tidy | #SemBr | #lang/en
---
aliases:
  - Erwartungswert
  - mean
mathLink-blocks:
  P2: linearity
tags:
  - public
---
[[Real random variable]]
# Expectation
The **expectation** $\mu_{X} =\Ex[X] = \langle X \rangle$ of a [[Real random variable]] $X$
may be thought of as the value which the variable is most likely to be close to.
It has different but similar definitions for a [[#Discrete variable]] and a [[#Continuous variable]].


## Discrete variable
For a [[Discrete random variable]] $X$ 
the expected value $\Ex[X]$ is defined as follows
$$
\begin{align*}
\Ex[X] = \sum_{x \in \mathrm{supp}[X]}{xp_{X}(x)}
\end{align*}
$$
Expectation value may also be found by summing the [[Survival function]]
$$
\begin{align*}
\Ex[X] = \sum_{n=0}^\infty \mathbb{P}[X>n]
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

## Continuous variable
For a continuous random variable [[Continuous random variable]] $X$ 
the expected value $\Ex[X]$ is defined as follows
$$
\begin{align*}
\Ex[X] = \int_{-\infty}^{\infty} xf_{X}(x) \, dx 
\end{align*}
$$

## Properties

The expected value has the following useful properties,
where $X$ and $Y$ are random variables (possibly dependent)
and $a,b$ are constants.
1. $\Ex[a] = a$ ^P1
2. $\Ex[aX+bY] = a\Ex[X]+b\Ex[y]$ ^P2
3. $\Ex[XY] = \Ex[X]\Ex[Y]$ for [[Independence of random variables|independently distributed]] $X,Y$ ^P3

> [!check]- Proof of 3
> Since
> $$
> \begin{align*}
> \Ex[XY] &= \int_{-\infty}^{\infty} xy \,d\mathbb{P}(XY = xy) \\&= \int_{-\infty}^{\infty} x \, d\mathbb{P}(X=x) \int_{-\infty}^{\infty} y \, d\mathbb{P} (Y=y) \\&= \Ex[X]\Ex[Y]
> \end{align*}
> $$
> as required by [[#^P3]]. <span class="QED"/>

See also

- [[Law of the unconscious statistician]]



#
---
#state/tidy | #SemBr

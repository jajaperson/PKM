---
tags:
  - public
---
[[Continuous random variable]]
# Gamma distribution

A **gamma distributed** random variable $Y \sim \mathrm{Gamma}(a,\lambda)$ where $a,\lambda>0$ is described by the [[probability density function]] #m/def/prob 
$$
\begin{align*}
f_{Y}(y) = \frac{\lambda^a}{\Gamma(a) } y^{a-1} \mathrm{e^{-\lambda y}}
\end{align*}
$$
where $\Gamma$ is the [[gamma function]].

## Properties

1. [[Expectation]]: $\Ex[Y] = \frac{a}{\lambda}$ ^P1
2. [[Standard deviation|Variance]]: $\Var[X] = \frac{a}{\lambda^2}$ ^P2
3. [[Statistical moment|Moments]]: $\Ex[Y^n] = \lambda^{-n} \frac{\Gamma(a+n)}{\Gamma(a)}$ for $n > -a$ ^P3

Furthermore

1. The sum of $a$ independent [[Exponential distribution|exponential]] random variables is $\mathrm{Gamm a}(a,\lambda)$ ^Q1
2. Conjugate prior to Poisson #to/elaborate 
3. A special case is the [[Chi-squared distribution]]

## Relationship to other distributions

- By the [[Central limits theorem]] for integer $n$, $\mathrm{Gamma}(n,\lambda) \rightsquigarrow \N\left( \frac{n}{\lambda}, \frac{n}{\lambda^2} \right)$ as $n \to \infty$.

#
---
#state/develop | #lang/en | #SemBr 
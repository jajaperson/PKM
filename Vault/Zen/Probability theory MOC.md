---
tags:
  - public
---
[[Mathematics MOC]]
# Probability Theory MOC
**Probability theory** concerns the axiomatisation of probability models.
Traditional models rely on the concepts of [[Set theory MOC]] and [[Measure theory MOC]].
It is often broken into the two branches of [[#discrete probability]] and [[#continuous probability]].

## Foundations
At the foundation of probability theory is the [[Probability model]] $(\xi, \mathcal{F}, \mathbb{P})$, a special kind of [[Measure space]] such that $\mathbb{P}(\xi)=1$
After this comes ideas such as
- [[Conditional probability]]
- [[Bonferroni inequalities]]
- [[Independence of events]]

By introducing the concept of a [[Real random variable]],
we can give defined values to different outcomes
and therefore make comparisons between them.
For all random variables we may speak of
- [[Cumulative distribution function]]
- [[Expectation]]
- [[Standard deviation]]
- [[Statistical moment]]
- [[Moment-generating function]]
- [[Probability-generating function]]

The [[Discrete random variable]] and [[Continuous random variable]] are starting points 
for [[#Discrete probability]] and [[#Continuous probability]] respectively.

## Discrete probability
Discrete probability concerns the [[Discrete random variable]].
Common distributions of such variables include
- [[Bernoulli trial]]
- [[Binomial distribution]]
- [[Poisson distribution]]
## Continuous probability
Continuous probability concerns the [[Continuous random variable]],
and so it uses many of the tools of [[Infinitesimal calculus MOC|calculus]] and [[Mathematics MOC#Analysis|analysis]].
Common distributions include
- [[Uniform distribution]]
- [[Exponential distribution]]
- [[Normal distribution]]

## Higher concepts

- [[Characteristic function (probability)]]
- [[Multivariate random variable]]
- [[Random function]]
  - [[Random function#Distribution|Distribution of a function]]
- [[Inequalities in probability MOC]]
- [[Convergence concepts in probability MOC]]

## Statistical inference
Using a probability model for any real-world applications involves the assumption that the parameters of a distribution are known.
Generally, this involves extrapolating from a [[Random sample]],
which may then be used to generate [[Statistic|statistics]],
some of which are [[Estimator|estimators]] —
both of which are a form of [[Real random variable]].
Importantly, the [[𝜇-estimator]] gives rise to the [[Central limits theorem]].

Another important aspect of statistical inference is the [[Statistical hypothesis]],
a guess on how a random variable is distributed.

#
---
#MOC | #state/tidy | #SemBr 
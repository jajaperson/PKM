---
tags:
  - public
---
[[Real random variable]]
# Continuous random variable
A **continuous random variable** is a [[Real random variable]] with a cumulative distribution function that is differentiable everywhere,
except maybe at the boundary. #m/def/prob 
Since each value of $x$ is on its own _massless_^[See [[Discrete random variable|probability mass function]].],
probabilities are considered instead along intervals.
The [[Probability density function]] $f_{X} : \mathbb{R} \to \mathbb{R}$ is the derivative of the [[cumulative distribution function]], whence by the [[fundamental theorem of calculus]]
$$
\begin{align*}
\mathbb{P}(a \leq X \leq b) = \int_{a}^{b} f_{X}(x) \, dx = F_{X}(b)-F_{X}(a)
\end{align*}
$$
Similarly we may define the [[Cumulative distribution function]],
which allows the [[Variable distribution equivalence|equivalence of distributions]].

## Distributions
The most common distributions of continuous random variables are
- [[Uniform distribution]]
- [[Exponential distribution]]
- [[Normal distribution]]
- [[Logistic distribution]]
- [[Rayleigh distribution]]
- [[Log-normal distribution]]
- [[Beta distribution]]
- [[Gamma distribution]] ([[Chi-squared distribution]])

#
---
#state/tidy | #SemBr | #lang/en

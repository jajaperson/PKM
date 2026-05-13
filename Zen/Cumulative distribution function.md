---
aliases: CDF
tags:
  - public
---
[[Real random variable]]
# Cumulative distribution function
A **cumulative distribution function** $F_{X}: \mathbb{R} \to \mathbb{R}$ (**CDF**) may be defined
for either a [[Discrete random variable]]
or a [[Continuous random variable]] such that
$$
\begin{align*}
F_{X}(t) = \mathbb{P}(X \leq t)
\end{align*}
$$
This can be used to find the probability of any range
$$
\begin{align*}
\mathbb{P}(a \leq X \leq b) = F_{X}(b) - F_{X}(b)
\end{align*}
$$
The cumulative distribution function has the following properties
1. $0 \leq F_{X}(t) \leq 1$ which follows from its definition in the context of the [[Probability model]].
2. $F_X$ is monotone increasing, i.e. $t_{1} \leq t_{2} \implies F_{X}(t_{1}) \leq F_{X}(t_{2})$, see below.
3. $\lim_{ t \to \infty }F_{X}(t) = 1$, see below.
4. $\lim_{ t \to -\infty } F_{X}(t) = 0$, see below.
5. Continuity varies between the discrete and continuous case,
   see below.

Random variables sharing the same CDF form equivalence classes under $\sim$.
See [[Variable distribution equivalence]].

A useful property of the CDF is that given any variable $X$ with CDF $F_X$
$$
\begin{align*}
F_{X} \circ X \sim \Un(0,1)
\end{align*}
$$
where $\Un(0,1)$ is the [[Uniform distribution|standard uniform distribution]].
This allows for [[Universality of the uniform distribution|Inverse transform sampling]].

## Discrete variable
For a [[Discrete random variable]],
the cumulative distribution function is defined using the [[Discrete random variable|probability mass function]] $p_{X}(x)$ such that
$$
\begin{align*}
F_{X}(t) = \sum_{x \leq t}p_{X}(x)
\end{align*}
$$
For a discrete variable $F$ is [[Left and right continuity|right-continuous]].

## Continuous variable
For a [[Continuous random variable]],
the cumulative distribution function is defined using the probability density function $f_{X}(x)$ such that
$$
\begin{align*}
F_{X}(t) = \int_{-\infty}^{t} f_{X}(x) \, dx 
\end{align*}
$$
For a continuous variable $F$ is [[Continuity|continuous]].

## Inverse

See [[Quantile function]].

#
---
#state/tidy | #SemBr

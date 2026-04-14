---
tags:
  - public
---
[[Probability theory MOC]]
# Real random variable
A **real random variable**^[German _Zufallsvariable_] assigns a numerical value to an experimental outcome,
that is world-state.
In this way a random variable $X$ in the [[Probability model]] $(\xi, \mathcal{F}, \mathbb P)$ may be identified with a $\mathbb{P}$-[[Measurable function|measurable]] function[^md]
$$
\begin{align*}
X: \xi \to \mathbb{R}
\end{align*}
$$

  [^md]: See also [[Multivariate random variable]] and the more [[General random variable]]

This turns out to be an incredibly useful concept,
since it allows for a very natural comparison between outcomes.
The notational convention is to use an uppercase letter $X$ for the random variable,
in which case $x$ is used for specific values.
Furthermore, $X$ itself is often used as a shorthand for $X(s)$ where $s \in \xi$ is the _actual outcome_ (world-state).
We can then define the probability of $X = x$ as follows
$$
\begin{align*}
\mathbb{P}(X = x) = \mathbb{P}(X(s) = x) = \mathbb{P}(\{ s \in \xi \mid X(s) = s \})
\end{align*}
$$
where a similar construction may be used for any other predicate.
This definition naturally gives way to the distinction between a [[Discrete random variable]]
and a [[Continuous random variable]]:

- The range of a [[Discrete random variable]] forms a set of cardinality $\leq \aleph_{0}$
- If the probability of any exact value $\mathbb{P}(X = x) = 0$ 
  then $X$ is a [[Continuous random variable]].
- Probability which are neither of these are _mixed variables_.
- One refers to values or ranges with nonzero probabilities as the [[Support of a map|support]] of $X$

For both of these it is possible to define the following

- [[Independence of random variables]]
- [[Cumulative distribution function]]
- [[Expectation]]
- [[Standard deviation]]

## Remarks

- A function of a random variable is a [[Random function]]
- [[Sum of independent random variables]]

#
---
#state/tidy | #SemBr | #lang/en 
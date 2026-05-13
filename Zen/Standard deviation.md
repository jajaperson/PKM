---
aliases: variance
tags:
  - public
---
[[Real random variable]]
# Variance and standard deviation
The **variance** of a random variable is defined as
$$
\begin{align*}
\sigma_{X}^2 = \Var(X) &= \langle \left( X-\langle X \rangle  \right) ^2 \rangle  \\
&= \langle X - 2\mu X + \mu^2 \rangle \\
&= \langle X \rangle - 2\mu \langle  X \rangle - \mu^2 \\ 
&= \langle X^2 \rangle - \langle X \rangle ^2
\end{align*}
$$
or in terms of [[Statistical moment|moments]]
$$
\begin{align*}
\sigma_{X}^2 = \Var(X) = \mu_{2} - \mu^2
\end{align*}
$$
and **standard deviation** as
$$
\begin{align*}
\sigma_{X} = \sqrt{ \Var(X) }
\end{align*}
$$
Both of these are a measure of the _spread_ of a random variable.

## Properties

1. $0 \geq \Var(X)$ ^P1
2. $\Var(aX + b) = a^2 \Var(X)$ ^P2
3. $\Var(X+Y) = \Var(X) + \Var(Y)$ given $X$ and $Y$ are [[Independence of random variables|independent]] ^P3

#
---
#state/tidy | #SemBr

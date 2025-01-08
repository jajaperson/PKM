---
aliases:
  - convergent sequence
  - divergent sequence
tags:
  - public
---
[[Topology MOC]]
# Convergence

A sequence $(a_n)_{n=1}^\infty$ in a [[topological space]] $(X, \mathcal{T})$ is **converges** to $a$[^de] iff
for every open neighbourhood $U$ of $a$,
there exists an integer $N$
such that $a_{n} \in U$ for all $n>N$.
#m/def/topology
We then write
$$
\begin{align*}
(a_{n}) \to a
\end{align*}
$$

[^de]: German _konvergiert gegen $a$_

Note that the [[Conditions for uniqueness of the limit|uniqueness of the limit]] is only guaranteed if the space is [[Hausdorff space|Hausdorff]] (in the [[Trivial topology]] every sequence converges to every point).

## In particular spaces

### Real numbers
Using a construction analogous to the [[Epsilon-Delta Construction of the Limit]],

> A real sequence $(a_{n})_{n=1}^\infty$ tends towards a limit $L$ iff. for every $\epsilon > 0$ there exists an integer $N$ such that $\abs{a_{n} - L} < \epsilon$ for all $n > N$.
> #m/def/calculus

The familiar language and properties of [[Limits (Calculus)]] applies
— particularly useful may be the [[Limit Laws]].

### Metric space
This can be extended to any [[metric space]] $(X, d)$

> A sequence $(a_{n})^\infty_{n=1}$ in $X$ tends towards a point $L \in X$ 
> iff. for every $\epsilon > 0$ 
> there exists an integer $N$ 
> such that $d(a_{n}, L) < \epsilon$ for all $n > N$,
> i.e. $a_{n} \in B_{\epsilon}(L)$ using the concept of an [[Open ball]].
> #m/def/anal

This definition is useful for defining the [[Limits in a function space]].
The concept of convergence in a metric space is generalised to the [[Cauchy sequence]].

## Particular real limits
The following limits are particularly useful[^2022]

1. For $\alpha > 0$
   $$
\begin{align*}
\lim_{ n \to \infty } \frac{\ln n}{n^\alpha} = 0
\end{align*}
$$
2. $$
\begin{align*}
\lim_{ n \to \infty } \sqrt[n]{n} = \lim_{ n \to \infty } n^{1/n} = 1
\end{align*}
$$
3. For any $a \in \mathbb{R}$
   $$
\begin{align*}
\lim_{ n \to \infty } \frac{a^n}{n!}=0
\end{align*}
$$
4. For every constant $a \in \mathbb{R}$
   $$
\begin{align*}
\lim_{ n \to \infty } \left( 1 + \frac{a}{n} \right)^n = e^a
\end{align*}
$$

[^2022]: 2022\. [[Sources/@bassomMATH1012MathematicalTheory2022|MATH1012: Mathematical theory and methods]], Theorem 8.2.1, p. 119

#
---
#state/tidy | #SemBr

---
tags:
  - public
---
[[Sequence]]
# Subsequence
A **sub-sequence** is the sequence one gets by skipping some of the elements of another sequence.
For example the sequence of odd numbers is the subsequence of the natural numbers gained by skipping the evens.
Alternatively, if one has an arbitrary infinite sequence $(a_{n})_{n=1}^\infty$ 
and a strictly increasing sequence of natural numbers $(n_{i})_{i=1}^\infty$,
one induces the subsequence of $a_{n}$
$$
\begin{align*}
\{a_{n_{i}}\}_{i=1}^\infty = \{a_{n_{1}}, a_{n_{2}, \cdots , a_{n_{i}}}\}
\end{align*}
$$
Sometimes one subsequence may be a [[Cauchy sequence]] or [[Convergence|convergent sequence]], and another may be divergent.

## Properties

If a sequence is convergent in a metric space $(X,d)$ with $\lim_{ n \to \infty }x_{n} = x$,
then any subsequence of $(x_{n})_{n=1}^\infty$ is convergent to $x$.

> [!check]- Proof
> Let $(x_{n_{i}})_{i=1}^\infty$ be a subsequence of $(x_{n})_{n=1}^\infty$ where $(n_{i})_{i=1}^\infty$ is an increasing sequence of natural numbers.
> Since $\lim_{ n \to \infty }x_{n} = x$, for any $\epsilon > 0$ there exists $N$ such that $x_{n} \in B_{\epsilon}(x)$ for all $n > N$.
> Let $M$ such that $n_{m} \geq N$ for all $m > M$.
> Then $x_{n_{m}} \in B_{\epsilon}(x)$ for all $m > M$,
> and thus $\lim_{ m \to \infty }x_{n_{m}} = x$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

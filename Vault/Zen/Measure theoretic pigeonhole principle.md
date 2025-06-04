---
tags:
  - public
---
[[Pigeonhole principle]]
# Measure theoretic pigeonhole principle

Let $X$ and $Y$ be [[measure space|measure spaces]] and $f : X \to Y$ be a [[measurable function]].
We call $f$ **finitely piecewise measure-preserving** iff there exists a partition $\{ X_{i} \}_{i=1}^n$ into measurable sets such that
$$
\begin{align*}
\mu(f(X_{i})) = \mu(X_{i})
\end{align*}
$$
for all $i \in \mathbb{N}_{n}$.
Given such a function, if $\mu(X) > \mu(f(X))$, then $f$ is not [[Surjectivity, injectivity, and bijectivity|injective]].[^2022] #m/thm/measure 

> [!check]- Proof
> If $f$ is injective then $f(X)$ is the disjoint union of the $f(X_{i})$ and we have
> $$
> \begin{align*}
> \mu(f(X)) = \sum_{i=1}^n \mu(f(X_{i})) = \sum_{i=1}^n \mu(X_{i}) = \mu(X)
> \end{align*}
> $$
> so the above condition suffices for non-injectivity. <span class="QED"/>

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶3.4, p. 61

#
---
#state/tidy | #lang/en | #SemBr

---
mathLink: $\mathbb{K}[x]$ is a Euclidean domain if $\mathbb{K}$ is a field.
aliases:
  - division algorithm for polynomials
tags:
  - public
---
[[Polynomial ring]]
# The polynomial ring over a field is a Euclidean domain

Let $\mathbb{K}$ be a [[field]] and $\mathbb{K}[x]$ be the [[polynomial ring]] in indeterminate $x$.
Then for any $f(x), g(x) \in \mathbb{K}[x]$ with $g(x) \neq 0$ there exist unique polynomials $q(x),r(x) \in \mathbb{K}[x]$ such that
$$
\begin{align*}
f(x) = q(x)g(x) + r(x)
\end{align*}
$$
and $\deg r(x) < \deg g(x)$.[^2017]
Thus the [[polynomial ring]] $\mathbb{K}[x]$ in indeterminate $x$ is a [[Euclidean domain]]. #m/thm/ring

> [!missing]- Proof
> #missing/proof

  [^2017]: 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], §16, p. 279

#
---
#state/develop | #lang/en | #SemBr

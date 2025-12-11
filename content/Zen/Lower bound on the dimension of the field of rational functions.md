---
tags:
  - public
---
[[Field of rational functions]]
# Lower bound on the dimension of the field of rational functions

Let $\mathbb{K}$ be a [[field]] and $\mathbb{K}(x)$ be its [[field of rational functions]] in indeterminate $x$.
Then the $\mathbb{K}$-[[Dimension of a vector space|dimension]] of $\mathbb{K}(x)$ is at least the [[cardinality]] of $\mathbb{K}$. #m/thm/ring
$$
\begin{align*}
|\mathbb{K}| \leq \dim_{\mathbb{K}} \mathbb{K}(x)
\end{align*}
$$
In particular, the following set [[Linear (in)dependence|linearly independent]]:
$$
\begin{align*}
S = \left\{  \frac{1}{x-\lambda}: \lambda \in \mathbb{K}  \right\}
\end{align*}
$$

> [!check]- Proof
> Let
> $$
> \begin{align*}
> f_{n}(x) = \frac{p_{n}(x)}{q_{n}(x)} = \sum_{i=1}^n \frac{1}{x-\lambda_{i}}
> \end{align*}
> $$
> where 
> $$
> \begin{align*}
> q_{n}(x) = \prod_{i=1}^n (x-\lambda_{i})
> \end{align*}
> $$
> then
> $$
> \begin{align*}
> f_{n+1}(x) = \frac{p_{n}(x)}{q_{n}(x)} + \frac{1}{x-\lambda_{n+1}} = \frac{p_{n}(x)(x-\lambda_{n+1})+q_{n}(x)}{q_{n}(x)(x-\lambda_{n+1})}
> \end{align*}
> $$
> which is zero iff $q_{n}(x) = -(x-\lambda_{n+1}) p_{n}(x)$.
> But this is impossible since $(x - \lambda_{n+1}) \not\mid q_{n}(x)$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

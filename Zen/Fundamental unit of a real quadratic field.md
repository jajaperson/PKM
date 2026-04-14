---
tags:
  - public
---
[[Real quadratic field]]
# Fundamental unit of a real quadratic field

Let $K = \mathbb{Q}(\sqrt{ d })$ be a [[Real quadratic field]]
and let $\vartheta \in K$ be a reduced element[^1] of discriminant $\Delta_{K:\mathbb{Q}}(\vartheta) = \Delta_{K:\mathbb{Q}}$ with [[simple continued fraction]]
$$
\begin{align*}
\vartheta = [\overline{a_{0}; a_{1}, \dots, a_{k}}]
\end{align*}
$$
with period $k$.
Then the **fundamental unit** of $\mathcal{O}_{K}$ is #m/thm/num/alg 
$$
\begin{align*}
\epsilon = q_{k-1} + q_{k} \, \vartheta,
\end{align*}
$$
which is to say by [[Dirichlet's unit theorem]] 
$$
\begin{align*}
\mathcal{O}_{K}^\times = \{ \pm \epsilon^m : m \in \mathbb{Z} \}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

## Monogenic case

If $d \equiv_{4} 2,3$ then one simple has
$$
\begin{align*}
\epsilon = p_{k} + q_{k} \sqrt{ d }
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

[^1]: i.e. such that the [[simple continued fraction]] is purely periodic, or equivalently, $-\frac{1}{\vartheta^\sigma} > 1$.

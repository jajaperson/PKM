---
tags:
  - public
---
[[Ring of integers of a number field]]
# Minkowski's bound

Let $\mathcal{O}_{K}$ be the [[ring of integers of a number field]] $K$.
Then any [[ideal]] $\mathfrak{a} \trianglelefteq \mathcal{O}_{K}$ contains a nonzero element $\alpha \in \mathfrak{a}$ such that
$$
\begin{align*}
\abs{\opn N (\alpha)} \leq M_{K} \opn N(\mathfrak{a})
\end{align*}
$$
where **Minkowski's bound** $M_K$ depends only on $K$ and is given by
$$
\begin{align*}
M_{K} = \sqrt{ \abs{\Delta_{K:\mathbb{Q}}} } \left( \frac{4}{\pi} \right)^{r_{2}} \frac{n!}{n^n}
\end{align*}
$$
where

- $\Delta_{K:\mathbb{Q}}$ is the [[Discriminant of a number field|discriminant]];
- $n = r_{1} + 2r_{2}$ is the [[Field extension|degree]] of $K : \mathbb{Q}$, $r_{1}$ and $(r_{1},r_{2})$ is the [[Signature of a number field|signature]] of $K$.[^2022]

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶¶3.9–3.12, pp. 63–64

> [!tip]- Proof sketch
> #missing/proof
> 
> We apply [[Minkowski's convex body theorem]] to the convex symmetric compact region
> $$
> \begin{align*}
> S = \left\{  (a_{1},\dots,a_{r_{1}}, x_{1}, y_{1}, \dots, x_{r_{2}}, y_{r_{2}} : \sum_{i=1}^{r_{1}} \abs{a_{i}} + 2 \sum_{i=1}^{r_{2}} \sqrt{ x_{i}^2 + y_{i}^2 } \leq n  \right\}
> \end{align*}
> $$
> which looks like
> 
> ![[Florian's Minkowski bound.png]]
> 
> in the complex case.

#
---
#state/develop | #lang/en | #SemBr

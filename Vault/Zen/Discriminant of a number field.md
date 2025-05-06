---
tags:
  - public
---
[[Number field]]
# Discriminant of a number field

Let $K$ be a [[number field]] of degree $n$ and $\{ \alpha_{i} \}_{i=1}^n$ be a [[The ring of integers of a number field forms a lattice|$\mathbb Z$-basis]] for its [[Ring of integers of a number field|ring of integers]] $\mathcal{O}_{K}$.
The **discriminant** $\Delta_{K}$ of $K$ is given by #m/def/num/alg
$$
\begin{align*}
\Delta_{K} := \Delta_{K:\mathbb{Q}}(\alpha_{1},\dots,\alpha_{n})
\end{align*}
$$
where the latter quantity is the [[discriminant of a separable extension]].
and is independent of the choice of integral basis.[^2022]

> [!missing]- Proof
> #missing/proof

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶2.2, p. 34

For a general $\mathbb{Q}$-basis $\{ \alpha_{i} \}_{i=1}^n$ of algebraic integers, we have
$$
\begin{align*}
\Delta_{K:\mathbb{Q}}(\alpha_{1},\dots,\alpha_{n}) = \abs{\frac{\mathcal{O}_{K}}{\mathbb{Z}\alpha_{1} + \dots + \mathbb{Z}\alpha_{n}}}^2 \Delta_{K}
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - fundamental theorem for finitely generated abelian groups
---
[[Free abelian group]]
# Subgroup of a free abelian group

Suppose $G$ is a [[free abelian group]] of rank $n$ and $H \leq_{\mathbb{Z}} G$.
Then: #m/thm/group 

1. $H$ is free of rank $m \leq n$;
2. There exists a basis $\{ \alpha_{i} \}_{i=1}^n$ for $G$ and integers $\{ c_{i} \}_{i=1}^m$ such that $\{ c_{i} \alpha_{i} \}_{i=1}^m$ forms a basis for $H$;
3. The [[Lagrange's theorem|Lagrange index]] $\abs{G / H}$ is finite iff $m = n$.

Moreover, if $m=n$ we have a change of basis $A \in \opn M_{n,n}(\mathbb{Z})$ from a basis $\{ \alpha_{i} \}_{i=1}^n$ of $G$ to $\{ \beta_{i} \}_{i=1}^n$ of $H$ such that
$$
\begin{align*}
\begin{bmatrix}
\beta_{1} \\
\vdots \\
\beta_{n}
\end{bmatrix} = A \begin{bmatrix}
\alpha_{1} \\
\vdots \\
\alpha_{n}
\end{bmatrix}.
\end{align*}
$$
Then $\abs{G / H} = \abs{\det A}$.[^2022]

> [!missing]- Proof
> #missing/proof

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶A.11, p. 144

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - discriminant
---
[[Separable extension]]
# Discriminant of a separable extension

Let $L : K$ be a finite [[separable extension]] of degree $n$, $\overline{K}$ be the [[Algebraic closure]] of $K$,
and $\{ \sigma_{i} \}_{i=1}^n$ be the distinct embeddings of $L$ into $\overline{K}$.
For some elements $\{ \alpha_{i} \}_{i=1}^n \subset L$,
the **discriminant** is defined as[^2022]
$$
\begin{align*}
\Delta_{L:K}(\alpha_{1},\dots,\alpha_{n}) = \det T(\alpha_{1},\dots,\alpha_{n})^2
\end{align*}
$$
where
$$
\begin{align*}
T(\alpha_{1},\dots,\alpha_{n}) =
\begin{bmatrix}
\sigma_{1}(\alpha_{1}) & \cdots & \sigma_{1}(\alpha_{n}) \\
\vdots & \ddots & \vdots \\
\sigma_{n}(\alpha_{1}) & \dots & \sigma_{n}(\alpha_{n})
\end{bmatrix}.
\end{align*}
$$
For $\alpha \in L$ we then define $\Delta_{L:K}(\alpha) = \Delta_{L:K}(1, \alpha, \dots, \alpha^{n-1})$.



  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], p. 23

## Properties

1. $\Delta_{L:K}(\alpha_{1},\dots,\alpha_{n}) \in K$ ^P1
2. $\Delta_{L:K}(\alpha_{1},\dots,\alpha_{n}) = 0$ iff $\alpha_{1},\dots,\alpha_{n}$ are linearly dependent over $K$. ^P2

> [!check]- Proof of 1–2
> By linearity of the embeddings $\{ \sigma_{i} \}_{i=1}^n$ we see that linearly dependent $\alpha_{1},\dots,\alpha_{n}$ give a singular matrix and therefore a zero discriminant.
> 
> Conversely, suppose $\{ \alpha_{i} \}_{i=1}^n$ form a $K$-[[Vector basis|basis]] for $L$.
> By the [[primitive element theorem]], $L = K(\vartheta)$ for some $\vartheta \in L$,
> so $\{ \vartheta^{i-1} \}_{i=1}^n$ also form a $K$-basis,
> so there exists a [[change of basis]] $P \in \GL_{n}(K)$ such that
> $$
> \begin{align*}
> \begin{bmatrix}
> \alpha_{1} \\
> \vdots \\
> \alpha_{n}
> \end{bmatrix} = P \begin{bmatrix}
> 1 \\
> \vdots \\
> \vartheta^{n-1}
> \end{bmatrix}
> \end{align*}
> $$
> whence also
> $$
> \begin{align*}
> \begin{bmatrix}
> \sigma_{i}\alpha_{1} \\
> \vdots \\
> \sigma_{i}\alpha_{n}
> \end{bmatrix} = P \begin{bmatrix}
> 1 \\
> \vdots \\
> \vartheta^{n-1}
> \end{bmatrix}
> \end{align*}
> $$
> for each $i$.
> Thus $T(\alpha_{1},\dots,\alpha_{n}) = T(\vartheta) \,\tp P$
> and $\Delta(\alpha_{1},\dots,\alpha_{n}) = (\det P)^2 \, \Delta(\vartheta)$.
> It therefore suffices to show that $0 \neq \Delta(\vartheta) \in K$.
> 
> Since $T(\vartheta)$ is a [[Vandermonde matrix]], the corresponding [[Vandermonde matrix|Vandermonde determinant]] is nonzero since each $\sigma_{i}(\vartheta)$ is distinct by separability — since these are precisely the roots of the minimal polynomial $m_{\vartheta}(x) \in K[x]$.
> It follows $\Delta \in K$ as required. <span class="QED"/>

### Special cases

- [[Discriminant of a number field]]
- [[Discriminant of an algebraic integer]]

## See also

- [[Absolute norm of an ideal of the ring of integers of a number field]]
- [[Discriminant of a number field]]

#
---
#state/develop | #lang/en | #SemBr

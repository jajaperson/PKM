---
tags:
  - public
aliases: []
---
[[Number field]]
# Discriminant of a number field

Let $K$ be a [[number field]] of degree $n$ and $\{ \alpha_{i} \}_{i=1}^n$ be an [[Bases for a number field#Integral basis]].
The **discriminant** $\Delta_{K}$ of $K$ is given by #m/def/num/alg
$$
\begin{align*}
\Delta_{K} := \Delta_{K:\mathbb{Q}}(\alpha_{1},\dots,\alpha_{n})
\end{align*}
$$
where the latter quantity is the [[discriminant of a separable extension]]
and is an [[Integers|integer]] independent of the choice of integral basis.[^2022]

> [!check]- Proof
> Suppose $\{ \alpha_{i} \}_{i=1}^n$ and $\{ \alpha_{i}' \}_{i=1}^n$ are both integral bases for $K$.
> Let $d := \Delta_{K:\mathbb{Q}}(\alpha_{1},\dots,\alpha_{n})$ and $d' = \Delta_{K:\mathbb{Q}}(\alpha_{1}',\dots,\alpha_{n}')$.
> We can find an appropriate change of basis matrix $M \in \opn{GL}_{n}(\mathbb{Z})$ such that
> $$
> \begin{align*}
> \begin{bmatrix}
> \alpha_{1}' \\
> \vdots \\
> \alpha_{n}'
> \end{bmatrix} = M \begin{bmatrix}
> \alpha_{1} \\
> \vdots \\
> \alpha_{n}
> \end{bmatrix},
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> T(\alpha_{1}',\dots,\alpha_{n}') &= T(\alpha_{1},\dots,\alpha_{n}) \tp M, \\
> T(\alpha_{1},\dots,\alpha_{n}) &= T(\alpha_{1}',\dots,\alpha_{n}') \ntp M, 
> \end{align*}
> $$
> Now since $\det M$ and $\det M^{-1}$ are both integers, it follows $\det M = \det M^{-1} = \pm 1$.
> Thus $d' = (\det M)^2 d = d$, as required. 
> 
> Since $d \in \mathbb{Q}$ is a product of algebraic integers, it follows $d \in \mathcal{O}_{\mathbb{Q}} = \mathbb{Z}$. <span class="QED"/>


For a general $\mathbb{Q}$-basis $\{ \alpha_{i} \}_{i=1}^n \subset \mathcal{O}_{K}$, we have
$$
\begin{align*}
\Delta_{K:\mathbb{Q}}(\alpha_{1},\dots,\alpha_{n}) = \abs{\frac{\mathcal{O}_{K}}{\mathbb{Z}\alpha_{1} + \dots + \mathbb{Z}\alpha_{n}}}^2 \Delta_{K}
\end{align*}
$$
^EQ1

where all operands are integers.
We call the index on the right had side the [[Annoying index]].

> [!check]- Proof
> Suppose $\{ \omega_{i} \}_{i=1}^n$ are an integral basis of $K$ and write
> $$
> \begin{align*}
> \begin{bmatrix}
> \alpha_{1} \\
> \vdots \\
> \alpha_{n}
> \end{bmatrix} = A \begin{bmatrix}
> \omega_{1} \\
> \vdots \\
> \omega_{n}
> \end{bmatrix}
> \end{align*}
> $$
> for some $A \in \opn M_{n,n}(\mathbb{Z})$.
> Let $M = \Span_{\mathbb{Z}}\{ \alpha_{i} \}_{i=1}^n$.
> By [[Subgroup of a free abelian group]], $\abs{\mathcal{O}_{K} / M} = \abs{\det A}$.
> The fact that
> $$
> \begin{align*}
> T(\alpha_{1},\dots,\alpha_{n}) = T(\omega_{1},\dots,\omega_{n}) \tp M
> \end{align*}
> $$
> yields the desired result. <span class="QED"/>

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶¶2.2–2.3, p. 34


#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - integral basis
  - power basis
  - integral power basis
---
[[Number field]]
# Bases for a number field

Let $K$ be a [[number field]] of degree $n$.
As an $n$-dimensional $\mathbb{Q}$-[[vector space]], one may choose a basis for $K$.

## Types

### Integral basis

An **integral basis** $\{ \alpha_{i} \}_{i=1}^n$ a $\mathbb{Z}$-[[Free module#^basis]] for $\mathcal{O}_{K}$ (which always exists), #m/def/num/alg 
whence it is also a $\mathbb{Q}$-basis for $K$.

### Power basis

A **power basis** is a basis of the form $\{ \alpha^i \}_{i=0}^{n-1}$ for some $\alpha \in K$, #m/def/num/alg 
whose existence is guaranteed by the [[primitive element theorem]].

### Integral power basis

An integral basis which is also a power basis is called an **integral power basis**. #m/def/num/alg 
These need not exist: A number field possessing an integral power basis is called a [[Monogenic field]].

## General properties[^2022]

1. Suppose $\{ \alpha_{i} \}_{i=1}^n \subset \mathcal{O}_{K}$ is a (non-integral) $\mathbb{Q}$-basis for $K$,
   and let $d = \Delta_{{K:\mathbb{Q}}}(\alpha_{1},\dots,\alpha_{n})$ be the corresponding [[Discriminant of a separable extension|discriminant]].
   Then $\{ \alpha_{i} / d \}_{i=1}^n$ span a $\mathbb{Z}$-module containing $\mathcal{O}_{K}$. ^P1
2. If $\{ \alpha_{i} \}_{i=1}^n \subset \mathcal{O}_{K}$ are a $\mathbb{Q}$-bases for $K$ such that the [[Irreducible operators applied to an irreducible orthonormal basis transform in the product representation|discriminant]] $\Delta_{K:\mathbb{Q}}(\alpha_{1},\dots,\alpha_{n})$ is [[Squarefree integer|squarefree]], then they form an [[#Integral basis]]. ^P2

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], §2.1

> [!check]- Proof of 1–2
> Let $\alpha \in \mathcal{O}_{K}$.
> Then $\alpha = \sum_{i=1}^n c_{i}\alpha_{i}$ for $c_{i} \in \mathbb{Q}$ and we just need to show that $d \alpha_{i} \in \mathbb{Z}$ for all $i \in \mathbb{N}_{n}$.
> Letting $\{ \sigma_{i} \}_{i=1}^n$ range over embeddings of $K \hookrightarrow \overline{\mathbb{Q}}$ we see
> $$
> \begin{align*}
> \begin{bmatrix}
> \sigma_{1}(\alpha) \\
> \vdots \\
> \sigma_{n}(\alpha)
> \end{bmatrix} = T \begin{bmatrix}
> c_{1} \\
> \vdots \\
> c_{n}
> \end{bmatrix}
> \end{align*}
> $$
> with $T \in \opn M_{n \times n}(\mathcal{O}_{\overline{\mathbb{Q}}})$ defined as in [[Discriminant of a separable extension]].
> Multiplying each side by [[Adjugate matrix|$\opn{adj} T$]] and letting $\delta = \det T$ we have
> $$
> \begin{align*}
> \begin{bmatrix}
> \beta_{1} \\
> \vdots \\
> \beta_{n}
> \end{bmatrix} = \delta \begin{bmatrix}
> c_{1} \\
> \vdots \\
> c_{n}
> \end{bmatrix}
> \end{align*}
> $$
> for some $\{ \beta_{i} \}_{i=1}^n \subset \mathcal{O}_{\overline{\mathbb{Q}}}$, whence
> $$
> \begin{align*}
> \begin{bmatrix}
>  \delta\beta_{1} \\
> \vdots \\
> \delta\beta_{n}
> \end{bmatrix} = d \begin{bmatrix}
> c_{1} \\
> \vdots \\
> c_{n}
> \end{bmatrix}
> \end{align*}
> $$
> so since $dc_{i} = \delta\beta_{i}$ is an algebraic integer for each $i$.
> Since $dc_{i} \in \mathbb{Q}$, it follows $dc_{i} \in \mathbb{Z}$ for each $i$, proving [[#^P1]] .
> 
> [[#^P2]] follows from the fact that the discriminant of algebraic integers is in an integer and [[Discriminant of a number field#^EQ1]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

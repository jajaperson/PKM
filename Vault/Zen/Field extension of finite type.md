---
tags:
  - public
aliases:
  - finitely generated field extension
---
[[Field extension]]
# Field extension of finite type

A [[field extension]] $L:K$ is **of finite type**[^term] iff $L$ is the [[Adjunction of a ring|adjunction]] of finitely many elements to $K$, #m/def/field 
i.e.
$$
\begin{align*}
L = K(\alpha_{1},\dots,\alpha_{n})
\end{align*}
$$
for some $\{ \alpha_{i} \}_{i=1}^n$.
Equivalently, $L:K$ is the composite of finitely many intermediate [[Simple extension|simple extensions]].

  [^term]: More standard terminology is **finitely generated extension**, but I use this by analogy to [[R-ring of finite type]].

## Properties

Suppose $L:K$ is of finite type, so $L = K(\alpha_{1},\dots,\alpha_{n})$

1. $L:K$ is a [[finite field extension]] iff it is an [[Algebraic element|algebraic extension]] iff $\{ \alpha_{i} \}_{i=1}^n$ are [[Algebraic element|algebraic]]. ^P1

> [!check]- Proof of 1
> If $L:K$ is finite it then it is automatically algebraic and the generators are also.
> 
> Suppose then that $L:K$ is algebraic, and thus each of the $\alpha_{i}$ are algebraic, say of degree $d_{i}$.
> Since [[Intermediate field extension|intermediate extensions]] $K(\alpha_{1},\dots,\alpha_{i}) : K(\alpha_{1},\dots,\alpha_{i-1})$ are all finite of degree $\leq d_{i}$,
> it follows so is $[L:K] \leq \prod_{i=1}^n d_{i}$, and thus $L:K$ is finite. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

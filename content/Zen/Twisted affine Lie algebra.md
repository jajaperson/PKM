---
mathLink-blocks:
  decomposition: decomposition of $\hat{\mathfrak{g}}[\vartheta]$
tags:
  - public
aliases:
  - extended twisted affine Lie algebra
---
[[Lie algebras MOC]]
# Twisted affine Lie algebra

Let $\mathfrak{g}$ be a [[quadratic Lie algebra]] over $\mathbb{K}$ with a symmetric $\mathfrak{g}$-[[Invariant bilinear form on a Lie algebra|invariant bilinear form]] $\langle \cdot,\cdot \rangle$,
and $\vartheta \in \Aut \mathfrak{g}$ be an involutive isometry of $\langle \cdot,\cdot \rangle$.
The corresponding **twisted affine Lie algebra** $\hat{\mathfrak{g}}[\vartheta]$ and **extended twisted affine Lie algebra** $\tilde{\mathfrak{g}}[\vartheta]$ are generalizations of the corresponding [[Affine Lie algebra|untwisted counterparts]]. #to/motivate

## Construction
Let $\mathfrak{g}$ be a [[Lie algebra]] over $\mathbb{K}$ with an involution $\vartheta \in \Aut \mathfrak{g}$,
and let $\langle \cdot,\cdot \rangle$ be a $\mathfrak{g}$-[[Invariant bilinear form on a Lie algebra|invariant bilinear form]] which is also invariant under $\vartheta$ in the sense that
$$
\begin{align*}
\langle \vartheta x, \vartheta y \rangle  = \langle x,y \rangle 
\end{align*}
$$
for all $x,y \in \mathfrak{g}$.[^1988]
Then $\mathfrak{g} = \mathfrak{g}_{(0)} \oplus \mathfrak{g}_{(1)}$ is $\mathbb{Z}_{2}$-[[Graded Lie algebra|graded]] into orthogonal[^orth] even and odd subspaces
$$
\begin{align*}
\mathfrak{g}_{(i)} = \{ x \in \mathfrak{g}: \vartheta x = (-1)^i x \}
\end{align*}
$$
Let $\mathbb{K}[t^{1/2},t^{-1/2}]$ be the $\frac{1}{2}\mathbb{Z}$-[[Graded algebra|graded]] [[algebra of Laurent polynomials]] in indeterminate $t^{1/2}$  and $d$ be its [[Degree operator|degree derivation]].
Constructing
$$
\begin{align*}
\mathfrak{l}= \mathfrak{g} \otimes_{\mathbb{K}} \mathbb{K}[t^{1/2},t^{-1/2}] \oplus \mathbb{K}c
\end{align*}
$$
with the same bilinear product defined for the (untwisted) [[affine Lie algebra]] gives a Lie algebra.
Defining the involution $v : t^{1/2} \mapsto -t^{1/2}$ on $\mathbb{K}[t^{1/2},-t^{1/2}]$ we extend $\vartheta$ to the following involution on $\mathfrak{l}$
$$
\begin{align*}
\vartheta : c &\mapsto c \\
\vartheta : x \otimes f &\mapsto \vartheta x \otimes vf
\end{align*}
$$
The **twisted affine Lie algebra** $\hat{\mathfrak{g}}[\vartheta]$ associated with $\mathfrak{g}$, $\langle \cdot,\cdot \rangle$, and $\vartheta$ is the even subalgebra of $\mathfrak{l}$ under $\vartheta$ #m/def/lie
$$
\begin{align*}
\hat{\mathfrak{g}}[\vartheta] &= \{ x \in \mathfrak{l} : \vartheta x = x \} \\
&= \mathfrak{g}_{(0)} \otimes \mathbb{K}[t,t^{-1}] \oplus \mathfrak{g}_{(1)} \otimes t^{1/2} \mathbb{K}[t,t^{-1}] \oplus \mathbb{K}c
\end{align*}
$$ 
^decomposition

  [^orth]: In the sense $\langle \mathfrak{g}_{(0)}, \mathfrak{g}_{(1)} \rangle = 0$.
  
As in the untwisted case, $d$ extends to a derivation of $\hat{\mathfrak{g}}[\vartheta]$
$$
\begin{align*}
d(c) &= 0 \\
d(x \otimes f) &= x \otimes df
\end{align*}
$$
so that homogenous subspaces are the eigenspaces of $d$.
One obtains the **extended twisted affine Lie algebra** associated with $\mathfrak{g}$, $\langle \cdot,\cdot \rangle$, and $\vartheta$ by [[Adjoining a derivation|adjoining the derivation]] $d$ #m/def/lie
$$
\begin{align*}
\tilde{\mathfrak{g}}[\vartheta] = \hat{\mathfrak{g}}[\vartheta] \rtimes  \mathbb{K}d
\end{align*}
$$

> [!info]- Further generalizations
> This may be generalized to automorphisms of any finite order.

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.6, p. 19–20

## Properties

1. In case $\vartheta = 1$, these constructions yield their [[Affine Lie algebra|untwisted counterparts]].


## Functoriality

Let $\cat{InvQLie}_{\mathbb{K}}$ denote the category where an object is a [[Quadratic Lie algebra]] with an involutive isometric, 
and a morphism $f: (\mathfrak{g}, \vartheta) \to (\mathfrak{g}, \varphi)$ is an isometric homomorphism of Lie algebras such that $f\vartheta = \varphi f$.
Then this constructions forms a functor $\cat{InvQLie}_{\mathbb{K}} \to \cat{Gr}_{\frac{1}{2}\mathbb{Z}}\cat{Lie}_{\mathbb{K}}$.

## Particular examples

- [[Affine Lie algebras of sl_2]]


#
---
#state/tidy | #lang/en | #SemBr

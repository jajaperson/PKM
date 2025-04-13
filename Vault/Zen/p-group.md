---
mathLink: $p$-group
tags:
  - public
aliases:
  - 2-group
---
[[Group theory MOC]]
# $p$-group

Given a [[Prime number]] $p$, a **$p$-group** $G$ is a [[group]] in which the [[group order|order]] of every element is an $\mathbb{N}_{0}$ power of $p$, #m/def/group i.e. for all $x \in G$
$$
\begin{align*}
\abs x= p^n
\end{align*}
$$
for some $n \in \mathbb{N}_{0}$.
By [[Cauchy's order theorem]], for a [[finite group]] this is equivalent to the [[group order|order]] of $G$ being an $\mathbb{N}_{0}$-power of $p$, i.e.
$$
\begin{align*}
\abs G = p^n
\end{align*}
$$
for some $n \in \mathbb{N}_{0}$.[^1988]

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.3, p. 107


## Properties

1. A nontrivial normal subgroup of a finite $p$-group always has a nontrivial intersection with the centre.^[[[MATH4031]]]

> [!check]- Proof of 1.
> Consider the action of $G$ on $N \trianglelefteq G$ by [[Conjugation by an element|conjugation]].
> The orbits of size 1  are the elements of $\opn Z(G) \cap N$.
> By the [[Orbit-stabilizer theorem]],
> the size of orbits divide $\abs G$,
> hence all orbits have size $p^n$ for some $n \in \mathbb{N}_{0}$.
> On the other hand, the ground, $\abs N$ divides $\abs G$ since [[Lagrange's theorem|the order of a subgroup divides the order of a group]].
> Since $N$ is nontrivial, $\abs N = p^m$ for some $m \in \mathbb{N}$.
> Now adding the sizes of orbits,
> $$
> \begin{align*}
> \abs N = 1 + \underbrace{ \cdots }_{ \text{size $1$} } + a_{1}p + a_{2}p^2 + \cdots = p^n
> \end{align*}
> $$
> so there must be at least one non-identity orbit of size 1,
> i.e. at least one other central element. <span class="QED"/>


## See also

- [[Extraspecial p-group]]
- [[Sylow p-subgroup]]

#
---
#state/tidy | #lang/en | #SemBr

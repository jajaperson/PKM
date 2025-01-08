---
aliases:
  - scalar transformation
tags:
  - public
---
[[General linear group]]
# Centre of the general linear group

Let $V \in \Vect_{\mathbb{K}}$.
The [[Centre of a group|centre]] $\mathrm{Z}(V)$ of the [[general linear group]] $\mathrm{GL}(V)$ consists of all **scalar transformations**, i.e. multiples of identity, and is isomorphic to the multiplicative group $\mathbb{K}^\times$ of the underlying field $\mathbb{K}$. #m/thm/group

> [!check]- Proof
> It is clear that scalar transformations form a group isomorphic to $\mathbb{K}^\times$ and that $\mathbb{K}^\times \sube \mathrm{Z}(V)$.
> Now let $A \in \mathrm{Z}(V)$ and assume there exists a nonzero $x \in V$ such that $x$ not an eigenvector of $A$.
> Then $y = Ax$ is linearly independent from $x$,
> and there exists some [[vector basis]] $B$ with $x,y \in B$ and $\span B = V$.
> Let $U = \span \{ x,y \}$ and $U' = \span(B \setminus V)$.
> Define linear maps such that in the $x,y$ basis
> $$
> \begin{align*}
> S \restriction U &= \begin{bmatrix}
> 1 & 0 \\
> 0 & 1
> \end{bmatrix} &
> T \restriction U &= \begin{bmatrix}
> 1 & 0 \\
> 1 & 1
> \end{bmatrix}
> &
> T^{-1} \restriction U &= \begin{bmatrix}
> 1 & 0 \\
> -1 & 1
> \end{bmatrix}
> \end{align*}
> $$
> and $S \restriction U' = T \restriction U' = \id_{U'}$.
> Then
> $$
> \begin{align*}
> Ay = ASx = SAx = Sy = x \\
> ATx = Ax + Ay = x + y \\
> TAx = Ty = y
> \end{align*}
> $$
> implying $x = x + y$, a contradiction.
> Hence every $x$ must be an eigenvector of $A$, so $\mathrm{Z}(V) \sube \mathbb{K}^\times$.
> <span class="QED"/>

## Properties

- [[Scalar transformation criterion]]

#
---
#state/tidy | #lang/en | #SemBr

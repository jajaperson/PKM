---
tags:
  - public
---
[[Lie algebras MOC]]
# Killing form

The **Killing form** is a [[Bilinear form#^symmetric|symmetric bilinear form]] form on a finite-dimensional [[Lie algebra]] $\mathfrak{g}$ defined as the [[trace]] of the composition of two [[Adjoint Lie algebra representation|linear endomorphisms]] #m/def/lie 
$$
\begin{align*}
K : \mathfrak{g} \times \mathfrak{g} &\to \mathbb{R} \\
(X, Y) &\mapsto \Tr(\ad_{X} \circ \ad_{Y})
\end{align*}
$$

> [!check]- Proof of symmetric bilinearity
> $K$ is linear in the second argument, since
> $$
> \begin{align*}
> K(X, \alpha Y + \beta Z) &= \Tr(\ad_{X} \circ \ad_{\alpha Y+\beta Z}) \\
> &= \Tr(\ad_{X} \circ (\alpha\ad_{Y}+ \beta\ad_{Z})) \\
> &= \Tr(\alpha\ad_{X} \circ \ad_{Y} + \beta \ad_{X} \circ \ad_{Z}) \\
> &= \alpha \Tr(\ad_{X} \circ \ad_{Y}) + \beta \Tr(\ad_{X} \circ \ad_{Z}) \\
> &= \alpha K(X,Y) + \beta K(X,Z)
> \end{align*}
> $$
> and symmetric since
> $$
> \begin{align*}
> K(X,Y) - K(Y,X) &= \Tr (\ad_{X} \ad_{Y}) - \Tr(\ad_{Y}  \ad_{X}) \\
> &= \Tr(\ad_{X} \ad_{Y} - \ad_{Y} \ad_{X}) \\
> &= \Tr([\ad_{X},\ad_{Y}]) \\
> &= \Tr(\ad_{[X,Y]}) \\
> &= 0
> \end{align*}
> $$
> by [[Adjoint Lie algebra representation#Properties]]

## Properties

### Relation to Lie groups

If $\mathfrak{g}$ is the Lie algebra over $\mathbb{R}$ of a Lie group $G$ with [[Adjoint representation]] $\Ad$ then

1. $K(\Ad_{g}(X), \Ad_{g}(Y)) = K(X,Y)$ for all $X,Y \in \mathfrak{g}$ and $g \in G$

> [!check]- Proof of 1
> Since $\Ad_{g}$ is a Lie algebra automorphism, for all $X,Z \in \mathfrak{g}$ and $g \in G$,
> $$
> \begin{align*}
> \ad_{\Ad_{g}(X)}(Z) &= [\Ad_{g}(X),Z] \\
> &= \Ad_{g} \Ad_{g^{-1}} [\Ad_{g}(X),Z] \\
> &= \Ad_{g} [X, \Ad_{g^{-1}} (Z)] \\
> &= \Ad_{g} \ad_{X} \Ad_{g^{-1}}(Z)
> \end{align*}
> $$
> hence
> $$
> \begin{align*}
> K(\Ad_{g}(X), \Ad_{g}(Y)) &= \Tr(\ad_{\Ad_{g}(X)} \ad_{\Ad_{g}(Y)}) \\
> &= \Tr(\Ad_{g} \ad_{X} \Ad_{g^{-1}} \Ad_{g} \ad_{X} \Ad_{g^{-1}}) \\
> &= \Tr(\Ad_{g} \ad_{X} \ad_{Y} \Ad_{g^{-1}}) \\
> &= \Tr(\ad_{X}\ad_{Y})
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

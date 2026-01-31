---
tags:
  - public
---
[[Lie algebras MOC]]
# Killing form

The **Killing form** $\kappa : \mathfrak{g} \times \mathfrak{g} \to \mathbb{K}$ is an [[Invariant bilinear form on a Lie algebra|invariant]] [[Bilinear form#^symmetric|symmetric bilinear form]] form on a finite-dimensional [[Lie algebra]] $\mathfrak{g}$ defined as the [[trace]] of the composition of two [[Adjoint Lie algebra representation|linear endomorphisms]][^1972] #m/def/lie 
$$
\begin{align*}
\kappa(X, Y) = \Tr(\ad_{X} \circ \ad_{Y})
\end{align*}
$$

> [!check]- Proof of symmetric bilinearity
> $K$ is linear in the second argument, since
> $$
> \begin{align*}
> \kappa(X, \alpha Y + \beta Z) &= \Tr(\ad_{X} \circ \ad_{\alpha Y+\beta Z}) \\
> &= \Tr(\ad_{X} \circ (\alpha\ad_{Y}+ \beta\ad_{Z})) \\
> &= \Tr(\alpha\ad_{X} \circ \ad_{Y} + \beta \ad_{X} \circ \ad_{Z}) \\
> &= \alpha \Tr(\ad_{X} \circ \ad_{Y}) + \beta \Tr(\ad_{X} \circ \ad_{Z}) \\
> &= \alpha \kappa(X,Y) + \beta \kappa(X,Z)
> \end{align*}
> $$
> and symmetric since
> $$
> \begin{align*}
> \kappa(X,Y) - \kappa(Y,X) &= \Tr (\ad_{X} \ad_{Y}) - \Tr(\ad_{Y}  \ad_{X}) \\
> &= \Tr(\ad_{X} \ad_{Y} - \ad_{Y} \ad_{X}) \\
> &= \Tr([\ad_{X},\ad_{Y}]) \\
> &= \Tr(\ad_{[X,Y]}) \\
> &= 0
> \end{align*}
> $$
> by [[Adjoint Lie algebra representation#Properties]]. <span class="QED"/>

  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §5.1, p. 21

## Properties

1. Let $\mathfrak{a} \trianglelefteq \mathfrak{g}$ be an [[Lie algebra ideal|ideal]]. Then the restriction of the Killing form of $\mathfrak{g}$ to $\mathfrak{a}$ is the Killing form of $\mathfrak{a}$.

> [!missing]- Proof
> #missing/proof

### Relation to Lie groups

If $\mathfrak{g}$ is the Lie algebra over $\mathbb{R}$ of a Lie group $G$ with [[Adjoint representation]] $\Ad$ then

1. $\kappa(\Ad_{g}(X), \Ad_{g}(Y)) = \kappa(X,Y)$ for all $X,Y \in \mathfrak{g}$ and $g \in G$

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

---
tags:
  - public
---
[[Hausdorff space]]
# Hausdorffness is preserved by subspaces, products, and coproducts, but not quotients

Let $X$ be a [[Hausdorff space]] and $i: Y \hookrightarrow X$ be a [[Continuity|continuous]] [[Surjectivity, injectivity, and bijectivity|injection]].
Then $Y$ is Hausdorff.
Similarly, if $\{ X_{\alpha} \}_{\alpha \in A}$ is a family of Hausdorff spaces,
then the [[Product topology|product]] $\prod_{\alpha \in A}X_{\alpha}$ and [[Coproduct topology|coproduct]] $\coprod_{\alpha \in A} X_{\alpha}$ is also Hausdorff. #m/thm/topology 

> [!missing]- Proof
> Then for any $x,y \in Y$ where $x \neq y$, we have $i(x) \neq i(y)$ by injectivity
> and there exist disjoint open neighbourhoods $U,V \sube X$ of $\iota(x)$ and $\iota(y)$ respectively.
> Then $i^{-1}(U),i^{-1}(V)$ are disjoint open neighbourhoods of $x,y$ respectively.
> Therefore $Y$ is Hausdorff.

#
---
#state/develop | #lang/en | #SemBr

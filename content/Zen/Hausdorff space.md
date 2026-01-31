---
tags:
  - public
aliases:
  - Hausdorff
---
[[Separation axioms]]
# Hausdorff space

A **Hausdorff space**[^hausdorffsch] or $\mathrm{T}_{2}$-space is a topological space $(X, \mathcal{T})$ satisfying the separation axiom:[^loose]

> For any $x,y \in X$ where $x \neq y$, there exist open neighbourhoods $U \in \mathcal{T}(x)$ and $V \in \mathcal{T}(y)$ such that $U \cap V = \0$. #m/def/topology 

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], p. 7 (Definition 1.1.25)
[^hausdorffsch]: German _der hausdorffsche Raum_

this can be easily generalised to a finite number of points:

> For any finite set $A \sube X$ there exists an open neighbourhood $U_{x}$ of each $x \in A$ so that $U_{x} \cap U_{y} = \0$ for any $x,y \in A$ with $x \neq y$. #m/thm/topology 

> [!check]- Proof
> Since $X$ is hausdorff, for every $x,y \in A$ with $x \neq y$ there exists an open neighbourhood $U_{xy}$ of $x$ and $U_{yx}$ of $y$ so that $U_{xy} \cap U_{yx} = \0$.
> For each $x \in A$ let $U_{x} = \bigcap_{y \in A \setminus \{ x \} } U_{xy}$.
> Then $U_{x}$ is an open neighbourhood of $x$ and $U_{x} \cap U_{yz} = \0$ for every $x,y,z \in A$ with $x \neq y \neq z$.
> It follows that $U_{x} \cap U_{y} = \0$ for every $x,y \in X$ with $x \neq y$.
> <span class="QED"/>

## Properties

- A Hausdorff space guarantees [[Conditions for uniqueness of the limit|uniqueness of the limit]]. If a space is first-countable, it is Hausdorff precisely when all limits are unique.
- [[Hausdorffness is preserved by subspaces, products, and coproducts, but not quotients]].
- [[A space is Hausdorff iff the diagonal is closed]]

#
---
#state/develop | #lang/en | #SemBr
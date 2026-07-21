---
date: 2026-07-07
tags:
  - public
mathLink-blocks:
  compositor: compositor
  unitor: unitor
  unitality: unitality coherences
  hexagon: hexagon
---
[[2-category theory MOC]]
# Notions of 2-functor

There are three possible generalizations of [[functor]] to a [[bicategory]].
The perservation of the composition and unit for 1-morphisms must be witnessed by 2-morphisms, but we are faced with the choice of whether these 2-morphisms should be directed or invertible, and if the latter, in which direction.[^2021]

1. [[#Lax 2-functor]]
2. [[#Oplax 2-functor]]
3. [[#2-functor]]

[^2021]: 2021\. [[Sources/@johnson2dimensionalCategories2021|2-Dimensional categories]], §4

## Lax 2-functor

A <dfn>lax 2-functor</dfn> $F : \mathfrak{C} \to \mathfrak{D}$ between [[Bicategory|bicategories]] is a generalization of a [[functor]] consisting of #m/def/cat/bi

1. a map $F_{0} : \mathfrak{C}_{0} \to \mathfrak{D}_{0} : A \mapsto F A$;
2. For every $A, B \in \mathfrak{C}$, a [[functor]] $F_{A,B} : \mathfrak{C}(A,B) \to \mathfrak{C}(F_{0} A , F_{0} B)$;

> [!info]- Notation
> We denote the corresponding map on 1-morphisms by $F_{1} : \mathfrak{C}_{1}(A,B) \to \mathfrak{C}_{1}(F_{0}A, F_{0}B)$, and the corresponding function on 2-morphisms by $F_{2} : \mathfrak{C}_{2}(A,B)(f,g) \to \mathfrak{C}_{2}(F_{0}A,F_{0}B)(F_{1}f,F_{1}g)$.

with _directed_ functorality witnessed by

3. for any $A, B, C \in \mathfrak{C}_{0}$, a [[natural transformation]] called the <dfn>compositor</dfn> with components $\gamma_{g,f} : (F_{1} g) (F_{1}f) \Rightarrow F_{1}(g f) : A \to C$ for indices $g \in \mathfrak{C}_{1}(B,C)$ and $f \in \mathfrak{C}_{1}(A,B)$; ^compositor
4. for any $A \in \mathfrak{C}_{0}$ a 1-morphism $\nu_{f} : \mathbb{1}_{F_{0} A} \Rightarrow F_{1} \mathbb{1}_{A} : A \to A$ called the <dfn>unitor</dfn>; ^unitor

and these data are coherent with associativity

![[lax-functor-associativity.svg#invert|c|https://q.uiver.app/#q=WzAsNixbMSwwLCIoRl8xaCBcXGNpcmMgRl8xZykgXFxjaXJjIEZfMWYiXSxbMCwxLCJGXzEoaCBcXGNpcmMgZykgXFxjaXJjIEZfMWYiXSxbMCwyLCJGXzEoKGggXFxjaXJjIGcpIFxcY2lyYyBmKSJdLFsxLDMsIkZfMShoIFxcY2lyYyAoZyBcXGNpcmMgZikpIl0sWzIsMSwiRl8xIGggXFxjaXJjIChGXzEgZyBcXGNpcmMgRl8xIGYpIl0sWzIsMiwiRl8xaCBcXGNpcmMgRl8xKGcgXFxjaXJjIGYpIl0sWzAsNCwiXFxhbHBoYV97Rl8xaCxGXzFnLEZfMWZ9IiwwLHsibGV2ZWwiOjJ9XSxbNCw1LCJGXzFoIFxcY2lyYyAgXFxnYW1tYV97ZyxmfSIsMCx7ImxldmVsIjoyfV0sWzUsMywiXFxnYW1tYV97aCxnIFxcY2lyYyBmfSIsMCx7ImxldmVsIjoyfV0sWzAsMSwiXFxnYW1tYV97aCxnfSBcXGNpcmMgRl8xIGYiLDIseyJsZXZlbCI6Mn1dLFsxLDIsIlxcZ2FtbWFfe2ggXFxjaXJjIGcgLCBmfSIsMix7ImxldmVsIjoyfV0sWzIsMywiRl8yIFxcYWxwaGFfe2gsZyxmfSIsMix7ImxldmVsIjoyfV1d]]

^hexagon

and unitality

![[lax-functor-unitality.svg#invert|c|https://q.uiver.app/#q=WzAsNyxbMiwxLCJGXzFmIl0sWzAsMSwiRl8xIFxcbWF0aGJiIDFfQiBcXGNpcmMgRl8xIGYiXSxbNCwxLCJGXzFmIFxcY2lyYyBGXzEgXFxtYXRoYmIgMV9BIl0sWzEsMCwiRl8xKFxcbWF0aGJiIDFfQiAgXFxjaXJjIGYpIl0sWzEsMiwiXFxtYXRoYmIgMV97Rl8wIEJ9IFxcY2lyYyBGXzEgZiJdLFszLDIsIkZfMSBmIFxcY2lyYyBcXG1hdGhiYiAxX3tGXzAgQX0iXSxbMywwLCJGXzEoZiBcXGNpcmMgXFxtYXRoYmIgMV9BKSJdLFsxLDMsIlxcZ2FtbWFfe1xcbWF0aGJiIDFfQiwgZn0iLDAseyJsZXZlbCI6Mn1dLFszLDAsIkZfMiBcXGxhbWJkYV9mIiwwLHsibGV2ZWwiOjJ9XSxbNCwxLCJcXG51IFxcY2lyYyBGXzEgZiIsMCx7ImxldmVsIjoyfV0sWzQsMCwiXFxsYW1iZGFfe0ZfMSBmfSIsMix7ImxldmVsIjoyfV0sWzUsMCwiXFxyaG9fe0ZfMWZ9IiwwLHsibGV2ZWwiOjJ9XSxbNiwwLCJGXzEgXFxyaG9feCIsMix7ImxldmVsIjoyfV0sWzIsNiwiXFxnYW1tYV97ZiAsXFxtYXRoYmIgMV9BfSIsMix7ImxldmVsIjoyfV0sWzUsMiwiRl8xIGYgXFxjaXJjIFxcbnUiLDIseyJsZXZlbCI6Mn1dXQ==]]

^unitality

for $A \xrightarrow f B \xrightarrow g C \xrightarrow h D$ in $\mathfrak{C}$.


## Oplax 2-functor

If we reverse all the 2-cells in the definition of a [[#Lax 2-functor|lax 2-functor]] we get an <dfn>oplax 2-functor</dfn>. #m/def/cat/bi
Equivalently, an oplax 2-functor from $\mathfrak{C} \to \mathfrak{D}$ is a lax 2-functor $\mathfrak{C}^\mathrm{co} \to \mathfrak{D}^\mathrm{co}$,
where we have invoked the [[Duality of bicategories#^2]].

## 2-functor

A (proper) <dfn>2-functor</dfn>[^1] is a [[#Lax 2-functor|lax 2-functor]] such that all compositors and unitors are isomorphisms. #m/def/cat/bi
Hence it is also an [[#Oplax 2-functor|oplax 2-functor]].

[^1]: Also called a _pseudofunctor_ or _weak 2-functor_.

#
---
#state/tidy | #lang/en | #SemBr


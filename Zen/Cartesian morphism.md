---
date: 2026-06-19
tags:
  - public
---
[[Displayed category]]
# Cartesian morphism

Consider a [[displayed category]] $\cat D \liesover \cat C$.
Given $f : x \to y$ in $\cat C$,
we say $f' : x' \to_{f} y'$ in $\cat D$ is <dfn>cartesian</dfn> over $f$,
iff for any $m : u \to x$ and $h' : u' \to_{fm} y'$ 
there is a unique factorization $\overline{m} : u' \to_{m} x'$ so that $f' \overline{m} = h'$.[^2017] #m/def/cat/dis 

![[cartesian-morphism.svg#invert|c|https://q.uiver.app/#q=WzAsNixbMiwxLCJ4JyJdLFsyLDMsIngiXSxbNCwzLCJ5Il0sWzQsMSwieSciXSxbMCwyLCJ1Il0sWzAsMCwidSciXSxbMCwxLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV0sWzEsMiwiZiIsMl0sWzMsMiwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFswLDMsImYnIiwxXSxbNCwxLCJtIiwyXSxbNSwwLCJcXG92ZXJsaW5le219IiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzUsNCwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFs1LDMsImgnIiwwLHsiY3VydmUiOi0yfV0sWzAsMiwiIiwwLHsic3R5bGUiOnsibmFtZSI6ImNvcm5lciJ9fV1d]]

^square

By analogy to a [[Fibre product and coproduct|pullback square]], we denote that a given $f'$ is cartesian as shown above.[^2022]

[^2017]: 2017\. [[Sources/@ahrensDisplayedCategories2017|Displayed categories]], §5
[^2022]: 2022\. [[@sterlingFoundationsRelativeCategory2022|Foundations of relative category theory]]


## Properties

1. Let $f' : x' \to_{f} y'$ and $g' : y' \to_{g} z'$ be displayed morphisms with $g'$ cartesian. Then $f'$ is cartesian iff $g' f'$ is cartesian. ^P1

> [!check]- Proof of 1
> First suppose both $f' : x' \to_{f} y'$ and $g' : y' \to_{g} z'$ are cartesian.
> Let $m : u \to x$ and $h' : u' \to_{g f m} z'$.
> Since $g'$ is cartesian, there is a unique $\overline{f m} : u' \to_{f m} y'$ such that $g' \overline{f m} = h'$.
> Since $f'$ is cartesian, there is a unique $\overline{m} : u' \to_{m} x'$ such that $f' \overline{m} = \overline{f m}$;
> Thus $\overline{m}$ is the unique solution to $g' f' \overline{m} = h'$.
> Thus $g'f'$ is cartesian.
> 
> For the converse, suppose both $g' : y' \to_{f} z'$ and $g'f' : x' \to_{f g} z'$ are cartesian.
> Let $m : u \to x$ and $h' : u' \to_{f m} y'$.
> Since $g' f'$ is cartesian, there is a unique $\overline{m}$ such that $g' f' \overline{m} = g' h'$.
> Since $g'$ is cartesian, there is a unique $\overline{f m}$ such that $g' \overline{fm} = g' h'$.
> Thus we conclude $\overline{f m} = f' \overline{m}$.
> Thus $\overline{m}$ is the unique solution to $f' \overline{m} = h'$,
> proving [[#^P1]].
> <span class="QED"/>

## See also

- [[Cartesian fibration]]

#
---
#state/tidy | #lang/en | #SemBr

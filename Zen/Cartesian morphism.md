---
date: 2026-06-19
tags:
  - public
aliases:
  - cartesian lift
---
[[Displayed category]]
# Cartesian morphism

Consider a [[displayed category]] $\cat D \liesover \cat C$.
Given $f : x \to y$ in $\cat C$,
we say $f' : x' \to_{f} y'$ in $\cat D$ is <dfn>cartesian</dfn> over $f$,
iff for any $m : u \to x$ and $h' : u' \to_{fm} y'$ 
there is a unique factorization $m' : u' \to_{m} x'$ so that $f' m' = h'$.[^2017] #m/def/cat/dis 

![[cartesian-morphism.svg#invert|c|https://q.uiver.app/#q=WzAsNixbMiwxLCJ4JyJdLFsyLDMsIngiXSxbNCwzLCJ5Il0sWzQsMSwieSciXSxbMCwyLCJ1Il0sWzAsMCwidSciXSxbMCwxLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV0sWzEsMiwiZiIsMl0sWzMsMiwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFswLDMsImYiLDFdLFs0LDFdLFs1LDAsIm0nIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzUsNCwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFs1LDMsImgnIiwwLHsiY3VydmUiOi0yfV0sWzAsMiwiIiwwLHsic3R5bGUiOnsibmFtZSI6ImNvcm5lciJ9fV1d]]

^square

By analogy to a [[Fibre product and coproduct|pullback square]], we denote that a given $f'$ is cartesian as shown above.[^2022]
Given a bottom-right corner, i.e. a morphism $f : x \to y$ and some $y'$ over $y$,
a <dfn>cartesian lift</dfn> of these data consists of an $x'$ over $x$ and $f' : x' \to_{f} y'$ completing the diagram.

[^2017]: 2017\. [[Sources/@ahrensDisplayedCategories2017|Displayed categories]], §5
[^2022]: 2022\. [[@sterlingFoundationsRelativeCategory2022|Foundations of relative category theory]]


## Properties

1. The composite of two cartesian morphisms is cartesian

#
---
#state/develop | #lang/en | #SemBr

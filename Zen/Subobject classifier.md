---
date: 2026-05-07
tags:
  - public
---
[[Topos theory MOC]]
# Subobject classifier

In a [[Completeness and cocompleteness|finitely complete]] category $\cat C$, 
a <dfn>subobject classifier</dfn> is a [[morphism]] $\top : 1 \to \Omega$ 
such that for any monomorphism (think [[subobject]]) $s : S \rightarrowtail X$, 
there is a unique morphism $\chi_{s}$ such that

![[subobject-classifier.svg#invert|c|https://q.uiver.app/#q=WzAsNCxbMCwwLCJTIl0sWzIsMCwiMSJdLFswLDIsIlgiXSxbMiwyLCJcXE9tZWdhIl0sWzIsMywiXFxleGlzdHMhXFxjaGlfcyIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFswLDFdLFswLDIsInMiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtb25vIn19fV0sWzEsMywiXFx0b3AiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtb25vIn19fV0sWzAsMywiIiwxLHsic3R5bGUiOnsibmFtZSI6ImNvcm5lciJ9fV1d]]

is a [[Fibre product and coproduct|pullback square]]. #m/def/topos
In other words, every subobject is the pullback of $\mathrm{tt}$ along a unique _characteristic morphism_.
We think of $\Omega$ as an object of _truth values_, and the generalized element $\top$ as _true_.[^1994]

[^1994]: 1994\. [[Sources/@maclaneSheavesGeometryLogic1994|Sheaves in geometry and logic: A first introduction to topos theory]], p. 32

#
---
#state/develop | #lang/en | #SemBr

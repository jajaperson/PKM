---
date: 2026-07-06
tags:
  - public
---
[[Displayed category theory MOC]]
# Cartesian fibration

Let $\cat E \liesover \cat B$ be a [[displayed category]].
A <dfn>cartesian lift</dfn> of a morphism $f : x \to y$ at some $y'$ over $y$ consists of an object $f^*y' \in \cat B_{x}$ and a [[cartesian morphism]] $\pi^*_{y'} f' : f^* y \to_{f} y'$.
Such a cartesian lift is unique up to unique isomorphism.

> [!check]- Proof of uniqueness
> One can show that if $f' : x' \to_{f} y'$ is cartesian then there is a unique vertical isomorphism $\varphi : x' \cong_{x} f^* y'$ such that $(\pi_{y'} f) \varphi = f'$.
> This is done by feeding $u = x$, $m = \id_{x}$, and $h' = f$ into the definition of a cartesian morphism.
> Repeating this argument gives a vertical morphism in the opposite direction, and shows that the composition of these two must be the vertical identity morphism. <span class="QED"/>

We say that $\cat E \liesover \cat B$ is a <dfn>cartesian fibration</dfn> over $\cat B$ iff there is a cartesian lift for every bottom-right corner.
Often this notion is simply referred to as a <dfn>fibration</dfn>, since [it coïncides with Grothendieck’s notion](https://www.jonmsterling.com/frct-002B/).

## Functoriality

A cartesian fibration $\cat E \liesover \cat B$ captures the notion of a [[pseudofunctor|pseudofunctorial]] family of categories $\op{\cat B} \to \Cat$,
taking

- an object $x \in \cat B$ to the [[fibre category]] $\cat E_{x}$;
- an morphism $f \in \cat B(x,y)$ to $f^* : \cat E_{y} \to \cat E_{x}$;

where $f^* : \cat E_{y} \to \cat E_{x}$ is the <dfn>base change functor</dfn> taking

- an displayed object $y' \in \cat E_{y}$ to the domain $f^* y'$ of the cartesian lift of $f$ at $y$;
- a vertical morphism $v' : y'' \to_{y} y$ to the unique vertical morphism $f^* v' : f^* y'' \to_{x} f^* y'$ making
  
  ![[fibration-base-change-morphism.svg#invert|c|https://q.uiver.app/#q=WzAsNixbMCw0LCJ4Il0sWzIsNCwieSJdLFsyLDIsInknIl0sWzIsMCwieScnIl0sWzAsMiwiZl4qeSciXSxbMCwwLCJmXip5JyciXSxbMywyLCJ2Il0sWzIsMSwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFswLDEsImYiLDJdLFs0LDAsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbNCwyLCJcXHBpX3t5J31eKmYiLDFdLFs1LDQsImZeKnYiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNSwzLCJcXHBpX3t5Jyd9XipmIl1d]]
  
  commute (using the fact $\pi^*_{y'}f$ is cartesian).

> [!check]- Functoriality of $f^*$
> The diagram above commutes for $v = \id'_{y'}$ and $f^* \id'_{y'} = \id'_{x'}$.
> One can similarly show that $f^* (w v) = (f^* w) (f^* v)$. <span class="QED"/>

Proving that this gives a pseudofunctor $\op{\cat B} \to \Cat$ is more complicated due to the proliferation of coherences, see the [1Lab](https://1lab.dev/Cat.Displayed.Cartesian.Indexing.html)

## See also

- [[Isofibration]], where we are only guaranteed lifts for isomorphisms in $\cat B$.

#
---
#state/develop | #lang/en | #SemBr

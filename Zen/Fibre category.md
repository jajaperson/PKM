---
date: 2026-06-19
tags:
  - public
---
[[Displayed category theory MOC]]
# Fibre category

Consider a [[displayed category]] $\cat D \liesover \cat C$.
For each $a \in \cat C_{0}$, the <dfn>fibre category</dfn> $\cat D_{a}$ is an ordinary [[category]] where #m/def/cat/dis

- an object is an object displayed over $a$, i.e. $(\cat D_{a})_{0} = \cat D_{a}$;
- a morphism is a morphism displayed over $\id_{a}$, i.e. $\cat D_{a}(x,y) = \cat D[\id_{a}](x,y)$.

Morphisms in fibre categories are called <dfn>vertical</dfn> since they do not cross between fibres.

In this way a displayed category $\cat D \liesover \cat C$ gives a $\cat C_{0}$-indexed family of categories.
However, this need not be functorial, see [[Cartesian fibration]].

#
---
#state/tidy | #lang/en | #SemBr

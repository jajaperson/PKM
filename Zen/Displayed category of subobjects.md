---
tags:
  - public
mathLink: $\cat{Sub}\liesover \cat C$
aliases:
  - subobject fibration
  - subobject opfibration
---
[[Displayed category theory MOC]]
# Displayed category of subobjects

Let $\cat C$ be a [[category]].
The [[displayed category]] $\cat{Sub} \liesover \cat C$ is defined so that

- an object over $a \in \cat C_{0}$ is a pair $(x, i_{x})$ where $x \in \cat C_{0}$ and $i_{x} : x \rightarrowtail a$ is a [[monomorphism]];
- for $f : a \to b$ in $\cat C$, a morphism $f' : (x, i_{x}) \to_{f} (y, i_{y})$ is a morphism $f' : x \to y$ in $\cat C$
    such that $i_{y}f' = f i_{x}$.

This is a restriction of the [[canonical self-indexing]].
$\cat{Sub}$ is so named since it may be viewed as a displayed category of [[Subobject|subobjects]].
Its [[Total category of a displayed category|total category]] is called the <dfn>category of monomorphisms</dfn>.

## Properties

1. $\cat{Sub}$ is [[Displayed category#^thinly]]. ^P1

> [!check]- Proof
> Let $f : a\to b$, $i_{x} : x \rightarrowtail a$, and $i_{y}: y \rightarrowtail b$,
> and suppose $f', f''$ lie over $f$.
> Then $i_{y}f' = fi_{x} = i_{y} f''$
> so by the definition of a [[monomorphism]] $f' = f''$,
> proving [[#^P1]]. <span class="QED"/>

## See also

- The dual [[Displayed category of quotients]]

#
---
#state/tidy | #lang/en | #SemBr

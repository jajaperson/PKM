---
tags:
  - public
aliases: braided monoidal functor
---
[[Monoidal category]]
# Monoidal functor

Let $\cat C, \cat D$ be monoidal categories.[^a]
A [[functor]] $T : \cat C \to \cat D$ is called **monoidal** iff it is eqquipped with an isomorphism $\nu : \mathbb{1} \to T\mathbb{1}$ in $\cat D$
and a natural isomorphism with components $\gamma_{x,y} : Tx \otimes Ty \to T(x \otimes y)$ in $\cat D^{\cat C \times \cat C}$,
compatible with associativity

![[monoidal-functor-associativity.svg#invert|https://q.uiver.app/#q=WzAsNixbMSwwLCIoVHggXFxvdGltZXMgVHkpIFxcb3RpbWVzIFR6Il0sWzAsMSwiVCh4IFxcb3RpbWVzIHkpIFxcb3RpbWVzIFR6Il0sWzAsMiwiVCgoeCBcXG90aW1lcyB5KSBcXG90aW1lcyB6KSJdLFsxLDMsIlQoeCBcXG90aW1lcyAoeSBcXG90aW1lcyB6KSkiXSxbMiwxLCJUeCBcXG90aW1lcyAoVHkgXFxvdGltZXMgVHopIl0sWzIsMiwiVHggXFxvdGltZXMgVCh5IFxcb3RpbWVzIHopIl0sWzAsNCwiXFxhbHBoYV97VHgsVHksVHp9Il0sWzQsNSwiVHggXFxvdGltZXMgXFxnYW1tYV97eSx6fSJdLFs1LDMsIlxcZ2FtbWFfe3gseSBcXG90aW1lcyB6fSJdLFswLDEsIlxcZ2FtbWFfe3gseX0gXFxvdGltZXMgVHoiLDJdLFsxLDIsIlxcZ2FtbWFfe3ggXFxvdGltZXMgeSAsIHp9IiwyXSxbMiwzLCJUIFxcYWxwaGFfe3gseSx6fSIsMl1d]]

and unitality

![[monoidal-functor-unitality.svg#invert|https://q.uiver.app/#q=WzAsNyxbMiwxLCJUeCJdLFswLDEsIlQgXFxtYXRoYmIgMSBcXG90aW1lcyBUeCJdLFs0LDEsIlR4IFxcb3RpbWVzIFQgXFxtYXRoYmIgMSJdLFsxLDAsIlQoXFxtYXRoYmIxICBcXG90aW1lcyB4KSJdLFsxLDIsIlxcbWF0aGJiIDEgXFxvdGltZXMgVHgiXSxbMywyLCJUeCBcXG90aW1lcyBcXG1hdGhiYiAxIl0sWzMsMCwiVCh4IFxcb3RpbWVzIFxcbWF0aGJiIDEpIl0sWzEsMywiXFxnYW1tYV97XFxtYXRoYmIgMSwgeH0iXSxbMywwLCJUIFxcbGFtYmRhX3giXSxbNCwxLCJcXG51IFxcb3RpbWVzIFR4Il0sWzQsMCwiXFxsYW1iZGFfe1R4fSIsMl0sWzUsMCwiXFxyaG9fe1R4fSJdLFs2LDAsIlQgXFxyaG9feCIsMl0sWzIsNiwiXFxnYW1tYV97eCAsXFxtYXRoYmIgMX0iLDJdLFs1LDIsIlR4IFxcb3RpbWVzIFxcbnUiLDJdXQ==]]

Iff $\epsilon$ and $\mu$ are identities, then $T$ is called **strict monoidal**.[^1966]
If $\cat C$ and $\cat D$ are [[Braided monoidal category|braided]], then a monoidal functor $F : \cat C \to \cat D$ is said to be **braided** iff

![[braided-monoidal-functor.svg#invert|https://q.uiver.app/#q=WzAsNCxbMCwwLCJUeCBcXG90aW1lcyBUeSJdLFsyLDAsIlQoeCBcXG90aW1lcyB5KSJdLFsyLDIsIlQoeSBcXG90aW1lcyB4KSJdLFswLDIsIlR5IFxcb3RpbWVzIFR4Il0sWzAsMywiXFx0YXUiLDJdLFszLDIsIlxcZ2FtbWFfe3kseH0iLDJdLFswLDEsIlxcZ2FtbWFfe3gseX0iXSxbMSwyLCJUXFx0YXUiXV0=]]

commutes for all objects $x,y \in \cat C$.

[^1966]: 1966\. [[Sources/@eilenbergClosedCategories1966|Closed categories]], §II.1, p. 473
[^a]: As usual we overload $(\otimes)$ and $\mathbb{1}$ to denote the tensor products and units of both categories.

## Examples

- [[Free module]]

## See also

- [[Monoidal natural transformation]]

#
---
#state/tidy | #lang/en | #SemBr

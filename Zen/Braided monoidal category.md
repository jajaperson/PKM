---
tags:
  - public
---
[[Category theory MOC]]
# Braided monoidal category

A [[monoidal category]] $\cat C$ is called **braided** iff there exists a natural isomorphism with components $\tau_{x,y} : x \otimes y \to y \otimes x$ in $\cat C^{\cat C \times \cat C}$ called the **braiding** such that the **braiding laws** or **hexagon identities**

![[braiding-law-1.svg#invert|https://q.uiver.app/#q=WzAsNixbMCwxLCIoeCBcXG90aW1lcyB5KSBcXG90aW1lcyB6Il0sWzEsMCwieCBcXG90aW1lcyAoeSBcXG90aW1lcyB6KSJdLFsyLDEsIih5IFxcb3RpbWVzIHopIFxcb3RpbWVzIHgiXSxbMiwyLCJ5IFxcb3RpbWVzICh6IFxcb3RpbWVzIHgpIl0sWzEsMywieSBcXG90aW1lcyAoeCBcXG90aW1lcyB6KSJdLFswLDIsIih5IFxcb3RpbWVzIHgpIFxcb3RpbWVzIHoiXSxbMCwxLCJcXGFscGhhX3t4LHksen0iXSxbMSwyLCJcXHRhdV97eCx5IFxcb3RpbWVzIHp9Il0sWzAsNSwiXFx0YXVfe3gseX0gXFxvdGltZXMgMSIsMl0sWzUsNCwiXFxhbHBoYV97eSx4LHp9IiwyXSxbNCwzLCIxXFxvdGltZXNcXHRhdV97eCx6fSIsMl0sWzIsMywiXFxhbHBoYV97eSx6LHh9Il1d]]

and

![[braiding-law-2.svg#invert| https://q.uiver.app/#q=WzAsNixbMCwxLCJ4IFxcb3RpbWVzICh5IFxcb3RpbWVzIHopIl0sWzEsMCwiKHggXFxvdGltZXMgeSkgXFxvdGltZXMgeiJdLFsyLDEsInogXFxvdGltZXMgKHggXFxvdGltZXMgeSkiXSxbMiwyLCIoeiBcXG90aW1lcyB4KSBcXG90aW1lcyB5Il0sWzEsMywiKHggXFxvdGltZXMgeikgXFxvdGltZXMgeSJdLFswLDIsInggXFxvdGltZXMgKHogXFxvdGltZXMgeSkiXSxbMCwxLCJcXGFscGhhX3t4LHksen1eey0xfSJdLFsxLDIsIlxcdGF1X3t4IFxcb3RpbWVzIHksIHp9Il0sWzAsNSwiMSBcXG90aW1lcyBcXHRhdV97eSx6fSIsMl0sWzUsNCwiXFxhbHBoYV97eCx6LHl9XnstMX0iLDJdLFs0LDMsIlxcdGF1X3t4LHp9IFxcb3RpbWVzIDEiLDJdLFsyLDMsIlxcYWxwaGFfe3oseCx5fV57LTF9Il1d]]

commute for all objects $x,y,z \in \cat C$. #m/def/cat 
Iff the braiding is involutive in the sense that $\tau_{y,x}\tau_{x,y} = 1_{x\otimes y}$,
then the category $\cat C$ is called [[Symmetric monoidal category|symmetric]],
and iff $\tau_{x,y} = 1_{x \otimes y}$ then $\cat C$ is called strictly symmetric.

The braiding laws ensure the braid is well behaved in the sense of the [[Coherence theorem for braided monoidal categories]] and [[Strictification theorem for braided monoidal categories]].

## Diagrammatics

The diagrammatics of a monoidal category are [[Single faced string diagram|single faced string diagrams]] in $2+1$ dimensions.

#
---
#state/tidy | #lang/en | #SemBr

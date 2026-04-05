---
tags:
  - public
aliases: "#category/monoidal/symmetric"
---
[[Category theory MOC]]
# Symmetric monoidal category

A **symmetric monoidal category** $\cat C$ is a [[braided monoidal category]] for which the braiding is involutive in the sense that $\tau_{y,x}\tau_{x,y} = 1_{x \otimes y}$. #m/def/cat 
Thus it is precisely a [[monoidal category]] equipped with a natural isomorphism with components $\tau_{x,y} : x \otimes y \to y \otimes x$ in $\cat C^{\cat C \times \cat C}$ such that the **hexagon identity**

![[braiding-law-1.svg#invert|see braided monoidal category]]

commutes and $\tau_{y,x}\tau_{x,y} = 1_{x \otimes y}$ for all objects $x,y,z \in \cat C$.
A symmetric monoidal category is called **strict** iff $\tau_{x,y} = 1_{x \otimes y}$ for all objects $x, y$,
i.e. iff $x \otimes y = y \otimes x$.

The hexagon identity ensures $(\otimes)$ is commutative up to natural isomorphism,
by the [[Coherence theorem for symmetric monoidal categories]]
and the [[Strictification theorem for symmetric monoidal categories]].

## Diagrammatics

The diagrammatics of a monoidal category are [[Single faced string diagram|single faced string diagrams]] in $3+1$ dimensions.

#
---
#state/tidy | #lang/en | #SemBr

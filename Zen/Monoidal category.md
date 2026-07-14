---
tags:
  - public
aliases:
  - "#category/monoidal"
---
[[Category theory MOC]]
# Monoidal category

A **monoidal category** is the vertical [[categorification]] of a [[monoid]]. 
Explicitly, a monoidal category $\cat C$ is equipped with[^1978] #m/def/cat 
1. a [[Multifunctor|bifunctor]] $(\otimes) : \cat C \times \cat C \to \cat C$ called the **tensor product**;
2. an object $1 \in \cat C$ called the **tensor unit**;
3. a [[Natural isomorphism|natural isomorphism]] with components $\alpha_{x,y,z} : (x \otimes y) \otimes z \to x \otimes (y \otimes z)$ in [[Functor category|$\cat C^{\cat C \times \cat C \times \cat C}$]] called the **associator**;
4. a [[Natural isomorphism|natural isomorphism]] with components $\lambda_{x} : 1 \otimes x \to x$ in [[Endofunctor category|$\cat C^{\cat C}$]] called the **left-unitor**; and
5. a [[Natural isomorphism|natural isomorphism]] with components $\rho_{x}: x \otimes 1 \to x$ in [[Endofunctor category|$\cat C^{\cat C}$]] called the **right-unitor**; 

satisfying the so-called **triangle identity**

![[monoidal-triangle.svg#invert|c|https://q.uiver.app/#q=WzAsMyxbMCwwLCIoeCBcXG90aW1lcyBcXG1hdGhiYiAxKSBcXG90aW1lcyB5Il0sWzEsMSwieCBcXG90aW1lcyB5Il0sWzIsMCwieCBcXG90aW1lcyAoXFxtYXRoYmIgMSBcXG90aW1lcyB5KSJdLFswLDIsIlxcYWxwaGFfe3gsXFxtYXRoYmIgMSx5fSJdLFswLDEsIlxccmhvX3ggXFxvdGltZXMgeSIsMl0sWzIsMSwieCBcXG90aW1lcyBcXGxhbWJkYV95Il1d]]

and **pentagon identity**

![[monoidal-pentagon.svg#invert|c|https://q.uiver.app/#q=WzAsNSxbMCwzLCIodyBcXG90aW1lcyAoeCBcXG90aW1lcyB5KSkgXFxvdGltZXMgeiJdLFsyLDMsIncgXFxvdGltZXMgKCh4IFxcb3RpbWVzIHkpIFxcb3RpbWVzIHopIl0sWzAsMSwiKCh3IFxcb3RpbWVzIHgpIFxcb3RpbWVzIHkpIFxcb3RpbWVzIHoiXSxbMiwxLCJ3IFxcb3RpbWVzICh4IFxcb3RpbWVzICh5IFxcb3RpbWVzIHopKSJdLFsxLDAsIih3IFxcb3RpbWVzIHgpIFxcb3RpbWVzICh5IFxcb3RpbWVzIHopIl0sWzAsMSwiXFxhbHBoYV97dyx4IFxcb3RpbWVzIHksen0iXSxbMiwwLCJcXGFscGhhX3t3LHgseX0gXFxvdGltZXMgeiIsMl0sWzEsMywieCBcXG90aW1lcyBcXGFscGhhX3t4LHksen0iLDJdLFsyLDQsIlxcYWxwaGFfe3cgXFxvdGltZXMgeCx5LHp9Il0sWzQsMywiXFxhbHBoYV97dyAseCx5IFxcb3RpbWVzIHp9Il1d]]

Together these diagrams ensure that the operation of $(\otimes)$ is unital associative up to canonical natural isomorphism,
by the [[Coherence theorem for monoidal categories]].

## Further terminology

Let $(\cat C, \otimes, \alpha, \lambda, \rho)$ be a monoid category.

- Iff $(\otimes)$ is the [[Products and coproducts|categorical product]] then $\cat C$ is said to be a [[Cartesian category]].
- Iff $\cat C$ has a right adjoint [[Closed category|internal hom-functor]] in a compatible way it is a [[Closed monoidal category]].

The appropriate morphism of monoidal categories is the [[Monoidal functor]].

  [^1978]: 1978\. [[Sources/@maclaneCategoriesWorkingMathematician1978|Categories for the working mathematician]]

## Other perspectives

A monoidal category may be viewed as a single-object (“connected”) [[bicategory]].

## Diagrammatics

The diagrammatics of a monoidal category are [[Single faced string diagram|single faced string diagrams]] in $1+1$ dimensions.

## See also

- [[Examples of monoidal categories]]
- [[Monoidal functor]]
- [[Monoidal category]]
#
---
#state/develop | #lang/en | #SemBr

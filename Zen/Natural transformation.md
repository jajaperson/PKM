---
tags:
  - public
---
[[Category theory MOC]]
# Natural transformation

A **natural transformation** is a morphism in a so-called [[functor category]],
that is it is a morphism between two functors,
or a 2-morphism in [[Bicategory of categories]].
If $F, G : \cat C \to \cat D$, then a **natural transformation** $\eta : F \Rightarrow G : \cat C \to \cat D$
consists of a morphism $\eta_{X} : FX \to FY$ for every $X \in \cat C$
such that the following diagram commutes: #m/def/cat 

![[natural-transformation.svg#invert|c|https://q.uiver.app/#q=WzAsOCxbMCwyLCJYIl0sWzAsNCwiWSJdLFsyLDIsIkZYIl0sWzIsNCwiRlkiXSxbNCw0LCJHWSJdLFs0LDIsIkdYIl0sWzIsMCwiRiJdLFs0LDAsIkciXSxbNSw0LCJHZiJdLFsyLDMsIkZmIiwyXSxbMCwxLCJmIiwyXSxbMiw1LCJcXGV0YV9YIl0sWzMsNCwiXFxldGFfWSIsMl0sWzYsNywiXFxldGEiXV0=]]

i.e. $\eta_{Y}\,Ff = Gf \,\eta_{X}$ for every $X, Y \in \cat C$.[^br]

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], pp. 11–12 (Definition 0.9)


## Properties

- The most fundamental result in category theory: the [[Yoneda lemma]]
- [[Identity natural transformation]]
- If $\eta_{X} : FX \to GX$ is an [[Morphism|isomorphism]] for every $X \in \cat C$,
    then it is called a [[Natural isomorphism]] and we say $F \cong G$.

## See also

- A slight generalization is an [[(Extra)natural transformation]].

---
#state/tidy | #SemBr | #lang/en 
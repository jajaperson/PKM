---
aliases:
  - cone
  - cocone
tags:
  - public
---
[[Category theory MOC]]
# Cone and cocone

A **cone** from an object $A \in \cat C$ to a [[Commutative diagram|diagram]] $\mathscr{D} : \cat J \to \cat C$ is a [[natural transformation]]  $\psi : A \Rightarrow \mathscr{D} : \cat J \to \cat C$ from the [[constant functor]] at $A$. #m/def/cat
Hence for all $i,j \in \cat J$ and $\alpha \in \cat J_{i,j}$ the following diagram commutes in $\cat C$:

![[cone.svg#invert|c|https://q.uiver.app/#q=WzAsMyxbMSwwLCJBIl0sWzAsMSwiXFxtYXRoc2NyIERfaSJdLFsyLDEsIlxcbWF0aHNjciBEX2oiXSxbMSwyLCJcXG1hdGhzY3IgRF97XFxhbHBoYX0iXSxbMCwxLCJcXHBzaV9pIiwyXSxbMCwyLCJcXHBzaV9qIl1d]]

Dually, a **cocone** from a diagram $\mathscr{D} : \cat J \to \cat C$ to an object $A \in \cat C$ is a natural transformation 
$\psi : \mathscr{D} \Rightarrow A : \cat J \to \cat C$.

![[cocone.svg#invert|c|https://q.uiver.app/#q=WzAsMyxbMSwxLCJBIl0sWzAsMCwiXFxtYXRoc2NyIERfaSJdLFsyLDAsIlxcbWF0aHNjciBEX2oiXSxbMSwyLCJcXG1hdGhzY3IgRF97XFxhbHBoYX0iLDJdLFsxLDAsIlxccHNpX2kiLDJdLFsyLDAsIlxccHNpX2oiXV0=]]

Important examples of cones are the [[Limits and colimits]] of a [[Commutative diagram|diagram]],
which are called **universal cones**.

#
---
#state/tidy | #lang/en | #SemBr

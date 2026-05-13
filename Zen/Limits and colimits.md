---
aliases:
  - universal cone
  - universal cocone
  - limit
  - colimit
  - (co)limit
tags:
  - public
---
[[Category theory MOC]]
# Limit and colimit

**Limits** and **colimits** generalize many [[Universal construction|universal constructions]] in category theory.
Since these are [[Cones and cocones|cones]] characterised by universal properties, they are sometimes called **universal cones** and **universal cocones**.

As defined below, one takes the (co)limit of a small [[Commutative diagram|diagram]] of a given shape $\cat J$.
When (co)limits exist for all diagrams of a given shape in a category $\cat C$,
we say $\cat C$ has $\cat J$-(co)limits.
If $\cat C$ has $\cat J$-(co)limits for any [[small category|small]] (resp. [[Finite category|finite]]) $\cat J$, then $\cat C$ is [[Completeness and cocompleteness|(co)complete]] (resp. finitely (co)complete).

## Definition

The **limit** of a [[Commutative diagram|diagram]] $\mathscr{D} : \cat J \to \cat C$ is a [[Cones and cocones|cone]] $\eta$ from $\catlim \mathscr{D}$ to $\mathscr{D}$
such that given any other cone $\gamma$ from $B$ to $\mathscr{D}$,
there exists a unique morphism $h \in \cat C(B, \catlim \mathscr{D})$ such that for all $i,j \in \cat J$ and $\alpha \in \cat J_{i,j}$ #m/def/cat 

![[limit-of-diagram.svg#invert|c|https://q.uiver.app/#q=WzAsNCxbMSwwLCJCIl0sWzEsMiwiXFx2YXJwcm9qbGltIFxcbWF0aHNjciBEIl0sWzAsMywiXFxtYXRoc2NyIERfaSJdLFsyLDMsIlxcbWF0aHNjciBEX2oiXSxbMCwxLCJoIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiXFxtYXRoc2NyIERfXFxhbHBoYSJdLFsxLDIsIlxcZXRhX2kiLDJdLFsxLDMsIlxcZXRhX2oiXSxbMCwyLCJcXGdhbW1hX2kiLDIseyJjdXJ2ZSI6Mn1dLFswLDMsIlxcZ2FtbWFfaiIsMCx7ImN1cnZlIjotMn1dXQ==]]

commutes. Informally, the limit of $\mathscr{D}$ is the ‘shallowest’ cone over $\mathscr{D}$.[^br]

Dually, the **colimit** of $\mathscr{D} : \cat J \to \cat C$ is a [[Cones and cocones|cocone]] $\epsilon$ from $\colim \mathscr{D}$ to $\mathscr{D}$
such that given any other cocone $\gamma$ from $B$ to $\mathscr{D}$
there exists a unique morphism $h \in \cat C(\colim \mathscr{D}, B)$ such that for all $i,j \in \cat J$ and $\alpha \in \cat J_{i,j}$ 


![[colimit-of-diagram.svg#invert|c|https://q.uiver.app/#q=WzAsNCxbMSwzLCJCIl0sWzEsMSwiXFx2YXJpbmpsaW0gXFxtYXRoc2NyIEQiXSxbMCwwLCJcXG1hdGhzY3IgRF9pIl0sWzIsMCwiXFxtYXRoc2NyIERfaiJdLFsxLDAsImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMiwzLCJcXG1hdGhzY3IgRF9cXGFscGhhIl0sWzIsMSwiXFxldGFfaSIsMl0sWzMsMSwiXFxldGFfaiJdLFsyLDAsIlxcZ2FtbWFfaSIsMix7ImN1cnZlIjoyfV0sWzMsMCwiXFxnYW1tYV9qIiwwLHsiY3VydmUiOi0yfV1d]]

commutes. Informally, the colimit of $\mathscr{D}$ is the shallowest cone under $\mathscr{D}$.

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A  categorical approach]], §4.2, pp. 77–79

## Properties

- [[Limits and colimits as adjoints to the diagonal]]
- [[(Co)limit construction theorems]]

## Examples

- [[Initial and terminal objects]]
- [[Products and coproducts]]
- [[Fibre product and coproduct]]
- [[Equalizer and coëqualizer]]

## Related

- [[Completeness and cocompleteness]]
- [[Continuity and cocontinuity]]

#
---
#state/tidy | #lang/en | #SemBr | #lang/en

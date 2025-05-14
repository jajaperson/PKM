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

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMSwwLCJCIl0sWzEsMiwiXFx2YXJwcm9qbGltIFxcbWF0aHNjciBEIl0sWzAsMywiXFxtYXRoc2NyIERfaSJdLFsyLDMsIlxcbWF0aHNjciBEX2oiXSxbMCwxLCJoIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiXFxtYXRoc2NyIERfXFxhbHBoYSJdLFsxLDIsIlxcZXRhX2kiLDJdLFsxLDMsIlxcZXRhX2oiXSxbMCwyLCJcXGdhbW1hX2kiLDIseyJjdXJ2ZSI6Mn1dLFswLDMsIlxcZ2FtbWFfaiIsMCx7ImN1cnZlIjotMn1dXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%0A%09%26%20B%20%5C%5C%0A%09%5C%5C%0A%09%26%20%7B%5Cvarprojlim%20%5Cmathscr%20D%7D%20%5C%5C%0A%09%7B%5Cmathscr%20D_i%7D%20%26%26%20%7B%5Cmathscr%20D_j%7D%0A%09%5Carrow%5B%22h%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-2%2C%20to%3D3-2%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_i%7D%22'%2C%20curve%3D%7Bheight%3D12pt%7D%2C%20from%3D1-2%2C%20to%3D4-1%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_j%7D%22%2C%20curve%3D%7Bheight%3D-12pt%7D%2C%20from%3D1-2%2C%20to%3D4-3%5D%0A%09%5Carrow%5B%22%7B%5Ceta_i%7D%22'%2C%20from%3D3-2%2C%20to%3D4-1%5D%0A%09%5Carrow%5B%22%7B%5Ceta_j%7D%22%2C%20from%3D3-2%2C%20to%3D4-3%5D%0A%09%5Carrow%5B%22%7B%5Cmathscr%20D_%5Calpha%7D%22%2C%20from%3D4-1%2C%20to%3D4-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMSwwLCJCIl0sWzEsMiwiXFx2YXJwcm9qbGltIFxcbWF0aHNjciBEIl0sWzAsMywiXFxtYXRoc2NyIERfaSJdLFsyLDMsIlxcbWF0aHNjciBEX2oiXSxbMCwxLCJoIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiXFxtYXRoc2NyIERfXFxhbHBoYSJdLFsxLDIsIlxcZXRhX2kiLDJdLFsxLDMsIlxcZXRhX2oiXSxbMCwyLCJcXGdhbW1hX2kiLDIseyJjdXJ2ZSI6Mn1dLFswLDMsIlxcZ2FtbWFfaiIsMCx7ImN1cnZlIjotMn1dXQ==" /></p>

commutes. Informally, the limit of $\mathscr{D}$ is the ‘shallowest’ cone over $\mathscr{D}$.[^br]

Dually, the **colimit** of $\mathscr{D} : \cat J \to \cat C$ is a [[Cones and cocones|cocone]] $\epsilon$ from $\colim \mathscr{D}$ to $\mathscr{D}$
such that given any other cocone $\gamma$ from $B$ to $\mathscr{D}$
there exists a unique morphism $h \in \cat C(\colim \mathscr{D}, B)$ such that for all $i,j \in \cat J$ and $\alpha \in \cat J_{i,j}$ 


<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMSwzLCJCIl0sWzEsMSwiXFx2YXJpbmpsaW0gXFxtYXRoc2NyIEQiXSxbMCwwLCJcXG1hdGhzY3IgRF9pIl0sWzIsMCwiXFxtYXRoc2NyIERfaiJdLFsxLDAsImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMiwzLCJcXG1hdGhzY3IgRF9cXGFscGhhIl0sWzIsMSwiXFxldGFfaSIsMl0sWzMsMSwiXFxldGFfaiJdLFsyLDAsIlxcZ2FtbWFfaSIsMix7ImN1cnZlIjoyfV0sWzMsMCwiXFxnYW1tYV9qIiwwLHsiY3VydmUiOi0yfV1d%0A%5Cbegin%7Btikzcd%7D%0A%09%7B%5Cmathscr%20D_i%7D%20%26%26%20%7B%5Cmathscr%20D_j%7D%20%5C%5C%0A%09%26%20%7B%5Cvarinjlim%20%5Cmathscr%20D%7D%20%5C%5C%0A%09%5C%5C%0A%09%26%20B%0A%09%5Carrow%5B%22%7B%5Cmathscr%20D_%5Calpha%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Ceta_i%7D%22'%2C%20from%3D1-1%2C%20to%3D2-2%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_i%7D%22'%2C%20curve%3D%7Bheight%3D12pt%7D%2C%20from%3D1-1%2C%20to%3D4-2%5D%0A%09%5Carrow%5B%22%7B%5Ceta_j%7D%22%2C%20from%3D1-3%2C%20to%3D2-2%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_j%7D%22%2C%20curve%3D%7Bheight%3D-12pt%7D%2C%20from%3D1-3%2C%20to%3D4-2%5D%0A%09%5Carrow%5B%22h%22%7Bdescription%7D%2C%20dashed%2C%20from%3D2-2%2C%20to%3D4-2%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMSwzLCJCIl0sWzEsMSwiXFx2YXJpbmpsaW0gXFxtYXRoc2NyIEQiXSxbMCwwLCJcXG1hdGhzY3IgRF9pIl0sWzIsMCwiXFxtYXRoc2NyIERfaiJdLFsxLDAsImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMiwzLCJcXG1hdGhzY3IgRF9cXGFscGhhIl0sWzIsMSwiXFxldGFfaSIsMl0sWzMsMSwiXFxldGFfaiJdLFsyLDAsIlxcZ2FtbWFfaSIsMix7ImN1cnZlIjoyfV0sWzMsMCwiXFxnYW1tYV9qIiwwLHsiY3VydmUiOi0yfV1d" /></p>

commutes. Informally, the colimit of $\mathscr{D}$ is the shallowest cone under $\mathscr{D}$.

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A  categorical approach]], §4.2, pp. 77–79

## Properties

- [[Limits and colimits as adjoints to the diagonal]]

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

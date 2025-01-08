---
aliases:
  - universal cone
  - universal cocone
  - limit
  - colimit
tags:
  - public
---
[[Category theory MOC]]
# Limit and colimit

**Limits** and **colimits** generalize many [[Universal construction|universal constructions]] in category theory.
Since these are [[Cones and cocones|cones]] characterised by universal properties, they are sometimes called **universal cones** and **universal cocones**.

## Definition

The **limit** of a [[Commutative diagram|diagram]] $F : \cat J \to \cat C$ is a [[Cones and cocones|cone]] $\eta$ from an object $\lim F$ to the diagram $F$ 
with the universal property that given any other cone $\gamma$ from from an object $B$ to the diagram $F$,
there is a unique morphism $h \in \cat C(B, \lim F)$ such that the following diagram commutes for any $X,Y \in \cat J$ and $f \in \cat J(X,Y)$: #m/def/cat

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMSwwLCJCIl0sWzEsMiwiXFxsaW0gRiJdLFswLDMsIkZYIl0sWzIsMywiRlkiXSxbMCwxLCJoIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiRmYiXSxbMSwyLCJcXGV0YV9YIiwyXSxbMSwzLCJcXGV0YV9ZIl0sWzAsMiwiXFxnYW1tYV9YIiwyLHsiY3VydmUiOjJ9XSxbMCwzLCJcXGdhbW1hX1kiLDAseyJjdXJ2ZSI6LTJ9XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%20B%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%20%7B%5Clim%20F%7D%20%5C%5C%0A%09FX%20%5C%26%5C%26%20FY%0A%09%5Carrow%5B%22h%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-2%2C%20to%3D3-2%5D%0A%09%5Carrow%5B%22Ff%22%2C%20from%3D4-1%2C%20to%3D4-3%5D%0A%09%5Carrow%5B%22%7B%5Ceta_X%7D%22'%2C%20from%3D3-2%2C%20to%3D4-1%5D%0A%09%5Carrow%5B%22%7B%5Ceta_Y%7D%22%2C%20from%3D3-2%2C%20to%3D4-3%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_X%7D%22'%2C%20curve%3D%7Bheight%3D12pt%7D%2C%20from%3D1-2%2C%20to%3D4-1%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_Y%7D%22%2C%20curve%3D%7Bheight%3D-12pt%7D%2C%20from%3D1-2%2C%20to%3D4-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMSwwLCJCIl0sWzEsMiwiXFxsaW0gRiJdLFswLDMsIkZYIl0sWzIsMywiRlkiXSxbMCwxLCJoIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiRmYiXSxbMSwyLCJcXGV0YV9YIiwyXSxbMSwzLCJcXGV0YV9ZIl0sWzAsMiwiXFxnYW1tYV9YIiwyLHsiY3VydmUiOjJ9XSxbMCwzLCJcXGdhbW1hX1kiLDAseyJjdXJ2ZSI6LTJ9XV0=" /></p>

Informally, the limit of $F$ is the ‘shallowest’ cone over $F$.[^br]

The **colimit** of a diagram $F : \cat J \to \cat C$ is a [[Cones and cocones|cocone]] $\eta$ from the diagram $F$ to an object $\colim F$ to the diagram $F$,
with the universal property that given any other cone $\gamma$ from the diagram $F$ to an object $B$,
there is a unique morphism $h \in \cat C(\colim F, B)$ such that the following diagram commutes for any $X, Y \in \cat J$ and $f \in \cat J(X,Y)$: #m/def/cat

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJGWCJdLFsyLDAsIkZZIl0sWzEsMSwiXFxtYXRocm17Y29saW19IFxcLEYiXSxbMSwzLCJCIl0sWzAsMSwiRmYiXSxbMCwyLCJcXGVwc2lsb25fWCIsMl0sWzEsMiwiXFxlcHNpbG9uX1kiXSxbMiwzLCJoIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMywiXFxnYW1tYV9YIiwyLHsiY3VydmUiOjJ9XSxbMSwzLCJcXGdhbW1hX1kiLDAseyJjdXJ2ZSI6LTJ9XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09FX%20%5C%26%5C%26%20FY%20%5C%5C%0A%09%5C%26%20%7B%5Cmathrm%7Bcolim%7D%20%5C%2CF%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%20B%0A%09%5Carrow%5B%22Ff%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cepsilon_X%7D%22'%2C%20from%3D1-1%2C%20to%3D2-2%5D%0A%09%5Carrow%5B%22%7B%5Cepsilon_Y%7D%22%2C%20from%3D1-3%2C%20to%3D2-2%5D%0A%09%5Carrow%5B%22h%22%7Bdescription%7D%2C%20dashed%2C%20from%3D2-2%2C%20to%3D4-2%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_X%7D%22'%2C%20curve%3D%7Bheight%3D12pt%7D%2C%20from%3D1-1%2C%20to%3D4-2%5D%0A%09%5Carrow%5B%22%7B%5Cgamma_Y%7D%22%2C%20curve%3D%7Bheight%3D-12pt%7D%2C%20from%3D1-3%2C%20to%3D4-2%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJGWCJdLFsyLDAsIkZZIl0sWzEsMSwiXFxtYXRocm17Y29saW19IFxcLEYiXSxbMSwzLCJCIl0sWzAsMSwiRmYiXSxbMCwyLCJcXGVwc2lsb25fWCIsMl0sWzEsMiwiXFxlcHNpbG9uX1kiXSxbMiwzLCJoIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMywiXFxnYW1tYV9YIiwyLHsiY3VydmUiOjJ9XSxbMSwzLCJcXGdhbW1hX1kiLDAseyJjdXJ2ZSI6LTJ9XV0=" /></p>

Informally, the colimit of $F$ is the ‘shallowest’ cone under $F$.

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A  categorical approach]], §4.2, pp. 77–79

## Examples

- [[Initial and terminal objects]]
- [[Products and coproducts]]
- [[Fibre product and coproduct]]
- [[Equalizer]] and [[Coëqualizer]]

## Related

- [[Completeness and cocompleteness]]

#
---
#state/tidy | #lang/en | #SemBr | #lang/en

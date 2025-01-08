---
tags:
  - public
---
[[Category theory MOC]]
# Natural transformation

A **natural transformation** is a morphism in a so-called [[functor category]],
that is it is a morphism between two functors,
or a 2-morphism in [[Category of small categories]].
If $F, G : \cat C \to \cat D$, then a **natural transformation** $\eta : F \to G : \cat C \to \cat D$
consists of a morphism $\eta_{X} : FX \to FY$ for every $X \in \cat C$
such that the following diagram commutes: #m/def/cat 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMCwwLCJYIl0sWzAsMiwiWSJdLFsyLDAsIkZYIl0sWzIsMiwiRlkiXSxbNCwyLCJHWSJdLFs0LDAsIkdYIl0sWzYsMCwiRiJdLFs2LDIsIkciXSxbNiw3LCJcXGV0YSJdLFs1LDQsIkdmIl0sWzIsMywiRmYiLDJdLFswLDEsImYiLDJdLFsyLDUsIlxcZXRhX1giXSxbMyw0LCJcXGV0YV9ZIiwyXV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09X%20%5C%26%5C%26%20FX%20%5C%26%5C%26%20GX%20%5C%26%5C%26%20F%20%5C%5C%0A%09%5C%5C%0A%09Y%20%5C%26%5C%26%20FY%20%5C%26%5C%26%20GY%20%5C%26%5C%26%20G%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Ceta_X%7D%22%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22Ff%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22Gf%22%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%5Ceta%22%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Ceta_Y%7D%22'%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsOCxbMCwwLCJYIl0sWzAsMiwiWSJdLFsyLDAsIkZYIl0sWzIsMiwiRlkiXSxbNCwyLCJHWSJdLFs0LDAsIkdYIl0sWzYsMCwiRiJdLFs2LDIsIkciXSxbNiw3LCJcXGV0YSJdLFs1LDQsIkdmIl0sWzIsMywiRmYiLDJdLFswLDEsImYiLDJdLFsyLDUsIlxcZXRhX1giXSxbMyw0LCJcXGV0YV9ZIiwyXV0=
" /></p>

i.e. $\eta_{Y}\,Ff = Gf \,\eta_{X}$ for every $X, Y \in \cat C$.[^br]

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], pp. 11–12 (Definition 0.9)

If $\eta_{X} : FX \to GX$ is an [[Morphism|isomorphism]] for every $X \in \cat C$,
then it is called a [[natural equivalence]] and we say $F \cong G$.

A slight generalization is an [[(Extra)natural transformation]].

## Properties

- The most fundamental result in category theory: the [[Yoneda lemma]]
- [[Identity natural transformation]]

---
#state/tidy | #SemBr | #lang/en 
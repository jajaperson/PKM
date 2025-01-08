---
aliases:
  - cone
  - cocone
tags:
  - public
---
[[Category theory MOC]]
# Cone and cocone

A **cone** from an object $A \in \cat C$ to a [[functor]] $F : \cat D \to \cat C$ is a [[natural transformation]] $\psi \in \cat{C}^\cat{D}(AT,F)$ where $AT : \cat D \to \cat C$ is a [[Constant functor]] to $A$. #m/def/cat
Hence for all $X, Y \in \cat D$ and $f \in \cat D(X,Y)$ the following diagram commutes in $\cat C$:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMSwwLCJBIl0sWzAsMSwiRlgiXSxbMiwxLCJGWSJdLFsxLDIsIkYgZiJdLFswLDEsIlxccHNpX1giLDJdLFswLDIsIlxccHNpX1kiXV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%20A%20%5C%5C%0A%09FX%20%5C%26%5C%26%20FY%0A%09%5Carrow%5B%22%7BF%20f%7D%22%2C%20from%3D2-1%2C%20to%3D2-3%5D%0A%09%5Carrow%5B%22%7B%5Cpsi_X%7D%22'%2C%20from%3D1-2%2C%20to%3D2-1%5D%0A%09%5Carrow%5B%22%7B%5Cpsi_Y%7D%22%2C%20from%3D1-2%2C%20to%3D2-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMSwwLCJBIl0sWzAsMSwiRlgiXSxbMiwxLCJGWSJdLFsxLDIsIkYgZiJdLFswLDEsIlxccHNpX1giLDJdLFswLDIsIlxccHNpX1kiXV0=" /></p>

Dually, a **cocone** from a functor $F : \cat D \to \cat C$ to an object $A \in \cat C$ is a natural transformation $\psi \in \Nat(F, AT)$.
Important examples of cones are the [[Limits and colimits]] of a [[Commutative diagram|diagram]],
which are called **universal cones**.

#
---
#state/tidy | #lang/en | #SemBr

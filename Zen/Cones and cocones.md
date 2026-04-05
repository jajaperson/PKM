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

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMSwwLCJBIl0sWzAsMSwiXFxtYXRoc2NyIERfaSJdLFsyLDEsIlxcbWF0aHNjciBEX2oiXSxbMSwyLCJcXG1hdGhzY3IgRF97XFxhbHBoYX0iXSxbMCwxLCJcXHBzaV9pIiwyXSxbMCwyLCJcXHBzaV9qIl1d%0A%5Cbegin%7Btikzcd%7D%0A%09%26%20A%20%5C%5C%0A%09%7B%5Cmathscr%20D_i%7D%20%26%26%20%7B%5Cmathscr%20D_j%7D%0A%09%5Carrow%5B%22%7B%5Cpsi_i%7D%22'%2C%20from%3D1-2%2C%20to%3D2-1%5D%0A%09%5Carrow%5B%22%7B%5Cpsi_j%7D%22%2C%20from%3D1-2%2C%20to%3D2-3%5D%0A%09%5Carrow%5B%22%7B%5Cmathscr%20D_%7B%5Calpha%7D%7D%22%2C%20from%3D2-1%2C%20to%3D2-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMSwwLCJBIl0sWzAsMSwiXFxtYXRoc2NyIERfaSJdLFsyLDEsIlxcbWF0aHNjciBEX2oiXSxbMSwyLCJcXG1hdGhzY3IgRF97XFxhbHBoYX0iXSxbMCwxLCJcXHBzaV9pIiwyXSxbMCwyLCJcXHBzaV9qIl1d" /></p>

Dually, a **cocone** from a diagram $\mathscr{D} : \cat J \to \cat C$ to an object $A \in \cat C$ is a natural transformation 
$\psi : \mathscr{D} \Rightarrow A : \cat J \to \cat C$.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMSwxLCJBIl0sWzAsMCwiXFxtYXRoc2NyIERfaSJdLFsyLDAsIlxcbWF0aHNjciBEX2oiXSxbMSwyLCJcXG1hdGhzY3IgRF97XFxhbHBoYX0iLDJdLFsxLDAsIlxccHNpX2kiLDJdLFsyLDAsIlxccHNpX2oiXV0%3D%0A%5Cbegin%7Btikzcd%7D%0A%09%7B%5Cmathscr%20D_i%7D%20%26%26%20%7B%5Cmathscr%20D_j%7D%20%5C%5C%0A%09%26%20A%0A%09%5Carrow%5B%22%7B%5Cmathscr%20D_%7B%5Calpha%7D%7D%22'%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cpsi_i%7D%22'%2C%20from%3D1-1%2C%20to%3D2-2%5D%0A%09%5Carrow%5B%22%7B%5Cpsi_j%7D%22%2C%20from%3D1-3%2C%20to%3D2-2%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMSwxLCJBIl0sWzAsMCwiXFxtYXRoc2NyIERfaSJdLFsyLDAsIlxcbWF0aHNjciBEX2oiXSxbMSwyLCJcXG1hdGhzY3IgRF97XFxhbHBoYX0iLDJdLFsxLDAsIlxccHNpX2kiLDJdLFsyLDAsIlxccHNpX2oiXV0=" /></p>

Important examples of cones are the [[Limits and colimits]] of a [[Commutative diagram|diagram]],
which are called **universal cones**.

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Category theory MOC]]
# Free category

**Free categories** are the [[Free-forgetful adjunction|free objects]] in [[Category of small categories]], #m/def/cat 
forming the [[Adjoint functor|left adjoint]] to the forgetful functor $U : \Cat \to \cat{Quiv}$ to the [[Underlying quiver]]
$$
\begin{align*}
C \dashv U : \Cat \to \cat{Quiv}
\end{align*}
$$
The free category $C\Gamma = \underline{\Gamma}$ is constructed by considering all _composable_ words, called **paths**, as morphisms.

## Universal property

If $\cat D$ is a [[Small category]] with [[Underlying quiver]] $U\cat D$
and $f \in \cat{Quiv}(\Gamma,U\cat D)$ is a [[quiver homomorphism]] then there exists a unique adjunct $g \in \Cat(C\Gamma,\cat D)$ such that the following diagram commutes:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMCwwLCIgQ1xcR2FtbWEiXSxbMCwyLCJcXG1hdGhzZiBEIl0sWzIsMCwiVUNcXEdhbW1hIl0sWzIsMiwiVVxcbWF0aHNmIEQiXSxbNCwwLCJcXEdhbW1hIl0sWzAsMSwiXFxleGlzdHMhIGciLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNCwyLCJcXGV0YV9DIiwyXSxbNCwzLCJmIl0sWzIsMywiVWciLDJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%0A%09%7B%20C%5CGamma%7D%20%26%26%20%7BUC%5CGamma%7D%20%26%26%20%5CGamma%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathsf%20D%7D%20%26%26%20%7BU%5Cmathsf%20D%7D%0A%09%5Carrow%5B%22%7B%5Cexists!%20g%7D%22'%2C%20dashed%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22Ug%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Ceta_C%7D%22'%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMCwwLCIgQ1xcR2FtbWEiXSxbMCwyLCJcXG1hdGhzZiBEIl0sWzIsMCwiVUNcXEdhbW1hIl0sWzIsMiwiVVxcbWF0aHNmIEQiXSxbNCwwLCJcXEdhbW1hIl0sWzAsMSwiXFxleGlzdHMhIGciLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNCwyLCJcXGV0YV9DIiwyXSxbNCwzLCJmIl0sWzIsMywiVWciLDJdXQ==" /></p>


#
---
#state/tidy | #lang/en | #SemBr

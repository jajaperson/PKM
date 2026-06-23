---
tags:
  - public
---
[[Category theory MOC]]
# Category embedding

An **embedding** of a category $\cat C$ in $\cat D$ is a [[fully faithful functor]] $I : \cat C \hookrightarrow \cat D$ which is injective on objects. #m/def/cat 

It follows that any [[natural transformation]] $\eta: IF \Rightarrow IG$ of embedded objects lifts to a natural transformation $I^{-1} : F \Rightarrow G$ of the objects themselves.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMCwwLCJJRlgiXSxbMiwwLCJJR1giXSxbMCwyLCJJRlkiXSxbMiwyLCJJR1kiXSxbNCwwLCJGWCJdLFs2LDAsIkdYIl0sWzQsMiwiRlkiXSxbNiwyLCJHWSJdLFswLDIsIklGZiIsMl0sWzEsMywiSUdmIl0sWzAsMSwiXFxldGFfWCJdLFsyLDMsIlxcZXRhX1kiLDJdLFs0LDUsIkleey0xfVxcZXRhX1giXSxbNCw2LCJGZiIsMl0sWzYsNywiSV57LTF9XFxldGFfWSIsMl0sWzUsNywiR2YiXV0%3D%0A%5Cbegin%7Btikzcd%7D%0A%09IFX%20%26%26%20IGX%20%26%26%20FX%20%26%26%20GX%20%5C%5C%0A%09%5C%5C%0A%09IFY%20%26%26%20IGY%20%26%26%20FY%20%26%26%20GY%0A%09%5Carrow%5B%22%7B%5Ceta_X%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22IFf%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22IGf%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7BI%5E%7B-1%7D%5Ceta_X%7D%22%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22Ff%22'%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22Gf%22%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Ceta_Y%7D%22'%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7BI%5E%7B-1%7D%5Ceta_Y%7D%22'%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsOCxbMCwwLCJJRlgiXSxbMiwwLCJJR1giXSxbMCwyLCJJRlkiXSxbMiwyLCJJR1kiXSxbNCwwLCJGWCJdLFs2LDAsIkdYIl0sWzQsMiwiRlkiXSxbNiwyLCJHWSJdLFswLDIsIklGZiIsMl0sWzEsMywiSUdmIl0sWzAsMSwiXFxldGFfWCJdLFsyLDMsIlxcZXRhX1kiLDJdLFs0LDUsIkleey0xfVxcZXRhX1giXSxbNCw2LCJGZiIsMl0sWzYsNywiSV57LTF9XFxldGFfWSIsMl0sWzUsNywiR2YiXV0=" /></p>

## Examples

- [[Yoneda embedding]]

#
---
#state/tidy | #lang/en | #SemBr

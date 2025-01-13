---
tags:
  - public
---
[[Code]]
# Equivalence of codes

A general [[code]] of length $n$ over alphabet $S$ may be viewed as a subset of the [[function space]] $S^\Omega$, where $\abs \Omega = n$.
Two codes $\mathcal{C} \sube S^\Omega$ and $\mathcal{D} \sube T^\Theta$ are **equivalent** iff there exist [[Surjectivity, injectivity, and bijectivity|bijections]] $\alpha : S \to T$ and $\kappa : \Theta \to \Omega$ such that $\alpha^\kappa(\mathcal{C}) = \mathcal{D}$ #m/def/code 
i.e. $\varphi$ is a bijection in the following commutative diagram in $\Set$:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMiwwLCJTXlxcT21lZ2EiXSxbMiwyLCJUXlxcVGhldGEiXSxbMCwwLCJcXG1hdGhjYWwgQyJdLFswLDIsIlxcbWF0aGNhbCBEIl0sWzQsMCwiUyJdLFs0LDIsIlQiXSxbNiwyLCJcXFRoZXRhIl0sWzYsMCwiXFxPbWVnYSJdLFsyLDAsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoiYm90dG9tIn19fV0sWzMsMSwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMCwxLCJcXGFscGhhXlxca2FwcGEiXSxbMiwzLCJcXHZhcnBoaSIsMl0sWzQsNSwiXFxhbHBoYSJdLFs2LDcsIlxca2FwcGEiLDJdXQ%3D%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%7B%5Cmathcal%20C%7D%20%26%26%20%7BS%5E%5COmega%7D%20%26%26%20S%20%26%26%20%5COmega%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathcal%20D%7D%20%26%26%20%7BT%5E%5CTheta%7D%20%26%26%20T%20%26%26%20%5CTheta%0A%09%5Carrow%5Bhook'%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Cvarphi%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Calpha%5E%5Ckappa%7D%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Calpha%22%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bhook'%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Ckappa%22'%2C%20from%3D3-7%2C%20to%3D1-7%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsOCxbMiwwLCJTXlxcT21lZ2EiXSxbMiwyLCJUXlxcVGhldGEiXSxbMCwwLCJcXG1hdGhjYWwgQyJdLFswLDIsIlxcbWF0aGNhbCBEIl0sWzQsMCwiUyJdLFs0LDIsIlQiXSxbNiwyLCJcXFRoZXRhIl0sWzYsMCwiXFxPbWVnYSJdLFsyLDAsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoiYm90dG9tIn19fV0sWzMsMSwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMCwxLCJcXGFscGhhXlxca2FwcGEiXSxbMiwzLCJcXHZhcnBoaSIsMl0sWzQsNSwiXFxhbHBoYSJdLFs2LDcsIlxca2FwcGEiLDJdXQ==" /></p>


When codes (and their alphabets) are given additional algebraic structure, we usually require a kind of equivalence which respects this structure. 
Examples include

- [[Linear equivalence of codes]]

#
---
#state/tidy | #lang/en | #SemBr

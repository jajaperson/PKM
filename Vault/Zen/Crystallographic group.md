---
tags:
  - public
---
[[Condensed matter physics MOC]]
# Crystallographic group

A **crystallographic group** or **space group** $S$ in dimension $n$ is a [[discrete subgroup]] $S$ of the [[Euclidean group]] $\mathrm{E}(n)$ containing a [[Normal subgroup|normal]] $\mathbb{R}^n$-[[lattice subgroup]] $L \trianglelefteq S \leq \mathrm{E}(n)$
such that [[quotient group]] $S / L$, called the [[Point group]], is a subgroup of the [[real orthogonal group]] $\mathrm{O}(n)$. #m/def/group 
This gives the following pair of [[Short exact sequence|short exact sequences]]

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTAsWzAsMCwiMSJdLFsyLDAsIkwiXSxbNCwwLCJTIl0sWzYsMCwiUy9MIl0sWzgsMCwiMSJdLFsyLDIsIlxcbWF0aGJiIFJebiJdLFs0LDIsIlxcbWF0aHJte0V9KG4pIl0sWzYsMiwiXFxtYXRocm0gTyhuKSJdLFs4LDIsIjEiXSxbMCwyLCIxIl0sWzAsMV0sWzMsNF0sWzcsOF0sWzksNV0sWzUsNiwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs2LDcsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifX19XSxbMiwzLCIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMiw2LCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFszLDcsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsNSwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%091%20%5C%26%5C%26%20L%20%5C%26%5C%26%20S%20%5C%26%5C%26%20%7BS%2FL%7D%20%5C%26%5C%26%201%20%5C%5C%0A%09%5C%5C%0A%091%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5En%7D%20%5C%26%5C%26%20%7B%5Cmathrm%7BE%7D(n)%7D%20%5C%26%5C%26%20%7B%5Cmathrm%20O(n)%7D%20%5C%26%5C%26%201%0A%09%5Carrow%5Bfrom%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5Btail%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5Bhook%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5Bhook%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bfrom%3D1-7%2C%20to%3D1-9%5D%0A%09%5Carrow%5Bhook%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5Bfrom%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5Btail%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%09%5Carrow%5Bfrom%3D3-7%2C%20to%3D3-9%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTAsWzAsMCwiMSJdLFsyLDAsIkwiXSxbNCwwLCJTIl0sWzYsMCwiUy9MIl0sWzgsMCwiMSJdLFsyLDIsIlxcbWF0aGJiIFJebiJdLFs0LDIsIlxcbWF0aHJte0V9KG4pIl0sWzYsMiwiXFxtYXRocm0gTyhuKSJdLFs4LDIsIjEiXSxbMCwyLCIxIl0sWzAsMV0sWzMsNF0sWzcsOF0sWzksNV0sWzUsNiwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs2LDcsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifX19XSxbMiwzLCIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMiw2LCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFszLDcsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsNSwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XV0=" /></p>

Such a group is the symmetry group of a [[Crystal]].
According to the [[Crystallographic restriction theorem]], point groups must have rotational symmetries that are 1-,2-,3-,4-, or 6-fold.

#
---
#state/develop | #lang/en | #SemBr
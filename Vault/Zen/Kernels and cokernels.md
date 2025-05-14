---
tags:
  - public
aliases:
  - (co)kernel
  - cokernel
  - kernel
---
[[Category theory MOC]]
# Kernel

In a [[category]] $\cat C$ [[Zero morphism|with zero morphisms]],
the **kernel** $\ker f$ of a morphism $f \in \cat C(X,Y)$ is the [[Equalizer and coëqualizer|equalizer]] of $f$ with the zero morphism $0 \in \cat C(X,Y)$. #m/def/cat

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJcXGtlciBmIl0sWzAsMiwiWCJdLFsyLDIsIlkiXSxbMiwwLCIwIl0sWzEsMiwiZiJdLFswLDMsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFszLDIsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoiYm90dG9tIn19fV0sWzAsMSwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMCwyLCIiLDAseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Cker%20f%7D%20%5C%26%5C%26%200%20%5C%5C%0A%09%5C%5C%0A%09X%20%5C%26%5C%26%20Y%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5Bhook'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%5Clrcorner%22%7Banchor%3Dcenter%2C%20pos%3D0.125%7D%2C%20draw%3Dnone%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5Bhook'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXGtlciBmIl0sWzAsMiwiWCJdLFsyLDIsIlkiXSxbMiwwLCIwIl0sWzEsMiwiZiJdLFswLDMsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFszLDIsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoiYm90dG9tIn19fV0sWzAsMSwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMCwyLCIiLDAseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XV0=" /></p>

The dual notion is the cokernel.


## Examples in particular categories

- [[Kernel of a group homomorphism]] in [[Category of groups]] and [[Category of abelian groups]]
- [[Linear kernel]] in [[Category of vector spaces]]
- [[Module kernel]] in [[Category of left modules]]
- [[Kernel of an algebra homomorphism]] in [[Category of algebras]]
- [[Kernel of a Lie algebra homomorphism]] in [[Category of Lie algebras]]

#
---
#state/tidy | #lang/en | #SemBr

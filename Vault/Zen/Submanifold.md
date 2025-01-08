---
tags:
  - public
---
[[Differential geometry MOC]]
# Submanifold

Let $X$ be a $n$-dimensional $C^k$ [[differentiable manifold]] and let $1 \leq m \leq n$.
A $m$-dimensional (embedded) $C^k$ **submanifold** $Y \leq X$ is a subset $Y \sube X$
such that every $y \in Y$ has a [[coördinate chart]] $(U, \varphi)$ 
such that $\varphi(U \cap Y) = \varphi(U) \cap (\mathbb{R}^m \times \{ \vab 0 \})$. #m/def/geo/diff 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNyxbMiwwLCJVIFxcY2FwIFkiXSxbMiwyLCJVIl0sWzQsMiwiXFxtYXRoYmIgUl5uIl0sWzQsMCwiXFxtYXRoYmIgUl5tIl0sWzAsMCwiWSJdLFswLDIsIlgiXSxbNCwxLCJcXG1hdGhiYiBSXm0gXFx0aW1lcyBcXHtcXHZlY3tcXG1hdGhiZnswfX1cXH0iXSxbMSwyLCJcXHZhcnBoaSJdLFs0LDUsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsNSwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMCw0LCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6ImJvdHRvbSJ9fX1dLFswLDEsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzAsNiwiXFx2YXJwaGkiLDFdLFs2LDIsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzAsMywiXFxiYXIgXFx2YXJwaGkiXSxbMyw2LCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09Y%20%5C%26%5C%26%20%7BU%20%5Ccap%20Y%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5Em%7D%20%5C%5C%0A%09%5C%26%5C%26%5C%26%5C%26%20%7B%5Cmathbb%20R%5Em%20%5Ctimes%20%5C%7B%5Cvec%7B%5Cmathbf%7B0%7D%7D%5C%7D%7D%20%5C%5C%0A%09X%20%5C%26%5C%26%20U%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5En%7D%0A%09%5Carrow%5Bhook%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5Bhook'%2C%20from%3D1-3%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20%5Cvarphi%7D%22%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%5Cvarphi%22%7Bdescription%7D%2C%20from%3D1-3%2C%20to%3D2-5%5D%0A%09%5Carrow%5Bhook%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5Btail%20reversed%2C%20from%3D1-5%2C%20to%3D2-5%5D%0A%09%5Carrow%5Bhook%2C%20from%3D2-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bhook'%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%5Cvarphi%22%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNyxbMiwwLCJVIFxcY2FwIFkiXSxbMiwyLCJVIl0sWzQsMiwiXFxtYXRoYmIgUl5uIl0sWzQsMCwiXFxtYXRoYmIgUl5tIl0sWzAsMCwiWSJdLFswLDIsIlgiXSxbNCwxLCJcXG1hdGhiYiBSXm0gXFx0aW1lcyBcXHtcXHZlY3tcXG1hdGhiZnswfX1cXH0iXSxbMSwyLCJcXHZhcnBoaSJdLFs0LDUsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsNSwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMCw0LCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6ImJvdHRvbSJ9fX1dLFswLDEsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzAsNiwiXFx2YXJwaGkiLDFdLFs2LDIsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzAsMywiXFxiYXIgXFx2YXJwaGkiXSxbMyw2LCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XV0=" /></p>


Thus $Y$ inherits the structure of an $m$-dimensional $C^k$ [[differentiable manifold]] from $X$,
with the induced chart $(U \cap Y, \bar\varphi)$.


#
---
#state/tidy | #lang/en | #SemBr

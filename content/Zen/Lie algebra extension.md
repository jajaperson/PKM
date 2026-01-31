---
tags:
  - public
mathLink-blocks:
  abelian: abelian extension
  central: central extension
  split: split extension
  trivial: trivial extension
  equivalent: equivalent
---
[[Lie algebras MOC]]
# Lie algebra extension

Let $\mathfrak{a}, \mathfrak{b}$ be [[Lie algebra|Lie algebras]].
An **[[extension]]** of $\mathfrak{a}$ by $\mathfrak{b}$ is a Lie algebra $\mathfrak{g}$ together with a [[short exact sequence]] #m/def/lie
$$
\begin{align*}
0 \to \mathfrak{b} \hookrightarrow \mathfrak{g} \twoheadrightarrow \mathfrak{a} \to 0
\end{align*}
$$
Hence the $\mathfrak{g}$ “covers” $\mathfrak{a}$ with [[Kernel of a Lie algebra homomorphism|kernel]] $\mathfrak{b} \hookrightarrow \mathfrak{g}$. 
Note that $\mathfrak{b}$ is necessarily an [[Lie algebra ideal|ideal]],
giving the [[Quotient Lie algebra|quotient]] $\mathfrak{g} / \mathfrak{b} \cong \mathfrak{a}$ by the [[Lie algebra isomorphism theorems#First isomorphism theorem]].
Two extensions $\mathfrak{g}, \mathfrak{g}_{1}$ of $\mathfrak{a}$ by $\mathfrak{b}$ are said to be **equivalent** iff there exists an isomorphism such that the following diagram commutes ^equivalent

<p align="center"><img align="center" src="
https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMCwxLCIwIl0sWzIsMSwiXFxmcmFrIGIiXSxbNCwwLCJcXGZyYWsgZyJdLFs0LDIsIlxcZnJhayBnXzEiXSxbNiwxLCJcXGZyYWsgYSJdLFs4LDEsIjAiXSxbMCwxXSxbMSwyLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsxLDMsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzIsNCwiIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzMsNCwiIiwxLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzIsMywiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzQsNV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%5C%26%5C%26%20%7B%5Cfrak%20g%7D%20%5C%5C%0A%090%20%5C%26%5C%26%20%7B%5Cfrak%20b%7D%20%5C%26%5C%26%5C%26%5C%26%20%7B%5Cfrak%20a%7D%20%5C%26%5C%26%200%20%5C%5C%0A%09%5C%26%5C%26%5C%26%5C%26%20%7B%5Cfrak%20g_1%7D%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D1-5%2C%20to%3D2-7%5D%0A%09%5Carrow%5Btail%20reversed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bfrom%3D2-1%2C%20to%3D2-3%5D%0A%09%5Carrow%5Bhook%2C%20from%3D2-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5Bhook%2C%20from%3D2-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bfrom%3D2-7%2C%20to%3D2-9%5D%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D3-5%2C%20to%3D2-7%5D%0A%5Cend%7Btikzcd%7D%0A
#invert" alt="https://q.uiver.app/#q=WzAsNixbMCwxLCIwIl0sWzIsMSwiXFxmcmFrIGIiXSxbNCwwLCJcXGZyYWsgZyJdLFs0LDIsIlxcZnJhayBnJyJdLFs2LDEsIlxcZnJhayBhIl0sWzgsMSwiMCJdLFswLDFdLFsxLDIsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsMywiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbMiw0LCIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMyw0LCIiLDEseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMiwzLCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbNCw1XV0=" /></p>



## Classification

Consider an extension $0 \to \mathfrak{b} \hookrightarrow \mathfrak{g} \stackrel{p}{\twoheadrightarrow} \mathfrak{a} \to 0$.

1. Iff $\mathfrak{b}$ is [[Abelian Lie algebra|abelian]], one speaks of an **abelian extension**, ^abelian
2. Iff $\mathfrak{b} \hookrightarrow \mathfrak{g}$ is a [[central ideal]], one speaks of a **central extension**. ^central
3. Iff $\mathfrak{g} \cong \mathfrak{b} \rtimes \mathfrak{a}$ ([[Semidirect product of Lie algebras]]), one speaks of a **split extension**, equivalently $p$ is [[Split epimorphism|split epic]]. ^split
4. Iff $\mathfrak{g} \cong \mathfrak{b} \times \mathfrak{a}$ ([[Direct product of Lie algebras]]), one speaks of a **trivial extension**. ^trivial

> [!missing]- Proof of equivalence in 3.
> #missing/proof


## See also

- [[Group extension]] (the structure of that Zettel deliberately mirrors this one)


#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
mathLink-blocks:
  abelian: abelian extension
  central: central extension
  split: split extension
  trivial: trivial extension
  equivalent: equivalent
aliases:
  - extension of a group
---
[[Group theory MOC]]
# Group extension

Let $A, B$ be [[group|groups]]. An **[[extension]]** of $A$ by $B$ is a group $G$ together with a [[short exact sequence]] #m/def/group 
$$
\begin{align*}
1 \to B \hookrightarrow G \twoheadrightarrow A \to 1
\end{align*}
$$
where $1$ denotes the [[trivial group]].
Hence $G$ “covers” $A$ with the [[Kernel of a group homomorphism|kernel]] $B \hookrightarrow G$.
Note that $B$ is necessarily a [[normal subgroup]], giving the [[Quotient group|quotient]] $G / B \cong A$ by the [[Group isomorphism theorems#First isomorphism theorem]].
Two extensions $G_{1},G_{2}$ of $A$ by $B$ are said to be **equivalent** iff there exists an isomorphism such that the following diagram commutes ^equivalent

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMCwxLCIxIl0sWzIsMSwiQiJdLFs0LDAsIkdfMSJdLFs0LDIsIkdfMiJdLFs2LDEsIkEiXSxbOCwxLCIxIl0sWzAsMV0sWzEsMiwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbMSwzLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsyLDQsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFszLDQsIiIsMSx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsyLDMsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFs0LDVdXQ%3D%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%26%26%26%26%20%7BG_1%7D%20%5C%5C%0A%091%20%26%26%20B%20%26%26%26%26%20A%20%26%26%201%20%5C%5C%0A%09%26%26%26%26%20%7BG_2%7D%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D1-5%2C%20to%3D2-7%5D%0A%09%5Carrow%5Btail%20reversed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bfrom%3D2-1%2C%20to%3D2-3%5D%0A%09%5Carrow%5Bhook%2C%20from%3D2-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5Bhook%2C%20from%3D2-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bfrom%3D2-7%2C%20to%3D2-9%5D%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D3-5%2C%20to%3D2-7%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNixbMCwxLCIxIl0sWzIsMSwiQiJdLFs0LDAsIkdfMSJdLFs0LDIsIkdfMiJdLFs2LDEsIkEiXSxbOCwxLCIxIl0sWzAsMV0sWzEsMiwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbMSwzLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsyLDQsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFszLDQsIiIsMSx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsyLDMsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFs0LDVdXQ==" /></p>




## Classification

Consider an extension $1 \to B \to G \stackrel{p}{\twoheadrightarrow} A \to 1$.

1. Iff $B$ is [[Abelian Lie algebra|abelian]], one speaks of an **abelian extension**, ^abelian
2. Iff $B \hookrightarrow G$ is [[Centre of a group|central]], one speaks of a **[[Central group extension|central extension]]**. ^central
3. Iff $G \cong B \rtimes A$ ([[Semidirect product]]), one speaks of a **split extension**, equivalently $p$ is [[Split epimorphism|split epic]]. ^split
4. Iff $\mathfrak{g} \cong \mathfrak{b} \times \mathfrak{a}$ ([[Direct product of groups]]), one speaks of a **trivial extension**. ^trivial

> [!missing]- Proof of equivalence in 3.
> #missing/proof



## See also

- [[Lie algebra extension]] (the structure of that Zettel deliberately mirrors this one)

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Free product of groups]]
# Amalgamated free product

The **amalgameted free product** is a [[Fibre product and coproduct|fibre coproduct]] along [[Group monomorphism|monomorphisms]].
Let $G,H,K$ be groups and $\varphi:K \rightarrowtail G$ and $\psi : K \rightarrowtail H$ be monomorphisms.
The **amalgamated free product** $G \amalg_{K} H$ is the limit of the diagram
$$
\begin{align*}
Z \overset \varphi \leftarrowtail K\overset \psi \rightarrowtail H
\end{align*}
$$
thus for any $Q, j_{1}, j_{2}$ for which the diagram commutes, there exists a unique $h$ so that the diagram commutes:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMCwwLCJLIl0sWzIsMiwiRyBcXGFtYWxnX0sgSCJdLFswLDIsIkciXSxbMiwwLCJIIl0sWzQsNCwiUSJdLFswLDMsIlxccHNpIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFswLDIsIlxcdmFycGhpIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsyLDEsImlfMSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifX19XSxbMywxLCJpXzIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtb25vIn19fV0sWzEsMCwiIiwxLHsic3R5bGUiOnsibmFtZSI6ImNvcm5lciJ9fV0sWzIsNCwial8xIiwyLHsiY3VydmUiOjF9XSxbMyw0LCJqXzIiLDAseyJjdXJ2ZSI6LTF9XSxbMSw0LCJoIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09K%20%5C%26%5C%26%20H%20%5C%5C%0A%09%5C%5C%0A%09G%20%5C%26%5C%26%20%7BG%20%5Camalg_K%20H%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%5C%26%5C%26%20Q%0A%09%5Carrow%5B%22%5Cpsi%22%2C%20tail%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Cvarphi%22'%2C%20tail%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7Bi_1%7D%22'%2C%20tail%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7Bi_2%7D%22%2C%20tail%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Clrcorner%22%7Banchor%3Dcenter%2C%20pos%3D0.125%2C%20rotate%3D180%7D%2C%20draw%3Dnone%2C%20from%3D3-3%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%7Bj_1%7D%22'%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D3-1%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7Bj_2%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-3%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22h%22%2C%20dashed%2C%20from%3D3-3%2C%20to%3D5-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMCwwLCJLIl0sWzIsMiwiRyBcXGFtYWxnX0sgSCJdLFswLDIsIkciXSxbMiwwLCJIIl0sWzQsNCwiUSJdLFswLDMsIlxccHNpIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFswLDIsIlxcdmFycGhpIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsyLDEsImlfMSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1vbm8ifX19XSxbMywxLCJpXzIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtb25vIn19fV0sWzEsMCwiIiwxLHsic3R5bGUiOnsibmFtZSI6ImNvcm5lciJ9fV0sWzIsNCwial8xIiwyLHsiY3VydmUiOjF9XSxbMyw0LCJqXzIiLDAseyJjdXJ2ZSI6LTF9XSxbMSw0LCJoIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d" /></p>


If $G \amalg H$ is the [[Free product of groups|free product]] of $G$ and $H$ with inclusions $\iota_{1} : G \to G \amalg H$ and $\iota_{2} : H \to G \amalg H$ then the amalgamated free product is given by the quotient by a [[Normal closure]]: #m/thm/group
$$
\begin{align*}
G \amalg H / \mathrm{ncl} \{ \iota_{1}\varphi (k) \iota_{2}\psi(k^{-1}) : k \in K \}
\end{align*}
$$

> [!check]- Proof
> Let $N$ be the [[Normal closure]]
> $$
> \begin{align*}
> N = \mathrm{ncl}  \{ \iota_{1}\varphi (k) \iota_{2}\psi(k^{-1}) : k \in K \}
> \end{align*}
> $$
> And $G \amalg H / N$ be the [[quotient group]] with the projection $\pi : G \amalg H \twoheadrightarrow G \amalg H / N$.
> Let $G \amalg H$ be the [[Products and coproducts|coproduct]] with injections $\iota_{1} : G \to G \amalg H$ and $\iota_{2} : H \to G \amalg H$.
> Let $Q, j_{1}, j_{2}$ such that the above diagram commutes.
> By the universal property of the coproduct, there exists a unique $p : G \amalg H \to Q$ such that $p\iota_{1} = i_{1}$ and $p j_{2} = j_{2}$.
> Hence $p\iota_{1}\varphi = p \iota_{2} \psi$ and thus $\iota_{1} \varphi (k) \iota_{2}\psi(k^{-1}) \in \ker p$ for all $k \in K$,
> implying $N \sube \ker p$.
> Then by the universal property of the quotient group, there exists a unique $h : G \amalg H / N \to Q$ such that $h\pi = p$,
> and thus following diagram commutes:
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNyxbMCwxLCJLIl0sWzIsMiwiSCJdLFsyLDAsIkciXSxbNCwwLCJHIFxcYW1hbGcgSCJdLFs0LDIsIkcgXFxhbWFsZyBIIl0sWzYsMSwiRyBcXGFtYWxnIEggLyBOIl0sWzgsMSwiUSJdLFswLDIsIlxcdmFycGhpIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsyLDMsIlxcaW90YV8xIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsxLDQsIlxcaW90YV8yIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs0LDUsIlxccGkiLDFdLFszLDUsIlxccGkiLDFdLFswLDEsIlxccHNpIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs1LDYsImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMSw2LCJqXzIiLDEseyJjdXJ2ZSI6NX1dLFsyLDYsImpfMiIsMSx7ImN1cnZlIjotNX1dLFszLDYsInAiLDEseyJjdXJ2ZSI6LTEsInN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDYsInAiLDEseyJjdXJ2ZSI6MSwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%20G%20%5C%26%5C%26%20%7BG%20%5Camalg%20H%7D%20%5C%5C%0A%09K%20%5C%26%5C%26%5C%26%5C%26%5C%26%5C%26%20%7BG%20%5Camalg%20H%20%2F%20N%7D%20%5C%26%5C%26%20Q%20%5C%5C%0A%09%5C%26%5C%26%20H%20%5C%26%5C%26%20%7BG%20%5Camalg%20H%7D%0A%09%5Carrow%5B%22%5Cvarphi%22%7Bdescription%7D%2C%20tail%2C%20from%3D2-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Ciota_1%7D%22%7Bdescription%7D%2C%20tail%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Ciota_2%7D%22%7Bdescription%7D%2C%20tail%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%5Cpi%22%7Bdescription%7D%2C%20from%3D3-5%2C%20to%3D2-7%5D%0A%09%5Carrow%5B%22%5Cpi%22%7Bdescription%7D%2C%20from%3D1-5%2C%20to%3D2-7%5D%0A%09%5Carrow%5B%22%5Cpsi%22%7Bdescription%7D%2C%20tail%2C%20from%3D2-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22h%22%7Bdescription%7D%2C%20dashed%2C%20from%3D2-7%2C%20to%3D2-9%5D%0A%09%5Carrow%5B%22%7Bj_2%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D30pt%7D%2C%20from%3D3-3%2C%20to%3D2-9%5D%0A%09%5Carrow%5B%22%7Bj_2%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-30pt%7D%2C%20from%3D1-3%2C%20to%3D2-9%5D%0A%09%5Carrow%5B%22p%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20dashed%2C%20from%3D1-5%2C%20to%3D2-9%5D%0A%09%5Carrow%5B%22p%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20dashed%2C%20from%3D3-5%2C%20to%3D2-9%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNyxbMCwxLCJLIl0sWzIsMiwiSCJdLFsyLDAsIkciXSxbNCwwLCJHIFxcYW1hbGcgSCJdLFs0LDIsIkcgXFxhbWFsZyBIIl0sWzYsMSwiRyBcXGFtYWxnIEggLyBOIl0sWzgsMSwiUSJdLFswLDIsIlxcdmFycGhpIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsyLDMsIlxcaW90YV8xIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsxLDQsIlxcaW90YV8yIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs0LDUsIlxccGkiLDFdLFszLDUsIlxccGkiLDFdLFswLDEsIlxccHNpIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs1LDYsImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMSw2LCJqXzIiLDEseyJjdXJ2ZSI6NX1dLFsyLDYsImpfMiIsMSx7ImN1cnZlIjotNX1dLFszLDYsInAiLDEseyJjdXJ2ZSI6LTEsInN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDYsInAiLDEseyJjdXJ2ZSI6MSwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d" /></p>
> 
> Thus $G \amalg H / N$ satisfies the universal property of the fibre product.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 
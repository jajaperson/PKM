---
tags:
  - public
---
[[Module theory MOC]]
# Tensor product of modules over a commutative ring

Let $M, N$ be [[Module over a commutative ring|modules over a commutative ring]] $R$.
The **tensor product** $M \otimes_{R} N$ is an $R$-module such that the $R$-[[Multilinear map|bilinear]] maps from $M \times N$ are in correspondence with the $R$-[[Module homomorphism|linear]] maps from $M \otimes_{R} N$, as defined by the [[#Universal property]].[^2009] 
A generalization for the [[Tensor product of modules over a noncommutative ring]] exists, but is not necessarily a module.

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter2009|Algebra: Chapter 0]], §VIII.2.1, p. 501

## Universal property

Let $M, N$ be $R$-modules.
The tensor product is a pair consisting of an $R$-module $M \otimes_{R} N$ together with an $R$-[[Multilinear map|bilinear]] map $(\otimes) : M \times N \to M \otimes_{R} N$
such any $R$-bilinear map $\varphi : M \times N \to P$ factorizes uniquely through $(\otimes)$ #m/def/module/comm

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJNIFxcdGltZXMgTiJdLFswLDIsIk0gXFxvdGltZXNfUiBOIl0sWzIsMCwiUCJdLFswLDEsIihcXG90aW1lcykiLDJdLFswLDIsIlxcdmFycGhpIl0sWzEsMiwiXFxleGlzdHMhXFxiYXJcXHZhcnBoaSIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7BM%20%5Ctimes%20N%7D%20%5C%26%5C%26%20P%20%5C%5C%0A%09%5C%5C%0A%09%7BM%20%5Cotimes_R%20N%7D%0A%09%5Carrow%5B%22%5Cvarphi%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B(%5Cotimes)%7D%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cexists!%5Cbar%5Cvarphi%7D%22'%2C%20dashed%2C%20from%3D3-1%2C%20to%3D1-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJNIFxcdGltZXMgTiJdLFswLDIsIk0gXFxvdGltZXNfUiBOIl0sWzIsMCwiUCJdLFswLDEsIihcXG90aW1lcykiLDJdLFswLDIsIlxcdmFycGhpIl0sWzEsMiwiXFxleGlzdHMhXFxiYXJcXHZhcnBoaSIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==" /></p>

such that $\overline{\varphi}$ is $R$-[[Module homomorphism|linear]].

## Construction

Let $R[M \times N]$ be the [[free module]] on $M \times N$ with the natural inclusion function $\iota: M \times N \hookrightarrow R[M \times N]$.
Let $K$ denote the $R$-[[Submodule]] of $R[M \times N]$ generated by elements of the form
$$
\begin{align*}
\iota(m, \alpha n_{1} + \beta n_{2})  - \alpha\iota(m,n_{1}) - \beta\iota(m, n_{2}); \\
\iota(\alpha m_{1} + \beta m_{2}, n) - \alpha\iota(m_{1},n) - \beta\iota(m_{2},n);
\end{align*}
$$
for all $m,m_{1},m_{2} \in M$, $n,n_{1},n_{2} \in N$, $\alpha,\beta \in R$.
We construct the tensor product as the [[quotient module]]
$$
\begin{align*}
M \otimes_{R} N = R[M \times N] / K
\end{align*}
$$
with its natural projection $\pi : R[M \times N] \twoheadrightarrow M \otimes_{R} N$,
so that the map
$$
\begin{align*}
(\otimes) = \pi \circ \iota : M \times N \to M \otimes_{R} N
\end{align*}
$$

> [!check]- Proof of the universal property
> By construction $(\otimes)$ is $R$-[[Multilinear map|bilinear]].
> Let $\varphi : M \times N \to P$ be $R$-bilinear.
> By the [[Free module#Universal property|universal property of the free module]] we have a unique $R$-[[Module homomorphism|linear]] map $\tilde{\varphi}$ such that the following commutes:
>   
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJNIFxcdGltZXMgTiJdLFswLDIsIlJbTSBcXHRpbWVzIE5dIl0sWzIsMCwiUCJdLFswLDEsIlxcaW90YSIsMl0sWzAsMiwiXFx2YXJwaGkiXSxbMSwyLCJcXGV4aXN0cyFcXHRpbGRlXFx2YXJwaGkiLDJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7BM%20%5Ctimes%20N%7D%20%5C%26%5C%26%20P%20%5C%5C%0A%09%5C%5C%0A%09%7BR%5BM%20%5Ctimes%20N%5D%7D%0A%09%5Carrow%5B%22%5Cvarphi%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Ciota%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cexists!%5Ctilde%5Cvarphi%7D%22'%2C%20from%3D3-1%2C%20to%3D1-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJNIFxcdGltZXMgTiJdLFswLDIsIlJbTSBcXHRpbWVzIE5dIl0sWzIsMCwiUCJdLFswLDEsIlxcaW90YSIsMl0sWzAsMiwiXFx2YXJwaGkiXSxbMSwyLCJcXGV4aXN0cyFcXHRpbGRlXFx2YXJwaGkiLDJdXQ==" /></p>
> 
> and by the $R$-bilinearity of $\varphi$ it follows $K \leq_{\lMod{R}} \ker \tilde{\varphi}$,
> so by the [[Quotient module#Universal property|universal property of the quotient module]] $\tilde{\varphi}$ factors uniquely through $\pi$,
> yielding the commutative diagram
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJNIFxcdGltZXMgTiJdLFswLDIsIlJbTSBcXHRpbWVzIE5dIl0sWzIsMCwiUCJdLFswLDQsIk0gXFxvdGltZXNfUiBOIl0sWzAsMSwiXFxpb3RhIiwyXSxbMCwyLCJcXHZhcnBoaSJdLFsxLDIsIlxcdGlsZGVcXHZhcnBoaSIsMl0sWzEsMywiXFxwaSIsMl0sWzMsMiwiXFxleGlzdHMhXFxiYXIgXFx2YXJwaGkiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMCwzLCIoXFxvdGltZXMpIiwyLHsiY3VydmUiOjV9XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7BM%20%5Ctimes%20N%7D%20%5C%26%5C%26%20P%20%5C%5C%0A%09%5C%5C%0A%09%7BR%5BM%20%5Ctimes%20N%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7BM%20%5Cotimes_R%20N%7D%0A%09%5Carrow%5B%22%5Cvarphi%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Ciota%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B(%5Cotimes)%7D%22'%2C%20curve%3D%7Bheight%3D30pt%7D%2C%20from%3D1-1%2C%20to%3D5-1%5D%0A%09%5Carrow%5B%22%7B%5Ctilde%5Cvarphi%7D%22'%2C%20from%3D3-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Cpi%22'%2C%20from%3D3-1%2C%20to%3D5-1%5D%0A%09%5Carrow%5B%22%7B%5Cexists!%5Cbar%20%5Cvarphi%7D%22'%2C%20dashed%2C%20from%3D5-1%2C%20to%3D1-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJNIFxcdGltZXMgTiJdLFswLDIsIlJbTSBcXHRpbWVzIE5dIl0sWzIsMCwiUCJdLFswLDQsIk0gXFxvdGltZXNfUiBOIl0sWzAsMSwiXFxpb3RhIiwyXSxbMCwyLCJcXHZhcnBoaSJdLFsxLDIsIlxcdGlsZGVcXHZhcnBoaSIsMl0sWzEsMywiXFxwaSIsMl0sWzMsMiwiXFxleGlzdHMhXFxiYXIgXFx2YXJwaGkiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMCwzLCIoXFxvdGltZXMpIiwyLHsiY3VydmUiOjV9XV0=" /></p>
> 
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
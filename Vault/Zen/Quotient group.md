---
tags:
  - public
---
[[Group theory MOC]]
# Quotient group

Given a [[normal subgroup]] $N \trianglelefteq G$,
the **quotient group** $G / N$ is a [[group]] of the [[coset|cosets]] of $N$,
defined as follows #m/def/group 
$$
\begin{align*}
G / N &= \{ gN : g \in G \} \\
(g_{1}g_{2})N &= (g_{1}N) (g_{2}N)
\end{align*}
$$
with the canonical projection
$$
\begin{align*}
\pi : G &\to G / N \\
g &\mapsto g N
\end{align*}
$$
The **quotient group** is the natural application of the [[Algebraic quotient]] in the group context.
However, instead of taking the quotient mod a congruence relation,
it is typical to use the [[Correspondence between normal subgroups and congruence relations|corresponding normal subgroup]].
Hence $gN$ may alternatively be referred to as $[g]_{N}$,
taken to mean _the equivalence class of $g$ under the congruence induced by $N$_.
Another notation is to just use the elements of $G$ but replace $=$ with $\equiv_{N}$.

## Universal property

The quotient group with the canonical projection $(G / N, \pi)$ is characterized up to unique isomorphism by the universal property:

$N \trianglelefteq \ker \pi$.
If $H$ is a group and $\varphi \in \Grp(G,H)$ is a homomorphism with $N \trianglelefteq \ker \varphi$,
then there exists a unique homomorphism $\overline{\varphi} \in \Grp(G / N, H)$ so that $\varphi = \overline{\varphi} \pi$, i.e.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJHIl0sWzIsMCwiRy9OIl0sWzIsMiwiSCJdLFswLDEsIlxccGlfRyIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFswLDIsIlxcdmFycGhpIiwyXSxbMSwyLCJcXGJhciBcXHZhcnBoaSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ%3D%3D%26macro_url%3D%255CDeclareMathOperator%257B%255Cid%257D%257Bid%257D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09G%20%5C%26%5C%26%20%7BG%2FN%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20H%0A%09%5Carrow%5B%22%7B%5Cpi_G%7D%22%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Cvarphi%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20%5Cvarphi%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJHIl0sWzIsMCwiRy9OIl0sWzIsMiwiSCJdLFswLDEsIlxccGlfRyIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFswLDIsIlxcdmFycGhpIiwyXSxbMSwyLCJcXGJhciBcXHZhcnBoaSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&amp;macro_url=%5CDeclareMathOperator%7B%5Cid%7D%7Bid%7D"
 /></p>

> [!check]- Proof
> By construction, $\pi(N) = \{ e \}$.
> A homomorphism $\varphi \in \Grp(G, H)$ can be factored via $\bar \varphi \pi_A$ iff $\varphi(gN) = \{\varphi (g) \}$,
> and this holds iff $\varphi (N) = \{e\}$.
> The uniqueness of $\bar \varphi$ follows from $\pi$ being an epimorphism:
> $\varphi = \bar \varphi \pi = f\pi \implies f = \bar \varphi$.
> Therefore $(G/N, \pi)$ fulfils the universal property.
> If $(Q,\psi)$ also fulfils the universal property, then the following diagram commutes:
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMiwyLCJHIl0sWzIsMCwiRy9OIl0sWzQsMiwiUSJdLFsyLDQsIlEiXSxbMCwyLCJHL04iXSxbMCw0LCJcXHBpIiwxLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMSwiXFxwaSIsMSx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFswLDIsIlxccHNpIiwxLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMywiXFxwc2kiLDEseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbNCwxLCJcXG1hdGhybXtpZH1fe0cvTn0iLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMywyLCJcXG1hdGhybXtpZH1fUSIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFsxLDIsIlxcUHNpIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzMsNCwiXFxQaGkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0%3D%26macro_url%3D%255CDeclareMathOperator%257B%255Cid%257D%257Bid%257D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%20%7BG%2FN%7D%20%5C%5C%0A%09%5C%5C%0A%09%7BG%2FN%7D%20%5C%26%5C%26%20G%20%5C%26%5C%26%20Q%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20Q%0A%09%5Carrow%5B%22%5Cpi%22%7Bdescription%7D%2C%20two%20heads%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%5Cpi%22%7Bdescription%7D%2C%20two%20heads%2C%20from%3D3-3%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Cpsi%22%7Bdescription%7D%2C%20two%20heads%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%5Cpsi%22%7Bdescription%7D%2C%20two%20heads%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bid%7D_%7BG%2FN%7D%7D%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D3-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bid%7D_Q%7D%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D5-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%5CPsi%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%5CPhi%22%7Bdescription%7D%2C%20dashed%2C%20from%3D5-3%2C%20to%3D3-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMiwyLCJHIl0sWzIsMCwiRy9OIl0sWzQsMiwiUSJdLFsyLDQsIlEiXSxbMCwyLCJHL04iXSxbMCw0LCJcXHBpIiwxLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMSwiXFxwaSIsMSx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFswLDIsIlxccHNpIiwxLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMywiXFxwc2kiLDEseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbNCwxLCJcXG1hdGhybXtpZH1fe0cvTn0iLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMywyLCJcXG1hdGhybXtpZH1fUSIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFsxLDIsIlxcUHNpIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzMsNCwiXFxQaGkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&amp;macro_url=%5CDeclareMathOperator%7B%5Cid%7D%7Bid%7D" /></p>
> giving the required unique isomorphism.
> <span class="QED"/>

## Properties

- By [[Lagrange's Theorem]] $\abs{G / N} = [G : N] = \frac{\abs{G}}{\abs{N}}$.

## Special quotients

- [[Abelianization]] $G / [G,G]$

#
---
#state/tidy| #lang/en | #SemBr 
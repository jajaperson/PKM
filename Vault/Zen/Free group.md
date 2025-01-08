---
tags:
  - public
---
[[Group theory MOC]]
# Free group

**Free groups** are the [[Free object|free objects]] in [[Category of groups]].
Let $S$ be a set. 
Then $\mathbb{F} S$ has the [[Group presentation]] $\langle S \rangle$, i.e. it is the minimal completion of $S$ so that it becomes a group. #m/def/group
Concretely, $\mathbb{F}_{S}$ is constructed by

- Inserting the identity $e$
- Adding an inverse $a^{-1}$ for each $a \in S$
- Words (expressions made of group members) are only considered equal if the group laws demand so.

Likewise for any $f \in \Set(X,Y)$ there exists a unique $\mathbb{F}{f} \in \Grp(\mathbb{F}{X}, \mathbb{F}{Y})$,
which is just the homomorphic extension of mapping each single-element $a \in \mathbb{F}{X}$ to the corresponding $f(a) \in \mathbb{F}{Y}$.

## Universal property

The free group has a unique extension to a [[functor]]  $\mathbb{F} : \Set \to \Grp$ so that the natural injection becomes a [[natural transformation]] $\iota : \id_{\Set} \to |\mathbb{F}|$ 
(thus creäting a [[Free-forgetful adjunction]]).
This is enabled by characterising $(\mathbb{F} A, \iota_{A})$ with the following universal property:

If $G$ is a group and $f \in \Set(A, G)$ is a function
there exists a unique $\bar{f} \in \Grp(\mathbb{F}A, G)$ so that $\bar f \iota_{A} = f$,
i.e. the following diagram commutes

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMiwwLCJ8XFxtYXRoYmIgRiBBIHwiXSxbMiwyLCJ8R3wiXSxbMCwwLCJBIl0sWzQsMCwiXFxtYXRoYmIgRiBBIl0sWzQsMiwiRyJdLFsyLDAsIlxcaW90YV9BIl0sWzIsMSwiZiIsMl0sWzAsMSwifFxcYmFyIGZ8IiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzMsNCwiXFxiYXIgZiIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ%3D%3D%26macro_url%3D%255CDeclareMathOperator%257B%255Cid%257D%257Bid%257D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09A%20%5C%26%5C%26%20%7B%7C%5Cmathbb%20F%20A%20%7C%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20F%20A%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20%7B%7CG%7C%7D%20%5C%26%5C%26%20G%0A%09%5Carrow%5B%22%7B%5Ciota_A%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%7C%5Cbar%20f%7C%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%2C%20dashed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMiwwLCJ8XFxtYXRoYmIgRiBBIHwiXSxbMiwyLCJ8R3wiXSxbMCwwLCJBIl0sWzQsMCwiXFxtYXRoYmIgRiBBIl0sWzQsMiwiRyJdLFsyLDAsIlxcaW90YV9BIl0sWzIsMSwiZiIsMl0sWzAsMSwifFxcYmFyIGZ8IiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzMsNCwiXFxiYXIgZiIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&amp;macro_url=%5CDeclareMathOperator%7B%5Cid%7D%7Bid%7D" /></p>

> [!check]- Proof
> Let $\odot$ denote the product in the free group.
> Then for any $x \in \mathbb{F}A$, $x = \bigodot_{i = 1}^n \iota_A (a_i)$ with $(a_i)_{i=1}^n \in A$ and $n \in \mathbb N$.
> It follows that
> $$
> \begin{align}
> \bar f(x) = \bar f \left( \bigodot_{i = 1}^n \iota_A (a_i) \right) = \bigodot_{i = 1}^n \bar f\iota_A (a_i) = \bigodot_{i = 1}^n f(a_i)
> \end{align}
> $$
> So $\bar f$ is already determined by $f$.
> Thus $\mathbb{F} A$ fulfils the universal property.
> If $(H, j)$ also satisfies the universal property than the following diagram commutes:
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNyxbMiwyLCJBIl0sWzIsMCwifFxcbWF0aGJiIEYgQXwiXSxbNCwyLCJ8SHwiXSxbMiw0LCJ8SHwiXSxbMCwyLCJ8XFxtYXRoYmIgRiBBfCJdLFs2LDQsIkgiXSxbNiwwLCJcXG1hdGhiYiBGIEEiXSxbMCw0LCJcXGlvdGFfQSIsMV0sWzAsMSwiXFxpb3RhX0EiLDFdLFswLDIsImoiLDFdLFswLDMsImoiLDFdLFs0LDEsInxcXG1hdGhybXtpZH1fe1xcbWF0aGJiIEYgQX18IiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzMsMiwifFxcbWF0aHJte2lkfV97SH18IiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzEsMiwifFxcUGhpfCIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFszLDQsInxcXFBzaXwiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNiw1LCJcXFBoaSIsMSx7ImN1cnZlIjotMSwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzUsNiwiXFxQc2kiLDEseyJjdXJ2ZSI6LTEsInN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ%3D%3D%26macro_url%3D%255CDeclareMathOperator%257B%255Cid%257D%257Bid%257D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%20%7B%7C%5Cmathbb%20F%20A%7C%7D%20%5C%26%5C%26%5C%26%5C%26%20%7B%5Cmathbb%20F%20A%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%7C%5Cmathbb%20F%20A%7C%7D%20%5C%26%5C%26%20A%20%5C%26%5C%26%20%7B%7CH%7C%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20%7B%7CH%7C%7D%20%5C%26%5C%26%5C%26%5C%26%20H%0A%09%5Carrow%5B%22%7B%5Ciota_A%7D%22%7Bdescription%7D%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Ciota_A%7D%22%7Bdescription%7D%2C%20from%3D3-3%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22j%22%7Bdescription%7D%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22j%22%7Bdescription%7D%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7B%7C%5Cmathrm%7Bid%7D_%7B%5Cmathbb%20F%20A%7D%7C%7D%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D3-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%7C%5Cmathrm%7Bid%7D_%7BH%7D%7C%7D%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D5-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%7C%5CPhi%7C%7D%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%7C%5CPsi%7C%7D%22%7Bdescription%7D%2C%20dashed%2C%20from%3D5-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%5CPhi%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20dashed%2C%20from%3D1-7%2C%20to%3D5-7%5D%0A%09%5Carrow%5B%22%5CPsi%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20dashed%2C%20from%3D5-7%2C%20to%3D1-7%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNyxbMiwyLCJBIl0sWzIsMCwifFxcbWF0aGJiIEYgQXwiXSxbNCwyLCJ8SHwiXSxbMiw0LCJ8SHwiXSxbMCwyLCJ8XFxtYXRoYmIgRiBBfCJdLFs2LDQsIkgiXSxbNiwwLCJcXG1hdGhiYiBGIEEiXSxbMCw0LCJcXGlvdGFfQSIsMV0sWzAsMSwiXFxpb3RhX0EiLDFdLFswLDIsImoiLDFdLFswLDMsImoiLDFdLFs0LDEsInxcXG1hdGhybXtpZH1fe1xcbWF0aGJiIEYgQX18IiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzMsMiwifFxcbWF0aHJte2lkfV97SH18IiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzEsMiwifFxcUGhpfCIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFszLDQsInxcXFBzaXwiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNiw1LCJcXFBoaSIsMSx7ImN1cnZlIjotMSwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzUsNiwiXFxQc2kiLDEseyJjdXJ2ZSI6LTEsInN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&amp;macro_url=%5CDeclareMathOperator%7B%5Cid%7D%7Bid%7D" /></p>
> giving the required unique isomorphism.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

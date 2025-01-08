---
tags:
  - public
---
[[Sphere space]]
# Borsuk-Ulam theorem

Let $f : \mathbb{S}^n \to \mathbb{R}^n$ be a continuous function.
Then there exists a pair of antipodes $x,-x \in \mathbb{S}^n$ such that $f(x) = f(-x)$. #m/thm/topology 

> [!missing]- Proof
> #missing/proof

The case $n=1$ is easily proven using the [[Intermediate value theorem]].

## Corollaries

### Antipodal map from a sphere

If $f : \mathbb{S}^n \to \mathbb{R}^n$ is a continuous [[Odd and even functions|odd]] map,
i.e. the following diagram commutes where $a : x \mapsto -x$,
then there exists $x_{0} \in \mathbb{S}^n$ with $f(x_{0})=0$. #m/thm/topology 
<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJcXG1hdGhiYiBTXm4iXSxbMiwwLCJcXG1hdGhiYiBSXm4iXSxbMCwyLCJcXG1hdGhiYiBTXm4iXSxbMiwyLCJcXG1hdGhiYiBSXm4iXSxbMCwxLCJmIl0sWzIsMywiZiJdLFswLDIsImEiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMSwzLCJhIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Cmathbb%20S%5En%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5En%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathbb%20S%5En%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5En%7D%0A%09%5Carrow%5B%22f%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22a%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22a%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="
% https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG1hdGhiYiBTXm4iXSxbMiwwLCJcXG1hdGhiYiBSXm4iXSxbMCwyLCJcXG1hdGhiYiBTXm4iXSxbMiwyLCJcXG1hdGhiYiBSXm4iXSxbMCwxLCJmIl0sWzIsMywiZiJdLFswLDIsImEiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMSwzLCJhIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV1d
\begin{tikzcd}[ampersand replacement=\&amp;]
	{\mathbb S^n} \&amp;\&amp; {\mathbb R^n} \\
	\\
	{\mathbb S^n} \&amp;\&amp; {\mathbb R^n}
	\arrow[&quot;f&quot;, from=1-1, to=1-3]
	\arrow[&quot;f&quot;, from=3-1, to=3-3]
	\arrow[&quot;a&quot;{description}, tail reversed, from=1-1, to=3-1]
	\arrow[&quot;a&quot;{description}, tail reversed, from=1-3, to=3-3]
\end{tikzcd}
" /></p>

> [!check]- Proof
> By Borsuk-Ulam there exists $x \in \mathbb{S}^n$ such that $fx=fax$ but by construction $fax=afx$.
> Hence $afx = fx = fax =0$.
> <span class="QED"/>

### Map from a ball antipodal at the boundary

If $f : \mathbb{B}^{n+1} \to \mathbb{R}^{n+1}$ is a continuous map odd at its boundary $\partial \mathbb{B}^{n+1} = \mathbb{S}^n$,
i.e. the following diagram commutes where $a: x \mapsto -x$,
then there exists $x_{0} \in \mathbb{B}^{n+1}$ with $f(x_{0}) = 0$.
<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMiwwLCJcXG1hdGhiYiBCXntuKzF9Il0sWzQsMCwiXFxtYXRoYmIgUl57bisxfSJdLFsyLDIsIlxcbWF0aGJiIEJee24rMX0iXSxbNCwyLCJcXG1hdGhiYiBSXntuKzF9Il0sWzAsMCwiXFxtYXRoYmIgU15uIl0sWzAsMiwiXFxtYXRoYmIgU15uIl0sWzAsMSwiZiJdLFsyLDMsImYiXSxbMSwzLCJhIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzQsMCwiXFxpb3RhIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbNSwyLCJcXGlvdGEiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFs0LDUsImEiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Cmathbb%20S%5En%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20B%5E%7Bn%2B1%7D%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5E%7Bn%2B1%7D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathbb%20S%5En%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20B%5E%7Bn%2B1%7D%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5E%7Bn%2B1%7D%7D%0A%09%5Carrow%5B%22f%22%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22a%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%5Ciota%22%2C%20hook%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%5Ciota%22%2C%20hook%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22a%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="
% `calc` is necessary to draw curved arrows.
\usetikzlibrary{calc}
% `pathmorphing` is necessary to draw squiggly arrows.
\usetikzlibrary{decorations.pathmorphing}
% A TikZ style for curved arrows of a fixed height, due to AndréC.
\tikzset{curve/.style={settings={#1},to path={(\tikztostart)
    .. controls ($(\tikztostart)!\pv{pos}!(\tikztotarget)!\pv{height}!270:(\tikztotarget)$)
    and ($(\tikztostart)!1-\pv{pos}!(\tikztotarget)!\pv{height}!270:(\tikztotarget)$)
    .. (\tikztotarget)\tikztonodes}},
    settings/.code={\tikzset{quiver/.cd,#1}
        \def\pv##1{\pgfkeysvalueof{/tikz/quiver/##1}}},
    quiver/.cd,pos/.initial=0.35,height/.initial=0}
% TikZ arrowhead/tail styles.
\tikzset{tail reversed/.code={\pgfsetarrowsstart{tikzcd to}}}
\tikzset{2tail/.code={\pgfsetarrowsstart{Implies[reversed]}}}
\tikzset{2tail reversed/.code={\pgfsetarrowsstart{Implies}}}
% TikZ arrow styles.
\tikzset{no body/.style={/tikz/dash pattern=on 0 off 1mm}}
% https://q.uiver.app/#q=WzAsNixbMiwwLCJcXG1hdGhiYiBCXntuKzF9Il0sWzQsMCwiXFxtYXRoYmIgUl57bisxfSJdLFsyLDIsIlxcbWF0aGJiIEJee24rMX0iXSxbNCwyLCJcXG1hdGhiYiBSXntuKzF9Il0sWzAsMCwiXFxtYXRoYmIgU15uIl0sWzAsMiwiXFxtYXRoYmIgU15uIl0sWzAsMSwiZiJdLFsyLDMsImYiXSxbMSwzLCJhIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzQsMCwiXFxpb3RhIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbNSwyLCJcXGlvdGEiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFs0LDUsImEiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XV0=
\begin{tikzcd}[ampersand replacement=\&amp;]
	{\mathbb S^n} \&amp;\&amp; {\mathbb B^{n+1}} \&amp;\&amp; {\mathbb R^{n+1}} \\
	\\
	{\mathbb S^n} \&amp;\&amp; {\mathbb B^{n+1}} \&amp;\&amp; {\mathbb R^{n+1}}
	\arrow[&quot;f&quot;, from=1-3, to=1-5]
	\arrow[&quot;f&quot;, from=3-3, to=3-5]
	\arrow[&quot;a&quot;{description}, tail reversed, from=1-5, to=3-5]
	\arrow[&quot;\iota&quot;, hook, from=1-1, to=1-3]
	\arrow[&quot;\iota&quot;, hook, from=3-1, to=3-3]
	\arrow[&quot;a&quot;{description}, tail reversed, from=1-1, to=3-1]
\end{tikzcd}
" /></p>

> [!check]- Proof
> The key is to [[Embedding|embed]] the $(n+1)$-ball in the $(n+1)$-sphere via
> $$
> \begin{align*}
> i : \mathbb{B}^{n+1} &\hookrightarrow \mathbb{S}^{n+1} \\
> x &\mapsto (x, \sqrt{ 1 - \\| x\| })
> \end{align*}
> $$
> and then define $\bar f$ to be the unique function so the following diagram commutes
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMCwwLCJcXG1hdGhiYiBTXm4iXSxbMCwyLCJcXG1hdGhiYiBTXm4iXSxbMiwwLCJcXG1hdGhiYiBCXntuKzF9Il0sWzIsMiwiXFxtYXRoYmIgQl57bisxfSJdLFs0LDAsIlxcbWF0aGJiIFNee24rMX0iXSxbNCwyLCJcXG1hdGhiYiBTXntuKzF9Il0sWzYsMCwiXFxtYXRoYmIgUl57bisxfSJdLFs2LDIsIlxcbWF0aGJiIFJee24rMX0iXSxbMCwxLCJhIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzEsMywiXFxpb3RhIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbMCwyLCJcXGlvdGEiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsyLDQsImkiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFszLDUsImkiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFs0LDYsIlxcYmFyIGYiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNCw1LCJhIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzUsNywiXFxiYXIgZiIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs2LDcsImEiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMiw2LCJmIiwxLHsiY3VydmUiOi0zfV0sWzMsNywiZiIsMSx7ImN1cnZlIjozfV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Cmathbb%20S%5En%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20B%5E%7Bn%2B1%7D%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20S%5E%7Bn%2B1%7D%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5E%7Bn%2B1%7D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathbb%20S%5En%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20B%5E%7Bn%2B1%7D%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20S%5E%7Bn%2B1%7D%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5E%7Bn%2B1%7D%7D%0A%09%5Carrow%5B%22a%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%5Ciota%22%7Bdescription%7D%2C%20hook%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Ciota%22%7Bdescription%7D%2C%20hook%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22i%22%7Bdescription%7D%2C%20hook%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22i%22%7Bdescription%7D%2C%20hook%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22a%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%7Bdescription%7D%2C%20dashed%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22a%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22f%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-18pt%7D%2C%20from%3D1-3%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22f%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D18pt%7D%2C%20from%3D3-3%2C%20to%3D3-7%5D%0A%5Cend%7Btikzcd%7D%0A#invert" /></p>
>
> Then $\bar f$ is an [[#Antipodal map from a sphere]] and therefore there exists $x_{0}', ax_{0}' \in \mathbb{S}^{n+1}$ so that $fx_{0}' = fax_{0}' = 0$.
> By construction either $x_{0}' = ix_{0}$ or $ax_{0}' = ix_{0}$ for some $x_{0} \in \mathbb{B}^{n+1}$,
> and thus $fx_{0} = \bar f i x_{0} = 0$.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - categorical product
  - coproduct
  - (co)product
---

[[Universal construction]]
# Products and coproducts

**Products** and **coproducts** are tuples of objects and morphisms within a category which, if they exist, are unique up to isomorphism
The categorical product and coproduct generalise the [[cartesian product]] and [[Disjoint union]] in [[Category of sets]] respectively.

In a category $\cat C$ the product of objexts $\{ X_{i} \}_{i \in I}$ is an object $X = \prod_{i \in I} X_{i}$ together with morphisms $\pi_{i} \in \cat C(X,X_{i})$ such that for any $Y$ and $f_{i} \in \cat C(Y,X_{i})$,
there exists a unique $f \in \cat C(Y,X)$ so that $f_{i} = \pi_{i}f$.[^loo] #m/def/cat

In a category $\cat C$ the coproduct of objexts $\{ X_{i} \}_{i \in I}$ is an object $X = \coprod_{i \in I} X_{i}$ together with morphisms $\iota_{i} \in \cat C(X_{i}, X)$ such that for any $Y$ and $f_{i} \in \cat C(X_{i}, Y)$,
there exists a unique $f \in \cat C(X,Y)$ so that $f_{i} = f\iota_{i}$.[^loo] #m/def/cat

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMCwyLCJYXzEiXSxbNCwyLCJYXzIiXSxbMiwyLCJYXzEgXFx0aW1lcyBYXzIiXSxbMiwwLCJZIl0sWzYsMiwiWF8xIl0sWzEwLDIsIlhfMiJdLFs4LDIsIlhfMSBcXGFtYWxnIFhfMiJdLFs4LDAsIlkiXSxbMiwwLCJcXHBpXzEiXSxbMiwxLCJcXHBpXzIiLDJdLFszLDAsImYiLDJdLFszLDEsImciXSxbMywyLCJmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZG90dGVkIn19fV0sWzQsNiwiXFxpb3RhXzEiLDJdLFs1LDYsIlxcaW90YV8yIl0sWzQsNywiZl8xIl0sWzUsNywiZl8yIiwyXSxbNiw3LCJmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%20Y%20%5C%26%5C%26%5C%26%5C%26%5C%26%5C%26%20Y%20%5C%5C%0A%09%5C%5C%0A%09%7BX_1%7D%20%5C%26%5C%26%20%7BX_1%20%5Ctimes%20X_2%7D%20%5C%26%5C%26%20%7BX_2%7D%20%5C%26%5C%26%20%7BX_1%7D%20%5C%26%5C%26%20%7BX_1%20%5Camalg%20X_2%7D%20%5C%26%5C%26%20%7BX_2%7D%0A%09%5Carrow%5B%22%7B%5Cpi_1%7D%22%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cpi_2%7D%22'%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22g%22%2C%20from%3D1-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22f%22%7Bdescription%7D%2C%20dotted%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Ciota_1%7D%22'%2C%20from%3D3-7%2C%20to%3D3-9%5D%0A%09%5Carrow%5B%22%7B%5Ciota_2%7D%22%2C%20from%3D3-11%2C%20to%3D3-9%5D%0A%09%5Carrow%5B%22%7Bf_1%7D%22%2C%20from%3D3-7%2C%20to%3D1-9%5D%0A%09%5Carrow%5B%22%7Bf_2%7D%22'%2C%20from%3D3-11%2C%20to%3D1-9%5D%0A%09%5Carrow%5B%22f%22%7Bdescription%7D%2C%20dashed%2C%20from%3D3-9%2C%20to%3D1-9%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="
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
% https://q.uiver.app/#q=WzAsOCxbMCwyLCJYXzEiXSxbNCwyLCJYXzIiXSxbMiwyLCJYXzEgXFx0aW1lcyBYXzIiXSxbMiwwLCJZIl0sWzYsMiwiWF8xIl0sWzEwLDIsIlhfMiJdLFs4LDIsIlhfMSBcXGFtYWxnIFhfMiJdLFs4LDAsIlkiXSxbMiwwLCJcXHBpXzEiXSxbMiwxLCJcXHBpXzIiLDJdLFszLDAsImYiLDJdLFszLDEsImciXSxbMywyLCJmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZG90dGVkIn19fV0sWzQsNiwiXFxpb3RhXzEiLDJdLFs1LDYsIlxcaW90YV8yIl0sWzQsNywiZl8xIl0sWzUsNywiZl8yIiwyXSxbNiw3LCJmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d
\begin{tikzcd}[ampersand replacement=\&amp;]
	\&amp;\&amp; Y \&amp;\&amp;\&amp;\&amp;\&amp;\&amp; Y \\
	\\
	{X_1} \&amp;\&amp; {X_1 \times X_2} \&amp;\&amp; {X_2} \&amp;\&amp; {X_1} \&amp;\&amp; {X_1 \amalg X_2} \&amp;\&amp; {X_2}
	\arrow[&quot;{\pi_1}&quot;, from=3-3, to=3-1]
	\arrow[&quot;{\pi_2}&quot;', from=3-3, to=3-5]
	\arrow[&quot;f&quot;', from=1-3, to=3-1]
	\arrow[&quot;g&quot;, from=1-3, to=3-5]
	\arrow[&quot;f&quot;{description}, dotted, from=1-3, to=3-3]
	\arrow[&quot;{\iota_1}&quot;', from=3-7, to=3-9]
	\arrow[&quot;{\iota_2}&quot;, from=3-11, to=3-9]
	\arrow[&quot;{f_1}&quot;, from=3-7, to=1-9]
	\arrow[&quot;{f_2}&quot;', from=3-11, to=1-9]
	\arrow[&quot;f&quot;{description}, dashed, from=3-9, to=1-9]
\end{tikzcd}
" /></p>

These are categorical duals; the coproduct is just the product in $\cop{C}$.
Each construction, if it exists, is unique up to unique isomorphism.

[^loo]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], Definition 2.2.20, p. 61

> [!check]- Uniqueness up to unique isomorphism
> Uniqueness of the product up to isomorphism is shown by the following commutative diagram:
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMCwyLCJYXzEiXSxbNCwyLCJYXzIiXSxbMiwyLCJYXzEgXFx0aW1lcyBYXzIiXSxbMiwwLCJZIl0sWzYsMiwiWF8xIl0sWzEwLDIsIlhfMiJdLFs4LDIsIlhfMSBcXGFtYWxnIFhfMiJdLFs4LDAsIlkiXSxbMiwwLCJcXHBpXzEiXSxbMiwxLCJcXHBpXzIiLDJdLFszLDAsImYiLDJdLFszLDEsImciXSxbMywyLCJmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZG90dGVkIn19fV0sWzQsNiwiXFxpb3RhXzEiLDJdLFs1LDYsIlxcaW90YV8yIl0sWzQsNywiZl8xIl0sWzUsNywiZl8yIiwyXSxbNiw3LCJmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMywwLCJYIl0sWzMsMSwiWSJdLFszLDIsIlgiXSxbMywzLCJZIl0sWzYsMSwiWV8xIl0sWzAsMSwiWF8xIl0sWzQsMCwicF8yIiwxLHsiY3VydmUiOjF9XSxbNCwxLCJxXzIiLDFdLFs0LDIsInBfMiIsMSx7ImN1cnZlIjotMX1dLFs0LDMsInFfMiIsMSx7ImN1cnZlIjotMX1dLFswLDEsIlxcUGhpIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiXFxQaGkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMSwyLCJcXFBzaSIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs1LDAsInBfMSIsMSx7ImN1cnZlIjotMX1dLFs1LDEsInFfMSIsMV0sWzUsMiwicF8xIiwxLHsiY3VydmUiOjF9XSxbNSwzLCJxXzEiLDEseyJjdXJ2ZSI6MX1dLFswLDIsIlxcbWF0aHJte2lkfV9YIiwxLHsiY3VydmUiOi0zfV0sWzEsMywiXFxtYXRocm17aWR9X1kiLDEseyJjdXJ2ZSI6M31dXQ%3D%3D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMywwLCJYIl0sWzMsMSwiWSJdLFszLDIsIlgiXSxbMywzLCJZIl0sWzYsMSwiWV8xIl0sWzAsMSwiWF8xIl0sWzQsMCwicF8yIiwxLHsiY3VydmUiOjF9XSxbNCwxLCJxXzIiLDFdLFs0LDIsInBfMiIsMSx7ImN1cnZlIjotMX1dLFs0LDMsInFfMiIsMSx7ImN1cnZlIjotMX1dLFswLDEsIlxcUGhpIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiXFxQaGkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMSwyLCJcXFBzaSIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs1LDAsInBfMSIsMSx7ImN1cnZlIjotMX1dLFs1LDEsInFfMSIsMV0sWzUsMiwicF8xIiwxLHsiY3VydmUiOjF9XSxbNSwzLCJxXzEiLDEseyJjdXJ2ZSI6MX1dLFswLDIsIlxcbWF0aHJte2lkfV9YIiwxLHsiY3VydmUiOi01fV0sWzEsMywiXFxtYXRocm17aWR9X1kiLDEseyJjdXJ2ZSI6NX1dXQ%3D%3D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMywwLCJYIl0sWzMsMSwiWSJdLFszLDIsIlgiXSxbMywzLCJZIl0sWzYsMSwiWV8xIl0sWzAsMSwiWF8xIl0sWzAsNCwicF8yIiwxLHsiY3VydmUiOi0xfV0sWzEsNCwicV8yIiwxXSxbMiw0LCJwXzIiLDEseyJjdXJ2ZSI6MX1dLFszLDQsInFfMiIsMSx7ImN1cnZlIjoxfV0sWzAsMSwiXFxQaGkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMiwzLCJcXFBoaSIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsxLDIsIlxcUHNpIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsNSwicF8xIiwxLHsiY3VydmUiOjF9XSxbMSw1LCJxXzEiLDFdLFsyLDUsInBfMSIsMSx7ImN1cnZlIjotMX1dLFszLDUsInFfMSIsMSx7ImN1cnZlIjotMX1dLFswLDIsIlxcbWF0aHJte2lkfV9YIiwxLHsiY3VydmUiOi01fV0sWzEsMywiXFxtYXRocm17aWR9X1kiLDEseyJjdXJ2ZSI6NX1dXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%5C%26%20X%20%5C%5C%0A%09%7BX_1%7D%20%5C%26%5C%26%5C%26%20Y%20%5C%26%5C%26%5C%26%20%7BY_1%7D%20%5C%5C%0A%09%5C%26%5C%26%5C%26%20X%20%5C%5C%0A%09%5C%26%5C%26%5C%26%20Y%0A%09%5Carrow%5B%22%7Bp_2%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-4%2C%20to%3D2-7%5D%0A%09%5Carrow%5B%22%7Bq_2%7D%22%7Bdescription%7D%2C%20from%3D2-4%2C%20to%3D2-7%5D%0A%09%5Carrow%5B%22%7Bp_2%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D3-4%2C%20to%3D2-7%5D%0A%09%5Carrow%5B%22%7Bq_2%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D4-4%2C%20to%3D2-7%5D%0A%09%5Carrow%5B%22%5CPhi%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-4%2C%20to%3D2-4%5D%0A%09%5Carrow%5B%22%5CPhi%22%7Bdescription%7D%2C%20dashed%2C%20from%3D3-4%2C%20to%3D4-4%5D%0A%09%5Carrow%5B%22%5CPsi%22%7Bdescription%7D%2C%20dashed%2C%20from%3D2-4%2C%20to%3D3-4%5D%0A%09%5Carrow%5B%22%7Bp_1%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D1-4%2C%20to%3D2-1%5D%0A%09%5Carrow%5B%22%7Bq_1%7D%22%7Bdescription%7D%2C%20from%3D2-4%2C%20to%3D2-1%5D%0A%09%5Carrow%5B%22%7Bp_1%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-4%2C%20to%3D2-1%5D%0A%09%5Carrow%5B%22%7Bq_1%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D4-4%2C%20to%3D2-1%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bid%7D_X%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D-30pt%7D%2C%20from%3D1-4%2C%20to%3D3-4%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bid%7D_Y%7D%22%7Bdescription%7D%2C%20curve%3D%7Bheight%3D30pt%7D%2C%20from%3D2-4%2C%20to%3D4-4%5D%0A%5Cend%7Btikzcd%7D%0A#invert" /></p>
> By flipping the lateral arrows one receives the equivalent argument for the coproduct.
> <span class="QED"/>

The product and coproduct may be generalized to the [[Fibre product and coproduct]].

## Limits and colimits

Let $\mathscr{D} : \cat J \to \cat C$ be a discrete-shaped diagram (i.e. a diagram in the shape of a [[Discrete category]]) containing a family of objects.
The [[Limits and colimits|limit]] of this diagram is the product, the [[Limits and colimits|colimit]] is the coproduct.

## Examples

- In [[Category of sets|Set]] the product is the [[Cartesian product]] and the coproduct is the [[Disjoint union]]
- In a [[Posetal category]] viewed as a poset, the product corresponds to the [[Join and meet|join]] and the coproduct corresponds to the [[Join and meet|meet]].
- In [[Category of groups|Grp]] the product is the [[Direct product of groups]] and the coproduct is the [[Free product of groups]].

---
#state/tidy | #SemBr | #lang/en 
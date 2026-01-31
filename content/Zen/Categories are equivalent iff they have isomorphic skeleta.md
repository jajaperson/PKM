---
tags:
  - public
---
[[Equivalence of categories]]
# Categories are equivalent iff they have isomorphic skeleta

Let $\cat C, \cat D$ be categories with [[Skeleton category|skeleta]] $\opn{Sk} \cat C, \opn{Sk} \cat D$ respectively.
Then assuming the [[Axiom of Choice]], $\cat C, \cat D$ are [[Equivalence of categories|equivalent categories]] iff their skeleta are [[Isomorphism of categories|isomorphic categories]], #m/thm/cat
i.e.
$$
\begin{align*}
\cat C \simeq \cat D \iff \opn{Sk} \cat C \cong \opn{Sk} \cat D
\end{align*}
$$

> [!check]- Proof
> It suffices to show every category is equivalent to its skeleton,
> since the full result follows from [[Skeletal categories are equivalent iff they are isomorphic]] and transitivity of equivalence.
> Let $I : \opn{Sk}(\cat C) \hookrightarrow \cat C$ be the inclusion functor.
> We construct a functor $F: \cat C \twoheadrightarrow \opn{Sk}(\cat C)$
> which maps objects to their unique isomorphic representative.
> For any $Y \in \cat C$ invoke \gls{ac} to fix an isomorphism $\varphi_X : X \to FY$,
> and for a general $f : X \to Y$ define $Ff = \varphi_Y f \varphi_X^{-1}$.
> Then
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJYIl0sWzAsMiwiWSJdLFsyLDAsIkZYIl0sWzIsMiwiRlkiXSxbMiwzLCJGZiJdLFswLDEsImYiLDJdLFswLDIsIlxcdmFycGhpX1giLDAseyJjdXJ2ZSI6LTF9XSxbMSwzLCJcXHZhcnBoaV9ZIiwwLHsiY3VydmUiOi0xfV0sWzIsMCwiXFx2YXJwaGlfWF57LTF9IiwwLHsiY3VydmUiOi0xfV0sWzMsMSwiXFx2YXJwaGlfWV57LTF9IiwwLHsiY3VydmUiOi0xfV1d%0A%5Cbegin%7Btikzcd%7D%0AX%20%26%26%20FX%20%5C%5C%0A%5C%5C%0AY%20%26%26%20FY%0A%5Carrow%5B%22%7B%5Cvarphi_X%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%5Carrow%5B%22%7B%5Cvarphi_X%5E%7B-1%7D%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-3%2C%20to%3D1-1%5D%0A%5Carrow%5B%22Ff%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Carrow%5B%22%7B%5Cvarphi_Y%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%5Carrow%5B%22%7B%5Cvarphi_Y%5E%7B-1%7D%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJYIl0sWzAsMiwiWSJdLFsyLDAsIkZYIl0sWzIsMiwiRlkiXSxbMiwzLCJGZiJdLFswLDEsImYiLDJdLFswLDIsIlxcdmFycGhpX1giLDAseyJjdXJ2ZSI6LTF9XSxbMSwzLCJcXHZhcnBoaV9ZIiwwLHsiY3VydmUiOi0xfV0sWzIsMCwiXFx2YXJwaGlfWF57LTF9IiwwLHsiY3VydmUiOi0xfV0sWzMsMSwiXFx2YXJwaGlfWV57LTF9IiwwLHsiY3VydmUiOi0xfV1d" /></p>
> 
> commutes whence $\varphi : 1 \Rightarrow IF: \cat C \to \cat C$ is a natural isomorphism.
> Therefore $IF \simeq 1_{\cat C}$ and $FI = 1_{\cat D}$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

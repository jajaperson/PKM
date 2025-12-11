---
tags:
  - public
---
[[Fundamental group]]
# Fundamental group preserves products

Let $(X_{1}, x_{1})$ and $(X_{2}, x_{2})$ be pointed spaces and $(X, x) =  (X_{1}, x_{1}) \times (X_{2}, x_{2})$ have the [[Product topology]] with the projections $p_{1} : X \twoheadrightarrow X_{1}$ and $p_{2} : X \twoheadrightarrow X_{2}$,
and let $\varpi_{1},\varpi_{2}$ denote the projections of the product group $\pi_{1}(X_{1},x_{1}) \times \pi_{2}(X_{2},x_{2})$.
Then there exists a unique isomorphism $\Phi$ such that the following diagram commutes:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwyLCJcXHBpXzEoWF8xLHhfMSkiXSxbMiwyLCJcXHBpXzEoWF8yLHhfMikiXSxbMSwwLCJcXHBpXzEoWF8xLHhfMSlcXHRpbWVzXFxwaV8xKFhfMix4XzIpIl0sWzEsNCwiXFxwaV8xKFgseCkiXSxbMiwwLCJcXHZhcnBpXzEiLDJdLFsyLDEsIlxcdmFycGlfMiJdLFszLDAsIlxccGlfMShwXzEpIl0sWzMsMSwiXFxwaV8xKHBfMikiLDJdLFszLDIsIlxcUGhpIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%20%7B%5Cpi_1(X_1%2Cx_1)%5Ctimes%5Cpi_1(X_2%2Cx_2)%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cpi_1(X_1%2Cx_1)%7D%20%5C%26%5C%26%20%7B%5Cpi_1(X_2%2Cx_2)%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%20%7B%5Cpi_1(X%2Cx)%7D%0A%09%5Carrow%5B%22%7B%5Cvarpi_1%7D%22'%2C%20from%3D1-2%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cvarpi_2%7D%22%2C%20from%3D1-2%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1(p_1)%7D%22%2C%20from%3D5-2%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1(p_2)%7D%22'%2C%20from%3D5-2%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5CPhi%22%7Bdescription%7D%2C%20dashed%2C%20from%3D5-2%2C%20to%3D1-2%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwyLCJcXHBpXzEoWF8xLHhfMSkiXSxbMiwyLCJcXHBpXzEoWF8yLHhfMikiXSxbMSwwLCJcXHBpXzEoWF8xLHhfMSlcXHRpbWVzXFxwaV8xKFhfMix4XzIpIl0sWzEsNCwiXFxwaV8xKFgseCkiXSxbMiwwLCJcXHZhcnBpXzEiLDJdLFsyLDEsIlxcdmFycGlfMiJdLFszLDAsIlxccGlfMShwXzEpIl0sWzMsMSwiXFxwaV8xKHBfMikiLDJdLFszLDIsIlxcUGhpIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d" /></p>

which is given by
$$
\begin{align*}
\Phi:
\pi_{1}(X,x) &\to \pi_{1}(X_{1},x_{1}) \times \pi_{1}(X_{2}, x_{2}) \\
[\alpha] &\mapsto ([p_{1} \alpha], [p_{2} \alpha]) = (\pi(p_{1})[\alpha], \pi(p_{2})[\alpha])
\end{align*}
$$

That is, the fundamental group of a [[Product topology]] is isomorphic to the [[Direct product of groups|direct product]] of fundamental groups. #m/thm/homotopy 

> [!check]- Proof
> From the [[Products and coproducts|universal property of the product]] $\Phi$ is a unique homomorphism.
> Let $\alpha$ be a a loop in $X$ with base $x$.
> If $\Phi[\alpha] = (e, e)$ then there exist homotopies $H_{1} : p_{1} \alpha \simeq c_{x_{1}}$ and $H_{2} : p_{2} \alpha \simeq c_{x_{2}}$.
> Thus $\alpha \simeq c_{x}$ by the homotopy
> $$
> \begin{align*}
> H(s,t) = (H_{1}(s,t), H_{2}(s,t))
> \end{align*}
> $$
> and hence $[\alpha] = e$,
> hence $\ker \Phi = \{e\}$ and [[Group monomorphism|thus]] $\Phi$ is injective.
> Now let $\alpha_{i}$ be a loop in $X_{i}$ with base $x_{i}$ for $i=1,2$.
> Then the following is a loop in $X$ with base $x$
> $$
> \begin{align*}
> \alpha : s \mapsto (\alpha_{1} (s), \alpha_{2}(s))
> \end{align*}
> $$
> and $\Phi[\alpha] = ([p_{1} \alpha], [p_{2}\alpha]) = ([\alpha_{1}], [\alpha_{2}])$.
> Hence $\Phi$ is surjective.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

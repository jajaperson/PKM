---
tags:
  - public
---
[[Regular covering]]
# Correspondence between regular coverings and orbit spaces of their deck transformation groups

Let $p : \tilde{X} \twoheadrightarrow X$ be a connected and locally path-connected [[regular covering]] and $\Gamma = \Aut_{\Cov_{X}}(p)$ be its [[Deck transformation|deck transformation group]].
Let $\tilde{X} / \Gamma$ be the [[orbit space]] with projection $q : \tilde{X} \twoheadrightarrow \tilde{X}/\Gamma$.
Then there exists an isomorphism $\Phi : \tilde{X} / \Gamma \to X$ such that the following diagram commutes[^loose]: #m/thm/homotopy 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwyLCJYIl0sWzQsMiwiXFx0aWxkZSBYIC8gXFxHYW1tYSJdLFsyLDAsIlxcdGlsZGUgWCJdLFsyLDAsInAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMiwxLCJxIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzEsMCwiXFxQaGkiLDAseyJjdXJ2ZSI6LTF9XSxbMCwxLCIiLDEseyJjdXJ2ZSI6LTF9XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%20%7B%5Ctilde%20X%7D%20%5C%5C%0A%09%5C%5C%0A%09X%20%5C%26%5C%26%5C%26%5C%26%20%7B%5Ctilde%20X%20%2F%20%5CGamma%7D%0A%09%5Carrow%5B%22p%22'%2C%20two%20heads%2C%20from%3D1-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22q%22%2C%20two%20heads%2C%20from%3D1-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%5CPhi%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-5%2C%20to%3D3-1%5D%0A%09%5Carrow%5Bcurve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-1%2C%20to%3D3-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwyLCJYIl0sWzQsMiwiXFx0aWxkZSBYIC8gXFxHYW1tYSJdLFsyLDAsIlxcdGlsZGUgWCJdLFsyLDAsInAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMiwxLCJxIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzEsMCwiXFxQaGkiLDAseyJjdXJ2ZSI6LTF9XSxbMCwxLCIiLDEseyJjdXJ2ZSI6LTF9XV0=" /></p>

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], ¶2.3.38, pp. 96ff

> [!check]- Proof
> First note that $\Gamma$ acts properly discontinuously ([[The deck transformation group acts properly discontinuously]]) and $q$ is a regular covering ([[Orbit space of a properly discontinuous effective group action]]). 
> Since $p$ is clearly constant for each fibre of $q$,
> there exists a function $\Phi$ such that $p = \Phi q$,
> and by [[Quotient topology#Universal property]] this is continuous.
> Since $p$ is surjective so is $q$, 
> and since $p$ is [[Regular covering|regular]] and thus $\Gamma$ is transitive $\Phi$ is injective, 
> because if $\Phi[\tilde{x}_{1}]=\Phi[\tilde{x}_{2}]$ it follows
> $$
> \begin{align*}
> p(\tilde{x}_{1}) = \Phi q(\tilde{x}_{1}) = \Phi q(\tilde{x}_{2}) = p(\tilde{x}_{2})
> \end{align*}
> $$
> and thus there exists $\gamma \in \Gamma$ with $\tilde{x}_{2} = \gamma(\tilde{x}_{1})$, implying $[\tilde{x}_{2}] = [\tilde{x}_{1}]$.
> Since both $p$ and $q$ are [[Local homeomorphism|local homeomorphisms]], so is $\Phi$, in particular it is open.
> Therefore $\Phi$ is a homeomoprhism.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

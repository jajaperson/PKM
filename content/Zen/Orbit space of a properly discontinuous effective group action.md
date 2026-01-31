---
tags:
  - public
---
[[Deck transformation]]
# Orbit space of a properly discontinuous effective group action

Let $\tilde{X}$ be connected and locally path-connected topological space, 
$\Gamma \sube \Aut_{\Top}(\tilde{X})$ act [[Properly discontinuous group action|properly discontinuously]] on $\tilde{X}$[^equiv],
and $X = \tilde{X}/\Gamma$ be the [[orbit space]] with projection $p : \tilde{X} \twoheadrightarrow X$.
Then $p$ is a [[regular covering]] and $\Gamma = \Aut_{\Cov_{X}}(p)$ is its [[Deck transformation|deck transformation group]]. #m/thm/homotopy 

[^equiv]: This is equivalent to saying $\Gamma$ acts [[Effective group action|effectively]] on $\tilde{X}$.

> [!check]- Proof
> That $p$ is a covering follows directly from [[Orbit space of a properly discontinuous group action]].
> It is clear by construction that each $\gamma \in \Gamma$ satisfies the following commutative diagram and is thereby a [[deck transformation]], s
> o $\Gamma \sube \Aut_{\Cov_{X}}(p)$.
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJcXHRpbGRlIFgiXSxbNCwwLCJcXHRpbGRlIFgiXSxbMiwyLCJYIl0sWzYsMF0sWzAsMiwicCIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsInAiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMCwxLCJcXGdhbW1hIiwwLHsiY3VydmUiOi0xfV0sWzEsMCwiXFxnYW1tYV57LTF9IiwwLHsiY3VydmUiOi0xfV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Ctilde%20X%7D%20%5C%26%5C%26%5C%26%5C%26%20%7B%5Ctilde%20X%7D%20%5C%26%5C%26%20%7B%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20X%0A%09%5Carrow%5B%22p%22'%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22p%22%2C%20two%20heads%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Cgamma%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-1%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Cgamma%5E%7B-1%7D%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-5%2C%20to%3D1-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXHRpbGRlIFgiXSxbNCwwLCJcXHRpbGRlIFgiXSxbMiwyLCJYIl0sWzYsMF0sWzAsMiwicCIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsInAiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMCwxLCJcXGdhbW1hIiwwLHsiY3VydmUiOi0xfV0sWzEsMCwiXFxnYW1tYV57LTF9IiwwLHsiY3VydmUiOi0xfV1d" /></p>
> 
> It is also clear by construction that $\Gamma$ acts transitively on every fibre of $p$ (since the fibres of $p$ are precisely the orbits of $\Gamma$).
> Now let $\phi \in \Aut_{\Cov_{X}}(p)$, and choose an arbitrary $\tilde{x}_{0} \in \tilde{X}$.
> Since $\Gamma$ acts transitively on fibres, there exists a $\gamma \in \Gamma$ such that $\gamma(\tilde{x}_{0}) = \phi(\tilde{x}_{0})$,
> but both $\phi$ and $\gamma$ are [[Lift of a map to a covering space|lifts]] of $p$ over itself, so it follows by uniqueness that $\gamma = \phi$.
> Hence $\Gamma = \Aut_{\Cov_{X}}(p)$, 
> and since [[A covering is regular iff its deck transformation group acts transitively on fibres]], $p$ is a [[regular covering]].
> <span class="QED"/>

See [[Correspondence between regular coverings and orbit spaces of their deck transformation groups]].

#
---
#state/tidy | #lang/en | #SemBr

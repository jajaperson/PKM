---
tags:
  - public
---
[[Deck transformation]]
# A covering is regular iff its deck transformation group acts transitively on fibres

Let $p : \tilde{X} \to X$ be a connected and locally path-connected covering and $\Gamma = \Aut_{\Cov_{X}}(p)$ be its [[Deck transformation|deck transformation group]].
Then $p$ is a [[regular covering]] iff $\Gamma$ acts on one (and therefore every) fibre $p^{-1}\{ x_{0} \}$ [[Transitive group action|transitively]]. [^loose] #m/def/homotopy 
Equivalently, the [[Group action orbit|orbit]] of each $\tilde{x}_{0}$ is a whole fibre.

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], ¶2.3.36, p. 96

> [!check]- Proof
> Let $p : \tilde{X} \to X$ be a [[regular covering]] and $x_{0} \in X$.
> Let $\tilde{x}_{0}, \tilde{x}_{0}' \in p^{-1}\{ x_{0} \}$,
> and let $H$ and $H'$ denote the [[Characteristic subgroup of a covering|characteristic subgroups]] with respect to $\tilde{x}_{0}$ and $\tilde{x}_{0}'$ respectively.
> Since $p$ is regular, $H = H'$, and by [[equivalence of coverings criterion]] the coverings with either base point are equivalent.
> Hence there exists $\gamma \in \Gamma$ such that $\gamma(\tilde{x}_{0}) = \tilde{x}_{0}'$.
> 
> For the converse, assume $\Gamma$ acts transitively on $p^{-1} \{ x_{0} \}$,
> i.e. the following diagram commutes for any $\tilde{x}_{0}, \tilde{x}_{0}' \in p^{-1}\{ x_{0} \}$:
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCIoXFx0aWxkZSBYLCBcXHRpbGRlIHhfMCkiXSxbNCwwLCIoXFx0aWxkZSBYLCBcXHRpbGRlIHhfMCcpIl0sWzIsMiwiKFgsIHhfMCkiXSxbNiwwXSxbMCwyLCJwIiwyLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzEsMiwicCIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFswLDEsIlxcZ2FtbWEiLDAseyJjdXJ2ZSI6LTF9XSxbMSwwLCJcXGdhbW1hXnstMX0iLDAseyJjdXJ2ZSI6LTF9XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B(%5Ctilde%20X%2C%20%5Ctilde%20x_0)%7D%20%5C%26%5C%26%5C%26%5C%26%20%7B(%5Ctilde%20X%2C%20%5Ctilde%20x_0')%7D%20%5C%26%5C%26%20%7B%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20%7B(X%2C%20x_0)%7D%0A%09%5Carrow%5B%22p%22'%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22p%22%2C%20two%20heads%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Cgamma%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-1%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Cgamma%5E%7B-1%7D%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-5%2C%20to%3D1-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCIoXFx0aWxkZSBYLCBcXHRpbGRlIHhfMCkiXSxbNCwwLCIoXFx0aWxkZSBYLCBcXHRpbGRlIHhfMCcpIl0sWzIsMiwiKFgsIHhfMCkiXSxbNiwwXSxbMCwyLCJwIiwyLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzEsMiwicCIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFswLDEsIlxcZ2FtbWEiLDAseyJjdXJ2ZSI6LTF9XSxbMSwwLCJcXGdhbW1hXnstMX0iLDAseyJjdXJ2ZSI6LTF9XV0=" /></p>
> 
> Applying the [[Fundamental group]] functor $\pi_{1}$ to this diagram it is clear that the characteristic subgroups is basepoint-invariant.
> Therefore $p$ is a [[regular covering]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

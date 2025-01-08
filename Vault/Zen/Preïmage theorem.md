---
tags:
  - public
---
[[Differential geometry MOC]]
# Preïmage theorem

Let $f : X\to Y$ be a $C^\infty$ [[Differentiability|differentiable]] map between $C^\infty$ [[Differentiable manifold|differentiable manifolds]] $X,Y$ of dimensions $n,m$ respectively.
Let $y \in Y$ be a [[Critical point|regular value]] of $f$.
Then the fibre $S= f^{-1} \{ y \}$ is a $C^\infty$ [[submanifold]] of $X$ of dimension $n-m$. #m/thm/geo/diff 

> [!check]- Proof
> Since $y$ is a [[Critical point|regular value]] of $f$, $f$ is [[Immersion and submersion|submersive]] at every $x \in S = f^{-1}\{ y \}$,
> so by the [[Immersion and submersion|local submersion theorem]] we may define charts such that the following diagram commutes in $\Man^\infty$
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMiwwLCJVIl0sWzIsMiwiXFx0aWxkZSBVIl0sWzAsMCwiWCJdLFswLDIsIlkiXSxbNCwwLCJWIl0sWzQsMiwiXFx0aWxkZSBWIl0sWzYsMCwiXFxtYXRoYmIgUl5tIFxcdGltZXMgXFxtYXRoYmIgUl57bi1tfSJdLFs2LDIsIlxcbWF0aGJiIFJebSJdLFswLDIsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoiYm90dG9tIn19fV0sWzEsMywiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMiwzLCJmIiwyXSxbMCwxXSxbMCw0LCJcXHZhcnBoaSIsMCx7ImN1cnZlIjotMX1dLFsxLDUsIlxcdGlsZGUgXFx2YXJwaGkiLDAseyJjdXJ2ZSI6LTF9XSxbNCwwLCIiLDAseyJjdXJ2ZSI6LTF9XSxbNSwxLCIiLDAseyJjdXJ2ZSI6LTF9XSxbNCw1XSxbNCw2LCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFs1LDcsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzYsNywiaiJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09X%20%5C%26%5C%26%20U%20%5C%26%5C%26%20V%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5Em%20%5Ctimes%20%5Cmathbb%20R%5E%7Bn-m%7D%7D%20%5C%5C%0A%09%5C%5C%0A%09Y%20%5C%26%5C%26%20%7B%5Ctilde%20U%7D%20%5C%26%5C%26%20%7B%5Ctilde%20V%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%5Em%7D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5Bhook'%2C%20from%3D1-3%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%5Cvarphi%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5Bfrom%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5Bcurve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5Bhook%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5Bfrom%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22j%22%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5Bhook'%2C%20from%3D3-3%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Ctilde%20%5Cvarphi%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bcurve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5Bhook%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsOCxbMiwwLCJVIl0sWzIsMiwiXFx0aWxkZSBVIl0sWzAsMCwiWCJdLFswLDIsIlkiXSxbNCwwLCJWIl0sWzQsMiwiXFx0aWxkZSBWIl0sWzYsMCwiXFxtYXRoYmIgUl5tIFxcdGltZXMgXFxtYXRoYmIgUl57bi1tfSJdLFs2LDIsIlxcbWF0aGJiIFJebSJdLFswLDIsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoiYm90dG9tIn19fV0sWzEsMywiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMiwzLCJmIiwyXSxbMCwxXSxbMCw0LCJcXHZhcnBoaSIsMCx7ImN1cnZlIjotMX1dLFsxLDUsIlxcdGlsZGUgXFx2YXJwaGkiLDAseyJjdXJ2ZSI6LTF9XSxbNCwwLCIiLDAseyJjdXJ2ZSI6LTF9XSxbNSwxLCIiLDAseyJjdXJ2ZSI6LTF9XSxbNCw1XSxbNCw2LCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFs1LDcsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzYsNywiaiJdXQ==" /></p>
> 
> with $\varphi : x \mapsto v$ and $\tilde{\varphi} : y \mapsto \tilde{v}$.
> Now 
> $$
> V \cap j^{-1}\{ \tilde{v} \} = V \cap (\{ \tilde{v} \} \times \mathbb{R}^{n-m})
> $$
> Therewithal 
> $$
> f^{-1}\{ y \} = \varphi^{-1}j^{-1}\tilde{\varphi} \{ y \} = \varphi^{-1}j^{-1}\{ \tilde{v} \}
> $$
> so $\varphi(U \cap S) = V \cap (\{ \tilde{v} \} \times \mathbb{R}^{n-m})$ which is diffeomorphic to an open subset of $\mathbb{R}^{n-m}$.
> Thus $f^{-1}\{ y \}$ is an $(n-m)$-dimensional $C^\infty$ differentiable manifold. <span class="QED"/>

> [!check]- Direct proof
> Since [[Lyle Noakes]] has an irrational distaste for the local submersion theorem, we present a direct proof here.
> Note that this is essentially the same as the above proof, just with the content of the proof of the [[Immersion and submersion|local submersion theorem]] absorbed.
> 
> Let $x \in f^{-1} \{ y \}$.
> Since $y$ is a [[Critical point|regular value]],
> the tangent map $T_{x}f : T_{x}X \twoheadrightarrow T_{y}Y$ is a [[linear epimorphism]] (i.e. has full [[rank]]).
> We define $K = \ker T_{x}f$ where $\dim K = n - m$ by the [[Rank-nullity theorem]],
> and let $P : \mathbb{R}^N \twoheadrightarrow K$ be a [[projection operator]] onto $K$ (note $K \leq T_{x}X \leq \mathbb{R}^N$).
> We can then define
> $$
> \begin{align*}
> F : X &\to Y \times K \\
> \xi &\mapsto (f(\xi), P(\xi))
> \end{align*}
> $$
> which has the tangent map
> $$
> \begin{align*}
> T_{x} F : T_{x} X &\to T_{x}Y \times K \\
> \vab a &\mapsto (T_{x}f \,\vab a, P\,\vab a)
> \end{align*}
> $$
> which is clearly a [[linear isomorphism]],
> so by the [[inverse function theorem]] $F$ is locally a diffeomorphism at $x$,
> i.e. maps some open neighbourhood $U$ of $x$ diffeomorphically onto a neighbourhood $\tilde{U}$ of $(y, P(x))$,
> Thus $F$ maps $f^{-1} \{ y \} \cap U$ diffeomorphically onto $(\{  y \} \times K) \cap \tilde{U}$ which is diffeomorphic to an open subset of $\mathbb{R}^{n-m}$.
> Thus $f^{-1} \{ y \}$ is an $(n-m)$ dimensional $C^\infty$ differentiable manifold. <span class="QED"/>

## Further properties

- $T_{x} S = \ker T_{x}f$

#
---
#state/tidy | #lang/en | #SemBr

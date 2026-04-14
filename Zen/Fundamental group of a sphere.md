---
tags:
  - public
---
[[Sphere space]]
# Fundamental group of a sphere

The fundamental group $\pi_{1}(\mathbb{S}^n, s_{0})$ of a sphere is $\mathbb{Z}$ iff $n = 1$ and trivial if $n \neq 1$.  #m/thm/homotopy 

> [!check]- Proof
> For $n = 0$ the sphere fails to be [[Path connectedness|path-connected]] as it consists of two disjoint points,
> hence for any $p \in \mathbb{S}^0$ there exists only one loop with that basepoint,
> thus $\pi_{1}(\mathbb{S}^0) \cong \{ e \}$.
> 
> For $n=1$ we regard a [[continuous loop]] $\alpha$ as an endomorphism $\alpha \in \Top(\mathbb{S}^1, \mathbb{S}^1)$.
> We claim that [[Degree of a circle endomorphism]] constitutes an isomorphism
> $$
> \begin{align*}
> \Phi : \pi_{1}(\mathbb{S}^1, 1) &\to \mathbb{Z} \\
> [\alpha] &\mapsto \deg \alpha
> \end{align*}
> $$
> This is well-defined and injective since [[Circle endomorphisms are homotopic iff they are of equal degree]], and it is surjective because $\alpha : z \mapsto z^m$ has degree $m$.
> Let $\alpha_{1}, \alpha_{2}$ be paths with base $1$ and
> let $\varphi_{1}, \varphi_{2} : [0,1] \to \mathbb{R}$ be the required continuous functions so that the following diagram commutes in $\Top$ for $i=1,2$:
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJbMCwxXSJdLFsyLDAsIlxcbWF0aGJiIFIiXSxbMCwyLCJcXG1hdGhiYiBTXjEiXSxbMiwyLCJcXG1hdGhiYiBTXjEiXSxbMCwxLCJcXHZhcnBoaV9pIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiXFxhbHBoYV9pIiwyXSxbMCwyLCJcXG1hdGhybXtleH0iLDJdLFsxLDMsIlxcbWF0aHJte2V4fSJdLFswLDMsIlxcYWxwaGFcXG1hdGhybXtleH0iLDFdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5B0%2C1%5D%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20R%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathbb%20S%5E1%7D%20%5C%26%5C%26%20%7B%5Cmathbb%20S%5E1%7D%0A%09%5Carrow%5B%22%7B%5Cvarphi_i%7D%22%2C%20dashed%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Calpha_i%7D%22'%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bex%7D%7D%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bex%7D%7D%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Calpha_i%5Cmathrm%7Bex%7D%7D%22%7Bdescription%7D%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="% https://q.uiver.app/#q=WzAsNCxbMCwwLCJbMCwxXSJdLFsyLDAsIlxcbWF0aGJiIFIiXSxbMCwyLCJcXG1hdGhiYiBTXjEiXSxbMiwyLCJcXG1hdGhiYiBTXjEiXSxbMCwxLCJcXHZhcnBoaV9pIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMywiXFxhbHBoYV9pIiwyXSxbMCwyLCJcXG1hdGhybXtleH0iLDJdLFsxLDMsIlxcbWF0aHJte2V4fSJdLFswLDMsIlxcYWxwaGFcXG1hdGhybXtleH0iLDFdXQ==" /></p>
> 
> then the corresponding lift for the concatenated path $\alpha_{1} * a_{2}$ is given by
> $$
> \begin{align*}
> \chi(t) = \begin{cases}
> \varphi_{1}(2t) & 0 \leq t \leq \frac{1}{2} \\ \\
> \varphi_{1} (1) + \varphi_{2}\left( 2t-1 \right) & \frac{1}{2} \leq t \leq 1
> \end{cases}
> \end{align*}
> $$
> and hence $\Phi[\alpha_{1}][\beta_{1}] = \chi(1) = \varphi_{1}(1) + \varphi_{2}(1) = \Phi[\alpha_{1}] + \Phi[\alpha_{2}]$.
> Hence $\Phi$ is an isomorphism, so $\pi_{1}(\mathbb{S}^1, 1) = \mathbb{Z}$.
> 
> For $n \geq 2$ see [[Seifert-Van Kampen-Brown theorem]].
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

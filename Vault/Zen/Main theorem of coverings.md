---
tags:
  - public
---
[[Covering]]
# Main theorem of coverings

Let $(X,x_{0})$ be a [[Local (path) connectedness|locally path-connected]], [[Connectedness|connected]], and [[Semilocal simple connectedness|semilocally simply connected]] topological space.
Then for every subgroup $H \sube \pi_{1}(X,x_{0})$ there exists a covering $p : (\tilde{X},\tilde{x}_{0}) \twoheadrightarrow (X,x_{0})$ unique up to equivalence with [[Characteristic subgroup of a covering|characteristic subgroup]] $H$. #m/thm/homotopy

> [!tip]+ Construction
> Take the universal covering $\hat{p} : \hat{X}\twoheadrightarrow X$ and consider $\Phi (H) \sube \Gamma$ where $\Phi : \pi_{1}(\tilde{X},x_{0}) \to \Gamma$ is an isomorphism.
> The covering is given by $\tilde X = \hat{X} / \Phi(H)$ with 
> $$
> \begin{align*}
> p : (\tilde{X}, \tilde{x}_{0}) &\twoheadrightarrow (X,x_{0}) \\ 
> \hat{x} \Phi(H) &\mapsto \hat{p}(\hat{x}_{0})
> \end{align*}
> $$

> [!check]- Proof
> Uniqueness up to equivalence follows from [[equivalence of coverings criterion]].
> Since $(X, x_{0})$ is semilocally simply connected, [[A locally path-connected, connected space is semilocally simply connected iff it has a universal covering|it has a universal covering]] $\hat{p} : (\hat{X}, \hat{x}_{0}) \twoheadrightarrow (X,x_{0})$.
> Let $\Gamma = \Aut_{\Cov_{X}}(\hat{p})$ 
> According to [[Deck transformation group of a regular covering as quotient]]
> $$
> \begin{align*}
> \Phi: \pi_{1}(X,x_{0}) &\to \Gamma \\
> [\alpha] &\mapsto (\hat{x}_{0} \mapsto \hat{\alpha}(1))
> \end{align*}
> $$
> is an isomorphism, where $\hat{\alpha}$ is the unique [[Lift of a map to a covering space|lift]] of $\alpha$ with $\hat{\alpha}(0) = \hat{x}_{0}$, and $(\hat{x}_{0} \mapsto \hat{\alpha}(1))$ denotes a unique deck transformation with this property.
> 
> Now take the [[orbit space]] $\tilde{X} = \hat{X} / \Phi(H)$ with the canonical projection
> $$
> \begin{align*}
> f: (\hat{X},\hat{x}_{0}) &\twoheadrightarrow (\tilde{X}, \tilde{x}_{0}) \\
> \hat{x} &\mapsto \Phi(H)\hat{x}
> \end{align*}
> $$
> Since [[the deck transformation group acts properly discontinuously]], so too does $\Phi(H) \sube \Gamma$,
> and the [[orbit space of a properly discontinuous effective group action]] forms a covering,
> which in this case is universal.
> Thus
> $$
> \begin{align*}
> \Aut_{\Cov_\tilde{X}}(f) \cong \pi_{1}(\tilde{X},\tilde{x}_{0}) \cong \Phi(H) \cong H
> \end{align*}
> $$
> We now define
> $$
> \begin{align*}
> p : (\tilde{X},\tilde{x}_{0}) &\to (X,x_{0}) \\
> f(\hat{x}) &\mapsto \hat{p}(\hat{x})
> \end{align*}
> $$
> which is well-defined since $f(\hat{x}) = f(\hat{x}')$ iff $\hat{x}' = \gamma(\hat{x})$ for some $\gamma \in H \sube \Gamma$, and then $\hat{p} \circ \gamma(\hat{x}) = \hat{p}(\hat{x})$;
> and continuous by [[Quotient topology#Universal property]].
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCIoXFxoYXQgWCxcXGhhdCB4XzApIl0sWzIsMCwiKFxcdGlsZGUgWCxcXHRpbGRlIHhfMCkiXSxbMiwyLCIoWCwgeF8wKSJdLFswLDIsIlxcaGF0IHAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMSwyLCJwIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMSwiZiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B(%5Chat%20X%2C%5Chat%20x_0)%7D%20%5C%26%5C%26%20%7B(%5Ctilde%20X%2C%5Ctilde%20x_0)%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20%7B(X%2C%20x_0)%7D%0A%09%5Carrow%5B%22%7B%5Chat%20p%7D%22'%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22p%22%2C%20two%20heads%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22f%22%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCIoXFxoYXQgWCxcXGhhdCB4XzApIl0sWzIsMCwiKFxcdGlsZGUgWCxcXHRpbGRlIHhfMCkiXSxbMiwyLCIoWCwgeF8wKSJdLFswLDIsIlxcaGF0IHAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMSwyLCJwIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMSwiZiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dXQ==" /></p>
> 
> Now let $x \in X$ and let $U$ be a neighbourhood of $x$ evenly covered by $\hat{p}$ with sheets $\{ \hat{U}_{i} \}_{i \in I}$.
> Let $J \sube I$ such that for all $i \in I$ there exists exactly one $j \in J$ such that $f(\hat{U}_{i}) = f(\hat{U}_{j})$,
> and let $\tilde{U}_{j} = f(\hat{U}_{j})$.
> Then
> $$
> \begin{align*}
> p^{-1}(U) = \coprod_{j \in J} \tilde{U}_{j}
> \end{align*}
> $$
> and $(p \restriction \tilde{U}_{j})^{-1} = (f \restriction \hat{U}_{j}) \circ (\hat{p} \restriction \hat{U}_{j})^{-1}$,
> therefore $p$ is a covering.
> Then by construction
> $$
> \begin{align*}
> [\alpha] \in H &\iff (\hat{x}_{0} \mapsto\hat{\alpha}(1)) \in \Phi(H) \\
> &\iff \tilde{\alpha}(1) = f \circ \hat{\alpha}(1) = \tilde{x}_{0} \\
> &\iff [\alpha] = \pi_{1}p[\tilde{\alpha}]
> \end{align*}
> $$
> so $H = \pi_{1}p(\pi_{1}(\tilde{X},\tilde{x}_{0}))$ as required.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

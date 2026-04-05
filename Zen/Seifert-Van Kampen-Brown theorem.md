---
tags:
  - public
---
[[Fundamental groupoid]]
# Seifert-Van Kampen-Brown theorem

Let $X$ be a topological space with open cover $\{ U, V \}$.
Then the following is a [[Fibre product and coproduct|fibre coproduct]] in $\Top$ on the left and in $\Grpd$ on the right.[^bra][^bro] #m/thm/homotopy 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMCwwLCJVXFxjYXAgViJdLFswLDIsIlUiXSxbMiwwLCJWIl0sWzIsMiwiWCJdLFs0LDAsIlxccGlfMShVIFxcY2FwIFYpIl0sWzQsMiwiXFxwaV8xKFUpIl0sWzYsMiwiXFxwaV8xKFgpIl0sWzYsMCwiXFxwaV8xKFYpIl0sWzAsMiwiaV8yIl0sWzAsMSwiaV8xIiwyXSxbMSwzLCJqXzEiXSxbMiwzLCJqXzIiXSxbNCw3LCJcXHBpXzEgaV8yIl0sWzQsNSwiXFxwaV8xaV8xIiwyXSxbNSw2LCJcXHBpXzFqXzEiLDJdLFs3LDYsIlxccGlfMmpfMiJdLFs2LDQsIiIsMSx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dLFszLDAsIiIsMCx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7BU%5Ccap%20V%7D%20%5C%26%5C%26%20V%20%5C%26%5C%26%20%7B%5Cpi_1(U%20%5Ccap%20V)%7D%20%5C%26%5C%26%20%7B%5Cpi_1(V)%7D%20%5C%5C%0A%09%5C%5C%0A%09U%20%5C%26%5C%26%20X%20%5C%26%5C%26%20%7B%5Cpi_1(U)%7D%20%5C%26%5C%26%20%7B%5Cpi_1(X)%7D%0A%09%5Carrow%5B%22%7Bi_2%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7Bi_1%7D%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7Bj_1%7D%22%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7Bj_2%7D%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1%20i_2%7D%22%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1i_1%7D%22'%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1j_1%7D%22'%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Cpi_2j_2%7D%22%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%5Clrcorner%22%7Banchor%3Dcenter%2C%20pos%3D0.125%2C%20rotate%3D180%7D%2C%20draw%3Dnone%2C%20from%3D3-7%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%5Clrcorner%22%7Banchor%3Dcenter%2C%20pos%3D0.125%2C%20rotate%3D180%7D%2C%20draw%3Dnone%2C%20from%3D3-3%2C%20to%3D1-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsOCxbMCwwLCJVXFxjYXAgViJdLFswLDIsIlUiXSxbMiwwLCJWIl0sWzIsMiwiWCJdLFs0LDAsIlxccGlfMShVIFxcY2FwIFYpIl0sWzQsMiwiXFxwaV8xKFUpIl0sWzYsMiwiXFxwaV8xKFgpIl0sWzYsMCwiXFxwaV8xKFYpIl0sWzAsMiwiaV8yIl0sWzAsMSwiaV8xIiwyXSxbMSwzLCJqXzEiXSxbMiwzLCJqXzIiXSxbNCw3LCJcXHBpXzEgaV8yIl0sWzQsNSwiXFxwaV8xaV8xIiwyXSxbNSw2LCJcXHBpXzFqXzEiLDJdLFs3LDYsIlxccGlfMmpfMiJdLFs2LDQsIiIsMSx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dLFszLDAsIiIsMCx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dXQ==" /></p>

where $i_{1},i_{2},j_{1},j_{2}$ denote natural inclusions;
i.e. the [[Fundamental groupoid]] of $X$ is a [[Fibre product and coproduct|fibre coproduct]] of the fundamental groupoids of the open covering spaces $U$ and $V$.

[^bra]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], §6.7, pp. 139–140
[^bro]: 2006, [[@brown2006TopologyGroupoids|Topology and groupoids]], §6.7, pp. 240ff

> [!check]- Proof
> For the left diagram see [[Fibre products and coproducts in Top]].
> Now suppose $(G, f_{1}, f_{2})$ fits into the following diagram.
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMCwwLCJcXHBpXzEoVSBcXGNhcCBWKSJdLFswLDIsIlxccGlfMShVKSJdLFsyLDIsIlxccGlfMShYKSJdLFsyLDAsIlxccGlfMShWKSJdLFs0LDQsIkciXSxbMCwzLCJcXHBpXzEgaV8yIl0sWzAsMSwiXFxwaV8xaV8xIiwyXSxbMSwyLCJcXHBpXzFqXzEiLDJdLFszLDIsIlxccGlfMmpfMiJdLFsyLDAsIiIsMSx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dLFsxLDQsImZfMSIsMix7ImN1cnZlIjoxfV0sWzMsNCwiZl8yIiwwLHsiY3VydmUiOi0xfV0sWzIsNCwiZiIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Cpi_1(U%20%5Ccap%20V)%7D%20%5C%26%5C%26%20%7B%5Cpi_1(V)%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cpi_1(U)%7D%20%5C%26%5C%26%20%7B%5Cpi_1(X)%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%5C%26%5C%26%20G%0A%09%5Carrow%5B%22%7B%5Cpi_1%20i_2%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1i_1%7D%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1j_1%7D%22'%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cpi_2j_2%7D%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Clrcorner%22%7Banchor%3Dcenter%2C%20pos%3D0.125%2C%20rotate%3D180%7D%2C%20draw%3Dnone%2C%20from%3D3-3%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%7Bf_1%7D%22'%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D3-1%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7Bf_2%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-3%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22f%22%7Bdescription%7D%2C%20dashed%2C%20from%3D3-3%2C%20to%3D5-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMCwwLCJcXHBpXzEoVSBcXGNhcCBWKSJdLFswLDIsIlxccGlfMShVKSJdLFsyLDIsIlxccGlfMShYKSJdLFsyLDAsIlxccGlfMShWKSJdLFs0LDQsIkciXSxbMCwzLCJcXHBpXzEgaV8yIl0sWzAsMSwiXFxwaV8xaV8xIiwyXSxbMSwyLCJcXHBpXzFqXzEiLDJdLFszLDIsIlxccGlfMmpfMiJdLFsyLDAsIiIsMSx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dLFsxLDQsImZfMSIsMix7ImN1cnZlIjoxfV0sWzMsNCwiZl8yIiwwLHsiY3VydmUiOi0xfV0sWzIsNCwiZiIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==" /></p>
> 
> We must show the existence of a unique $f$ such that the diagram commutes.
> 
> Uniqueness is the easier part to prove:
> For objects (points), if $x \in U$ then $fx = f_{1}x$;
> if $x \in V$ then $fx = f_{2}x$;
> and if $x \in U \cap V$ the assignments agree.
> For a homotopy path $[\gamma] \in \pi_{1}X(x,y)$ uniqueness follows from a representative $\gamma : \mathbb{I} \to X$.
> Using a [[Lebesgue number]], $\mathbb{I}$ may be evenly subdivided into sections either entirely in either $\gamma^{-1}U$ or $\gamma^{-1}V$,
> giving paths $\gamma_{1}, \dots, \gamma_{n}$ where $\gamma \simeq \gamma_{1} \cdots \gamma_{n}$
> Thus $f[\gamma]$ must agree with applying $f_{1}$ and $f_{2}$ to each component path,
> which is clearly invariant under refinement and therefore independent of the precise decomposition.
> 
> For existence, we need to show that $f$ is independent of the representative $\gamma$.
> Let $\gamma_{0} \simeq \gamma_{1}$ by virtue of a [[homotopy of paths]] $H: (t,s) \mapsto \gamma_{s}(t)$.
> Once again a [[Lebesgue number]] may be used to divide $\mathbb{I}^2$ into a $k \times k$ grid
> such that each box is entirely in either $\Gamma^{-1}U$ or $\Gamma^{-1}V$.
> Assign to the box with bottom-left corner at $\left( \frac{i}{k}, \frac{j}{k} \right)$ the paths $a_{j,i}, a_{j+1,i} : \mathbb{I} \to \mathbb{I}^2$ rightwards along its top and bottom edges respectively,
> and $c_{i, j}, c_{i, j+1} : \mathbb{I} \to \mathbb{I}^2$ upwards along its left and right edges respectively.
> Clearly $c_{i,j} \cdot a_{j+1,i} \simeq a_{j,i} \cdot c_{i+1,j}$ as paths,
> and $a_{j,i} \simeq c_{i,j} \cdot a_{j+1,i} \cdot \overline{c_{i+1,j}}$.
> Since $\Gamma c_{0, j / k}$ and $\Gamma c_{1, j / k}$ are constant paths in either $U$ or $V$,
> applying $\Gamma$ to get paths in $X$ for each $j = 0, \dots, k$
> $$
> \begin{align*}
> f \gamma_{j / k} &= \bigodot_{i=0}^k f_{\square}  \Gamma a_{j / k, i / k} \\
> &= \bigodot_{i=0}^k f_{\square}\Gamma c_{i / k, j / k} \odot f_{\square} \Gamma a_{(j+1) / k, i / k} \odot f_{\square} \Gamma \overline{c_{(i+1) / k, j / k}} \\
> &= f_{\square}\Gamma c_{0, j / k} \odot \left( \bigodot_{i=0}^k f_{\square}\Gamma a_{(j+1) / k, i / k} \right) \odot f_{\square} \Gamma \overline{c_{1, j / k}} \\
> &= \bigodot_{i=0}^k f_{\square} \Gamma a_{(j+1) / k, i / k} \\
> &= f\gamma_{(j+1)/k}
> \end{align*}
> $$
> where $f_{\square}$ denotes applying $f_{1}$ or $f_{2}$ depending on whether a path is in $U$ or $V$.
> It follows from $k$ iterations that $f \gamma_{0} = f \gamma_{1}$. 
> <span class="QED"/>

The classical Seifert-Van Kampen theorem concerns the [[Fundamental group]],
which can easily be derived from the above theorem.
[[Ronald Brown]] introduced the groupoid formulation.

#
---
#state/tidy | #lang/en | #SemBr

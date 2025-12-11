---
alias: Fibre coproduct is the coëqualizer of a coproduct
tags:
  - public
---
[[Fibre product and coproduct]]
# Fibre product is the equalizer of a product

Suppose [[Products and coproducts|products]] and [[Equalizer and coëqualizer|equalizers]] exist in $\cat C$
and we have a diagram $\mathscr{D}$
$$
\begin{align*}
A \xrightarrow f C \xleftarrow g B
\end{align*}
$$
Then the [[Fibre product and coproduct|fibre product]] $\catlim \mathscr{D}$ exists and is given by $(E,p_{1},p_{2})$ in the commutative diagram #m/thm/cat

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbNCw0LCJDIl0sWzIsNCwiQSJdLFs0LDIsIkIiXSxbMiwyLCJBIFxcdGltZXMgQiJdLFswLDAsIkUiXSxbMiwwLCJnIl0sWzEsMCwiZiIsMl0sWzQsMywiXFxtYXRocm17ZXF9IiwxXSxbNCwxLCJwXzEiLDIseyJjdXJ2ZSI6MX1dLFs0LDIsInBfMiIsMCx7ImN1cnZlIjotMX1dLFszLDIsIlxccGlfMiJdLFszLDEsIlxccGlfMSIsMl1d%0A%5Cbegin%7Btikzcd%7D%0A%09E%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20%7BA%20%5Ctimes%20B%7D%20%26%26%20B%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20A%20%26%26%20C%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Beq%7D%7D%22%7Bdescription%7D%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7Bp_2%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-1%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7Bp_1%7D%22'%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D1-1%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7B%5Cpi_2%7D%22%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cpi_1%7D%22'%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22g%22%2C%20from%3D3-5%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D5-3%2C%20to%3D5-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbNCw0LCJDIl0sWzIsNCwiQSJdLFs0LDIsIkIiXSxbMiwyLCJBIFxcdGltZXMgQiJdLFswLDAsIkUiXSxbMiwwLCJnIl0sWzEsMCwiZiIsMl0sWzQsMywiXFxtYXRocm17ZXF9IiwxXSxbNCwxLCJwXzEiLDIseyJjdXJ2ZSI6MX1dLFs0LDIsInBfMiIsMCx7ImN1cnZlIjotMX1dLFszLDIsIlxccGlfMiJdLFszLDEsIlxccGlfMSIsMl1d" /></p>

where $\mathrm{eq}$ is the [[Equalizer and coëqualizer|equalizer]] of $(f\pi_{1},g\pi_{2})$.
Conversely, any such fibre product $(E,p_{1},p_{2})$ gives $(p_{1},p_{2})$ as the equalizer of $(f\pi_{1},g\pi_{2})$.[^2010]

> [!check]- Proof
> Let
> $$
> \begin{align*}
> A \xleftarrow{z_{1}} Z \xrightarrow{z_{2}} B
> \end{align*}
> $$
> such that $fz_{1} = gz_{2}$,
> so $(z_{1},z_{2}): Z \to A \times B$ where
> $$
> \begin{align*}
> f\pi_{1} (z_{1},z_{2})= g\pi_{2}(z_{1},z_{2}).
> \end{align*}
> $$
> Now there exists $u : Z \to E$ so that $\mathrm{eq}\,u = (z_{1},z_{2})$.
> Thus
> $$
> \begin{align*}
> p_{1}u = \pi_{1} \, \mathrm{eq}\,u = \pi_{1}(z_{1},z_{2})= z_{1}&, \\
> p_{2} u = \pi_{2} \,\mathrm{eq}\,u = \pi_{2}(z_{1},z_{2}) =z_{2}&.
> \end{align*}
> $$
> Given an alternate $u': Z \to E$ 
> with the property $p_{i}u' = z_{i}$,
> then $\pi_{i}\,\mathrm{eq}\,u' = z_{i}$ so $\mathrm{eq}\,u' = (z_{1},z_{2}) = \mathrm{eq}\,u$,
> and since the equalizer is [[Monomorphism|monic]] $u = u'$. <span class="QED"/>

  [^2010]: 2010\. [[Sources/@awodeyCategoryTheory2010|Category theory]], ¶5.5, pp. 93–94


#
---
#state/tidy | #lang/en | #SemBr

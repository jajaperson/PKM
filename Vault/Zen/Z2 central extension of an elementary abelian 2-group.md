---
tags:
  - public
aliases:
  - associated squaring map
  - extraspecial 2-group
mathLink: $\mathbb{Z}_{2}$ central extension of an elementary abelian 2-group
---
[[Central extension of an abelian group]]
# $\mathbb{Z}_{2}$ central extension of an elementary abelian 2-group

Let $E$ an an [[Elementary abelian group|elementary abelian]] [[p-group|2-group]] ($\mathbb{Z}_{2}$-[[vector space]]) of rank $n$ and consider a [[Central extension of an abelian group|central extension]] 
$$
\begin{align*}
1 \to \mathbb{Z}_{2}^+ \stackrel{\exp}{\hookrightarrow} \hat{E} \stackrel{\pi}{\twoheadrightarrow} E \to 1
\end{align*}
$$
where $\pi x = \overline{x}$
Given a $\Set$-[[Split epimorphism|section]] $s_{(-)} : E \hookrightarrow \hat{E}$ of $\pi$, the **associated squaring map** is then
$$
\begin{align*}
q : E &\to \mathbb{Z}_{2} \\
a &\mapsto \ln (s_{a}^2)
\end{align*}
$$
which is a [[quadratic form]] independent of $s_{(-)}$.
The [[Correspondence between quadratic forms and symmetric bilinear forms away from 2|polar form]] of $q$ is the [[Central extension of an abelian group|associated commutator map]] $c_{0}$,
and we have a [[Surjectivity, injectivity, and bijectivity|bijection]] between (arbitrary) central extensions of the above form and quadratic forms on $E$.
Furthermore, a group $\hat{E}$ is an [[Extraspecial p-group|extraspecial 2-group]] iff it is a central extension of the above form for which $q$ is [[Quadratic space#^nondegenerate]].[^1988] #m/thm/group

> [!check]- Proof
> Clearly equivalent extensions determine the same squaring map.
> Noting that $\pi (s_{a}^2) = 2a = 0$, it follows that $q$ is well defined, 
> and since for any $p \in \mathbb{Z}_{2}$,
> $$
> \begin{align*}
> \ln(s_{a}\mathrm{e}^{p} s_{a} \mathrm{e}^{p}) =
> \ln(s_{a}^2 \mathrm{ e}^{2p}) = \ln(s_{a}^2) + 2p = \ln(s_{a}^2)
> \end{align*}
> $$
> so $q$ is independent of the section chosen.
> Now let $s_{a}s_{b}\mathrm{e}^p = s_{a+b}$.
> Then
> $$
> \begin{align*}
> b_{q}(a,b) &= q(a + b) - q(a) - q(b) \\
> &= \ln(s_{a+b}^2) - \ln(s_{a}^2) - \ln(s_{b}^2) \\
> &= \ln(s_{a}s_{b}\mathrm{e}^ps_{a}s_{b}\mathrm{e}^ps_{a}^{-2}s_{b}^{-2}) \\
> &= \ln(s_{a}s_{b}s_{a}^{-2}s_{a}s_{b}s_{b}^{-2}) \\
> &= \ln[s_{a},s_{b}] = c_{0}
> \end{align*}
> $$
> as claimed.
> 
> Let $q : E \to \mathbb{Z}_{2}$ be a quadratic form, $\{ x_{i} \}_{i=1}^n$ be a $\mathbb{Z}_{2}$-[[Vector basis|basis]] of $E$, and define a unique bilinear map so that
> $$
> \begin{align*}
> \varepsilon_{0} : E \times E &\to \mathbb{Z}_{2} \\
> (x,x) &\mapsto q(x) \\
> (x_{i}, x_{j}) &\mapsto 0 & i<j
> \end{align*}
> $$
> Then by the [[Central group extension#Correspondence between 2-cocycles and central extensions]] there is a central extension
> $$
> \begin{align*}
> 1 \to \mathbb{Z}_{2}^+ \hookrightarrow \hat{E} \twoheadrightarrow E \to 1
> \end{align*}
> $$
> with the 2-cocycle $\varepsilon_{0}$ and thus the squaring map $q$.
> 
> Now for uniqueness, suppose
> $$
> \begin{align*}
> 1 \to \mathbb{Z}_{2}^+ \hookrightarrow B \stackrel{\varphi}\twoheadrightarrow E \to 1
> \end{align*}
> $$
> is a central extension with squaring map $q$.
> Then the associated bilinear map is the polar form $b_{q}$.
> Defining a $\Set$-section $s_{(-)}$ of $\varphi$ so that
> $$
> \begin{align*}
> s_{(-)} : \sum_{k=1}^n m_{k}x_{k} = \prod_{k=1}^n s_{x_{k}}^{m_{k}}
> \end{align*}
> $$
> it is easily shown that $\varepsilon_{0}$ is the corresponding 2-cocyle and so $(B,\varphi)$ is equivalent. <span class="QED"/>

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.3, pp. 108–110

## Properties

### Automorphisms

Letting
$$
\begin{align*}
\Aut(\hat{E}; \mathrm{e}) &= \{ \varphi \in \Aut \hat{E} : \varphi \exp = \exp \} \\
\Aut(E; q) &= \{ \psi \in \Aut E : q\psi = q \} \\
\Aut(E; c_{0}) &= \{ \psi \in \Aut E : c_{0}(\psi,\psi) = c_{0} \}
\end{align*}
$$
it follows $\Aut(E;q) \leq \Aut(E;c_{0})$,
and we have the [[group extension]]
$$
\begin{align*}
1 \to \Ab(E, \mathbb{Z}_{2}) \stackrel{*}{\hookrightarrow} \Aut(\hat{E}; \mathrm{e}) \stackrel{\pi}{\twoheadrightarrow} \Aut(E; c_{0}) \to 1
\end{align*}
$$
where for $\lambda \in \Ab(A, \mathbb{Z}_{2}) \cong \mathbb{Z}_{2}^n \cong E$, #m/thm/group 
$$
\begin{align*}
\lambda^* : \hat{A} &\to \hat{A} \\
x &\mapsto x \mathrm{e}^{\lambda \bar{x}}
\end{align*}
$$
cf. [[Cyclic central extension of a free abelian group|the analogous result for free abelian groups]].[^5.4.5]
Furthermore, if $\hat{E}$ is extraspecial then $\Aut \hat{E} = \Aut(\hat{E}; \mathrm{e})$,
and the [[Inner group automorphism|inner automorphisms]] are given by
$$
\begin{align*}
\Inn \hat{E} = \ker \pi = \Ab(E, \mathbb{Z}_{2})^* \cong E
\end{align*}
$$
where the isomorphism is natural, giving the short exact sequences

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMCwxLCIxIl0sWzIsMCwiRSJdLFsyLDIsIlxcbWF0aHNme0FifShFLCBcXG1hdGhiYiBaXzIpIl0sWzQsMSwiXFxvcGVyYXRvcm5hbWV7QXV0fSBcXGhhdCBFIl0sWzYsMSwiXFxvcGVyYXRvcm5hbWV7QXV0fShFOyBxKSJdLFs4LDEsIjEiXSxbMCwxXSxbMCwyXSxbMiwzLCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsxLDMsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsMiwiXFxjb25nIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzMsNCwiIiwxLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzQsNV1d%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%26%26%20E%20%5C%5C%0A%091%20%26%26%26%26%20%7B%5Coperatorname%7BAut%7D%20%5Chat%20E%7D%20%26%26%20%7B%5Coperatorname%7BAut%7D(E%3B%20q)%7D%20%26%26%201%20%5C%5C%0A%09%26%26%20%7B%5Cmathsf%7BAb%7D(E%2C%20%5Cmathbb%20Z_2)%7D%0A%09%5Carrow%5Bhook%2C%20from%3D1-3%2C%20to%3D2-5%5D%0A%09%5Carrow%5B%22%5Ccong%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5Bfrom%3D2-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5Bfrom%3D2-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D2-5%2C%20to%3D2-7%5D%0A%09%5Carrow%5Bfrom%3D2-7%2C%20to%3D2-9%5D%0A%09%5Carrow%5Bhook%2C%20from%3D3-3%2C%20to%3D2-5%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNixbMCwxLCIxIl0sWzIsMCwiRSJdLFsyLDIsIlxcbWF0aHNme0FifShFLCBcXG1hdGhiYiBaXzIpIl0sWzQsMSwiXFxvcGVyYXRvcm5hbWV7QXV0fSBcXGhhdCBFIl0sWzYsMSwiXFxvcGVyYXRvcm5hbWV7QXV0fShFOyBxKSJdLFs4LDEsIjEiXSxbMCwxXSxbMCwyXSxbMiwzLCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsxLDMsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsMiwiXFxjb25nIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzMsNCwiIiwxLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzQsNV1d" /></p>


  [^5.4.5]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], ¶5.4.5, p. 114

#
---
#state/tidy | #lang/en | #SemBr

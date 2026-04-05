---
tags:
  - public
---
[[Deck transformation]]
# A deck transformation maps sheets to sheets

Let $p : \tilde{X} \twoheadrightarrow X$ be a covering and $\gamma : \tilde{X} \to \tilde{X}$ be a [[Deck transformation]].
Let $x_{0} \in X$, $U \sube X$ be an evenly covered open neighbourhood of $x_{0}$,
and $\tilde{U} \sube \tilde{X}$ be a sheet over $U$.
Then $\gamma(\tilde{U})$ is also a sheet over $U$. #m/thm/homotopy 

> [!check]- Proof
> Given a [[deck transformation]] $\gamma : \tilde{X} \to \tilde{X}$, the following diagram commutes.
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJcXHRpbGRlIFgiXSxbNCwwLCJcXHRpbGRlIFgiXSxbMiwyLCJYIl0sWzYsMF0sWzAsMiwicCIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsInAiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMCwxLCJcXGdhbW1hIiwwLHsiY3VydmUiOi0xfV0sWzEsMCwiXFxnYW1tYV57LTF9IiwwLHsiY3VydmUiOi0xfV1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Ctilde%20X%7D%20%5C%26%5C%26%5C%26%5C%26%20%7B%5Ctilde%20X%7D%20%5C%26%5C%26%20%7B%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20X%0A%09%5Carrow%5B%22p%22'%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22p%22%2C%20two%20heads%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Cgamma%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-1%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Cgamma%5E%7B-1%7D%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-5%2C%20to%3D1-1%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXHRpbGRlIFgiXSxbNCwwLCJcXHRpbGRlIFgiXSxbMiwyLCJYIl0sWzYsMF0sWzAsMiwicCIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsInAiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMCwxLCJcXGdhbW1hIiwwLHsiY3VydmUiOi0xfV0sWzEsMCwiXFxnYW1tYV57LTF9IiwwLHsiY3VydmUiOi0xfV1d" /></p>
> 
> Let $U$ be an evenly covered connected open set and $\tilde{U}$ be a sheet over $U$.
> Then $\gamma(\tilde{U})$ is connected and $p \gamma(\tilde{U}) = U$, so $\gamma(\tilde{U}) \sube \tilde{U}'$ for some sheet $\tilde{U}'$ over $U$.
> Let $\tilde{x} \in \tilde{U}'$.
> Then $p(\tilde{x}) \in U$ so there exists some $\tilde{x}' \in \gamma(\tilde{U}) \sube \tilde{U}'$ such that $p(\tilde{x}') = p(\tilde{x})$.
> But $p$ is injective in $\tilde{U}'$ so $\tilde{x} =\tilde{x}' \in \tilde{U}'$
> Therefore $\tilde{U}' = \tilde{U}$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

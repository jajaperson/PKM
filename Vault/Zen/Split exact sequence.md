---
tags:
  - public
---
[[Short exact sequence]]
# Split exact sequence

$$
\begin{align*}
0 \to A \xrightarrow f B \xrightarrow g C \to 0
\end{align*}
$$

A **split exact sequence**[^spaltet] is a [[short exact sequence]] (depicted above) in an [[abelian category]] that is isomorphic to
$$
\begin{align*}
0 \to A \xrightarrow{i} A \oplus C \xrightarrow{p} C \to 0
\end{align*}
$$
which is always exact.

[^spaltet]: German _spaltete exakte Sequenz_

## Equivalent characterizations

The following characterisations are equivalent:[^loose] #m/thm/homology 

1. the sequence splits
2. $g$ is right-invertible
3. $f$ is left-invertible

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], ¶3.1.11, pp. 132ff

> [!check]- Proof
> We prove for a sequence in $\lMod R$ and thus for any Abelian category via [[Freyd-Mitchell theorem]].
> 
> Consider a split sequence, i.e. the following diagram commutes.
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTAsWzIsMCwiQSJdLFs0LDAsIkIiXSxbNiwwLCJDIl0sWzIsMiwiQSJdLFs0LDIsIkEgXFxvcGx1cyBDIl0sWzYsMiwiQyJdLFswLDIsIjAiXSxbMCwwLCIwIl0sWzgsMCwiMCJdLFs4LDIsIjAiXSxbMCwzLCJcXG1hdGhybXtpZH0iLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMSw0LCJcXGJldGEiLDAseyJjdXJ2ZSI6LTF9XSxbMiw1LCJcXG1hdGhybXtpZH0iLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMCwxLCJmIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsxLDIsImciLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMyw0LCJpIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs0LDUsInAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbNywwXSxbMiw4XSxbNSw5XSxbNiwzXSxbNCwxLCJcXGJldGFeey0xfSIsMCx7ImN1cnZlIjotMX1dXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%090%20%5C%26%5C%26%20A%20%5C%26%5C%26%20B%20%5C%26%5C%26%20C%20%5C%26%5C%26%200%20%5C%5C%0A%09%5C%5C%0A%090%20%5C%26%5C%26%20A%20%5C%26%5C%26%20%7BA%20%5Coplus%20C%7D%20%5C%26%5C%26%20C%20%5C%26%5C%26%200%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bid%7D%7D%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Cbeta%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bid%7D%7D%22%7Bdescription%7D%2C%20tail%20reversed%2C%20from%3D1-7%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22f%22%2C%20tail%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22g%22%2C%20two%20heads%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22i%22'%2C%20tail%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22p%22'%2C%20two%20heads%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%09%5Carrow%5Bfrom%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5Bfrom%3D1-7%2C%20to%3D1-9%5D%0A%09%5Carrow%5Bfrom%3D3-7%2C%20to%3D3-9%5D%0A%09%5Carrow%5Bfrom%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbeta%5E%7B-1%7D%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-5%2C%20to%3D1-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTAsWzIsMCwiQSJdLFs0LDAsIkIiXSxbNiwwLCJDIl0sWzIsMiwiQSJdLFs0LDIsIkEgXFxvcGx1cyBDIl0sWzYsMiwiQyJdLFswLDIsIjAiXSxbMCwwLCIwIl0sWzgsMCwiMCJdLFs4LDIsIjAiXSxbMCwzLCJcXG1hdGhybXtpZH0iLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMSw0LCJcXGJldGEiLDAseyJjdXJ2ZSI6LTF9XSxbMiw1LCJcXG1hdGhybXtpZH0iLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifX19XSxbMCwxLCJmIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFsxLDIsImciLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMyw0LCJpIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibW9ubyJ9fX1dLFs0LDUsInAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbNywwXSxbMiw4XSxbNSw5XSxbNiwzXSxbNCwxLCJcXGJldGFeey0xfSIsMCx7ImN1cnZlIjotMX1dXQ==" /></p>
> 
> $p$ has a right-inverse, namely $pi' = \id_{C}$ for $i' : C \rightarrowtail A \oplus C$.
> Then $g\beta^{-1} i' = pi' = \id_{C}$, so  $\beta^{-1}i'$ is a right-inverse of $g$.
> Therefore `1.` implies `2.`
> 
> Now take a short sequence such that $g$ has a right-inverse $r$ with $gr = \id_{C}$.
> Since $f : A \rightarrowtail B$ is injective, there exists an inverse on its range $f' : \ker g \twoheadrightarrow A$.
> $b-rg(b) \in \ker g$ for all $b \in B$ since
> $$
> \begin{align*}
> g (b-rg(b)) = g(b) - grg(b) = g(b)-g(b) = 0
> \end{align*}
> $$
> Thus we may define $q(b) = f'(b - rg(b))$, which is a left-inverse of $f$ since
> $$
> \begin{align*}
> qf(a) = f'(f(a) - rgf(a)) = f'(f(a) - r(0)) = a
> \end{align*}
> $$
> for all $a \in A$.
> Therefore `2.` implies `3.`.
> 
> Finally take a short sequence such that $f$ has a left-inverse $q$ with $qf = \id_{A}$.
> Let $\beta = q \oplus g$.
> Then $(\id_{A}, \beta, \id_{C})$ is a morphism of short exact sequences, since
> $$
> \begin{align*}
> \beta f = q f \oplus gf = {\id_{A}} \oplus 0 = i
> \end{align*}
> $$
> and
> $$
> \begin{align*}
> p \beta = p(q \oplus g) = g
> \end{align*}
> $$
> Hence by the [[Five lemma]] $\beta$ is an isomorphism,
> whence $(\id_{A}, \beta, \id_{C})$ is an isomorphism of short sequences.
> Therefore `3.` implies `1.`.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

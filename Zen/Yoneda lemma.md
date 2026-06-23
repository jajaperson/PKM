---
tags:
  - public
mathLink-blocks:
  proof: proof of the Yoneda lemma
---
[[Category theory MOC]]
# Yoneda lemma

Let $\cat C$ be a category.[^size]
For every object $X \in \cat C$ and every [[Presheaf]] $F : \op{\cat C} \to \Set$
we have
$$
\begin{align*}
\PSh(\cat C) (\yo X, F) \cong FX
\end{align*}
$$
where $\yo X = \cat C(-,X)$ is the [[Yoneda embedding]].
Moreover, this [[Surjectivity, injectivity, and bijectivity|bijection]] is [[natural isomorphism|natural]] in $F$ and $X$
$$
\begin{align*}
\mathrm{H} := {\Hom_{\cat C} }\circ (\yo \times 1) \Rightarrow \mathrm{Eval} : \cat C \times \PSh(\cat C) \to \Set
\end{align*}
$$
where naturality in $F$ means for $\vartheta : F \Rightarrow G : \op{\cat C} \to \Set$

![[yo-natural-1.svg#invert|c|https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXFBTaChcXGNhdCBDKShcXHlvIFgsIEYpIl0sWzAsMiwiXFxQU2goXFxjYXQgQykoXFx5byBYLCBHKSJdLFsyLDAsIkZYIl0sWzIsMiwiR1giXSxbMCwxLCJcXFBTaChcXGNhdCBDKShcXHlvIFgsIFxcdmFydGhldGEpIiwyXSxbMCwyLCJcXG1hdGhybSBIX3tYLEZ9IiwwLHsib2Zmc2V0IjotMX1dLFsxLDMsIlxcbWF0aHJtIEhfe1gsIEZ9IiwwLHsib2Zmc2V0IjotMX1dLFsyLDAsIiIsMCx7Im9mZnNldCI6LTF9XSxbMywxLCIiLDAseyJvZmZzZXQiOi0xfV0sWzIsMywiXFx2YXJ0aGV0YV9YIl1d]]

commutes; and naturality in $X$ means for $f \in \cat C(X,Y)$

![[yo-natural-2.svg#invert|c|https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXFBTaChcXGNhdCBDKShcXHlvIFgsIEYpIl0sWzAsMiwiXFxQU2goXFxjYXQgQykoXFx5byBZLCBGKSJdLFsyLDAsIkZYIl0sWzIsMiwiRlkiXSxbMSwwLCJcXFBTaChcXGNhdCBDKShcXHlvIGYsIEYpIl0sWzMsMiwiRmYiLDJdLFswLDIsIlxcbWF0aHJtIEhfe1gsRn0iLDAseyJvZmZzZXQiOi0xfV0sWzEsMywiXFxtYXRocm0gSF97WSxGfSIsMCx7Im9mZnNldCI6LTF9XSxbMywxLCIiLDAseyJvZmZzZXQiOi0xfV0sWzIsMCwiIiwxLHsib2Zmc2V0IjotMX1dXQ==]]

commutes.[^2010]

> [!check]- Proof
> For $\vartheta \in \PSh(\cat C)(\yo X, F)$ we have $\vartheta_{X} : \cat C(X,X) \to FX$.
> Let $x_{\vartheta} := \vartheta_{X}(1_{X}) \in FX$.
> 
> Conversely, given an $x \in FX$, we can define $\vartheta_{x} : \yo X \Rightarrow F : \op{\cat C} \to \Set$ as follows:
> Given any $X'$, we define the component
> $$
> \begin{align*}
> (\vartheta_{x})_{X'} : \cat C(X',X) &\to FX' \\
> h&\mapsto (Fh)x
> \end{align*}
> $$
> whose naturality condition is given by the diagram
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJcXG1hdGhzZiBDKFgnJywgWCkiXSxbMCwyLCJcXG1hdGhzZiBDKFgnLFgpIl0sWzIsMCwiRlgnJyJdLFsyLDIsIkZYJyJdLFsxLDAsIlxcbWF0aHNmIEMoZixYKSJdLFswLDIsIihcXHZhcnRoZXRhX3gpX3tYJyd9Il0sWzMsMiwiRmYiLDJdLFsxLDMsIihcXHZhcnRoZXRhX3gpX3tYJ30iLDJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%0A%09%7B%5Cmathsf%20C(X''%2C%20X)%7D%20%26%26%20%7BFX''%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathsf%20C(X'%2CX)%7D%20%26%26%20%7BFX'%7D%0A%09%5Carrow%5B%22%7B(%5Cvartheta_x)_%7BX''%7D%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cmathsf%20C(f%2CX)%7D%22%2C%20from%3D3-1%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%7B(%5Cvartheta_x)_%7BX'%7D%7D%22'%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22Ff%22'%2C%20from%3D3-3%2C%20to%3D1-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG1hdGhzZiBDKFgnJywgWCkiXSxbMCwyLCJcXG1hdGhzZiBDKFgnLFgpIl0sWzIsMCwiRlgnJyJdLFsyLDIsIkZYJyJdLFsxLDAsIlxcbWF0aHNmIEMoZixYKSJdLFswLDIsIihcXHZhcnRoZXRhX3gpX3tYJyd9Il0sWzMsMiwiRmYiLDJdLFsxLDMsIihcXHZhcnRoZXRhX3gpX3tYJ30iLDJdXQ==" /></p>
> 
> Now for $h \in \cat C(X',X)$ we have
> $$
> \begin{align*}
> (\vartheta_{x})_{X''} \cat C(f,X)  h 
> &= (\vartheta_{x})_{X''}\, h f \\
> &=F(hf)x \\
> &= (Ff)(Fh)x \\
> &=(Ff) (\vartheta_{x})_{X'}h
> \end{align*}
> $$
> so $\vartheta_{x}$ is indeed natural.
> 
> Now we calculate $\vartheta_{x_{\vartheta}}$ for $\vartheta \in \PSh(\cat C)(\yo X,F)$.
> From the above definitions, for $h \in \cat C(X',X)$ we have
> $$
> \begin{align*}
> (\vartheta_{x_{\vartheta}})_{X'}h = (Fh)x_{\vartheta} = (Fh)\vartheta_{X}(1_{X})
> \end{align*}
> $$
> but by naturality of $\vartheta$ 
> $$
> \begin{align*}
> (Fh)\vartheta_{X}(1_{X}) = \vartheta_{X'} \cat C(h,X)(1_{X}) = \vartheta_{X'}h
> \end{align*}
> $$
> wherefore $\vartheta_{(x_{\vartheta})}=\vartheta$.
> 
> Conversely, for $x \in FX$ we have
> $$
> \begin{align*}
> x_{\vartheta_{x}} &= (\vartheta_{x})_{X}(1_{X}) = F(1_{X}) x \\
> &= 1_{FX}x = x.
> \end{align*}
> $$
> Therefore
> $$
> \begin{align*}
> \mathrm{H}_{X,F} : \PSh(\cat C)(\yo X, F) &\to FX \\
> \vartheta &\mapsto x_{\vartheta}
> \end{align*}
> $$
> defines a bijection for any $X,F$.
> 
> For naturality in $F$, suppose $\vartheta \in\PSh(\cat C)(F,G)$
> Then for any $\varphi \in \PSh(\cat C)(\yo X, F)$ we have
> $$
> \begin{align*}
> \mathrm{H}_{X,F}(x_{\phi}) &= \vartheta_{X}\, x_{\phi} = \vartheta_{X} \, \phi_{X} (1_{X}) = (\vartheta\phi)_{X}(1_{X}) \\
> &= x_{\vartheta\phi} = \mathrm{H}_{X,G}(\vartheta\phi) 
> = \mathrm{H}_{X,G}(\cat C(\yo X, \phi)\vartheta)
> \end{align*}
> $$
> so the required diagram commutes.
> 
> For naturality in $X$, suppose $h \in \cat C(X,Y)$.
> Then for $\psi \in \PSh(\cat C)(\yo Y,F)$ we have
> $$
> \begin{align*}
> \mathrm{H}_{X,F} \, \PSh(\cat C)(\yo h,F)\, \psi 
> &= \mathrm{H}_{X,F} (\psi (\yo h)) \\
> &= (\psi (\yo h))_{X}\,(1_{X}) \\
> &= \psi_{X}(\yo h)_{X}\,(1_{X}) \\
> &= \psi_{X} \, \cat C(X,h)\,(1_{X}) \\
> &= \psi_{X}(h) \\
> &= \psi_{X} \, \cat C(h,Y) \, (1_{Y}) \\
> &= \psi_{X}\, ((\yo Y)h) \, (1_{Y}) \\
> &= (Fh) \, \psi_{Y}(1_{Y})\,\\
> &= (Fh) \, \mathrm{H}_{Y,F} \, \psi
> \end{align*}
> $$
> as required. <span class="QED"/>
^proof

## Corollaries

- The “theorem”: The [[Yoneda embedding]] is an embedding.
- The [[Yoneda perspective]]
- [[Cayley's theorem]]

[^2010]: 2010\. [[Sources/@awodeyCategoryTheory2010|Category theory]], §8.3, pp. 189–192

#
---
#state/tidy | #lang/en | #SemBr

[^size]: We ignore size conditions. In [[ZF]] and conservative extensions it is required that $\cat C$ be a [[locally small category]].
---
tags:
  - public
---
[[Category theory MOC]]
# Adjoint functor

An **adjunction of functors** is an [[adjunction]] in [[Category of small categories]] #m/def/cat
Let $\cat C$, $\cat D$ be [[category|categories]].
A [[functor]] $L : \cat C \to \cat D$ is **left-adjoint** to $R : \cat D \to \cat C$, written

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMixbMCwwLCJcXG1hdGhzZiBEIl0sWzIsMCwiXFxtYXRoc2YgQyJdLFswLDEsIlIiLDIseyJjdXJ2ZSI6MX1dLFsxLDAsIkwiLDIseyJjdXJ2ZSI6MX1dLFszLDIsIiIsMix7ImxldmVsIjoxLCJzdHlsZSI6eyJuYW1lIjoiYWRqdW5jdGlvbiJ9fV1d%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%7B%5Cmathsf%20D%7D%20%26%26%20%7B%5Cmathsf%20C%7D%0A%09%5Carrow%5B%22%22%7Bname%3D0%2C%20anchor%3Dcenter%2C%20inner%20sep%3D0%7D%2C%20%22R%22'%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%22%7Bname%3D1%2C%20anchor%3Dcenter%2C%20inner%20sep%3D0%7D%2C%20%22L%22'%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D1-3%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22%5Cdashv%22%7Banchor%3Dcenter%2C%20rotate%3D-90%7D%2C%20draw%3Dnone%2C%20from%3D1%2C%20to%3D0%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsMixbMCwwLCJcXG1hdGhzZiBEIl0sWzIsMCwiXFxtYXRoc2YgQyJdLFswLDEsIlIiLDIseyJjdXJ2ZSI6MX1dLFsxLDAsIkwiLDIseyJjdXJ2ZSI6MX1dLFszLDIsIiIsMix7ImxldmVsIjoxLCJzdHlsZSI6eyJuYW1lIjoiYWRqdW5jdGlvbiJ9fV1d" /></p>

or compactly $L \dashv R : \cat D \leftrightharpoons \cat C$,
iff there is a [[Natural equivalence|natural isomorphism]] in [[Functor category|$\Set^{({\cop C} \times \cat D)}$]] of hom-sets
$$
\begin{align*}
\varphi: \cat C(L \times 1_{\cat D}) &\cong \cat D(1_{\cat C} \times R) : \psi \\
\varphi_{(C,D)} : \cat D(LC,D) &\cong \cat C(C, RD) : \psi_{(C,D)}
\end{align*}
$$
for all $C \in \cat C, D \in \cat D$.[^2010]
The name comes from an analogy to the [[Adjoint operator]].
In the archetypal examples, we think of $R$ as _forgetful_ and $L$ as _free_ —
See [[Free-forgetful adjunction]].

  [^2010]: 2010\. [[Sources/@awodeyCategoryTheory2010|Category theory]], §9

## Equivalent definitions

The following conditions are equivalent to $L \dashv R : \cat D \leftrightharpoons \cat C$ forming an adjunction.

### In terms of a unit

There exists a [[natural transformation]] $\eta : 1_{\cat C} \to RL : \cat C \to \cat C$ (“**unit of adjunction**”) 
such that for any objects $C \in \cat C$, $D \in \cat D$, and morphism $f : C \to RD$, 
there exists a unique $g: LC \to D$ such that $f = (Rg)\eta_{C}$.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMCwwLCJMQyJdLFswLDIsIkQiXSxbMiwwLCJSTEMiXSxbMiwyLCJSRCJdLFs0LDAsIkMiXSxbMCwxLCJcXGV4aXN0cyEgZyIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDIsIlxcZXRhX0MiLDJdLFs0LDMsImYiXSxbMiwzLCJSZyIsMl1d%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09LC%20%26%26%20RLC%20%26%26%20C%20%5C%5C%0A%09%5C%5C%0A%09D%20%26%26%20RD%0A%09%5Carrow%5B%22%7B%5Cexists!%20g%7D%22'%2C%20dashed%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22Rg%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Ceta_C%7D%22'%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMCwwLCJMQyJdLFswLDIsIkQiXSxbMiwwLCJSTEMiXSxbMiwyLCJSRCJdLFs0LDAsIkMiXSxbMCwxLCJcXGV4aXN0cyEgZyIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDIsIlxcZXRhX0MiLDJdLFs0LDMsImYiXSxbMiwzLCJSZyIsMl1d" /></p>

$f$ is thence the **adjunct** of $g$.

### In terms of a coünit

There exists a [[natural transformation]] $\epsilon : LR \to 1_{\cat D} : \cat D \to \cat D$ (“**coünit of adjunction**”)
such that for any objects $C \in \cat C$ and $D \in \cat D$.
and morphism $g: L C \to D$,
there exists a unique $f : C \to RD$ such that $g = \epsilon_{D}(Lf)$.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbNCwyLCJDIl0sWzQsMCwiUkQiXSxbMiwwLCJEIl0sWzAsMiwiTEMiXSxbMCwwLCJMUkQiXSxbMCwxLCJcXGV4aXN0cyEgZiIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFszLDIsImciLDJdLFszLDQsIkxmIl0sWzQsMiwiXFxlcHNpbG9uX0QiXV0%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09LRD%20%26%26%20D%20%26%26%20RD%20%5C%5C%0A%09%5C%5C%0A%09LC%20%26%26%26%26%20C%0A%09%5Carrow%5B%22%7B%5Cepsilon_D%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22Lf%22%2C%20from%3D3-1%2C%20to%3D1-1%5D%0A%09%5Carrow%5B%22g%22'%2C%20from%3D3-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cexists!%20f%7D%22'%2C%20dashed%2C%20from%3D3-5%2C%20to%3D1-5%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbNCwyLCJDIl0sWzQsMCwiUkQiXSxbMiwwLCJEIl0sWzAsMiwiTEMiXSxbMCwwLCJMUkQiXSxbMCwxLCJcXGV4aXN0cyEgZiIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFszLDIsImciLDJdLFszLDQsIkxmIl0sWzQsMiwiXFxlcHNpbG9uX0QiXV0=" /></p>

$g$ is thence the **adjunct** of $f$.


#
---
#state/develop  | #lang/en | #SemBr

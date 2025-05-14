---
aliases:
  - internal hom-functor
tags:
  - public
---
[[Category theory MOC]]
# Closed category

A **closed category** is a category with objects resembling hom-sets. #m/def/cat 
Explicitly, a closed category $\cat C$ is equipped with[^1966][^1977]

1. a [[multifunctor]] $[-,-] : \cop C \times \cat C \to \cat C$ called the **internal hom-functor**;
2. an object $1$ called the **unit**;
3. a [[Natural isomorphism|natural isomorphism]] with components $\epsilon_{X} : X \to [1,X]$ in [[Endofunctor category|$\cat C^{\cat C}$]], which may be thought of as enabling generalized elements;
4. an [[(Extra)natural transformation|extranatural transformation]] with components $\iota_{X} : 1 \to [X,X]$, which may be thought of as the generalized element for the identity;
5. an [[(extra)natural transformation]] with components $L^X_{Y,Z} : [Y,Z]\to [[X,Y],[X,Z]]$,
   which may be thought of as encoding composition

such that

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTQsWzAsMCwiMSJdLFsyLDAsIltZLFldIl0sWzIsMiwiW1tYLFldLFtYLFldXSJdLFswLDQsIltYLFldIl0sWzIsNCwiW1tYLFhdLFtYLFldXSJdLFsyLDYsIlsxLFtYLFldXSJdLFswLDgsIltZLFpdIl0sWzIsOCwiW1sxLFldLFsxLCBaXV0iXSxbMiwxMCwiW1ksWzEsIFpdXSJdLFswLDEyLCJbVSxWXSJdLFsyLDEyLCJbW1ksVV0sW1ksVl1dIl0sWzAsMTQsIltbWCxVXSxbWCxWXV0iXSxbMCwxNiwiW1tbWCxZXSxbWCxVXV0sW1tYLFldLFtYLFZdXV0iXSxbMiwxNiwiW1tZLFVdLFtbWCxZXSxbWCxWXV1dIl0sWzAsMSwiXFxpb3RhX1kiXSxbMSwyLCJMXlhfe1ksWX0iXSxbMCwyLCJcXGlvdGFfe1tYLFldfSIsMl0sWzMsNCwiTF5YX3tYLFl9Il0sWzQsNSwiW1xcaW90YV9YLFxcbWF0aHJte2lkfV0iXSxbMyw1LCJcXGVwc2lsb25fe1tYLFldfSIsMl0sWzYsNywiTF4xX3tZLFp9Il0sWzcsOCwiW1xcZXBzaWxvbl9ZLFxcbWF0aHJte2lkfV0iXSxbNiw4LCJbMSxcXGVwc2lsb25dIiwyXSxbOSwxMCwiTF5ZX3tVLFZ9Il0sWzksMTEsIkxeWF97VSxWfSIsMl0sWzExLDEyLCJMXntbWCxZXX1fe1tYLFVdLFtYLFZdfSIsMl0sWzEwLDEzLCJbXFxtYXRocm17aWR9LExeWF97WSxWfV0iXSxbMTIsMTMsIltMXlhfe1ksVX0sIFxcbWF0aHJte2lkfV0iLDJdXQ%3D%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%091%20%26%26%20%7B%5BY%2CY%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20%7B%5B%5BX%2CY%5D%2C%5BX%2CY%5D%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5BX%2CY%5D%7D%20%26%26%20%7B%5B%5BX%2CX%5D%2C%5BX%2CY%5D%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20%7B%5B1%2C%5BX%2CY%5D%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5BY%2CZ%5D%7D%20%26%26%20%7B%5B%5B1%2CY%5D%2C%5B1%2C%20Z%5D%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20%7B%5BY%2C%5B1%2C%20Z%5D%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5BU%2CV%5D%7D%20%26%26%20%7B%5B%5BY%2CU%5D%2C%5BY%2CV%5D%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5B%5BX%2CU%5D%2C%5BX%2CV%5D%5D%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5B%5B%5BX%2CY%5D%2C%5BX%2CU%5D%5D%2C%5B%5BX%2CY%5D%2C%5BX%2CV%5D%5D%5D%7D%20%26%26%20%7B%5B%5BY%2CU%5D%2C%5B%5BX%2CY%5D%2C%5BX%2CV%5D%5D%5D%7D%0A%09%5Carrow%5B%22%7B%5Ciota_Y%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Ciota_%7B%5BX%2CY%5D%7D%7D%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7BL%5EX_%7BY%2CY%7D%7D%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7BL%5EX_%7BX%2CY%7D%7D%22%2C%20from%3D5-1%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7B%5Cepsilon_%7B%5BX%2CY%5D%7D%7D%22'%2C%20from%3D5-1%2C%20to%3D7-3%5D%0A%09%5Carrow%5B%22%7B%5B%5Ciota_X%2C%5Cmathrm%7Bid%7D%5D%7D%22%2C%20from%3D5-3%2C%20to%3D7-3%5D%0A%09%5Carrow%5B%22%7BL%5E1_%7BY%2CZ%7D%7D%22%2C%20from%3D9-1%2C%20to%3D9-3%5D%0A%09%5Carrow%5B%22%7B%5B1%2C%5Cepsilon%5D%7D%22'%2C%20from%3D9-1%2C%20to%3D11-3%5D%0A%09%5Carrow%5B%22%7B%5B%5Cepsilon_Y%2C%5Cmathrm%7Bid%7D%5D%7D%22%2C%20from%3D9-3%2C%20to%3D11-3%5D%0A%09%5Carrow%5B%22%7BL%5EY_%7BU%2CV%7D%7D%22%2C%20from%3D13-1%2C%20to%3D13-3%5D%0A%09%5Carrow%5B%22%7BL%5EX_%7BU%2CV%7D%7D%22'%2C%20from%3D13-1%2C%20to%3D15-1%5D%0A%09%5Carrow%5B%22%7B%5B%5Cmathrm%7Bid%7D%2CL%5EX_%7BY%2CV%7D%5D%7D%22%2C%20from%3D13-3%2C%20to%3D17-3%5D%0A%09%5Carrow%5B%22%7BL%5E%7B%5BX%2CY%5D%7D_%7B%5BX%2CU%5D%2C%5BX%2CV%5D%7D%7D%22'%2C%20from%3D15-1%2C%20to%3D17-1%5D%0A%09%5Carrow%5B%22%7B%5BL%5EX_%7BY%2CU%7D%2C%20%5Cmathrm%7Bid%7D%5D%7D%22'%2C%20from%3D17-1%2C%20to%3D17-3%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTQsWzAsMCwiMSJdLFsyLDAsIltZLFldIl0sWzIsMiwiW1tYLFldLFtYLFldXSJdLFswLDQsIltYLFldIl0sWzIsNCwiW1tYLFhdLFtYLFldXSJdLFsyLDYsIlsxLFtYLFldXSJdLFswLDgsIltZLFpdIl0sWzIsOCwiW1sxLFldLFsxLCBaXV0iXSxbMiwxMCwiW1ksWzEsIFpdXSJdLFswLDEyLCJbVSxWXSJdLFsyLDEyLCJbW1ksVV0sW1ksVl1dIl0sWzAsMTQsIltbWCxVXSxbWCxWXV0iXSxbMCwxNiwiW1tbWCxZXSxbWCxVXV0sW1tYLFldLFtYLFZdXV0iXSxbMiwxNiwiW1tZLFVdLFtbWCxZXSxbWCxWXV1dIl0sWzAsMSwiXFxpb3RhX1kiXSxbMSwyLCJMXlhfe1ksWX0iXSxbMCwyLCJcXGlvdGFfe1tYLFldfSIsMl0sWzMsNCwiTF5YX3tYLFl9Il0sWzQsNSwiW1xcaW90YV9YLFxcbWF0aHJte2lkfV0iXSxbMyw1LCJcXGVwc2lsb25fe1tYLFldfSIsMl0sWzYsNywiTF4xX3tZLFp9Il0sWzcsOCwiW1xcZXBzaWxvbl9ZLFxcbWF0aHJte2lkfV0iXSxbNiw4LCJbMSxcXGVwc2lsb25dIiwyXSxbOSwxMCwiTF5ZX3tVLFZ9Il0sWzksMTEsIkxeWF97VSxWfSIsMl0sWzExLDEyLCJMXntbWCxZXX1fe1tYLFVdLFtYLFZdfSIsMl0sWzEwLDEzLCJbXFxtYXRocm17aWR9LExeWF97WSxWfV0iXSxbMTIsMTMsIltMXlhfe1ksVX0sIFxcbWF0aHJte2lkfV0iLDJdXQ==" /></p>

commute for any objects $X,Y,Z,U,V \in \cat C$,
and the map defined by
$$
\begin{align*}
\gamma : \cat C(X,Y) &\to \cat C(1, [X,Y]) \\
f &\mapsto [\id_{X},f](\iota_{X})
\end{align*}
$$
is a [[Surjectivity, injectivity, and bijectivity|bijection]].

  [^1966]: 1966\. [[Sources/@eilenbergClosedCategories1966|Closed categories]], §I.2, pp. 428–430. Note the refined definition uses only CC1–4
  [^1977]: 1977\. [[Sources/@laplazaEmbeddingClosedCategories1977|Embedding of Closed Categories Into Monoidal Closed Categories]], §1, p. 86. Refines the original definition with CC5, which guarantees the bijection $\gamma$


> [!tip]- Archetypal example: [[Category of sets]]
> In $\Set$ the internal hom-functor is the ordinary [[Hom-functor]] 
> $$
> \begin{align*}
> (- \to -) = [-,-] = \Set : \op\Set \times \Set\to \Set
> \end{align*}
> $$
> and the unit $1$ is any singleton. 
> Then the (extra)natural transformations are given by
> $$
> \begin{align*}
> \epsilon_{X} : X &\to (1 \to X) \\
> x &\mapsto (1 \mapsto x)
> \end{align*}
> $$
> and
> $$
> \begin{align*}
> \iota_{X} : 1 &\to (X \to X) \\
> 1 &\mapsto 1_{X}
> \end{align*}
> $$
> and
> $$
> \begin{align*}
> L^X_{Y,Z} : (Y \to Z) &\to ((X \to Y) \to (X \to Z)) \\
> f &\mapsto (g \mapsto  f \circ g)
> \end{align*}
> $$

A [[Closed monoidal category]] is a category which is also monoidal in a compatible way.

#
---
#state/tidy | #lang/en | #SemBr

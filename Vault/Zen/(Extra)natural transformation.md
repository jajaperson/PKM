---
aliases:
  - extranatural transformation
tags:
  - public
---
[[Natural transformation]]
# (Extra)natural transformation

Let $F : \cat A \times \cat B \times \cop B \to \cat D$ and $G : \cat A \times \cat C \times \cop C \to \cat D$ be [[Functor|functors]].
A transformation (family of morphisms) with components
$$
\begin{align*}
\alpha_{a,b,c} : F(a,b,b) \to G(a,c,c)
\end{align*}
$$
can of course never be [[Natural transformation|natural]] in $b$ or $c$, but it can be **extraordinary-natural**, or **extranatural** in $b$ and $c$.
Extranaturality in an argument appearing in the domain is given by the diagram on left,
whille extranaturality an argument appearing in the codomain is given by the diagram on the right.[^1966] #m/def/cat 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTIsWzAsMCwiYiJdLFsyLDAsImInIl0sWzQsMCwiYyJdLFs2LDAsImMnIl0sWzAsMiwiRihhLGIsYicpIl0sWzIsMiwiRihhLGIsYikiXSxbMCw0LCJGKGEsYicsIGInKSJdLFsyLDQsIkcoYSxiLGMpIl0sWzQsMiwiRihhLGIsYikiXSxbNiwyLCJHKGEsYyxjKSJdLFs0LDQsIkcoYSxjJyxjJykiXSxbNiw0LCJHKGEsYycsYykiXSxbMCwxLCJnIl0sWzIsMywiaCJdLFs0LDUsIkYoMSwxLGcpIl0sWzQsNiwiRigxLGcsMSkiLDJdLFs2LDcsIlxcYWxwaGFfe2EsYicsY30iLDJdLFs1LDcsIlxcYWxwaGFfe2EsYixjfSJdLFs4LDksIlxcYWxwaGFfe2EsYixjfSJdLFsxMCwxMSwiRygxLDEsaCkiLDJdLFs5LDExLCJHKDEsaCwxKSJdLFs4LDEwLCJcXGFscGhhX3thLGIsYyd9IiwyXV0%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09b%20%26%26%20%7Bb'%7D%20%26%26%20c%20%26%26%20%7Bc'%7D%20%5C%5C%0A%09%5C%5C%0A%09%7BF(a%2Cb%2Cb')%7D%20%26%26%20%7BF(a%2Cb%2Cb)%7D%20%26%26%20%7BF(a%2Cb%2Cb)%7D%20%26%26%20%7BG(a%2Cc%2Cc)%7D%20%5C%5C%0A%09%5C%5C%0A%09%7BF(a%2Cb'%2C%20b')%7D%20%26%26%20%7BG(a%2Cb%2Cc)%7D%20%26%26%20%7BG(a%2Cc'%2Cc')%7D%20%26%26%20%7BG(a%2Cc'%2Cc)%7D%0A%09%5Carrow%5B%22g%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22h%22%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22%7BF(1%2C1%2Cg)%7D%22%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7BF(1%2Cg%2C1)%7D%22'%2C%20from%3D3-1%2C%20to%3D5-1%5D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Ba%2Cb%2Cc%7D%7D%22%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Ba%2Cb%2Cc%7D%7D%22%2C%20from%3D3-5%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Ba%2Cb%2Cc'%7D%7D%22'%2C%20from%3D3-5%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7BG(1%2Ch%2C1)%7D%22%2C%20from%3D3-7%2C%20to%3D5-7%5D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Ba%2Cb'%2Cc%7D%7D%22'%2C%20from%3D5-1%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7BG(1%2C1%2Ch)%7D%22'%2C%20from%3D5-5%2C%20to%3D5-7%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTIsWzAsMCwiYiJdLFsyLDAsImInIl0sWzQsMCwiYyJdLFs2LDAsImMnIl0sWzAsMiwiRihhLGIsYicpIl0sWzIsMiwiRihhLGIsYikiXSxbMCw0LCJGKGEsYicsIGInKSJdLFsyLDQsIkcoYSxiLGMpIl0sWzQsMiwiRihhLGIsYikiXSxbNiwyLCJHKGEsYyxjKSJdLFs0LDQsIkcoYSxjJyxjJykiXSxbNiw0LCJHKGEsYycsYykiXSxbMCwxLCJnIl0sWzIsMywiaCJdLFs0LDUsIkYoMSwxLGcpIl0sWzQsNiwiRigxLGcsMSkiLDJdLFs2LDcsIlxcYWxwaGFfe2EsYicsY30iLDJdLFs1LDcsIlxcYWxwaGFfe2EsYixjfSJdLFs4LDksIlxcYWxwaGFfe2EsYixjfSJdLFsxMCwxMSwiRygxLDEsaCkiLDJdLFs5LDExLCJHKDEsaCwxKSJdLFs4LDEwLCJcXGFscGhhX3thLGIsYyd9IiwyXV0=" /></p>

A transformation is said to be **(extra)natural** iff it is [[Natural transformation|natural]] in arguments appearing in both its domain and codomain, and extranatural in any arguments appearing both covariantly and contravariantly in either its domain or codomain only.

  [^1966]: 1966\. [[Sources/@eilenbergGeneralizationFunctorialCalculus1966|A generalization of the functorial calculus]], p. 367
#
---
#state/tidy | #lang/en | #SemBr

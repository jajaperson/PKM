---
tags:
  - public
---
[[Category ring]]
# Modules over a category ring

Let $\cat C$ be a category with finite $\Ob(\cat C)$.
Then a [[Module over a unital associative algebra|module]] over the the [[Category ring|category ring]] $\mathbb{K} [\cat C]$ is equivalent to a [[functor]] $\cat C \to \Vect_{\mathbb{K}}$, #m/thm/rep
and we have an [[equivalence of categories]][^1] 
$$
\begin{align*}
\lMod{\mathbb{K}[\cat C]} \simeq {\Vect_{\mathbb{K}}}^{\cat C}.
\end{align*}
$$


> [!check]- Proof
> Let $F : \cat C \to \Vect_{\mathbb{K}}$ be a functor,
> Let $(VF)_{X} = FX$ and thus construct the $\Ob(\cat C)$-[[graded vector space]]
> $$
> \begin{align*}
> VF = \bigoplus _{X \in \Ob(\cat C)} (VF)_{X}
> \end{align*}
> $$
> and for a morphism $f \in \cat C$ and homogenous vector $v \in (VF)_{X}$ define
> $$
> \begin{align*}
> f \odot v = \begin{cases}
> (Ff)v & X = \opn{dom} f \\
> 0 & X \neq \opn{dom}f
> \end{cases}
> \end{align*}
> $$
> and extend this definition linearly first for nonhomogenous vectors and then general $f \in \mathbb{K}[\cat C]$.
> Clearly this defines a $\mathbb{K}[\cat C]$-module.
> 
> Now suppose $\varphi \in {\Vect_{\mathbb{K}}}^\cat{C}(F,G)$ is a natural transformation with components $\varphi_{X} : (VF)_{X} \to (VG)_{X}$.
> Then
> $$
> \begin{align*}
> (V\varphi) = \bigoplus _{X \in \opn{Ob}(\cat C)} \varphi_{X} : VF \to VG
> \end{align*}
> $$
> defines an $\Ob(\cat C)$-[[Homomorphism of graded vector spaces|graded linear map]].
> Moreover, by naturality of $\varphi$, for a morphism $f \in \cat C(X,Y)$ and homogenous vector $v \in (VF)_{X}$
> $$
> \begin{align*}
> (V\varphi)\,(f \odot v) = \varphi_{Y}(Ff) v = (Gf) \varphi_{X} v = f \odot  (V\varphi) v
> \end{align*}
> $$
> so by linearity $V\varphi$ is a $\mathbb{K}[\cat C]$-module isomorphism.
> Therefore $V : {\Vect_{\mathbb{K}}}^{\cat C} \to \lMod{\mathbb{K}[\cat C]}$ is a functor.
> 
> Conversely, suppose $V$ is a $\mathbb{K}[\cat C]$-module.
> We define a functor $MV : \cat C \to \Vect_{\mathbb{K}}$ as follows:
> 
> - $(MV)X = 1_{X} \odot V$ for $X \in \Ob(\cat C)$;
> - $((MV)f) v = f \odot v$ for $f \in \cat C(X,Y)$ and $v \in (MV)X$.
> 
> Now suppose $\varphi : V \to W$ is a $\mathbb{K}[\cat C]$-[[module homomorphism]].
> We define a transformation with components
> $$
> \begin{align*}
> (M\varphi)_{X} : (MV)X &\to (MW) X\\
> v &\mapsto \varphi v
> \end{align*}
> $$
> which is well-defined since $\varphi$ is $\Ob(\cat C)$-graded.
> Moreover, for any $f \in \cat C(X,Y)$ and $v \in M(V)X$
> $$
> \begin{align*}
> ((MW) f) \,(M\varphi)_{X} \,v = f \odot  \varphi v = \varphi(f \odot  v) = (M\varphi)_{Y}\,((MV)f)
> \end{align*}
> $$
> so the following diagram commutes
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMiwyLCIoTVYpWCJdLFs0LDIsIihNVylYIl0sWzIsNCwiKE1WKVkiXSxbNCw0LCIoTVcpWSJdLFswLDIsIlgiXSxbMCw0LCJZIl0sWzIsMCwiViJdLFs0LDAsIlciXSxbMCwyLCIoTVYpZiIsMl0sWzEsMywiKE1XKWYiXSxbMCwxLCIoTVxcdmFycGhpKV9YIl0sWzIsMywiKE1cXHZhcnBoaSlfWSIsMl0sWzQsNSwiZiIsMl0sWzYsNywiXFx2YXJwaGkiXV0%3D%0A%5Cbegin%7Btikzcd%7D%0A%09%26%26%20V%20%26%26%20W%20%5C%5C%0A%09%5C%5C%0A%09X%20%26%26%20%7B(MV)X%7D%20%26%26%20%7B(MW)X%7D%20%5C%5C%0A%09%5C%5C%0A%09Y%20%26%26%20%7B(MV)Y%7D%20%26%26%20%7B(MW)Y%7D%0A%09%5Carrow%5B%22%5Cvarphi%22%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D3-1%2C%20to%3D5-1%5D%0A%09%5Carrow%5B%22%7B(M%5Cvarphi)_X%7D%22%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B(MV)f%7D%22'%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7B(MW)f%7D%22%2C%20from%3D3-5%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7B(M%5Cvarphi)_Y%7D%22'%2C%20from%3D5-3%2C%20to%3D5-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsOCxbMiwyLCIoTVYpWCJdLFs0LDIsIihNVylYIl0sWzIsNCwiKE1WKVkiXSxbNCw0LCIoTVcpWSJdLFswLDIsIlgiXSxbMCw0LCJZIl0sWzIsMCwiViJdLFs0LDAsIlciXSxbMCwyLCIoTVYpZiIsMl0sWzEsMywiKE1XKWYiXSxbMCwxLCIoTVxcdmFycGhpKV9YIl0sWzIsMywiKE1cXHZhcnBoaSlfWSIsMl0sWzQsNSwiZiIsMl0sWzYsNywiXFx2YXJwaGkiXV0=" /></p>
> 
> whence $M\varphi$ is natural and $M : \lMod{\mathbb{K}[\cat C]} \to {\Vect_{\mathbb{K}}}^{\cat C}$ is a functor.
> 
> It is not difficult to see the natural equivalences required to make this an equivalence. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

[^1]: assuming the [[Axiom of Choice]].

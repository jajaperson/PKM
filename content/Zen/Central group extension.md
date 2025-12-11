---
tags:
  - public
aliases:
  - central extension of a group
mathLink-blocks:
  2-cocycle: 2-cocycle
  2-coboundary: 2-coboundary
---
[[Group extension]]
# Central group extension

A [[group extension]] of $A$ by $B$
$$
\begin{align*}
1 \to B \stackrel \exp \hookrightarrow G \stackrel \pi \twoheadrightarrow A \to 1
\end{align*}
$$
is called **central** iff $B \hookrightarrow G$ is contained within the [[Centre of a group|centre]] $Z(G)$, #m/def/group whence $B$ is [[Abelian group|abelian]].
In what follows we write $B$ additively and $G$ and $A$ multiplicatively,
and write $\mathrm{e}^b = \mathrm{e}(b)$ for any $b \in B$,

## Second cohomology

Identifying $B$ with the [[Abelian groups as Z-modules|corresponding $\mathbb Z$-module]] equipped with the trivial representation of $G$ (thus a $\mathbb{Z}[G]$-module) may consider the [[Group cohomology]], where the 2-cochains $C^2(G,B)$ are maps[^1988]
$$
\begin{align*}
\varepsilon_{0} : A \times A \to B
\end{align*}
$$
and the 2-cocycles $Z^2(G, B)$ are 2-cochains such that
$$
\begin{align*}
\varepsilon_{0}(a,b) + \varepsilon_{0}(ab,c) &= \varepsilon_{0}(b,c) + \varepsilon_{0}(a,bc) & \forall a,b,c \in G
\end{align*}
$$
^2-cocycle

and the 2-coboundaries $B^2(G,B)$ are 2-cochains such that
$$
\begin{align*}
\varepsilon_{0}(ab) &= \eta(ab) - \eta(a) - \eta(b) & \forall a,b \in G
\end{align*}
$$
^2-coboundary

for some 1-cochain $\eta : A \to B$.
Thus, in particular, $\mathbb{Z}$-[[Multilinear map|bilinear]] maps $A \times A \to B$ are 2-cocycles.
The **second cohomology group** is then
$$
\begin{align*}
H^2(A,B) = Z^2(A,B) / B^2(A, B)
\end{align*}
$$

### Correspondence between 2-cocycles and central extensions

Given any $\Set$-[[Split epimorphism|section]]  $s_{(-)} : A \to G$ of $\pi$ we have $G = \{ s_{a}\mathrm{e}^b : a \in A ; b \in B \}$; 
and $s_{a}s_{b} = s_{ab}\mathrm{e}^{\varepsilon_{0}(a,b)}$ defines a 2-cycle.
Conversely let $\varepsilon_{0}:A \times A \to B$ be a 2-cocycle.
Then the set $B \times A$ is a group under the following multiplication
$$
\begin{align*}
(p, a) \cdot (q,b) = (p+q+\varepsilon_{0}(a,b),ab)
\end{align*}
$$
with identity $(-\varepsilon_{0}(1,1),1)$, and we have the above central extension where
$$
\begin{align*}
\pi: (p,a) &\mapsto a \\
\exp : p &\mapsto (p - \varepsilon_{0}(1,1),1)
\end{align*}
$$
and for the associated section $e_{(-)} : a \mapsto (0,a)$ we have $s_{a}s_{b} = s_{ab}  \mathrm{e}^{\varepsilon_{0}(a,b)}$.
Note $s_{1} = 1$ iff $\varepsilon_{0}(a,1)=\varepsilon_{0}(1,a)=0$ for all $a \in A$.

> [!check]- Proof
> That $G = \{ s_{a} \mathrm{e}^b : a \in A ; b \in B \}$ follows from the the fact cosets of $B$ partition $G$.
> Next we claim
> $$
> \begin{align*}
> \mathrm{e}^{\varepsilon_{0}(a,b)} = s_{ab}^{-1} s_{a} s_{b}
> \end{align*}
> $$
> defines a 2-cocycle.
> Note that $\pi(s_{ab}^{-1}s_{a} s_{b}) = 1$, hence the formula is well-defined.
> Letting $\ln$ denote the inverse of $\exp$, we have
> $$
> \begin{align*}
> &\mathrel{\phantom{=}} \varepsilon_{0}(a,b)- \varepsilon_{0}(a,bc)+\varepsilon_{0}(ab,c) -\varepsilon_{0}(b,c) \\
> &= \ln(s_{ab}^{-1}s_{a}s_{b}) - \ln(s_{abc}^{-1} s_{a}s_{bc}) + \ln(s_{abc}^{-1}s_{ab}s_{c}) - \ln(s_{bc}^{-1}s_{b}s_{c}) \\
> &= \ln(s_{ab}^{-1}s_{a}s_{b}) +\ln(s_{bc}^{-1}s_{a}^{-1} s_{ab}s_{c}) - \ln(s_{bc}^{-1} s_{b}s_{c}) \\ 
> &= \ln(s_{ab}^{-1}s_{a}s_{b} ) + \ln(s_{c}^{-1}s_{b}^{-1}s_{a}^{-1}s_{ab}s_{c}) \\
> &= \ln(s_{ab}^{-1}s_{a}s_{b} ) + \ln(s_{b}^{-1}s_{a}^{-1}s_{ab}) \\
> &= 0
> \end{align*}
> $$
> as required, where we have used centrality of $s_{b}^{-1}s_{a}^{-1}s_{ab}$.
> 
> Now given a 2-cocycle $\varepsilon_{0} \in Z^2(A,B)$ we define the following multiplication on the set $B \times A$
> $$
> \begin{align*}
> (p, a) \cdot (p,b) = (p+q+\varepsilon_{0}(a,b),ab)
> \end{align*}
> $$
> which clearly constitutes a monoid since
> $$
> \begin{align*}
> (p,a) \cdot (-\varepsilon_{0}(1,1),1) &= (p - \varepsilon_{0}(1,1) + \varepsilon_{0}(a,1), a) \\
> &= (p + \varepsilon_{0}(a, 1  \cdot 1) - \varepsilon_{0}(a \cdot 1, 1),a) \\
> &= (p , a)
> \end{align*}
> $$
> and likewise on the right.
> The inverse is easily seen to be given by
> $$
> \begin{align*}
> (p, a)^{-1} = (-p -\varepsilon_{0}(a,a^{-1}) -\varepsilon_{0}(1,1),a^{-1})
> \end{align*}
> $$
> Thus the given multiplication makes the set $B \times A$ a group which we denote $G$.
> Clearly we have the central extension
> $$
> \begin{align*}
> 1 \to B \stackrel{\exp}{\hookrightarrow} G \stackrel{\pi}{\twoheadrightarrow} A \to 1
> \end{align*}
> $$
> where $\exp$ and $\pi$ are given above.
> Letting $s_{a} = (0,a)$, we find
> Noting that
> $$
> \begin{align*}
> \varepsilon_{0}(a,1) = \varepsilon_{0}(1,1) + \varepsilon_{0}(a, 1 \cdot 1) - \varepsilon_{0}(a \cdot 1, 1) = \varepsilon_{0}(1,1)
> \end{align*}
> $$
> now
> $$
> \begin{align*}
> (0,ab) \mathrm{e}^{\varepsilon_{0}(a,b)} &= 
> (0,ab)(\varepsilon_{0}(a,b)-\varepsilon_{0}(1,1),1) \\
> &= (\varepsilon_{0}(a,b) - \varepsilon_{0}(1,1) + \varepsilon_{0}(ab,1)) \\
> &= (\varepsilon_{0}(a,b),1) = (0,a)(0,b)
> \end{align*}
> $$
> as claimed. <span class="QED"/>

This correspondence has the property

> Central extensions are equivalent iff their 2-cocycles for some sections are cohomologous.
> Thus there is a bijection between $H^2(A,B)$ and equivalence classes of extensions.

> [!check]- Proof
> Consider the central extension
> $$
> \begin{align*}
> 1 \to B \stackrel \exp \hookrightarrow G \stackrel \pi \twoheadrightarrow A \to 1
> \end{align*}
> $$
> and let $s_{(-)}, t_{(-)} : A \hookrightarrow G$ be $\Set$-sections of $\pi$,
> and consider the corresponding 2-cycles $\varepsilon_{0},\eta_{0} \in Z^2(A,B)$ defined by
> $$
> \begin{align*}
> s_{a}s_{b}&=s_{ab} \mathrm{e}^{\varepsilon_{0}(a,b)}
> &
> t_{a}t_{b} &= t_{ab} \mathrm{e}^{\eta_{0}(a,b)}
> \end{align*}
> $$
> Then, taking into account the fact $\pi(x)= 1$ implies $x \in Z(G)$,
> $$
> \begin{align*}
> \mathrm{e}^{\varepsilon_{0}(a,b)-\eta_{0}(a,b)} &= s_{a}s_{b}t_{b}^{-1}t_{a}^{-1} t_{ab}s_{ab}^{-1} \\
> &= s_{b}t_{b}^{-1}s_{a}t_{a}^{-1}t_{ab}s_{ab}^{-1}
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> \varepsilon_{0}(a,b)-\eta_{0}(a,b) = \ln(t_{ab}s_{ab}^{-1}) - \ln(t_{a}s_{a}^{-1}) - \ln(t_{b}s_{b}^{-1}) \in B^2(A,B)
> \end{align*}
> $$
> thus different sections of $\pi$ give cohomologous 2-cocycles.
> It immediately follows that equivalent central extensions will give cohomologous 2-cocycles.
> 
> For the converse, it is sufficient to show that given a central extension with a section $s_{(-)}$ such that $s_{1}= 1$ and a corresponding 2-cycle $\varepsilon_{0} : A \times A \to B$,
> the induced extension on $G' =_{\Set} B \times A$ is equivalent.
> We show that the following commutes
> 
> <p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMCwxLCIxIl0sWzIsMSwiQiJdLFs0LDAsIkciXSxbNCwyLCJHJyJdLFs2LDEsIkEiXSxbOCwxLCIxIl0sWzAsMV0sWzEsMiwiXFxleHAiXSxbMiw0LCJcXHBpIl0sWzQsNV0sWzEsMywiXFxleHAnIl0sWzMsNCwiXFxwaSciXSxbMiwzLCJcXHZhcnBoaSIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ%3D%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%26%26%26%26%20G%20%5C%5C%0A%091%20%26%26%20B%20%26%26%26%26%20A%20%26%26%201%20%5C%5C%0A%09%26%26%26%26%20%7BG'%7D%0A%09%5Carrow%5B%22%5Cpi%22%2C%20from%3D1-5%2C%20to%3D2-7%5D%0A%09%5Carrow%5B%22%5Cvarphi%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bfrom%3D2-1%2C%20to%3D2-3%5D%0A%09%5Carrow%5B%22%5Cexp%22%2C%20from%3D2-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22%7B%5Cexp'%7D%22%2C%20from%3D2-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5Bfrom%3D2-7%2C%20to%3D2-9%5D%0A%09%5Carrow%5B%22%7B%5Cpi'%7D%22%2C%20from%3D3-5%2C%20to%3D2-7%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNixbMCwxLCIxIl0sWzIsMSwiQiJdLFs0LDAsIkciXSxbNCwyLCJHJyJdLFs2LDEsIkEiXSxbOCwxLCIxIl0sWzAsMV0sWzEsMiwiXFxleHAiXSxbMiw0LCJcXHBpIl0sWzQsNV0sWzEsMywiXFxleHAnIl0sWzMsNCwiXFxwaSciXSxbMiwzLCJcXHZhcnBoaSIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==" /></p>
> 
> where
> $$
> \begin{align*}
> \pi': (p,a) &\mapsto a \\
> \exp ': p &\mapsto (p - \varepsilon_{0}(1,1),1) = (p,1) \\
> \varphi : s_{a} \mathrm{e}^p &\mapsto (p,a)
> \end{align*}
> $$
> and $\varphi : G \to G'$ is an isomorphism.
> Note that for every $g \in G$, $g = s_{a} \mathrm{e}^p$ for unique $a \in A$ and $p \in B$,
> so $\varphi$ is a well-defined bijection.
> Further, for any $a,b \in A$ and $p,q \in B$
> $$
> \begin{align*}
> \varphi(s_{a} \mathrm{e}^p s_{b} \mathrm{e}^q) &= \varphi(s_{a}s_{b} \mathrm{e}^{p+q}) 
> = \varphi(s_{ab} \mathrm{e}^{p+q+\varepsilon_{0}(a,b)}) \\
> &= (p+q+\varepsilon_{0}(a,b),ab) \\
> &= (p,a)(q,b) =\varphi(s_{a}\mathrm{e}^p) \varphi(s_{b}\mathrm{e}^q)
> \end{align*}
> $$
> so $\varphi$ is a group isomorphism, and
> $$
> \begin{align*}
> \varphi(\exp p) 
> &= \varphi(s_{1}\mathrm{e}^p) 
> = (p,1) = \exp' p \\
> \pi'\varphi(s_{a}\mathrm{e}^p) 
> &= \pi'(p,a) = a = \pi(s_{a} \mathrm{e}^p)
> \end{align*}
> $$
> so the diagram commutes,
> as required. <span class="QED"/>


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.1, p. 103

## Special cases

- [[Central extension of an abelian group]]
  - [[Cyclic central extension of a free abelian group]]
    - [[2 central extension of a free abelian group]]
  - [[2 central extension of an elementary abelian 2-group]] (includes extraspecial 2-groups)
#
---
#state/tidy | #lang/en | #SemBr

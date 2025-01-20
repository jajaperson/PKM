---
tags:
  - public
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
^2-cocyle

and the 2-coboundaries $B^2(G,B)$ are 2-cochains such that
$$
\begin{align*}
\varepsilon_{0}(ab) &= \eta(ab) - \eta(a) - \eta(b) & \forall a,b \in G
\end{align*}
$$
^2-boundary

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
(p, a) \cdot (p,b) = (p+q+\varepsilon_{0}(a,b),ab)
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
Note $s_{1} = 1$ iff $\varepsilon_{0}(a,1)=\varepsilon_{0}(1,a)=1$ for all $a \in A$.

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

> Central extensions with given sections are equivalent iff their 2-cocycles are cohomologous.
> Thus there is a bijection between $H^2(A,B)$ and equivalence classes of extensions.

> [!missing]- Proof
> #missing/proof

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.1, p. 103

## Special cases

- [[Central extension of an abelian group]]

#
---
#state/tidy | #lang/en | #SemBr

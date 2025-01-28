---
tags:
  - public
---
[[Lie algebras MOC]]
# Associated Lie algebra of a positive definite even lattice

Let $L$ be a [[Positive definite lattice|positive definite]] [[even lattice|even]] [[rational lattice]].
Let $\mathfrak{h} = L_{\mathbb{K}}$, and set
$$
\begin{align*}
c_{0} : L \times L &\to \mathbb{Z}_{2} \\
(\alpha,\beta) &\mapsto \langle \alpha ,\beta \rangle  + 2\mathbb{Z}
\end{align*}
$$
Then $c_{0}$ determines a unique [[Cyclic central extension of a free abelian group|cyclic central extension of the free abelian group]] $L$
$$
\begin{align*}
1 \to \mathbb{Z}_{2} \stackrel{\kappa}{\hookrightarrow} \hat{L} \stackrel{\pi}{\twoheadrightarrow} L \to 1
\end{align*}
$$
such that $[a,b] = \kappa^{c_{0}(\overline{a},\overline{b})}$[^not].
In what follows, let $s_{(-)}: L \hookrightarrow \hat{L}$ be a $\Set$-[[Split epimorphism|section]] of $\pi$ 
such that the [[Central group extension#Correspondence between 2-cocycles and central extensions|associated 2-cocycle]] $\varepsilon_{0} : L \times L \to \mathbb{Z}_{2}$ is $\mathbb{Z}$-[[Multilinear map|bilinear]].
Letting $\Delta = L_{2}$, we have $\hat{\Delta}= \{ s_{\alpha}, s_{\alpha }\kappa : \alpha \in \Delta \}$.
Defining
$$
\begin{align*}
\mathfrak{g} = \mathfrak{h} \oplus \frac{\mathbb{K} \langle x_{a} \rangle _{a \in \hat{\Delta}}}{\langle x_{a}+x_{a\kappa} \rangle }
\end{align*}
$$
where $\mathbb{K} \langle x_{a} \rangle _{a \in \hat{\Delta}}$ is a [[free module]],
whence follows $\dim \mathfrak{g} = \rank L + \abs\Delta$.
Then $\mathfrak{g}$ is a [[Quadratic Lie algebra]] under the [[Alternating multilinear map|alternarting]] [[Multilinear map|bilinear]] bracket defined by
$$
\begin{align*}
[\mathfrak{h},\mathfrak{h}] &= 0 \\
[h, x_{a}] &= \langle h, \overline{a} \rangle x_{a} \\
[x_{a}, x_{b}] &= \begin{cases}
\overline{a}  & ab = 1 \\
x_{ab} & ab \in \hat{\Delta}  \\
0  & ab \notin \hat{\Delta} \cup \{ 1,\kappa \}
\end{cases}
\end{align*}
$$
and the symmetric bilinear form extending that of $\mathfrak{h}$ by
$$
\begin{align*}
\langle \mathfrak{h}, x_{a} \rangle  &= 0 \\
\langle x_{a}, x_{b} \rangle &= \begin{cases}
1 & ab = 1 \\
0 & ab \notin \{ 1,\kappa \}
\end{cases} 
\end{align*}
$$
for $a,b \in \hat{\Delta}$ and $h \in \mathfrak{h}$.[^1988] #m/def/lie

> [!missing]- Proof
> #missing/proof


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §6.2, 126

  [^not]: where we denote $\pi x = \overline{x}$.

#
---
#state/develop | #lang/en | #SemBr

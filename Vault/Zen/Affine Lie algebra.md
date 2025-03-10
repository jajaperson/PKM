---
tags:
  - public
aliases:
  - extended Affine algebra
  - untwisted affine Lie algebra
---
[[Lie algebras MOC]]
# Affine Lie algebra

Let $\mathfrak{g}$ be a [[quadratic Lie algebra]] with a symmetric $\mathfrak{g}$-[[Invariant bilinear form on a Lie algebra|invariant bilinear form]] $\langle \cdot,\cdot \rangle$.
The corresponding **affine Lie algebra** $\hat{\mathfrak{g}}$ is a certain [[Graded Lie algebra|graded]] [[Lie algebra extension#^central]] of the [[Loop algebra]] $\mathfrak{g} [t,t^{-1}]$.[^FLM]
Thence one can construct the corresponding **extended affine Lie algebra** $\tilde{\mathfrak{g}}$ by [[adjoining the degree derivation]].
A generalization is the [[Twisted affine Lie algebra]].

  [^FLM]: This definition, following [[@frenkelVertexOperatorAlgebras1988|FLM]], is much more general than the traditional one, which restricts $\mathfrak{g}$ to be a [[semisimple Lie algebra]].

## Construction

Let $\mathfrak{g}$ be an [[Algebra over a field|algebra]] over $\mathbb{K}$ with some [[bilinear form]] $\langle \cdot,\cdot \rangle : \mathfrak{g} \times \mathfrak{g} \to \mathbb{K}$.[^1988]
Further let $d = t \frac{d}{dt}$ be the [[Algebra of Laurent polynomials#^degreeDerivation]] on $\mathbb{K}[t,t^{-1}]$, and construct the vector space
$$
\begin{align*}
\hat{\mathfrak{g}} = \mathfrak{g}[t,t^{-1}] \oplus \mathbb{K}c
\end{align*}
$$
with the bilinear product $[\cdot,\cdot] : \hat{\mathfrak{g}} \times  \hat{\mathfrak{g}} \to \hat{\mathfrak{g}}$ defined by the conditions
$$
\begin{align*}
&[c, \hat{\mathfrak{g}}] = [\hat{\mathfrak{g}}, c] = 0 \\
&[x \otimes f, y \otimes g] = [x,y] \otimes fg + \langle x,y \rangle (df \cdot g)_{0} c
\end{align*}
$$
the latter being equivalent to
$$
\begin{align*}
[x \otimes t^n, y \otimes t^m] = [x,y] \otimes t^{n+m} + \langle x,y \rangle n\delta_{n+m}c
\end{align*}
$$
Then $\hat{\mathfrak{g}}$ is a Lie algebra, called the **affine Lie algebra** associated with $\mathfrak{g}$ and $\langle \cdot,\cdot \rangle$, #m/def/lie 
iff $\mathfrak{g}$ is a Lie algebra and $\langle \cdot,\cdot \rangle$ is a symmetric $\mathfrak{g}$-invariant bilinear form,
and we have the [[Lie algebra extension#^central]]
$$
\begin{align*}
0 \to \mathbb{K}c \hookrightarrow \hat{\mathfrak{g}} \twoheadrightarrow \mathfrak{g} [t, t^{-1}] \to 0
\end{align*}
$$

> [!check]- Proof
> First note the bracket on $\hat{\mathfrak{g}}$ is [[Alternating multilinear map|alternating]] iff that on $\mathfrak{g}$ is.
> Let $N = n + m + k$.
> Then the [[Lie algebra#^Jacobi]] on $\hat{\mathfrak{g}}$ is equivalent to
> $$
> \begin{align*}
> 0 &= [x \otimes t^n, [y \otimes t^m, z \otimes t^k]] + [y \otimes t^m, [z \otimes t^k, x \otimes t^n]] + [z \otimes t^k , [x \otimes t^n, y \otimes t^m]] \\
> &= [x \otimes t^n, [y,z] \otimes t^{m+k} + \cancel{ C_{1}c }] + [y \otimes t^m, [z,x] \otimes t^{k+n} + \cancel{ C_{2}c }] + [z \otimes t^k, [x, y] \otimes t^{n+m} + \cancel{ C_{3}c }] \\
> &= \left( [x, [y,z]] + [y,[z,x]] + [z,[x,y]] \right) \otimes t^N + \left( \langle x, [y,z] \rangle n + \langle y,[z,x] \rangle m + \langle z,[x,y] \rangle k \right) \delta_{N,0}c
> \end{align*}
> $$
> which holds iff the Jacobi identity holds for $\mathfrak{g}$ along with the identity
> $$
> \begin{align*}
> \langle x,[y,z] \rangle n + \langle y,[z,x] \rangle m+ \langle z,[x,y] \rangle k = 0
> \end{align*}
> $$
> for all $n,m,k$ such that $n + m + k = 0$.
> The latter is equivalent to the bilinear map being symmetric and $\mathfrak{g}$-invariant,
> as can be shown by varying $n,m,k$. <span class="QED"/>


We extend $d$ to a degree derivation of $\hat{\mathfrak{g}}$ by
$$
\begin{align*}
d(c) &= 0 \\
d(x \otimes f) &= x \otimes df
\end{align*}
$$
so that homogenous subspaces are the eigenspaces of $d$.
One obtains the **extended affine Lie algebra** associated with $\mathfrak{g}$ and $\langle \cdot,\cdot \rangle$ by [[adjoining the degree derivation]] $d$ #m/def/lie
$$
\begin{align*}
\tilde{\mathfrak{g}} = \hat{\mathfrak{g}} \rtimes  \mathbb{K}d
\end{align*}
$$
giving the $\mathbb{Z}$-gradation[^not] 
$$
\begin{align*}
\tilde{\mathfrak{g}}_{n} = \begin{cases}
\mathfrak{g} \otimes t^n & n \neq 0 \\ 
\mathfrak{ g} \oplus \mathbb{K}c \oplus \mathbb{K}d & n=0
\end{cases}
\end{align*}
$$



  [^not]: We identify $\mathfrak{g}$ with $\mathfrak{g} \otimes t^0$.
  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.6, p. 17ff.



## Properties

- If $\mathfrak{g}$ is an [[Abelian Lie algebra]], the (extended) affine Lie algebra has a [[Triangular Lie algebra|triangular decomposition]]
  $$
  \begin{align*}
  \hat{\mathfrak{g}} &= \hat{\mathfrak{g}}_{-} \oplus \hat{\mathfrak{g}}_{0} \oplus \hat{\mathfrak{g}}_{+} \\
  \tilde{\mathfrak{g}} &= \tilde{\mathfrak{g}}_{-} \oplus \tilde{\mathfrak{g}}_{0} \oplus \tilde{\mathfrak{g}}_{+}
  \end{align*}
  $$
- See [[Formal series over an (un)twisted affine Lie algebra]]

## Functoriality

These constructions may be extended to functors from [[Category of quadratic Lie algebras]] to [[Category of graded Lie algebras|$\cat{Gr}_{\mathbb Z}\cat{Lie}_{\mathbb K}$]],
so that if $f \in \cat{QLie}_{\mathbb{K}}(\mathfrak{g},\mathfrak{h})$ is an isometric Lie algebra homomorphism,
one defines $\hat{f}, \tilde{f} \in \cat{Gr}_{\mathbb{Z}}\cat{Lie}_{\mathbb{K}}(\hat{\mathfrak{g}},\hat{\mathfrak{h}})$ by
$$
\begin{align*}
\hat{f}:
x \otimes t^n &\mapsto f(x) \otimes t^n \\
c &\mapsto c \\
\end{align*}
$$
and similarly
$$
\begin{align*}
\tilde{f} : x \otimes t^n &\mapsto f(x) \otimes t^n \\
c &\mapsto c \\
d &\mapsto d
\end{align*}
$$
We also have a natural inclusion $\iota: 1 \to \hat{\cdot} : \cat{Lie}_{\mathbb{K}} \to \cat{Lie}_{\mathbb{K}}$.

## Particular affine Lie algebras and related constructions

- [[Natural Heisenberg algebras]]
- [[Affine Lie algebras of sl_2]]

#
---
#state/tidy | #lang/en | #SemBr

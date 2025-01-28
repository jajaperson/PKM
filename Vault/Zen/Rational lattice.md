---
tags:
  - public
mathLink-blocks:
  nondegenerate: nondegenerate
  integral: integral
---
[[Geometry MOC]]
# Rational lattice

A **rational lattice** $L$ of rank $n$ is the $\mathbb{Z}$-span of a basis of an $n$-dimensional [[quadratic space]] $L_{\mathbb{Q}}$ over [[rational numbers]]. #m/def/geo 
Equivalently, a rational lattice $L$ is a $n$-dimensional $\mathbb{Z}$-[[module]] with a symmetric $\mathbb{Z}$-[[Multilinear map|bilinear map]]
$$
\begin{align*}
\langle \cdot,\cdot \rangle : L \times L \to \mathbb{Q}
\end{align*}
$$
where for any [[field]] $K$ with [[Characteristic|$\opn{char}K = 0$]] we identify $L_{K} = K \otimes_{\mathbb{Z}} L$,[^1988]
which is made a [[quadratic space]] under the extension of $\langle \cdot,\cdot \rangle$.
The following notation is also useful for subsets of a given quadrance
$$
\begin{align*}
L_{m} = \{ \alpha \in L : \langle \alpha,\alpha \rangle = m \}
\end{align*}
$$


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §6.1, pp. 122–123

## Further terminology

- Given a basis $\{ \alpha_{i} \}_{i=1}^n$ of $L$, the [[Gram matrix]] is given by $G_{ij}= \langle \alpha_{i},\alpha_{j} \rangle$.
- $L$ is **nondegenerate** iff $L_{\mathbb{Q}}$ is [[Quadratic space#^nondegenerate]] iff $\det G \neq 0$. ^nondegenerate
- $L$ is **integral** iff $\langle \alpha,\beta \rangle \in \mathbb{Z}$ for all $\alpha \in L$ iff $G$ is integral. ^integral
- $L$ is **[[Even lattice|even]]** iff $\langle \alpha,\alpha \rangle \in 2\mathbb{Z}$ for all $\alpha \in L$, which implies integral by polarization. ^even
- $L$ is **[[Positive definite lattice|positive definite]]** iff $\langle \alpha,\alpha \rangle > 0$ for all nonzero $\alpha \in L$.
- $L$ is **[[Unimodular lattice|unimodular]]** iff $\abs{\det G} = 1$.
- [[Dual of a rational lattice]]
- [[Self-dual rational lattice]]
- [[Theta function of a positive definite lattice]]

## See also

- [[Lattice from a binary linear code]]
- [[Lattice subgroup]]

#
---
#state/tidy | #lang/en | #SemBr

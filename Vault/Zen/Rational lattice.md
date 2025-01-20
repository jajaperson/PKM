---
tags:
  - public
mathLink-blocks:
  nondegenerate: nondegenerate
  integral: integral
  even: even
  positiveDefinite: positive definite
  unimodular: unimodular
---
[[Linear algebra MOC]]
# Rational lattice

A **rational lattice** $L$ of rank $n$ is the $\mathbb{Z}$-span of a basis of an $n$-dimensional [[quadratic space]] $L_{\mathbb{Q}}$ over [[rational numbers]]. #m/def/linalg 
Equivalently, a rational lattice $L$ is a $n$-dimensional $\mathbb{Z}$-[[module]] with a $\mathbb{Z}$-[[Multilinear map|bilinear map]]
$$
\begin{align*}
\langle \cdot,\cdot \rangle : L \times L \to \mathbb{Q}
\end{align*}
$$
where we identify $L_{\mathbb{Q}} = \mathbb{Q} \otimes_{\mathbb{Z}} L$.[^1988]
Given a basis $\{ \alpha_{i} \}_{i=1}^n$ of $L$, the **Gramm matrix** is given by $G_{ij}= \langle \alpha_{i},\alpha_{j} \rangle$.

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §6.1, pp. 122–123

## Further terminology

- $L$ is **nondegenerate** iff $L_{\mathbb{Q}}$ is [[Quadratic space#^nondegenerate]] iff $\det G \neq 0$. ^nondegenerate
- $L$ is **integral** iff $\langle \alpha,\beta \rangle \in \mathbb{Z}$ for all $\alpha \in L$ iff $G$ is integral. ^integral
- $L$ is **even** iff $\langle \alpha,\alpha \rangle \in 2\mathbb{Z}$ for all $\alpha \in L$, which implies integral by polarization. ^even
- $L$ is **positive definite** iff $\langle \alpha,\alpha \rangle > 0$ for all nonzero $\alpha \in L$. ^positiveDefinite
- $L$ is **unimodular** iff $\abs{\det G} = 1$. ^unimodular
- [[Dual of a rational lattice]]
- [[Self-dual rational lattice]]

#
---
#state/tidy | #lang/en | #SemBr

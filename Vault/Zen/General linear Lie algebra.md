---
mathLink: $\opn{\mathfrak{gl}}_{n}\mathbb K$
tags:
  - public
aliases:
  - $\opn{\mathfrak{gl}}V$
---
[[Lie algebras MOC]]
# General linear Lie algebra

Let $\mathbb{K}$ be a field and $n \in \mathbb{N}$.
The **general linear Lie algebra** $\opn{\mathfrak{gl}}_{n}\mathbb{K}$ is the [[Lie algebra]] realized by $n \times n$ matrices under their [[linear commutator]].[^1972] #m/def/lie 
More generally, if $V$ is a [[vector space]] over $\mathbb{K}$ then $\opn{\mathfrak{gl}}V = \End_{\mathbb{K}} V$ is the [[commutator]] of the [[endomorphism ring]] $\End_{\mathbb{K}} V$
$$
\begin{align*}
[e_{ij} , e_{k\ell}] =\delta_{jk}e_{i\ell} - \delta_{li}e_{kj}
\end{align*}
$$

  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §1.2, p. 2

## Triangular decomposition

$\opn{\mathfrak{gl}}_{n} \mathbb{K}$ has the archetypal [[Triangular Lie algebra|triangular decomposition]]
$$
\begin{align*}
\opn{\mathfrak{gl}}_{n}\mathbb{K} = \mathfrak{n}^{-} \oplus \mathfrak{h} \oplus \mathfrak{n}^+
\end{align*}
$$
where $\mathfrak{n}^{-}$ consists of [[Types of square matrix#^strictly-lower]] matrices, $\mathfrak{h}$ consists of [[Types of square matrix#^diagonal]] matrices, and $\mathfrak{n}^+$ consists of [[Types of square matrix#^strictly-upper]] matrices, i.e.
$$
\begin{align*}
[\mathfrak{h}, \mathfrak{h}] &= 0 & [\mathfrak{n}^\pm, \mathfrak{h}] \sube \mathfrak{n}^\pm
\end{align*}
$$

## Subalgebras

A [[Lie subalgebra|subalgebra]] of $\mathfrak{gl}_{n}\mathbb{K}$ is called a **linear Lie algebra**

- [[Special linear Lie algebra]]

#
---
#state/develop | #lang/en | #SemBr

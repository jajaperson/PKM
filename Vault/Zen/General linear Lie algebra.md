---
mathLink: $\opn{\mathfrak{gl}}_{n}\mathbb K$
tags:
  - public
aliases:
  - $\opn{\mathfrak{gl}}V$
mathLink-blocks:
  subalgebra: linear Lie algebra
  P1: Nilpotent transformations have nilpotent adjoint representations
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

## Properties

1. If $x \in \End V = \mathfrak{gl}(V)$ is nilpotent, then $\ad_{x} \in \mathcal{D}(\mathfrak{gl}(V))$ is nilpotent.^[1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §3.2, p. 12] ^P1

> [!check]- Proof
> Consider the left- and right-regular representations of the [[K-monoid]] $\End V$,
> which we label $\Lambda$ and $\Rho$ respectively.
> If $x \in \End V$ is nilpotent, so too are $\Lambda(x)$ and $\Rho(x)$,
> whence $\ad_{x} = \Lambda(x) - \Rho(x)$ is nilpotent. <span class="QED"/>



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

A [[Lie subalgebra|subalgebra]] of $\mathfrak{gl}_{n}\mathbb{K}$ is called a **linear Lie algebra** ^subalgebra

- [[Special linear Lie algebra]]
- [[Lie algebra of nilpotent endomorphisms]]

#
---
#state/develop | #lang/en | #SemBr

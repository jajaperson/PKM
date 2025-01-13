---
tags:
  - public
---
[[Coding theory MOC]]
# Hamming code

The $q$-ary $[n, n-k]$ **Hamming code** $\mathcal{C} \leq \mathbb{K}_{q}^n$ is the (unique up to [[Linear equivalence of codes|linear equivalence]]) whose $[n,k]$ [[dual code]] has a maximal [[Projective system of a linear code|projective system]].[^1999] #m/def/code
It follows that
$$
\begin{align*}
n = {k \choose 1}_{q} = \frac{q^k - 1}{q-1}
\end{align*}
$$
the [[Number of subspaces of a Galois geometry|number of points in $\opn{PG}(k-1,q)$]]. 
Hamming codes are [[Perfect code|perfect 3-error correcting codes]].

  [^1999]: 1999\. [[Sources/@vanlintIntroductionCodingTheory1999|Introduction to coding theory]], §3.3, p. 38

> [!check]- Proof of uniqueness and perfection
> Uniqueness follows from uniquenes of the dual code $\mathcal{C}^\perp$:
> Since this is a maximal [[projective code]], any column of the same size will be linearly dependent with one of the columns of its [[linear code#^generator]],
> and therefore there exists a [[monomial transformation]] relating any two such matrices.
> 
> Clearly the minimum distance is three.
> Now let $\vab x \in \mathcal{C}$ be a codeword.
> Then
> $$
> \begin{align*}
> \abs{\mathcal{C}} \abs{\opn{\overline{B}}_{1}(\vab x)} = q^{n-k}(1 + n(q-1)) = q^n = \abs{\mathbb{K}_{q}^n}
> \end{align*}
> $$
> hence these spheres partition $\mathbb{K}_{q}^n$. <span class="QED"/>

Sometimes, the [[extended code]] of a Hamming code is also referred to as a Hamming code.

## Construction

From the characterization above, it follows that a [[Linear code#^check]] of the $q$-ary $[n,n-k]$ Hamming code may be constructed by enumerating [[homogenous coördinates]] for all $n$ points in $\opn{PG}(k-1,q)$ 
and collecting these as columns for the check matrix.

## Special cases

- [[Binary 8,4,4 extended Hamming code]]

#
---
#state/tidy | #lang/en | #SemBr

---
aliases:
  - polynomial
mathLink-blocks:
  monic: monic polynomial
  irreducible: irreducible polynomial
tags:
  - public
---
[[Abstract algebra MOC]]
# Polynomial ring

Let $R$ be a [[ring]].
A **polynomial** $f(x)$ in the **indeterminate** $x$ and with **coëfficients** in $R$ is a _finite_ linear combination of nonnegative powers of $x$ with coëfficients in $R$:[^2009][^2017] #m/def/ring
$$
\begin{align*}
f(x) = \sum_{i=0}^\infty f_{i} x^i
\end{align*}
$$
where $f_{(-)}$ has [[Support of a map|finite support]][^cf],
hence it may be viewed as an element of the [[free module]] $R[\mathbb{N}_{0}]$.
This free module forms the **polynomial ring** $R[x]$ with the structure of a [[ring]] (and [[unital associative algebra]]) given by the [[Group ring|monoid ring]] construction, thus
$$
\begin{align*}
x^n \cdot x^m = x^{n+m}
\end{align*}
$$
The **leading term** of a polynomial is the term $f_{n}x^n$ with the largest exponent $n$,
and the coëfficient $f_{n}$ is called the **degree** $\deg f$.
We write $\deg 0 = -\infty$.

- A polynomial with leading coëfficient one is called a **monic polynomial** (not to be confused with [[Monomorphism|monic]]). ^monic
 - A polynomial is **irreducible** if has no divisors other than itself and $1$ (similar to prime numbers),
   however a polynomial can often be reduced by looking at a bigger underlying ring,
   for examples $x^2 + 1$ can only be factorised using the complex numbers. ^irreducible

A polynomial in multiple indeterminates may be formed by iterating the above process, so $R[x,y,z]=R[x][y][z]$.

  [^cf]: cf. [[Series ring]]
  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter2009|Algebra: Chapter 0]], §III.1.3, pp. 124ff.
  [^2017]: 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], §16, pp. 276ff.

## Universal property

An fundamental property of a polynomial ring is that the elements $\{ x^n \}_{n=1}^\infty$ are in the [[Centre of a rng|centre]].
The polynomial ring $R[x]$ is characterized up to unique isomorphism by the following universal property:

Let $R$ be a [[ring]]. The **polynomial ring** is a pair consisting of a ring $R[x]$ and a [[ring homomorphism]] $\iota_{R} : R \to R[x]$ such that $x$ is an element of the [[Centre of a rng|centre]] $Z(R[x])$ and given any ring homomorphism $f : R \to Q$ and element $q$ of the [[Centralizer of a subrng|centralizer]] $C(f(R))$, then there exists a unique ring homomorphism $\bar{f} : R[x] \to Q$ such that the following diagram commutes

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMCwwLCJSIl0sWzIsMCwiUlt4XSJdLFsyLDIsIlEiXSxbMywwLCJ4Il0sWzMsMiwicSJdLFswLDIsImYiLDJdLFswLDEsIlxcaW90YV9SIl0sWzEsMiwiXFxiYXIgZiIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFszLDQsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09R%20%5C%26%5C%26%20%7BR%5Bx%5D%7D%20%5C%26%20x%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20Q%20%5C%26%20q%0A%09%5Carrow%5B%22%7B%5Ciota_R%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5Bmaps%20to%2C%20from%3D1-4%2C%20to%3D3-4%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMCwwLCJSIl0sWzIsMCwiUlt4XSJdLFsyLDIsIlEiXSxbMywwLCJ4Il0sWzMsMiwicSJdLFswLDIsImYiLDJdLFswLDEsIlxcaW90YV9SIl0sWzEsMiwiXFxiYXIgZiIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFszLDQsIiIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XV0=" /></p>

and $\bar{f}(x) = q$.

### Evaluation map

Let $f(x) \in R[x]$ and $r \in R$.
By the above construction,
there exists a unique ring homomorphism $\eta(r) : R[x] \to R$ such that $\eta(r)\, \iota_{R} = \id_{R}$ and $\eta(r)(x) = r$,
which is called the **evaluation map** at $r$.


## Properties

- [[The polynomial ring over an integral domain is an integral domain]]
- [[The polynomial ring over a field is a Euclidean domain]]




#
---
#state/tidy | #lang/en | #SemBr

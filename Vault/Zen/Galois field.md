---
tags:
  - public
alias: finite field
---
[[Field]]
# Galois field
A **Galois field** is a field containing a finite number of elements. #m/def/ring
The [[cardinality]] of a field is called its **order**,
and finite fields **only exist** for orders of the form $p^h$ where $p$ is prime.
The Galois field of order $p^h$, **unique** up to isomorphism, is denoted $\mathbb{F}_{p^h}$ or $\mathrm{GF}(p^h)$. #m/thm/ring
Clearly every Galois field is in particular a [[Field of prime characteristic]].

## Construction and uniqueness

Let $q = p^h$ be a where $h,p \in \mathbb{N}$ and $h$ is prime.
Then $x^q - x \in \mathbb{F}_{p}[x]$ is a [[separable polynomial]].
Moreover, a field $F$ has precisely $q$ elements iff it is the [[splitting field]] of $x^q-x$ over $\mathbb{F}_{p}$, #m/thm/field 
whence follows uniqueness.[^2009]

> [!check]- Proof
> Let $F$ be the splitting field of $x^q - x$ over $\mathbb{K}_{p}$,
> and $E \sube F$ be the set of roots of $x^q - x$.
> Since the [[formal derivative]] $f'(x) = qx^{q-1} -1 = -1$,
> we have $\gcd \{ f(x),f'(x) \} = 1$,
> and thus $f(x)$ is a [[separable polynomial]] of order $q$, so $\abs E = q$.
> We show $E$ is a field, whence $E = F$, since by definition $F$ is generated by $E$ over $K$.
> 
> To this end, let $a,b \in E$, whence $a^q = a$ and $b^q = b$, so using the [[Freshman's dream]]
> $$
> \begin{align*}
> (a-b)^{p^h} = a^q + (-1)^q b^q = a^q - b^q = a - b.
> \end{align*}
> $$
> If $b \neq 0$, 
> $$
> \begin{align*}
> (ab^{-1})^q = a^q(b^q)^{-1} = ab^{-1}
> \end{align*}
> $$
> proving $E$ is closed under subtraction and division, thus it indeed a subfield by the [[Subfield#Tests for subfields]].
> 
> For the converse, let $F$ be a field such that $\abs F = q$.
> Then $\abs{F^\times} = q-1$, so the multiplicative order of every element is a divisor of $q-1$.
> Therefore
> $$
> \begin{align*}
> a \neq 0 \implies a^{q-1} = 1 \implies a^q - a = 0;
> \end{align*}
> $$
> and we already have $0^q - 0 = 0$.
> Thus, $x^q - x$ has $q$ roots in $F$, whence it is the splitting field, as stated. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.5.1, p. 441.

> [!tip]- Direct construction as quotient by a polynomial
> A finite field of a given order can be constructed as a quotient of a [[polynomial ring]].
> Given a polynomial ring $\mathbb{Z}_{p}[x]$
> and an irreducible polynomial $f$ of degree $h$,
> then $\mathbb{Z}_{p}[x] / \langle f \rangle$ is a field of order $p^h$. #m/thm/ring 
## Properties

Let $K = \GF(p^h)$. Then

1. $K$ is a [[perfect field]], and consequently, irreducible polynomials in $K[x]$ are separable. ^P1

> [!check]- Proof of 1
> Since the [[Frobenius endomorphism]] is injective ([[Field homomorphisms are injective]]), by the [[Pigeonhole principle]] it must also be surjective, proving [[#^P1]]. <span class="QED"/>

### Other results

- [[Finite extension of a Galois field]]
- By [[Wedderburn's little theorem]] these are the only finite division rings.

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Ring]]
# Integral domain

An **integral domain** is a [[commutative ring]] with no nonzero [[Zero-divisor|zero-divisors]], #m/def/ring i.e. $ab=0$ iff $a = 0$ or $b = 0$.
This gives rise the the cancellation property,
since all nonzero elements are [[Epimorphism|epic]] and [[Monomorphism|monic]]:
$ab = ac$ and $a \neq 0$ implies $b = c$.

> [!check]- Proof
> Since $0 = ab - ac = a(b-c)$ and $a \neq 0$, it follows $b - c =0$ and hence $b = c$. 
> <span class="QED"/>

## Properties

1. [[A finite integral domain is a field]]
2. [[The characteristic of an integral domain is 0 or prime]]
3. [[Condition for a quotient commutative ring to be an integral domain]]
4. [[The polynomial ring over an integral domain is an integral domain]]
5. [[All primes are irreducible in an integral domain]]

## See also

- [[Field of fractions]]
- [[Euclidean domain]]

#
---
#state/tidy | #lang/en | #SemBr

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
The Galois field of order $p^h$, **unique** up to isomorphism, is denoted $\mathrm{GF}(p^h)$. #m/thm/ring

> [!missing]- Proof
> #missing/proof

## Constructing a field
A finite field of a given order can be constructed as a [[Polynomial ring#Congruences and quotients|quotient of a polynomial ring]].
Given a polynomial ring $\mathbb{Z}_{p}[x]$
and an irreducible polynomial $f$ of degree $h$,
then $\mathbb{Z}_{p}[x] / {\equiv}_{f}$ uniquely defines the field of degree $p^h$ up to isomorphism. #m/thm/ring 

> [!missing]- Proof
> #missing/proof


#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Algebraic number theory MOC]]
# Eisenstein's criterion

Let $R$ be an [[integral domain]] and $f(x) = \sum_{i=1}^n a_{i}x^i \in R[x]$ be a [[Polynomial ring|polynomial]].
For a [[prime ideal]] $\mathfrak{p} \trianglelefteq R$, we say $f(x)$ is **Eisenstein** at $\mathfrak{p}$ iff

1. $a_{i} \in \mathfrak{p}$ for $1\leq i < n$;
2. $a_{n} \notin \mathfrak{p}$;
3. $a_{0} \notin \mathfrak{p}^2$.

If $f(x)$ is Eisenstein at some prime ideal $\mathfrak{p}$, then $f(x)$ cannot be written as the product of two non-constant polynomials in $R[x]$. #m/thm/num/alg 

> [!missing]- Proof
> #missing/proof

In particular, if $R$ is a [[Unique factorization domain]] then $f(x)$ is also irreducible in $(\Frac R)[x]$, by [[Gauß's lemma]].

#
---
#state/develop | #lang/en | #SemBr

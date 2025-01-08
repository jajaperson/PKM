---
tags:
  - public
mathLink: $R/I$ for commutative $R$ is an integral domain iff $I$ is prime
---
[[Integral domain]]
# Condition for a quotient commutative ring to be an integral domain

Let $R$ be a [[commutative ring]] and $I \triangleleft R$ be a proper, nontrivial (two-sided) [[ideal]].
Then the [[quotient ring]] $R / I$ is an [[integral domain]] iff $I$ is a [[prime ideal]]. #m/thm/ring 

> [!check]- Proof
> Assume $R / I$ is an integral domain and let $ab \in I$.
> Then $(a + I)(b+I) = ab+I = I \equiv 0$,
> so either $a + I = I \equiv 0$ or $b + I = I \equiv 0$.
> 
> For the converse, assume $I \trianglelefteq R$ is prime.
> Since $R / I$ is automatically a commutative ring,
> it only remains to show that $R / I$ has no [[Units and zero-divisors|zero-divisors]].
> To this end, assume $(a + I)(b + I) = I \equiv 0$.
> Then $ab \in I$ and hence $a \in I$ or $b \in I$,
> whence $a + I = I \equiv 0$ or $b+I = I \equiv 0$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

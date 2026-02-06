---
tags:
  - public
---
[[Krull dimension]]
# Krull dimension of an integral domain

Let $R$ be an [[integral domain]].
Then  the [[Krull dimension]] $\dim R = 0$ iff $R$ is a [[field]],
and $\dim R \leq 1$ iff every nonzero [[prime ideal]] is [[Maximal ideal|maximal]].[^2022] #m/thm/ring 

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶1.23, p. 15

> [!check]- Proof
> [[Condition for a quotient commutative ring to be a field#^C1]].
> So if $R$ is a field, $\dim R = 0$.
> Conversely, if $\dim R = 0$ then $0$ is a maximal ideal (as [[Every commutative ring has a maximal ideal]] and [[A maximal ideal in a commutative ring is prime]]),
> and thus $R$ has no nonzero proper ideals: $R$ is a field. 
> 
> Note for $\dim R = 0$ every nonzero [[prime ideal]] is [[Maximal ideal|maximal]] by vacuity.
> Given $\dim R = 1$,
> then any nonzero prime ideal $\mathfrak{p}$ is contained within a maximal ideal $\mathfrak{m}$ which is also prime (since [[Every commutative ring has a maximal ideal|Every ideal in a commutative ring is contained in a maximal ideal]]),
> but this must be equal to $\mathfrak{p}$ or else $0 \subne \mathfrak{p} \subne \mathfrak{m}$ implies $\dim R > 1$. <span class="QED"/>




#
---
#state/tidy | #lang/en | #SemBr

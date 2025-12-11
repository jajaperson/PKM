---
tags:
  - public
---
[[Algebraic integer|Ring of integers]]
# Ring of integers of a number field

Let $K$ be a [[number field]]. 
Then the [[Algebraic integer|ring of integers]] $\mathcal{O}_{K}$ is a [[Dedekind domain]]. #m/thm/ring

> [!check]- Proof
> First we show $\mathcal{O}_{K}$ to be a [[Noetherian ring]].
> Let $I_{1} \trianglelefteq I_{2} \trianglelefteq \cdots$ be an increasing sequence of ideals, and without loss of generality take $I_{1} \neq 0$.
> By [[The ring of integers of a number field forms a lattice]], it follows $\mathcal{O}_{K} / I_{1}$ is finite, implying there are only finitely many subrings of $\mathcal{O}_{K}$ containing $I_{1}$ and thus the sequence must stabilize.
> Therefore $\mathcal{O}_{K}$ is Noetherian.
> 
> Now let $\mathfrak{p} \triangleleft \mathcal{O}_{K}$ be a nonzero prime ideal.
> It follows from [[The ring of integers of a number field forms a lattice#^C1]] that $\mathcal{O}/\mathfrak{p}$ is finite,
> and [[A finite integral domain is a field]], thus $\mathfrak{p}$ is maximal since [[Condition for a quotient commutative ring to be a field]].
> Therefore, $\mathcal{O}_{K}$ has [[Krull dimension of an integral domain|Krull dimension]] $\dim \mathcal{O}_{K} = 1$.
> 
> Since the ring of integers is automatically integrally closed, it follows $\mathcal{O}_{K}$ is Dedekind. <span class="QED"/>

## Further terminology

- [[Absolute norm of an ideal of the ring of integers of a number field]]
- [[Splitting of prime ideals in a number field]]

## Properties

- [[Ideal class group of a number field]]
- [[The ring of integers of a number field forms a lattice]]
 

#
---
#state/tidy | #lang/en | #SemBr

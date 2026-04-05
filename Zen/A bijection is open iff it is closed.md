---
tags:
  - public
---
[[Open and closed maps]]
# A bijections is open iff it is closed

Let $f : X \twoheadrightarrowtail Y$ be a bijection between topological spaces.
Then $f$ is [[Topological space|open]] iff it is [[Topological space|closed]]. #m/thm/topology 

> [!check]- Proof
> Let $f$ is closed iff for every open $U \sube X$,
> $f(X \setminus U) = Y \setminus V$ for some open $V \sube Y$,
> which by bijectivity is true iff $f(U) = V$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

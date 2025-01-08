---
tags:
  - public
---
[[Group action]]
# Free group action

A [[group action]] of $G$ on $X$ is called **free** iff the [[Stabilizer group]] $G_{x}$ of every $x \in X$ is $\{ e \}$, #m/def/group i.e. $gx \neq x$ for all $g \neq e$.

## Properties

1. A free group action is necessarily [[Effective group action|effective]]. ^P1

> [!check]- Proof of 1
> Since $gx \neq x$ for all $g \neq e$ and $x \in X$,
> the induced automorphism $\alpha_{x} \in \Aut(X)$ cannot be identity for such a $g$,
> hence $\ker \alpha_{-}$ is a [[group monomorphism]]
> proving [[#^P1]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

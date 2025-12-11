---
tags:
  - public
aliases:
  - connected covering
  - path-connected covering
---
[[Homotopy theory MOC]]
# Covering

Let $X$ and $\tilde{X}$ be topological spaces.
A **covering**[^Überlagerung] of $X$ with $\tilde{X}$ is a surjective map $p : \tilde{X}\twoheadrightarrow X$ such that every $x \in X$ has a a neighbourhood $U$ such that $p^{-1}U = \coprod_{i \in I}V_{i}$ and $p \restriction V_{i} : V_{i} \to U$ is a homeomorphism for each $i \in I$. #m/def/topology 
A neighbourhood with these properties is called an **evenly covered neighbourhood**, each $V_{i}$ is called a **sheet**, and the discrete set $p^{-1}(x)$ is called the **fibre** of $x$.[^det]

[^Überlagerung]: German _Überlagerung_
[^det]: Eine Umgebung mit diesen Eigenschaften heißt eine _gleichmäßig überlagerte Umgebung_, jedes $V_i$ heißt ein _Blatt_, und die diskrete Menge $\pi^{-1}(x)$ heißt die _Faser_ von $x$.

## Further terminology

- A covering $(\tilde{X}, p)$ is called a **(path-)connected covering** iff $\tilde{X}$ (and therefore $X$) is (path-)connected.
- For a connected covering, the **sheet number** $|I|$ is the same everywhere.
  See [[Sheet number of a connected covering]]
- The coverings of a space $X$ form a [[Category of coverings]] $\Cov_{X}$
- The [[Characteristic subgroup of a covering]] is its image on the fundamental group
- A [[Regular covering]] has a basepoint-invariant characteristic subgroup
- A [[Deck transformation]] $\gamma$ is an automorphism of the covering space such that $p\gamma = p$.

## Properties

- The identity map is a trivial covering
- A covering is a [[Local homeomorphism]]
- The [[Orbit space of a properly discontinuous group action]] comes with a covering
- [[Lift of a map to a covering space]]
- [[A covering is injective on the fundamental group]]
- [[Main theorem of coverings]]

#
---
#state/tidy | #lang/en | #SemBr

---
categoryName: category of paths in $X$
symbol: $P X$
object: point in $X$
morphism: "[[continuous path]] in $X$ up to change of velocity"
arguments:
  - "$X$ [[topological space]]"
tags:
  - public
  - category
---
[[Continuous path]]
# Category of paths

Let $X$ be a topological space, and $\mathscr P X$ be its [[Continuous path#Algebra|path algebra]].
The following congruence relation on paths makes $\mathscr PX$ into a [[Small category]] $PX$.
Let $\alpha, \beta \in \mathscr PX(x,y)$.
Then $\alpha \sim \beta$ iff $\alpha = \beta \circ \phi$ for some $\phi \in \Top(\mathbb{I}, \mathbb{I})$.
The category $PX = \mathscr P X / {\sim}$ is called the category of paths on $X$.

## Properties

- By the [[Path traversal lemma]] we can factorise $\pi_{1}$ through $P$ to get the [[Fundamental groupoid]].

#
---
#state/tidy | #lang/en | #SemBr

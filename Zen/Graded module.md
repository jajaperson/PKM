---
tags:
  - public
aliases:
  - graded representation
---
[[Module theory MOC]]
# Graded module

Let $R$ be a $\mathfrak{A}$-[[graded ring]]. A **graded module** $M$ over $R$ is a [[module]] over $R$ with [[Submodule|submodules]] $(M_{\alpha})_{\alpha \in \mathfrak{A}}$ such that $M$ is the [[Direct sum of modules|direct sum]] $\coprod_{\alpha \in \mathfrak{A}} M_{\alpha}$ and #m/def/module 
$$
\begin{align*}
R_{\alpha} \cdot M_{\beta} \sube V_{\alpha+\beta}
\end{align*}
$$
for $\alpha,\beta \in \mathfrak{A}$.

## Category of graded modules

Many of our typical module constructions carry over.
See [[Category of graded modules]].

- [[Graded module homomorphism]]
- [[Graded submodule]], [[Quotient graded module]]
- [[Direct sum of graded modules]]

## Properties

- If $M$ is a graded [[Module over a unital associative algebra|module over a]] [[Graded algebra|graded]] associative or Lie algebra $A$, then $a \in A_{\alpha}$ acts as a [[Homomorphism of graded vector spaces#^homogenous]] operator of degree $\alpha$.[^Lie]
- The grades of a graded module may be shifted arbitrarily, see [[Shifted graded module]].

  [^Lie]: For the Lie case, [[Module over a Lie algebra|this abuse of terminology]] works since [[The universal enveloping algebra of a Lie algebra inherits its graded structure]].

## Further remarks

- For $\mathbb{Z}$-gradings we adopt the physical terminology of [[Vacuum space]] for the subspace annihilated by positive grades.

## See also

- [[Graded structure]]

#
---
#state/tidy | #lang/en | #SemBr

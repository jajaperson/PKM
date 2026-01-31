---
tags:
  - public
---
[[Linear algebra MOC]]
# Graded vector space

Given a set $S$, a [[vector space]] $V$ over $\mathbb{K}$ is said to be **$S$-graded** iff it is (canonically) the [[Direct sum of vector spaces#Internal direct sum|internal direct sum]] #m/def/linalg 
$$
\begin{align*}
V = \coprod _{\alpha \in S} V_{\alpha}
\end{align*}
$$
for so-called **homogenous subspaces** $V_{\alpha}$ of degrees $\alpha \in S$,
the elements whereof are called **homogenous elements** of degree $\alpha \in S$.[^1988]
For $v \in V_{\alpha}$, we write
$$
\begin{align*}
\deg v = \alpha
\end{align*}
$$
A graded vector space is thus a [[Graded module]] over a field (with the trivial gradation),
where $S$ may take arbitrary monoidal structure.

One often expresses the dimensions of homogenous subspaces as a formal power series, called the [[Graded dimension]].

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], p. 8

## Category of graded vector spaces

Many of our typical vector space constructions carry over nicely, although some require [[monoid]] structure on $S$.
These motivate the categories [[Strict category of graded vector spaces]] and [[Closed category of graded vector spaces]].

- [[Homomorphism of graded vector spaces]]
- [[Graded vector subspace]], [[Quotient graded vector space]]
- [[Direct sum of graded vector spaces]]
- [[Tensor product of graded vector spaces]]

## See also

- [[Degree operator]]
- [[Graded structure]]

#
---
#state/tidy | #lang/en | #SemBr

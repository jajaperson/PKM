---
aliases:
  - general graph
  - digraph
  - multigraph
  - pseudograph
  - multidigraph
  - pseudomultidigraph
tags:
  - public
---
[[Graph theory MOC]]
# Graph

A **general graph** $\Gamma$ is a pair consisting of a [[set]] $\Gamma_{0}$ of **vertices** and a [[Multiset|(multi)set]] $\opn A(\Gamma) \sube \opn V(\Gamma) \times \opn V(\Gamma)$ of **arcs**. #m/def/graph 
For vertices $v,w \in \opn V(\Gamma)$,
we write $v \to w$ iff $(v,w) \in \opn A(\Gamma)$,
and $v \sim w$ iff both $v \to w$ and $w \to v$.

A (simple) **graph** is a general graph for which $\opn A(\Gamma)$ is a proper set and is symmetric, and does not contain the diagonal (i.e. $v \not\sim v$ for all $v \in \opn V(\Gamma)$).
In this case, we refer to **edges**, defined by
$$
\begin{align*}
\opn E(\Gamma) = \{ \{ v,w \} : (v,w) \in \opn A(\Gamma) \land (w,v) \in \opn A(\Gamma) \}
\end{align*}
$$
Then

- the prefix **di-** indicates that the graph may not be symmetric;
- the prefix **multi-** indicates that $\opn A(\Gamma)$ is a [[multiset]];
- the prefix **pseudo-** indicates that $\opn A(\Gamma)$ may include the diagonal (**loops**).[^term]

Thus the general case is also referred to as a **pseudomultidigraph**,
which are in many ways equivalent to [[quiver|quivers]] — see [[Equivalence of quivers and general graphs]],

A structure-preserving map between graphs is a [[graph homomorphism]],
and a symmetry of a graph is a [[graph automorphism]].

#
---
#state/tidy | #lang/en | #SemBr

  [^term]: Unfortunately this terminology is nonstandard: Normally pseudgraphs are assumed to be multiple as well.
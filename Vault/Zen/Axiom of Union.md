---
tags:
  - public
---
[[Material set theory]]
# Axiom of Union
The **Axiom of Union** is a possible axiom of [[Material set theory]]: #m/def/set/zf
$$
\begin{align*}
(\forall \shood \mathcal{E})(\exists \shood B)[x \in B \iff (\exists X \in \mathcal{E})[x \in X]]
\end{align*}
$$
which is to say, for any set $\mathcal{E}$ there exists a **union** $B$ consisting of the elements of the elements of $\mathcal{E}$.
It follows from the [[Axiom of Extensionality]] that such a $B$ is unique, and we denote it by $\bigcup \mathcal{E}$.

In a [[material set theory]] with [[Class|classes]] like [[NBG]], the existence of a union _class_ is already guaranteed by other axioms,
but one requires the above axiom to guarantee that the union of sets is itself a set.

#
---
#state/tidy | #lang/en | #SemBr 
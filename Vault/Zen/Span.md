---
aliases:
  - spanning set
tags:
  - public
---
[[Linear algebra MOC]]
# Span and spanning sets
The $\span (A) \leq V$ given a set of vectors $A \sube V$
is the smallest possible [[vector subspace]] 
containing the vectors of $A$. #m/def/linalg 
In this way, $\span(A)$ may be thought of as a _completion_ of $A$
so that it fulfils the requirements of a subspace,
by including all (_finite_) linear combinations of the vectors in $A$.
$$
\begin{align*}
\span S = \{ \lambda_{1}\vab v_{1}+ \dots +\lambda_{n}\vab v_{n} : \lambda_{i}\in \mathbb{K}, \vab v_{i} \in S \}
\end{align*}
$$
Note the special case
$$
\begin{align*}
\span(\emptyset) = \{\vab 0\}
\end{align*}
$$
The conceptual right-inverse of span is that of the spanning set:
given a subspace $S$ a spanning set is any set of vectors $A$ which _span_ the subspace,
i.e. cover the entire subspace with their linear combinations.
Note every vector space has a spanning subset — itself.
The smallest possible spanning set of a space[^sub] (called the most _efficient_),
unique up to [[Linear map]],
is called the [[Vector basis]].

[^sub]: which may or may not be a subspace of a larger underlying space.


#
---
#state/tidy | #SemBr | #lang/en
---
alias: Axiom of Regularity
tags:
  - public
---
[[Material set theory]]
# Axiom of Foundation

The **Axiom of Foundation** or **Axiom of Regularity** is a possible axiom of [[Material set theory]] first proposed by [[John von Neumann]]: #m/def/set/zf 
$$
\begin{align*}
(\forall \shood x)[ (\exists \shood y)[y \in x] \implies (\exists y \in x)[y \cap x = \0] ]
\end{align*}
$$
which is to say, every set containing at least one set has an element disjoint to itself.
The Axiom of Foundation thus precludes[^w] infinite chains of elementhood and therefore demands that all sets be [[Well-founded set|well-founded]] —
in fact, this demand turns out to be equivalent to the Axiom of Foundation over the [[Axiom of Dependent Choice]].

> [!missing]- Proof
> #missing/proof

[^w]: Possibly only with the [[Axiom of Dependent Choice]]

## Relation to other axioms

- A strong negation is [[Aczel's Antifoundation Axiom]]

#
---
#state/tidy | #lang/en | #SemBr
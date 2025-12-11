---
aliases:
  - $\mathrm{AC}_\mathbb{N}$
tags:
  - public
---
[[Material set theory]]
# Countable Principle of Choice

The **Countable Axiom of Choice** $\mathrm{AC}_{\mathbb{N}}$ is a possible axiom of [[material set theory]] and rather weak choice principle:[^2006] #m/def/set
$$
\begin{align*}
&(\forall \shood B)(\forall P \sube \mathbb{N} \times B)
[\\
&\qquad(\forall n \in \mathbb{N})(\exists y \in B) P(n,y) \implies (\exists f : \mathbb{N} \to B)(\forall n \in \mathbb{N})P(n, f(n))
\\&]
\end{align*}
$$
which is to say, if $B$ is a set and $P \sube \mathbb{N} \times B$ is a [[Total relation|left-total]] [[Relation set]],
i.e. relates every $n \in \mathbb{N}$ with at least one $b \in B$,
then there exists a [[choice function]] that selects such a $b$ for each $n$.
Thus countable sequences of independent choices are always possible.

## Relationship to other axioms

### Strengthenings

Over [[ZF]], $\mathrm{AC}_{\mathbb{N}}$ is a strict weakening of the [[Axiom of Dependent Choice]] and thus the [[Axiom of Choice]].

  [^2006]: 2006\. [[Sources/@moschovakisNotesSetTheory2006|Notes on set theory]], ¶8.12, p. 114

#
---
#state/tidy | #lang/en | #SemBr

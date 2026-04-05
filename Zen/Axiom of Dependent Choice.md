---
alias: $\mathrm{DC}$
tags:
  - public
---
[[Material set theory]]
# Axiom of Dependent Choice

The **Axiom of Dependent Choice** $\mathrm{DC}$ is a possible axiom of [[material set theory]] providing a sufficiently strong choice principle for most mathematics:[^2006] #m/def/set
$$
\begin{align*}
&(\forall \shood A)(\forall P \sube A \times A)[\\
&\qquad a \in A \land (\forall x \in A)(\exists y \in A)P(x,y) \\
&\qquad\qquad\implies (\exists f : \mathbb{N} \to A)[f(0) = a \land (\forall n \in \mathbb{N})P(f(n),f(n+1))]
\\&]
\end{align*}
$$
which is to say it is possible to make a countable sequence of choices, each dependent on the last.

  [^2006]: 2006\. [[Sources/@moschovakisNotesSetTheory2006|Notes on set theory]], ¶8.13, p. 114

## Relationship to other axioms

### Strengthenings

Over [[ZF]], $\mathrm{DC}$ is a strict weakening of the [[Axiom of Choice]].

### Weakenings

Over [[ZF]], $\mathrm{DC}$ is a strengthening of the [[Countable Axiom of Choice]], which only allows for independent sequences of choices.

#
---
#state/develop | #lang/en | #SemBr

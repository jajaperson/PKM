---
tags:
  - public
---
[[Type theory MOC]]
# Type theory

A **type theory** is a form of [[formal system]] concerning the construction of types and terms of given types.
Usually we are interested in **dependent type theories**, where types themselves may be parameterized by terms. 
Type theories are as diverse as their applications, ranging from [[Foundation of mathematics|foundations of mathematics]] to programming languages.

## Type theory vs set theory

The differences between a type theory and a [[Axiomatic set theory|set theory]] may not be obvious at a glance.
The distinction is best understood in terms of the attitude with which type theory is approached:

- Many type theories are implementable as programming languages, since terms compute by normalization.
- A type theory is its own deduction system, where we use the paradigm of [[propositions as types]]. 
  On the other hand, a set theory is typically formulated within an “outer layer” of [[1st-order logic]].
- Type theory is especially well suited to [[Proof-relevant mathematics]], again since treating [[propositions as types]] means proofs are literal terms which can be further used and computed with.
- A type theory has more subtle treatment of equality. 
  There exist distinct notions of [[judgemental equality]] and propositional or [[typal equality]].
- A type theories are syntactic objects considered in “adjunction” to the algebraic objects of [[Category|categories]], usually [[Cartesian closed category|cartesian closed categories]].
- Type theories favour [[Constructive mathematics]] (hence the interpretation of type theories as programming languages).
- Type theory is useful for [[synthetic mathematics]].
- Some types may be interpreted as sets ([[h-Set|h-sets]]) yet types more generally admit an interpretation as [[Anima-structure of types|anima]].
- Functions enjoy a more prominent role in type theories as _processes_, whereas (material) set theories tend to treat them as a special class of relations.

## Typical features

Usually a type theory is developed as a deductive system with [[Context in a deductive system|contexts]], so we have judgements such as
$$
\begin{align*}
\Gamma \vdash A, \qquad \Gamma \vdash x : A
\end{align*}
$$
for “$A$ is a type in the context $\Gamma$” and “$x$ is a term of type $A$ in context $\Gamma$” respectively.
Often there are also judgements for [[judgemental equality]].

Contexts are typically lists of variable declarations,
so the base rule for their formation is
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\RightLabel{\,Ctx-Var}
\UnaryInfC{$\Gamma, x:A \vdash$}
\end{prooftree}
$$
and we have the $\delta$-rule
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter A$
\RightLabel{\,$\delta$}
\UnaryInf$\Gamma, x : A \fCenter x : A$
\end{prooftree}
$$

To actually populate the theory, one needs to define types, and their terms.
In a dependent type theory, a type is typically defined by four (sets of) inference rules:

1. a **formation rule** says what is needed to define a type in a context;
2. **introduction rules** says what is needed to define a term of a type;
3. **elimination rules** says how terms of a type can be used; and
4. if we have judgemental equality, **computation rules** define how introduction and elimination rules interact with respect to judgemental equality.

For an example, see the [[Type of booleans]].

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Set theory MOC]]
# Set

> “Unter einer Menge verstehen wir jede Zusammenfassung $M$ von bestimmten wohlunterscheidbaren Objecten $m$ unserer Anschauung oder unseres Denkens (welche die Elemente von $M$ genannt werden) zu einem Ganze.”^[1895\. [[Sources/@cantorBeitraegeZurBegruendung1895|Beiträge zur Begründung der transfiniten Mengenlehre]]. “By a set we understand any amalgamation $M$ of definite, well distinguished objects $m$ of our conception or our thought (which are called the elements of $M$) to a \[single\] whole.”] ^def

A **set** is a [[Collection]] of different things, called elements or members with [[Propositional equality]]. #m/def/set
In a material conception[^vac], two sets are said to be the same iff they have the same members,
i.e.
$$
\begin{align*}
(\forall \shood A,\shood B) [A=B \iff(\forall x)[x \in A \iff x \in B]]
\end{align*}
$$
which is the [[Axiom of Extensionality]].
See [[axiomatic set theory]] for different axiomatic treatments of the set.

  [^vac]: Such a statement becomes vacuous in a structural theory like [[ETCS]].
## Further terms
- It follows from extensionality that the [[Empty set]] $\0$ is unique.
- [[Subset]]

## Forming sets

In a materical conception

- $A = \{ a_{1},a_{2},\dots,a_{n} \}$ is the finite set with members $a_{1},a_{2},\dots,a_{n}$
- $A = \{ x : P(x) \}$ is the set of all $x$ satisfying predicate $P$, i.e. $x \in A \iff P(x)$
- $A \cup B = \{ x : x \in A \lor x \in B \}$ is the [[union]] of $A$ and $B$
- $A \cap B = \{ x : x \in A \land x \in B \}$ is the [[intersection]] of $A$ and $B$
- $A \setminus B = \{ x : x \in A \land x \notin B \}$ is the [[set difference]] of $B$ from $A$

## Foundation-agnostic usage

- The [[Axiomatic set theory|axiomatic set theories]] each give a notion of set.
    - In [[TG]] a $\mathcal{U}$-[[small set]] is an element of $\mathcal{U}$.
- In a [[Type theory]] with some notion of [[Equality]], a set should be taken to be a type with [[Propositional equality]].
    - In particular, in (extensions of) [[MLTT]], a set should be taken to be an [[h-Set|h-set]].

#
---
#state/tidy | #lang/en | #SemBr 
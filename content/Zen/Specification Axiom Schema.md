---
tags:
  - public
---
[[Material set theory]]
# Specification Axiom Schema

The **Specification Axiom**, technically an [[axiom schema]], is a possible axiom schema of [[Material set theory]]: #m/def/set/zf 
Let $\varphi(x)$ be a [[Predicative formula]] (i.e. unary definite condition) of set theory.
Then,
$$
\begin{align*}
(\forall \shood A)(\exists \shood B)[x \in B \iff x \in A \land \varphi(x)]
\end{align*}
$$
which is to say, there exists a subset $B$ of $A$ containing all those elements $x$ of $A$ for which $\varphi(x)$.
By the [[Axiom of Extensionality]] such a set is unique, and we denote it using [[Set builder notation]] as
$$
\begin{align*}
B = \{ x \in A : \varphi(x) \}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr 
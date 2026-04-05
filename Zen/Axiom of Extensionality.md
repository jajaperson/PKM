---
tags:
  - public
---
[[Material set theory]]
# Axiom of Extensionality

The **Axiom of Extensionality** is a possible axiom in [[Material set theory]] that seems to follow directly from [[Set#^def|Cantor's definition]] of the [[set]]: #m/def/set/zf
$$
\begin{align*}
(\forall \shood A)(\forall \shood B)[A=B \iff (\forall x )[x \in A \iff x \in B]]
\end{align*}
$$
which is to say, two sets are the same iff they have the same elements.

## Relation to other axioms

- The Axiom of Extensionality seems to give a complete definition of set equality, but if we are dealing with [[Well-founded set|ill-founded]] sets it may reduce to tautologous $A = B \iff A = B$. Thus Extensionality is compatible with [[Aczel's Antifoundation Axiom]].

## Axiom of Extensionality for classes


In a material set theory with [[Class|classes]] have an identical axiom with sethood replaced with classhood: #m/def/set/nbg
$$
\begin{align*}
(\forall \chood A)(\forall \chood B)[A=B \iff (\forall x)[x \in A \iff x \in B]]
\end{align*}
$$
^tg

#
---
#state/tidy | #lang/en | #SemBr 
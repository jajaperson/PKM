---
tags:
  - public
---
[[Material set theory]]
# Axiom of Pairing

The **Axiom of Pairing** is a possible axiom in [[Material set theory]]: #m/def/set/zf 
$$
\begin{align*}
(\forall x)(\forall y)(\exists \shood A)[z \in A \iff z = x \lor z = y]
\end{align*}
$$
which is to say, for any two objects (possibly the same) there is a set whose only elements are those two objects.
It follows from the [[Axiom of Extensionality]] that such a **doubleton** $A$ is unique, which we denote $\{ x,y \}$.

## Axiom of Pairing for classes

In a material set theory with [[Class|classes]], we must modify the axiom slightly,
since we cannot pair [[proper class|proper classes]]: #m/def/set/nbg 
$$
\begin{align*}
(\forall \ehood x)(\forall \ehood y)(\exists \shood z)[z \in A \iff z =x \lor z = y]
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr 
---
tags:
  - public
aliases:
  - cocartesian
---
[[Category theory MOC]]
# Cocartesian category

A **cocartesian category** is a [[monoidal category]] whose tensor product is a [[Products and coproducts|coproduct]] and whose tensor unit is an [[initial object]]. #m/def/cat 
Specifically for any $A,B \in \cat C$, there exist natural transformations
$$
\begin{align*}
\lambda^B: 1 \Rightarrow 1 \otimes B : \cat C \to \cat C \\
\rho^A : 1 \Rightarrow A \otimes 1 : \cat C \to \cat C
\end{align*}
$$
so that the data
$$
\begin{align*}
(A \otimes B, \lambda^B_{A}, \rho^A_{B})
\end{align*}
$$
satisfy the universal property of the coproduct.

## See also

- The dual concept is [[Cartesian category]].
- A [[Bicartesian category]] is both of these simultaneously.

#
---
#state/tidy | #lang/en | #SemBr

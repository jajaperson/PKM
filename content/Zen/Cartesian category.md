---
tags:
  - public
aliases:
  - cartesian
---
[[Category theory MOC]]
# Cartesian category

A **cartesian category** is a [[monoidal category]] whose tensor product is a [[Products and coproducts|categorical product]] and whose tensor unit is a [[Initial and terminal objects|terminal object]]. #m/def/cat
Specifically, for any $A,B \in \cat C$ there exist natural transformations
$$
\begin{align*}
\lambda^B: 1 \otimes B \Rightarrow 1 : \cat C \to \cat C \\
\rho^A : A \otimes 1 \Rightarrow 1 : \cat C \to \cat C
\end{align*}
$$
so that for any $A,B \in \cat C$ the data
$$
\begin{align*}
(A \otimes B, \lambda^B_{A}, \rho^A_{B})
\end{align*}
$$
satisfy the universal property of the product.

## See also

- The dual concept is [[Cocartesian category]].
- A [[Bicartesian category]] is both of these simultaneously.

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - cocartesian
---
[[Category theory MOC]]
# Cocartesian category

A **cocartesian category** is a (necessarily [[Symmetric monoidal category|symmetric]]) [[monoidal category]] whose tensor product is a [[Products and coproducts|coproduct]] and whose tensor unit is an [[initial object]]. #m/def/cat 
Specifically for any $A,B \in \cat C$, there exist natural transformations
$$
\begin{align*}
\opn{in}^\imp{B}_{1} : 1 \Rightarrow 1 \otimes B : \cat C \to \cat C \\
\opn{in}^\imp{A}_{2} : 1 \Rightarrow A \otimes 1 : \cat C \to \cat C
\end{align*}
$$
so that the data
$$
\begin{align*}
(A \otimes B, \opn{in}^\imp{B}_{1}, \opn{in}^\imp{A}_{2})
\end{align*}
$$
satisfy the universal property of the coproduct.

## From a finitary coproduct category

By the [[Cartesian category#From finitary product category|dual result]],
any category $\cat C$ with chosen finite [[Products and coproducts|coproducts]] gives rise to a cocartesian category.

## See also

- The dual concept is [[Cartesian category]].
- A [[Bicartesian category]] is both of these simultaneously.

#
---
#state/tidy | #lang/en | #SemBr

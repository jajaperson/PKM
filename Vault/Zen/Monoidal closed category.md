---
tags:
  - public
---
[[Category theory MOC]]
# Monoidal closed category

A **monoidal closed category** $\cat C$ is a category which is both [[Monoidal category|monoidal]] and [[Closed category|closed]] in a compatible way.
The compatibility condition is given by [[Currying|currying]], which is to say we have an [[Adjoint functor|adjunction]]

![[closed-monoidal-adjunction.svg#invert|c|200]]

for every object $B \in \cat C$, inducing a bijection
$$
\begin{align*}
\cat C(A \otimes B, C) \cong \cat C(A, [B,C]) 
\end{align*}
$$
natural in all objects $A, C \in \cat C$.
It turns out that whenever the tensor product of a monoidal category possesses such a right adjoint, we automatically get all the structure of a closed category,
hence we may characterize a monoidal closed category as a monoidal category whose product has a right adjoint.

## Evaluation and coëvaluation

The coünit of adjunction is called **evaluation** and has components
$$
\begin{align*}
\epsilon_{C}^B : [B,C] \otimes B \to C
\end{align*}
$$
whereas the unit is called **coëvaluation** and has components
$$
\begin{align*}
\eta_{C}^B : C \to [B, C \otimes B].
\end{align*}
$$
Both of these can be shown to be [[(Extra)natural transformation|extranatural]] in $B$.

#
---
#state/develop | #lang/en | #SemBr

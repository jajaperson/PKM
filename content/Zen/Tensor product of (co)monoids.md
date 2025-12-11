---
aliases:
  - tensor product of monoids
  - tensor product of comonoids
tags:
  - public
---
[[Category theory MOC]]
# Tensor product of (co)monoids

Let $({\color{red}A}, {\color{red}\nabla_{A}}, {\color{red}\eta_{A}})$ and $({\color{orange}B}, {\color{orange}\nabla_{B}}, {\color{orange}\eta_{B}})$ be [[Monoid object|monoids]] in a [[Symmetric monoidal category]] $\cat C$ with braiding $\tau$.
Then the tensor product $A \otimes B$ is given the structure of a monoid where #m/def/cat
$$
\begin{align*}
\nabla_{A \otimes B} &= (\nabla_{A} \otimes \nabla_{B}) (1 \otimes \tau \otimes 1) \\
\eta_{A \otimes B} &= \eta_{A} \otimes \eta_{B}
\end{align*}
$$
up to application of the unitor and associator of $\cat C$. In terms of string diagrams,

![[tensor product of monoids.png]]

By duality (turning the diagrams upside down), one gets the same construction for [[Tensor product of (co)monoids|tensor product of comonoids]]:
If $({\color{red}A}, {\color{red}\Delta_{A}}, {\color{red}\epsilon_{A}})$ and $({\color{orange}B}, {\color{orange}\Delta_{B}}, {\color{orange}\epsilon_{B}})$ are [[Comonoid object|comonoids]]
then $A \otimes B$ is given the structure of a comonoid where
$$
\begin{align*}
\Delta_{A \otimes B} &= (1 \otimes \tau \otimes 1) (\Delta_{A} \otimes \Delta_{B}) \\
\epsilon_{A \otimes B} &= \epsilon_{A} \otimes \epsilon_{B}
\end{align*}
$$
up to application of the unitor and associator of $\cat C$.

#
---
#state/develop | #lang/en | #SemBr

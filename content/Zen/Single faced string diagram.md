---
tags:
  - public
---
[[String diagram]]
# Single faced string diagram

A **single faced** [[string diagram]] is a diagrammatic representation of a morphism in a [[monoidal category]] $\cat C$.[^1]
We consider diagrams as variously embedded in $n + 1$ dimensions,
where the (1) vertical dimension represents composition
and the $n$ horizontal dimensions represent the monoidal product.
For a fully formal treatment of string diagrams, see Joyal and Street.

> Penrose was the first to use the graphical notation for calculating with tensors. It is now currently used by theoretical physicists as a private device for quickly verifying complicated tensor formulas. A striking aspect of this notation is that it is pictorial rather than sequential or alphabetical. This made it difficult to print, which partly explains why no rigorous theory was developed. We believe that a notation which is useful in private must be given a public value and that it should be provided with a Arm theoretic foundation. Furthermore, printing techniques have improved drastically in recent years.[^1991]

## Explanation
As stated, every string diagram itself represents some morphism in $\cat C$.
We are also able to represent objects using the [[Objects as identities]] perspective,
where these are denoted by coloured strings flowing in the vertical direction.
A general morphism
$$
\begin{align*}
\Red \xrightarrow f \Blue
\end{align*}
$$
is then denoted as a node in the ambient space

![[f-string.svg|c]]

 with appropriate input and output strings.
 Composition is represented by vertical stacking of diagrams

![[composition-string.svg]]

while the monoidal product (sometimes called “horizontal composition”) is represented by horizontal stacking,
thus
$$
\begin{align*}
\Red \otimes \Blue \xrightarrow{f \otimes g} \Blue \otimes \Purple
\end{align*}
$$
is written as

![[tensor-string.svg|c]]


Associators are implicit, and we make unitors implicit by representing the tensor unit $\mathbb{1}$ by the empty string diagram.
Thus generalized elements are written as

![[element-string.svg|c]]

In the braided case we are free to move strings behind each other, 
i.e. we represent the braiding as

![[braiding-string.svg|c]]


[^1991]: 1991\. [[Sources/@joyalGeometryTensorCalculus1991|The geometry of tensor calculus, I]]
[^1]: This is my own terminology, which I am using to distinguish string diagrams with only 1-cells and 2-cells (which may be reïnterpreted as 0-cells and 1-cells of a monoidal category) from the more general case suitable for bicategories.
#
---
#state/tidy| #lang/en | #SemBr

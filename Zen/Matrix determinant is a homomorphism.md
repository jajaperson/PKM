---
tags:
  - public
---
[[General linear group]]
# Matrix determinant is a homomorphism

The [[Matrix determinant]] when applied to the [[General linear group]]
$$
\begin{align*}
\det : \mathrm{GL}(n, \mathbb{K}) \to \mathbb{K}^\times
\end{align*}
$$
is a [[Group homomorphism|group epimorphism]], #m/thm/group 
where the codomain is the multiplicative group of the underlying field 

> [!check]- Proof
> From properties of the [[Matrix determinant]],
> for any $A, B \in \mathrm{GL}(n, \mathbb{K})$:
> $$
> \begin{align*}
> \det(A B) = \det(A)\det(B)
> \end{align*}
> $$
> Hence $\det$ is a homomorphism.
> For any $\lambda \in \mathbb{K}$, there exists $C = \lambda \mathbb{1}$
> with $\det(C) = \lambda \det \mathbb{1} = \lambda$.
> Hence $\det$ is an epimorphism.
> <span class="QED"/>

## Properties

- $\ker \det = \mathrm{SL(n, \mathbb{K})}$ the [[Special linear group]].

#
---
#state/tidy | #lang/en | #SemBr

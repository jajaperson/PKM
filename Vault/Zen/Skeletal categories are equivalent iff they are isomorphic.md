---
tags:
  - public
---
[[Skeletal category]]
# Skeletal categories are equivalent iff they are isomorphic

Let $\cat C, \cat D$ be [[Skeletal category|skeletal categories]].
Then these are [[isomorphism of categories|isomorphic]] iff they are [[Equivalence of categories|equivalent]], #m/thm/cat
i.e.
$$
\begin{align*}
\cat C \cong \cat D \iff \cat C \simeq \cat D.
\end{align*}
$$

> [!check]- Proof
> Suppose $F : \cat C \rightleftarrows \cat D : G$ defines an equivalence of categories.
> Then there exist natural isomorphisms $\eta : 1 \Rightarrow FG : \cat C \to \cat C$
> and $\epsilon: 1 \Rightarrow FG : \cat D \to \cat D$,
> which must be identities since $\cat C$ and $\cat D$ are skeletal. <span class="QED"/>

This is a lemma for the stronger [[Categories are equivalent iff they have isomorphic skeleta]].
#
---
#state/tidy | #lang/en | #SemBr

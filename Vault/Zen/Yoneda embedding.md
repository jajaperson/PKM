---
tags:
  - public
---
[[Yoneda lemma]]
# Yoneda embedding

The **Yoneda embedding** $\yo : \cat C \hookrightarrow \Set^{\cop C}$ is an [[embedding#Category|embedding]]  of a [[locally small category]] $\cat C$ into the [[Category of presheaves]],
that 

- maps an object $X \in \cat C$ to the presheaf $\yo X =\cat C(-, X)$
- maps a morphism $f : X \to Y$ to the natural transformation $\yo f =  f_{\star}$, whose components are the [[Pushforward and pullback of morphisms|pushforwards]] of $f$

![[Yoneda embedding.png#invert]]

> [!missing]- Proof of embedding
> Let $X,Y \in \cat C$.
> By the [[Yoneda lemma]] we have
> $$
> \begin{align*}
> \cat C(X,Y) = (\yo Y)X \cong \Set^{\cop C}(\yo X, \yo Y)
> \end{align*}
> $$

#
---
#state/tidy | #lang/en | #SemBr

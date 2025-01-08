---
tags:
  - public
---
[[Yoneda lemma]]
# Yoneda embedding

The **Yoneda embedding** is an important construction enabled by the [[Yoneda lemma]].
Consider a category $\cat C$ along with the [[Functor category]] $\Set^{\op{\cat C}}$ of presheaves.
The Yoneda embedding is the functor $\yo : \cat C \to \Set^{\op{\cat C}}$ that

- maps an object $X \in \cat C$ to the presheaf $\yo X = \cat C(-, X)$
- maps a morphism $f : X \to Y$ to the natural transformation $f_{\star}$, containing the [[Pushforward and pullback of morphisms|pushforwards]] of $f$

![[Yoneda embedding.png#invert]]

#
---
#state/develop | #lang/en | #SemBr

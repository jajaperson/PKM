---
tags:
  - public
---
[[Yoneda lemma]]
# Yoneda embedding

The **Yoneda embedding** $\yo : \cat C \hookrightarrow \Set^{\cop C}$ is an [[Category embedding|embedding]]  of a [[locally small category]] $\cat C$ into the [[Category of presheaves]],
that 

- maps an object $X \in \cat C$ to the presheaf $\yo X =\cat C(-, X)$
- maps a morphism $f : X \to Y$ to the natural transformation $\yo f =  f_{\star}$, whose components are the [[Pushforward and pullback of morphisms|pushforwards]] of $f$

![[Yoneda embedding.png#invert]]

> [!check]- Proof of embedding
> Let $X,Y \in \cat C$.
> By the [[Yoneda lemma]] we have
> $$
> \begin{align*}
> \mathrm{H}_{X,\yo Y} : \Set^{\cop C}(\yo X, \yo Y) \cong (\yo Y)X = \cat C(X,Y)
> \end{align*}
> $$
> where using the notation of the [[Yoneda lemma#^proof]] given $x \in (\yo Y)X = \cat C(X,Y)$ and $f \in \cat C(X',X)$
> $$
> \begin{align*}
> (\vartheta_{x})_{X'}\,f 
> &= ((\yo Y)f) x \\
> &= \cat C(f,Y) x \\
> &= xf \\
> &= \cat C(X',x) f \\
> &= (\yo x)_{X'} \, f
> \end{align*}
> $$
> so $\vartheta_{x} = \yo x$, implying
> $$
> \begin{align*}
> \mathrm{H}_{X, \yo Y}^{-1} = \yo \restriction \cat C(X,Y)
> \end{align*}
> $$
> so in particular, $\yo$ is fully faithful.
> $\yo$ is also clearly injective on objects, since if $\yo X = \yo Y$ then
> $$
> \begin{align*}
> 1_{X} \in\cat C(X,X) = (\yo X) X = (\yo Y)X = \cat C(X,Y)
> \end{align*}
> $$
> so $X=Y$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

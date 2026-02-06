---
tags:
  - public
aliases:
  - left adjoint
  - right adjoint
  - adjunct
  - adjunction
---
[[Category theory MOC]]
# Adjoint functor

An **adjunction of functors** is an [[adjunction]] in [[Category of small categories]]. #m/def/cat
Let $\cat D$, $\cat C$ be [[category|categories]].
A pair of functors $F : \cat D \leftrightarrows \cat C : U$ form an **adjunction**, written

![[adjunction.svg#invert|https://q.uiver.app/#q=WzAsMixbMCwwLCJcXG1hdGhzZiBEIl0sWzIsMCwiXFxtYXRoc2YgQyJdLFswLDEsIkYiLDIseyJjdXJ2ZSI6MX1dLFsxLDAsIlUiLDIseyJjdXJ2ZSI6MX1dLFszLDIsIiIsMix7ImxldmVsIjoxLCJzdHlsZSI6eyJuYW1lIjoiYWRqdW5jdGlvbiJ9fV1d]]

or compactly $F \dashv U : \cat D \to \cat C$,
iff there is a [[Natural isomorphism|natural isomorphism]] in [[Functor category|$\Set^{({\op{\cat C}} \times \cat D)}$]] of hom-sets[^2010]
$$
\begin{align*}
\varphi: \cat D(F \times 1_{\cat D}) &\cong \cat C(1_{\cat C} \times U) : \varphi^{-1} \\
\varphi_{C,D} : \cat D(FC,D) &\cong \cat C(C, UD) : \varphi_{C,D}^{-1}.
\end{align*}
$$
When adjoints exist they are unique up to [[natural isomorphism]],
hence we call $F$ _the_ **left adjoint** of $U$,
and $U$ _the_ **right adjoint** of $F$.

> [!check]- Proof of uniqueness
> By duality, it suffices to prove right adjoints are unique up to natural isomorphism.
> Suppose $F \dashv U,V : \cat D \leftrightarrows \cat C$.
> Then by adjunction
> $$
> \begin{align*}
> \cat C(1 \times U) \cong \cat D(F \times 1) \cong \cat C(1 \times V)
> \end{align*}
> $$
> hence for any object $D \in \cat D$ we have
> $$
> \begin{align*}
> \yo(UD) \cong \yo(VD)
> \end{align*}
> $$
> naturally and thus
> $$
> \begin{align*}
> UD \cong UV
> \end{align*}
> $$
> naturally (see [[Yoneda embedding]]). <span class="QED"/>


The name comes from an analogy to the [[Adjoint operator]].
In the archetypal examples, we think of $U$ as _forgetful_ and $F$ as _free_ —
See [[Free-forgetful adjunction]].

  [^2010]: 2010\. [[Sources/@awodeyCategoryTheory2010|Category theory]], §9

## Unit and coünit

We can equivalently rephrase the condition for an adjunction in terms of a **unit** or **coünit**, so named since they form the corresponding data for a [[monad]] or [[comonad]] induced by the adjunction respectively.

- There exists a [[natural transformation]] $\eta: 1\Rightarrow UF : \cat C \to \cat C$ called the **unit** of adjunction
    such that for any objects $C \in \cat C$, $D \in \cat D$, and morphism $f \in \cat C(C,UD)$, 
    there exists a unique **adjunct** $f^\sharp \in \cat D(FC,D)$ such that $f = (U f^\sharp) \eta_{C}$.
    
    ![[adjunction-unit.svg#invert|https://q.uiver.app/#q=WzAsNSxbMCwwLCJGQyJdLFswLDIsIkQiXSxbMiwwLCJVRkMiXSxbMiwyLCJVRCJdLFs0LDAsIkMiXSxbMCwxLCJcXGV4aXN0cyEgZl5cXHNoYXJwIiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzQsMiwiXFxldGFfQyIsMl0sWzQsMywiZiJdLFsyLDMsIlVmXlxcc2hhcnAiLDJdXQ==]]<br/>

- There exists a [[natural transformation]] $\epsilon : FU \Rightarrow 1 : \cat C \to \cat C$ called the **coünit** of adjunction
    such that for any objects $C \in \cat C$, $D \in \cat D$, and morphism $g \in \cat D(FC, D)$,
    there exists a unique **adjunct** $g^\sharp \in \cat C(C,UD)$ 
    such that $g = \epsilon_{D}(F g^\sharp)$.
    
    ![[adjunction-coünit.svg#invert|https://q.uiver.app/#q=WzAsNSxbNCwyLCJDIl0sWzQsMCwiVUQiXSxbMiwwLCJEIl0sWzAsMiwiRkMiXSxbMCwwLCJGVUQiXSxbMCwxLCJcXGV4aXN0cyEgZ15cXGZsYXQiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMywyLCJnIiwyXSxbMyw0LCJGZ15cXGZsYXQiXSxbNCwyLCJcXGVwc2lsb25fRCJdXQ==]]<br/>

To see that either of these are necessary and sufficient, note[^2020]
$$
\begin{align*}
\eta_{C} &= \varphi_{C,FC}(1_{FC}) & \varphi^{-1}(f) &= f^\sharp \\
\epsilon_{D} &= \varphi_{UD,D}^{-1}(1_{UD}) & \varphi(g) &= f^\flat
\end{align*}
$$
This gives us another perspective on adjunctions:
They are a weakening of [[Equivalence of categories]].

  [^2020]: 2020\. [[Sources/@richterCategoriesHomotopyTheory2020|From categories to homotopy theory]], p. 40

## Properties

- [[Right adjoint functors are continuous]]
- [[Right adjoint functors are continuous|Left adjoint functors are cocontinuous]]

#
---
#state/tidy  | #lang/en | #SemBr

---
tags:
  - public
---
[[Module theory MOC]]
# Projective module

An $R$-[[module]] $P$ is said to be **projective** iff it is a [[projective object]] in [[Category of left modules]], 
i.e. for any morphism $f : P \to B$
and epimorphism $q : A \twoheadrightarrow B$ we have a lift.

![[lift.svg#invert|https://q.uiver.app/#q=WzAsMyxbMiwwLCJBIl0sWzIsMiwiQiJdLFswLDIsIlAiXSxbMCwxLCJxIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzIsMSwiZiIsMl0sWzIsMCwiXFxleGlzdHMgXFxiYXIgZiIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==]]

This is equivalent to any of the following[^2011]

1. $\lMod R(P,-)$ preserves epimorphisms; ^P1
2. Any [[Module epimorphism]] $\alpha : M \twoheadrightarrow P$ [[Split epimorphism|splits]]; ^P2
3. $P$ is a [[Direct sum of modules|direct summand]] of a [[free module]], i.e. $P \oplus Q \cong R^{(\alpha)}$ for some module $Q$ and some cardinal $\alpha$; ^P3
4. $\lMod R(P,-)$ is [[Exact functor on abelian categories|exact]]. ^P4

> [!check]- Proof
> If [[#^P1]] holds,
> then taking $B = P$ and $f = 1_{P}$ gives [[#^P2]].
> 
> If [[#^P2]] holds, consider an epimorphism $p : R^{(\alpha)} \twoheadrightarrow P$.
> Then the [[split short exact sequence]]
> $$
> \begin{align*}
> 0 \to \ker p \hookrightarrow R^{(\alpha)} \twoheadrightarrow P \to 0
> \end{align*}
> $$
> guarantees the required direct sum decomposition, giving [[#^P3]].
> 
> Note that $\lMod R(P,-)$ is already exact if $P = R$,
> so since
> $$
> \begin{align*}
> \lMod R \left( \coprod_{i \in I} M_{i}, N \right) \cong \coprod_{i \in I} \lMod R(M_{i}, N) 
> \end{align*}
> $$
> it follows from [[Direct sum of chain complexes#^P1]] that [[#^P3]] implies [[#^P4]].
> 
> Noting that being a [[module epimorphism]] is the same as being a regular epimorphism,
> and that the latter must be preserved by exact functors, it is clear that [[#^P4]] implies [[#^P3]]. <span class="QED"/>


  [^2011]: 2011\. [[Sources/@etingofIntroductionRepresentationTheory2011|Introduction to representation theory]], §8.1, pp. 205–332

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Differential geometry MOC]]
# Cotangent bundle

Let $M$ be a $C^\alpha$-[[Differentiable manifold|manifold]].
The **cotangent bundle** is a [[vector bundle]] of all [[cotangent space|cotangent spaces]] of $M$, #m/def/geo/diff 
so as a set
$$
\begin{align*}
T^*M = \coprod_{p \in M} T^*_{x}M = \bigcup_{p \in M} \{ p \} \times T^*_{p}M.
\end{align*}
$$
with the $C^\alpha$-structure of the [[Dual vector bundle|dual vector bundle]] of the [[tangent bundle]].

> [!note]+ Sheaf theory
> There is an alternative [[Sheaf]]-theoretic construction in terms of the diagonal morphism.

A smooth [[Bundle section|section]] $\omega \in \Gamma T^*M = \Omega^1M$ of the tangent bundle is called a [[1-form]].
A general [[Differential form]] is a smooth section of the [[Exterior algebra bundle]] ${\textstyle\bigwedge}^\bullet T^* M$.

#
---
#state/develop | #lang/en | #SemBr

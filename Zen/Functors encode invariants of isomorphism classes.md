---
tags:
  - public
---
[[Functor]]
# Functors encode invariants of isomorphism classes

Since functors take compositions to compositions and identities to identities,
they also take isomorphisms to isomorphisms,
thereby preserving [[Isomorphism class|isomorphism classes]]. #m/thm/cat 

> [!check]- Proof
> Let $F : \cat C \to \cat D$ and $f \in \cat C(X, Y)$ be an isomorphism.
> Then there exists $f^{-1} \in \cat C(Y, X)$ such that $f^{-1} f = \id_{X}$ and $ff^{-1} = \id_{Y}$.
> It follows that $(Ff^{-1})(Ff) = F\id_{X} = \id_{F X}$ and $(Ff)(Ff^{-1}) = (F\id_{Y}) = \id_{F Y}$.
> Therefore $Ff \in \cat D(FX, FY)$ has inverse $Ff^{-1} \in \cat D(F Y, FX)$,
> whence $Ff$ is an isomorphism.
> <span class="QED"/>

This is a fundamental idea that captures the very essence of what makes category theory useful.
For example, in [[Topology MOC]], the value an arbitrary functor $F : \Top \to \cat C$ assigns to _any_ topological space is immediately a [[Topological property]].[^br]

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 11

## Fully faithful
If a functor $F$ is [[Fully faithful functor]] this becomes bidirectional:
$$
\begin{align*}
X \cong Y \iff FX \cong FY
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr 
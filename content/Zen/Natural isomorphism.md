---
aliases:
  - natural isomorphism
  - naturally isomorphic
tags:
  - public
---
[[Natural transformation]]
# Natural isomorphism

A **natural isomorphism** $\eta : F \Rightarrow G : \cat C \to \cat D$ is an isomorphism in a [[functor category]], #m/def/cat 
thus a natural transformation $\eta$ for which there exists a $\epsilon : G \Rightarrow F : \cat C \to D$ such that $\epsilon_{x} \circ \eta_{x} = 1_{Fx}$ and $\eta_{x} \circ \epsilon_{x} = 1_{G x}$ for all $x \in \cat C_{0}$.
If such an isomorphism exists we write $F \simeq G$.

A useful lemma is that a natural transformation $\eta : F \Rightarrow G : \cat C \to \cat D$ is a natural isomorphism
iff $\eta_{x}$ is an isomorphism for every $x \in \cat C_{0}$.
That is, the inverse of a natural family of morphisms is automatically natural. #m/thm/cat

> [!check]- Proof
> Suppose $\eta_{x} :Fx \cong Gx$ is a natural family of isomorphisms,
> i.e. for any $f \in \cat C(x,y)$ we have $(Gf)\eta_{x} = \eta_{y}(Ff)$.
> Then $\eta_{x}^{-1} (Gf) = (Ff) \eta_{y}^{-1}$, so the inverse is also natural. <span class="QED"/>


The idea was first proposed in [[@eilenbergGeneralTheoryNatural1945|A general theory of natural equivalences]], which is also the originating paper of category theory. See [[Equivalence of categories]]

#
---
#state/tidy | #lang/en | #SemBr

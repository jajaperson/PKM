---
tags:
  - public
---
[[Covering]]
# A covering is injective on the fundamental group

Let $p : (\tilde{X}, \tilde{x}_{0}) \twoheadrightarrow (X, x_{0})$ be a [[covering]].
Then the induced homomorphism $\pi_{1}p : \pi_{1}(\tilde{X}, \tilde{x}_{0}) \rightarrowtail \pi_{1}(X,x_{0})$ is a [[group monomorphism]]. #m/thm/homotopy 

> [!check]- Proof
> Let $[\tilde{\alpha}] \in \ker \pi_{1}p$.
> Then $\alpha = p \circ \tilde{\alpha} \simeq c_{x_{0}}$.
> But $\tilde{\alpha}$ and $c_{\tilde{x}_{0}}$ are the lifts of $\alpha$ and $c_{x_{0}}$ respectively,
> so by [[Lift of a map to a covering space#Third lemma Lifts of homotopies of paths]] $\tilde{\alpha} \simeq c_{\tilde{x}_{0}}$,
> Therefore $\ker \pi_{1}p = \{ e \}$ and thus $p$ is a [[Group monomorphism]].
> <span class="QED"/>

Therefore the [[Characteristic subgroup of a covering|characteristic subgroup]] of the covering $\pi_{1}p(\pi_{1}(\tilde{X},\tilde{x}_{0}))$ is isomorphic to $\pi_{1}(\tilde{X},\tilde{x}_{0})$.

#
---
#state/tidy | #lang/en | #SemBr

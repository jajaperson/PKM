---
tags:
  - public
---
[[Characteristic subgroup of a covering]]
# Characteristic conjugacy class of a path-connected covering

Let $p : (\tilde{X}, \tilde{x}_{0}) \twoheadrightarrow (X,x_{0})$ be a path-connected covering with [[Characteristic subgroup of a covering|characteristic subgroup]] $H = \im \pi_{1}p$.
Then a subgroup $H' \sube \pi_{1}(X,x_{0})$ is [[Conjugate subgroups|conjugate]] to $H$ iff it is the characteristic subgroup of $p$ with respect to a different basepoint $\tilde{x}_{0}'$. #m/thm/homotopy 

> [!check]- Proof
> For the reverse direction, let $p : (\tilde{X}, \tilde{x}_{0}) \twoheadrightarrow (X, x_{0})$ and $p' :(\tilde{X},\tilde{x}_{0}') \twoheadrightarrow (X, x_{0})$ be the same path-connected covering considered with different basepoints,
> with characteristic subgroups $H$ and $H'$ respectively
> Let $\tilde{\gamma} : \mathbb{I} \to \tilde{X}$ be a path from $\tilde{x}_{0}$ to $\tilde{x}_{0}'$.
> We can define an isomorphism
> $$
> \begin{align*}
> \Phi : \pi_{1}(\tilde{X},\tilde{x}_{0}) &\to \pi_{1}(\tilde{X},\tilde{x}_{0}') \\
> [\tilde{\alpha}] &\mapsto [\tilde{\gamma} \odot \tilde{\alpha} \odot \overline{\tilde{\gamma}}]
> \end{align*}
> $$
> Then
> $$
> \begin{align*}
> H' &=\pi_{1}p'(\pi_{1}(\tilde{X}, \tilde{x}_{0}')) = \pi_{1}p'(\Phi(\pi_{1}(\tilde{X},\tilde{x}_{0}))) \\
> &= [\alpha]\odot\pi_{1}p( \pi_{1}(\tilde{X}, \tilde{x}_{0})) \odot  [\alpha]^{-1} \\
> &= [\alpha] \odot  H \odot  [\alpha]^{-1}
> \end{align*}
> $$
> hence the characteristic groups are conjugate.
> 
> For the forward direction, let $H = \pi_{1}p(\pi_{1}(\tilde{X},\tilde{x}_{0}))$ and $H' = [\alpha] \odot H \odot [\alpha]^{-1}$ for some closed loop $\alpha : \mathbb{I} \to H$.
> Then $\alpha$ has a unique [[Lift of a map to a covering space|lift]] with $\tilde{\alpha}(0) = \tilde{x}_{0}$.
> Then $H'$ is the characteristic group of $p$ with basepoint $\tilde{x}_{0}'$.
> <span class="QED"/>

Hence a covering without choice of basepoint corresponds to a conjugation class of subgroups of $\pi_{1}(X,x_{0})$.

#
---
#state/tidy | #lang/en | #SemBr

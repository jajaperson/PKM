---
tags:
  - public
aliases:
  - Maschke's algorithm
---
[[Group representation theory MOC]]
# Maschke's theorem

Let $G$ be a [[finite group]]
Then the [[group ring]] $\mathbb{K}[G]$ is [[Semisimple ring|semisimple]] iff [[Characteristic|$\opn{char}\mathbb K$]] does not divide $\abs G$.  #m/thm/rep2

> [!check]- Proof of semisimplicity for coprime characteristic
> Let $0 \neq U <_{\mathbb{K}[G]} \mathbb{K}[G]$ be a nonzero proper (left) submodule.
> Since $\mathbb{K}[G]$ is a $\mathbb{K}$-vector space, we have $U <_{\mathbb{K}} \mathbb{K}[G]$,
> and we can find a [[complement subspace]] $W_{0} = U^c$,
> such that $\mathbb{K}[G] =_{\mathbb{K}} U \oplus W_{0}$.
> We can define the $\mathbb{K}$-linear projection
> $$
> \begin{align*}
> \varphi : \mathbb{K}[G] \twoheadrightarrow U
> \end{align*}
> $$
> with $\ker\varphi = W_{0}$.
> Let
> $$
> \begin{align*}
> \vartheta : \mathbb{K}[G] &\to \mathbb{K}[G] \\
> v &\mapsto \frac{1}{\abs G} \sum_{g \in G} g^{-1} \varphi(gv)
> \end{align*}
> $$
> which is $\mathbb{K}$-linear.
> Note $\im \vartheta \leq_{\mathbb{K}} U$.
> We claim it is also $\mathbb{K}[G]$-linear:
> Indeed, for all $x \in G$, we have
> $$
> \begin{align*}
> \vartheta(xv) &= \frac{1}{\abs G} \sum_{g \in G} g^{-1} \varphi(gxv) 
> = \frac{1}{\abs G} \sum_{g \in G} x x^{-1} g^{-1} \varphi(gxv) \\
> &= \frac{1}{\abs G} \sum_{g \in G} x (gx)^{-1} \varphi(gxv) 
> = \frac{1}{\abs G} \sum_{h \in G} xh^{-1} \varphi(hv) \\
> &= \frac{x}{\abs G} \sum_{h \in G} h^{-1}\varphi(hv) = x\vartheta(v).
> \end{align*}
> $$
> If $u \in U$, then
> $$
> \begin{align*}
> \vartheta(u) &= \frac{1}{\abs G} \sum_{g \in G} g^{-1} \varphi(gu)
> = \frac{1}{\abs G} \sum_{g \in G}u = u
> \end{align*}
> $$
> so $\vartheta$ is a [[projection operator]] onto $U$.
> Letting $W = \ker \vartheta$ we have that $W$ is a $\mathbb{K}[G]$-submodule,
> hence 
> $$
> \begin{align*}
> \mathbb{K}[G] =_{\mathbb{K}[G]} U \oplus W.
> \end{align*}
> $$
> By induction, it follows $\mathbb{K}[G]$ is semisimple. <span class="QED"/>

The above proof gives a construction of a complementary submodule for any submodule,
which we call **Maschke's algorithm**.

## In terms of unitary irreps

Every [[unitary representation]] is the [[Direct sum of representations|direct sum]] of unitary [[Irrep|irreps]],
and thus any [[representation of a compact group]] is the direct sum of unitary irreps. #m/thm/rep 

> [!check]- Proof
> Follows from the fact that [[The orthogonal complement of an invariant subspace under a unitary operator is invariant]] and [[Every finite complex representation of a compact group is equivalent to a unitary representation]].
> <span class="QED"/>

This core statement of group representation theory allows for the [[Decomposition of a representation]], 
and therefore reduces the task of classifying representations to classifying finite ones.

#
---
#state/tidy | #lang/en | #SemBr

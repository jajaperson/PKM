---
tags:
  - public
---
[[∗-representation of the complex group ring]]
# Invariant subspaces of ∗-representations and unitary representations coïncide

Consider a mutually inducing pair of a [[Unitary representation]] $\Gamma:G \to \mathrm{GL}()$ and a [[∗-representation of the complex group ring|∗-representation]] $\Gamma_{\mathbb{C}[G]} : \mathbb{C}[G] \to \mathrm{GL}(V)$.
Then every invariant subspace under $\Gamma$ is an invariant subspace of $\Gamma_{\mathbb{C}[G]}$ and vice-versa.
#m/thm/rep 
Thus $\Gamma$ is an [[irrep]] iff $\Gamma_{\mathbb{C}[G]}$ is irreducible, i.e. has no non-trivial invariant subspace. 

> [!check]- Proof
> Let $U \sube V$ be an [[invariant subspace]] of $\Gamma$.
> Then $V$ is also an invariant subspace of $\Gamma_{\mathbb{C}[G]}$, because for any $u \in U$ and $a \in \mathbb{C}[G]$
> $$
> \begin{align*}
> \Gamma_{\mathbb{C}[G]}(a)u &= \sum_{g \in G}a(g) \underbrace{ \Gamma(g)u }_{ \in U } \in U
> \end{align*}
> $$
> Likewise if $U \sube V$ is an invariant subspace of $\Gamma_{\mathbb{C}[G]}$ then it is also an invariant subspace of $\Gamma$, because for any $u \in U$ and $g \in G$
> $$
> \begin{align*}
> \Gamma(g)u = \Gamma_{\mathbb{C}[G]}(\delta_{g})u \in U
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

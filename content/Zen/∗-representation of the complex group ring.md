---
aliases:
  - ∗-representation
tags:
  - public
---
[[Group ring]]
# ∗-representations of the complex group ring

Let $G$ be a finite group, and $\Gamma : G \to \mathrm{GL}(V)$ be a [[Unitary representation]], and $\mathbb{C}[G]$ be the complex [[Group ring]].
Then $\Gamma$ induces a [[∗-representation]] of the group ring $\Gamma_{\mathbb{C}[G]} : \mathbb{C}[G] \to \mathrm{GL}(V)$ #m/thm/rep where
$$
\begin{align*}
\Gamma_{\mathbb{C}[G]}(a) = \sum_{g \in G} a(g) \Gamma(g)
\end{align*}
$$
which satisfies the following properties for $a,b \in \mathbb{C}[G]$
1. $$\Gamma_{\mathbb{C}[G]}(a + b) = \Gamma_{\mathbb{C}[G]}(a) + \Gamma_{\mathbb{C}[G]}(b)$$
2. $$\Gamma_{\mathbb{C}[G]}(a*b) = \Gamma_{\mathbb{C}[G]}(a)\Gamma_{\mathbb{C}[G]}(b)$$
3. $$\Gamma_{\mathbb{C}[G]}(a^{\dagger}) = \Gamma_{\mathbb{C}[G]}(a)^{\dagger}$$
4. $$\Gamma_{\mathbb{C}[G]}(\delta_{e}) = \mathbf{I}$$

Conversely, any representation of the group ring with these properties corresponds to a [[Unitary representation]],[^sim] defined by
$$
\begin{align*}
\Gamma(g) = \Gamma_{\mathbb{C}[G]}(\delta_{g})
\end{align*}
$$


> [!check]- Proof
> Let $\Gamma_{\mathbb{C}[G]}(a) = \sum_{g \in G}a(g)\Gamma(g)$.
> Then
> $$
> \begin{align*}
> \Gamma_{\mathbb{C}[G]}(a+b) = \sum_{g \in G}a(g)\Gamma(g) + \sum_{h \in G}b(h) \Gamma(h) = \Gamma_{\mathbb{C}[G]}(a) + \Gamma_{\mathbb{C}[G]}(b)
> \end{align*}
> $$
> satisfying property 1; and
> $$
> \begin{align*}
> \Gamma_{\mathbb{C}[G]}(a * b) 
> &= \sum_{x \in G} \sum_{y \in G} a(xy^{-1}) b(y) U(x) \\
> &= \sum_{g \in G} \sum_{h \in G}a(g) b(h) U(gh) \\
> &= \left( \sum_{g \in G} a(g) U(g) \right) \left( \sum_{h \in G} b(h) U(h) \right) \\
> &= \Gamma_{\mathbb{C}[G]}(a) \Gamma_{\mathbb{C}[G]}(b)
> \end{align*}
> $$
> satisfying property 2; and
> $$
> \begin{align*}
> \Gamma_{\mathbb{C}[G]}(a^{\dagger}) 
> = \sum_{g \in G} \overline{a(g^{-1})} \Gamma(g) 
> = \sum_{h \in G}  \overline{a(h)} \Gamma(h)^{\dagger}
> = \Gamma_{\mathbb{C}[G]}(a)^{\dagger}
> \end{align*}
> $$
> satisfying property 3; and
> $$
> \begin{align*}
> \Gamma_{\mathbb{C}[G]}(\delta_{e}) = \sum_{g \in G} \delta_{e}(g) \Gamma(g) = \Gamma(e) = \mathbf{I}
> \end{align*}
> $$
> satisfying property 4.
> 
> For the converse, let $\Gamma_{\mathbb{C}[G]} : \mathbb{C}[G] \to \mathrm{GL}(V)$ be a $*$-representation obeying properties 1–4.
> We define $\Gamma(g) = \Gamma_{\mathbb{C}[G]}(\delta_{g})$.
> It follows that
> $$
> \begin{align*}
> \sum_{g \in G}a(g) \Gamma(g) = \sum_{g \in G} a(g) \Gamma_{\mathbb{C}[G]}(\delta_{g}) = \Gamma_{\mathbb{C}[G]}\left(\sum_{g \in G} a (g)\delta_{g}\right) = \Gamma_{\mathbb{C}[G]}(a)
> \end{align*}
> $$
> as required above, but is $\Gamma$ a unitary representation?
> From the property 2 it follows that $\Gamma(gh) = \Gamma_{\mathbb{C}[G]}(\delta_{g} * \delta_{h}) = \Gamma_{\mathbb{C}[G]}(\delta_{g})\Gamma_{\mathbb{C}[G]}(\delta_{h}) = \Gamma(g)\Gamma(h)$,
> so $\Gamma$ is indeed a representation of $G$.
> From property 3 it follows that 
> $\Gamma(g)^{\dagger} = \Gamma_{\mathbb{C}[G]}(\delta_{g})^{\dagger} = \Gamma_{\mathbb{C}[G]}(\delta_{g}^{\dagger}) = \Gamma(g^{-1})$,
> so $\Gamma$ is unitary as required.
> <span class="QED"/>


[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §II.3, p 26

The [[Regular group representation]] is a ∗-representation of the group ring carried by the group ring itself.

## Properties

- [[Invariant subspaces of ∗-representations and unitary representations coïncide]]. Thus $\Gamma$ is an irrep iff $\Gamma_{\mathbb{C}[G]}$ is irreducible.

#
---
#state/tidy | #lang/en | #SemBr

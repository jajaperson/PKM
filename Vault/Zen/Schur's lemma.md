---
tags:
  - public
---
[[Module theory MOC]]
# Schur's lemma

**Schur's lemma** is most naturally stated in the language of [[module|modules]].
Let $V,W$ be [[simple module|simple modules]] over a ring $R$.
Then any nonzero [[Module homomorphism]] $f : V \to W$ is an [[isomorphism]]. #m/thm/module 
In particular, the [[endomorphism ring]] $\End_{R}V$ of a simple module is a [[division ring]].

> [!check]- Very simple proof
> Since $\ker f \leq V$ and $\im f \leq W$ are [[submodule|submodules]] of [[simple module|simple modules]],
> they must either be trivial or equal to $V$ and $W$ respectively.
> If $f \neq 0$ then $\ker f \neq V$ and $\im f \neq 0$, hence $f$ is epic and monic and thus an $R$-module isomorphism. <span class="QED"/>

$\mathbb{K}$ is an [[algebraically closed field]] and $V$ is a [[Module over a unital associative algebra|module]] over a [[unital associative algebra]] $A$ over $\mathbb{K}$, there are a few cases where
one can conclude $\End_{A}V = \mathbb{K}$ consists of homotheties, which is sometimes known as **Schur's first lemma**.
Namely

- If $\dim_{\mathbb{K}} V < \aleph_{0}$, by [[All elements of a finite-dimensional unital associative algebra are algebraic]]
- If $\dim_{\mathbb{K}}V < \abs{\mathbb{K}}$, by [[Dixmier's lemma]]
- If $A$ has a [[Filtered algebra|filtration]] like the [[universal enveloping algebra]] of a finite-dimensional Lie algebra, by [[Quillen's lemma]]

which also rely on the result from [[Division algebra with only algebraic elements over an algebraically closed field]].

## Group representation theory

Schur's lemma is a statement about linear maps which “commute” with an [[irrep]].[^kep][^sim]

[^kep]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations]], p. 31
[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §II.4, pp. 27–28. The proof offered here is virtually identical, but insists on using ∗-representations for reasons beyond me.

**Schur's lemma, first form •**
Let $\Gamma : G \to \mathrm{GL}(V)$ be a finite-dimensional (complex) [[Irrep]]
and $A : V \to V$ a linear endomorphism.
If $A$ commutes with $\Gamma$, i.e.
$$
\begin{align*}
A \Gamma(g) = \Gamma(g) A
\end{align*}
$$
for all $g \in G$, then $A = c \mathbf{I}$ for some $c \in \mathbb{C}$. #m/thm/rep ^3

> [!check]- Proof
> Let $\lambda$ be an [[Eigenvectors, eigenvalues, and eigenspaces|eigenvalue]] of $A$, and $v \in \mathrm{E}_{\lambda}(A)$.
> Then $A\Gamma(g)v = \Gamma(g)Av = \lambda\Gamma(g)$ for all $g \in G$.
> Therefore $\Gamma(g)v \in \mathrm{E_{\lambda}(A)}$, meaning $\mathrm{E}_{\lambda}(A)$ is $\Gamma$-[[Invariant subspace]].
> Since $\Gamma$ is irreducible and $\mathrm{E}_{\lambda}(A) \neq \{ \mathbf 0 \}$, $E_{\lambda}(A) = V$.
> Therefore $A = \lambda \mathbb{1}$.
> <span class="QED"/>

**Schur's lemma, second form •**
Let $\Gamma : G \to \mathrm{GL}(V)$ and $\tilde{\Gamma} : G \to \mathrm{GL}(W)$ be finite-dimensional [[Unitary representation|unitary]] [[irrep|irreps]] 
and $T : V \to W$ a linear map.
$$
\begin{align*}
T \Gamma(g) = \tilde{\Gamma}(g)T
\end{align*}
$$
for all $g \in G$,
then $T = \mathbf{O}$ or $\Gamma$ and $\tilde{\Gamma}$ are [[Unitary equivalence of representations|unitarily equivalent]]. #m/thm/rep
$T$ is thence called an [[intertwiner]], which is unique up to scalar multiplication. ^2

> [!check]- Proof
> Taking the [[Conjugate transpose|Hermitian conjugate]] of both sides gives $\Gamma(g^{-1})T^{\dagger} = T^{\dagger} \tilde{\Gamma}(g^{-1})$ for all $g \in G$,
> i.e. $\Gamma(g)T^{\dagger} = T^{\dagger} \tilde{\Gamma}(g)$.
> Hence
> $$
> \begin{align*}
> T^{\dagger}T \Gamma(g) = T^{\dagger} \tilde{\Gamma}(g)T = \Gamma(g) T^{\dagger} T
> \end{align*}
> $$
> thus $T^{\dagger}T$ commutes with $\Gamma$,
> and by the first lemma, $T^{\dagger}T = c\mathbf{I}$ for some $c \in \mathbb{C}$.
> Then $\braket{ v | T^{\dagger}Tv } =\braket{ v | cv } = \braket{ Tv | Tv } = c\|v\|^2 = \|Tv\|^v$ for all $v \in V$ and therefore $c = \frac{\|Tv\|^2}{\|v\|^2}$ which is real and nonnegative.
> Therefore either $c = 0$ whence $T = \mathbf{O}$
> or $c > 0$ and $U = \frac{1}{\sqrt{ c }}T$ is unitary with the equivalence $\tilde{\Gamma}(g) = U\Gamma(g)U^{\dagger}$.
> <span class="QED"/>

### Corollaries

- [[Irreps of abelian groups are 1-dimensional]]


#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
alias: Tychonoff's theorem
---
[[Compact space]]
# Tikhonov's theorem

**Tikhonov's[^tych] theorem** states that the [[Product topology|topological product]] of [[compact space|compact spaces]] is itself compact.
In its full form, it is equivalent to the [[Axiom of Choice]] over [[ZF]].[^wiki]

  [^tych]: Usually transcribed _Tychonoff_.
  [^wiki]: See [Wikipedia](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem#Proof_of_the_axiom_of_choice_from_Tychonoff's_theorem) for a proof.

> [!check]- Proof from [[Alexander subbasis theorem]]
> Let $X = \prod_{\alpha \in A}X_{\alpha}$ have the [[product topology]],
> which by construction bares the subbasis 
> $$
> \mathcal{A}_{X} = \{ \pi_{\alpha}^{-1}U : U \in \mathcal{T}_{\alpha} : \alpha \in A \}
> $$
> Now let $\mathcal{C}$ be an open subbasic cover of $X$.
> Then
> $$
> \begin{align*}
> \mathcal{C}_{\alpha} = \{ V \in \mathcal{C} : (\exists U \in \mathcal{T}_{\alpha})[\pi^{-1}_{\alpha}U=V] \}
> \end{align*}
> $$
> is inhabited for some $\alpha$,
> so invoking the [[Axiom of Choice]] we may fix some $\alpha$ and get a subcover $\mathcal{C}_{\alpha} \sube \mathcal{C}$.
> But this induces an open cover of $X_{\alpha}$, which by [[Compact space|compactness]] has an open subcover $\mathcal{D}_{\alpha}$ such that $\pi^{-1}\mathcal{D}_{\alpha}$ is a subcover of $\mathcal{C}_{\alpha} \sube \mathcal{C}$.
> <span class="QED"/>

## Corollaries

- [[Heine-Borel theorem]]

#
---
#state/tidy | #lang/en | #SemBr

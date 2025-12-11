---
tags:
  - public
---
[[Second countability axiom]]
# Second countable implies Lindelöf

Let $X$ be a topological space.
If $X$ is [[Second countability axiom|second-countable]] then it is [[Lindelöf space|Lindelöf]].

> [!check]- Proof
> Let $\{ S_{n} \}_{n \in \mathbb{N}}$ be a countable [[topological basis]] of $X$,
> and $\{ U_{\alpha} \}_{\alpha \in I}$ be an [[Cover set|open cover]].
> Let $J \sube \mathbb{N}$ such that
> $$
> \begin{align*}
> n \in J \iff \exists \alpha \in I : S_{n} \sube U_{\alpha}
> \end{align*}
> $$
> And for every $n \in J$ let $\alpha_{n} \in I$ such that $S_{n} \sube U_{\alpha_{n}}$.
> Since every $U_\alpha$ is the union of some family of $S_{n}$ with $n \in J$,
> $\{ S_{n} \}_{n \in J}$ is a countable open cover of $X$
> and therefore $\{ U_{\alpha_{n}} \}_{n \in J}$ is too.
> <span class="QED"/>

The proof relies on the [[Axiom of Choice]].

#
---
#state/tidy| #lang/en | #SemBr 
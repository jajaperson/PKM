---
aliases: Assuming choice, every proper ideal in a commutative ring is contained in a maximal ideal
tags:
  - public
---
[[Maximal ideal]]
# Assuming choice, commutative ring has a maximal ideal

Let $R$ be a [[commutative ring]] and $I \triangleleft R$ be a proper [[ideal]].
Then there exists a [[maximal ideal]] $M \triangleleft R$ containing $I$,
invoking [[Zorn's lemma]]. #m/thm/ring 

> [!check]- Proof
> Define
> $$
> \begin{align*}
> \mathcal{I} = \{ J \subsetneq R : I \trianglelefteq J \triangleleft R \}
> \end{align*}
> $$
> as a [[Poset]] ordered by inclusion.
> Let $\mathcal{C} \sube \mathcal{I}$ be a chain, and define $U_{\mathcal{C}} = \bigcup \mathcal{C}$.
> Then for any $x \in U_{\mathcal{C}}$, there exists a $C \in \mathcal{C}$ such that $x \in C$,
> and therefore $Rx \sube C \sube U_{\mathcal{C}}$,
> so $U_{\mathcal{C}}$ is an ideal containing $I$, and therefore an upper bound of $\mathcal{C}$ in $\mathcal{I}$.
> By [[Zorn's lemma]], $\mathcal{I}$ has a maximal element. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

---
mathLink: A field contains $\mathbb{Z}_{p}$ or $\mathbb{Q}$
tags:
  - public
---
[[Field]]
# A field contains $\mathbb{Z}_{p}$ or $\mathbb{Q}$

Let $K$ be a [[field]].
Then $K$ has a [[subfield]] isomorphic to [[modular arithmetic]] $\mathbb{Z}_{p}$ for some prime $p$
or [[Rational numbers]]. #m/thm/ring 
Thus $\mathbb{Z}_{p}$ and $\mathbb{Q}$ are the only [[Prime field|prime fields]].

> [!check]- Proof
> [[The characteristic of an integral domain is 0 or prime]],
> and [[A ring contains the integers or modular arithmetic]] where $n = \mathrm{char}(K)$.
> This covers the $\mathbb{Z}_{p}$ case.
> If $\mathrm{char}(K) = 0$,
> then let $I : \mathbb{Z} \hookrightarrow K$ be the unique initial [[ring homomorphism]] and
> $$
> \begin{align*}
> Q = \{ ab^{-1} : ab^{-1} \in I(\mathbb{Z}), b \neq 0 \}
> \end{align*}
> $$
> Then $Q \cong \mathbb{Q}$. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

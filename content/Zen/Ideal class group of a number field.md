---
tags:
  - public
aliases:
  - class number
---
[[Ring of integers of a number field]]
# Ideal class group of a number field

Let $\mathcal{O}_{K}$ be the [[ring of integers of a number field]] $K$,
where by abuse of terminology we refer to the [[ideal class group]] $\Cl(K) := \Cl(\mathcal{O}_{K})$ as the ideal class group of $K$. #m/def/ring 
The size of $\Cl(K)$, which by [[#^P2]] is finite, is called the **class number**.

## Properties

1. Every ideal class contains a nonzero ideal of norm at most $M_{K}$, [[Minkowski's bound]]. ^P1
2. $\Cl(K)$ is finite. ^P2

> [!check]- Proof of 1–2
> Let $c \in \Cl(K)$ and $\mathfrak{a} \trianglelefteq \mathcal{O}_{K}$ so that $[\mathfrak{a}] = c^{-1}$.
> By [[Minkowski's bound]],
> there exists an $\alpha \in \mathfrak{a}$ so that
> $$
> \begin{align*}
> \abs{\opn N(\alpha)} \leq M_{K} \opn  N(\mathfrak{a}).
> \end{align*}
> $$
> Then $\langle \alpha \rangle \sube \mathfrak{a}$ so since we are in a [[Containment-division ring]], $\langle \alpha \rangle = \mathfrak{a}\mathfrak{b}$ for some ideal $\mathfrak{b} \trianglelefteq \mathcal{O}_{K}$,
> whence $[\mathfrak{b}]= c$.
> By multiplicativity of the norm,
> $\opn N(\mathfrak{b}) = \abs{\opn N(\alpha)} / \opn N(\mathfrak{a}) \leq M_{K}$, proving [[#^P1]].
> 
> [[#^P2]] follows directly from [[#^P1]] and [[Absolute norm of an ideal of the ring of integers of a number field#^P3]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

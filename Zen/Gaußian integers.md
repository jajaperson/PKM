---
tags:
  - public
mathLink: $\mathbb Z[i]$
---
[[Number theory MOC]]
# Gaußian integers

The **Gaußian integers** $\mathbb{Z}[i]$ are a [[Integers]] [[Adjunction of a ring|adjoin]] the imaginary unit $i$, #m/def/num 
hence the [[Lattice subgroup#Classical lattice|lattice]] spanned by $\{ 1,i \}$ in [[Complex numbers]].
They form a [[Euclidean domain]] under the [[Complex quadrance|quadrance]]
$$
\begin{align*}
\opn N(a + bi) = (a+bi)(a-bi) = a^2 + b^2 = \abs{a+bi}^2
\end{align*}
$$
meaning if $x,y \in \mathbb{Z}[i]$ with $b \neq 0$ there exist elements $q,r \in \mathbb{Z}[i]$ such that $a=qb+r$ and $\opn N(r)< \opn N(y).$


> [!check]- Proof of Euclidean domain
> Let $x,y \in \mathbb{Z}[i]$ and let $q$ be a lattice point such that
> $$
> \begin{align*}
> \opn N\left( \frac{x}{y} - q \right) \leq \frac{1}{2}
> \end{align*}
> $$
> Let $r = x - yq$.
> Then
> $$
> \begin{align*}
> \opn N(r) = \opn N(x-yq) = \opn N\left( y\left( \frac{x}{y} - q \right) \right) = \opn N(y) \opn Q\left( \frac{x}{y} - q \right) \leq \frac{1}{2}\opn N(y) < \opn N(y) 
> \end{align*}
> $$
> as required. <span class="QED"/>

## Properties

1. The [[Group of units|group of units]] is $\mathbb{Z}[i]^\times = \{ 1,i, -1, -i \}$ ^P1

> [!check]- Proof of 1
> Suppose $a+bi \in \mathbb{Z}[i]$ is a unit, so $(a+bi)(c+di) = 1$ for some $c,d \in \mathbb{Z}$.
> Then $\opn N(a+bi)\opn N(c+di) = 1$ whence $\opn N(a+bi) = 1$ so $a,b \in \{ 1,i,-1,-i \}$,
> proving [[#^P1]]. <span class="QED"/>

#
---
#state/tidy  | #lang/en | #SemBr

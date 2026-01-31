---
tags:
  - public
aliases:
  - root of unity
---
[[Algebraic number theory MOC]]
# Cyclotomic field

A **cyclotomic field** $K_{m} :=\mathbb{Q}(\zeta_{m})$ is a [[number field]] obtained by [[Adjunction of a ring|adjoining]] a primitive $m$th root of unity, #m/def/num/alg
i.e. $\zeta_{m} = \mathrm{e}^{2\pi i / m}$,
or equivalently, the [[splitting field]] of the [[separable polynomial]]
$$
\begin{align*}
x^n - 1.
\end{align*}
$$
It follows that $K_{m} : \mathbb{Q}$ is a [[Galois extension#Finite Galois extension]], with $\Gal(K_{m} : \mathbb{Q}) = \mathbb{Z}_{m}^\times$
and degree $\phi(m)$ given by the [[Euler totient function]].
The defining minimal polynomial of such a field is the so-called [[Cyclotomic polynomial]].

- Its [[Algebraic integer|ring of integers]] are the [[Cyclotomic integers]] $\mathbb{Z}[\zeta_{m}]$.
- See [[Group of roots of unity]]

This is especially well-behaved when $m$ is a prime power, see [[Prime power cyclotomic field]].

## Properties

1. The [[Discriminant of an algebraic integer|discriminant]] $\Delta_{K_{m}:\mathbb{Q}}(\zeta_{m})$ divides $m^{\phi(m)}$.[^1] ^P1

> [!check]- Proof of 1.
> Since $\Phi_{m}(x) \mid (x^m - 1)$, it follows $x^m-1 = \Phi_{m}(x)\,g(x)$ for some $g(x) \in \mathbb{Z}[x]$. Then
> $$
> \begin{align*}
> m \zeta_{m}^{m-1} = \Phi'_{m}(\zeta_{m})\,g(\zeta_{m})
> \end{align*}
> $$
> since $\Phi_{m}(\zeta_{m})=0$.
> Taking the norm of both sides
> $$
> \begin{align*}
> m^{\phi(m)} &= \opn N_{K_{m}:\mathbb{Q}}(\Phi'_{m}(\zeta_{m})) \, \opn N_{K_{m}:\mathbb{Q}}(g(\zeta_{m})) \\
> &= \pm \Delta_{K_{m}: \mathbb{Q}}(\zeta_{m}) \, \opn N_{K_{m}:\mathbb{Q}}(g(\zeta_{m}))
> \end{align*}
> $$
> where $\opn N_{K_{m}:\mathbb{Q}}(g(\zeta_{m})) \in \mathbb{Z}$, proving [[#^P1]]. <span class="QED"/>

  [^1]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], §2.4.1, p. 47

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Representation theory of finite symmetric groups]]
# Symmetrizer and antisymmetrizer elements

The **symmetrizer** and **antisymmetrizer** are [[Idempotent of the complex group ring|essential idempotents of the complex group ring]] $\mathbb{C}[S_{n}]$ of the [[symmetric group]] $S_{n}$, defined as follows #m/def/rep/sym
$$
\begin{align*}
\mathfrak{s} = \sum_{p \in S_{n}} \delta_{p} \qquad \qquad \mathfrak{a} = \sum_{p \in S_{n}} \sgn(p) \delta_{p}
\end{align*}
$$
The symmetrizer $\mathfrak{s}$ generates the [[Trivial irrep carrying ideal of the group ring|left ideäl carrying the trivial representation]],
whereas the antisymmetrizer $\mathfrak{a}$ generates that carrying the [[alternating character]].

> [!check]- Proof
> For the symmetrizer see [[Trivial irrep carrying ideal of the group ring]].
> For the antisymmetrizer note
> $$
> \begin{align*}
> \mathfrak{a}^2 &= \sum_{p,q \in S_{n}} \sgn(p) \delta_{p} * \sgn(q) \delta_{q} \\
> &= \sum_{p,q \in S_{n}} \sgn(pq) \delta_{pq} \\
> &= n! \sum_{p \in S_{n}} \sgn (p) \delta_{p}\\
> &= n! \mathfrak{a}
> \end{align*}
> $$
> and for any $p \in S_{n}$ and $f \in \mathbb{C}[S_{n}]$
> $$
> \begin{align*}
> \Lambda(p) f * \mathfrak{a} &= \sum_{x,y \in S_{n}} f(x) \sgn (y) \delta_{pxy} \\
> &= \sum_{x,z \in S_{n}} f(x) \sgn(x^{-1}p^{-1}xz) \delta_{xz} \\
> &= \sgn(p) \sum_{x,z \in S_{n}} f(x) \sgn(z) \delta_{xz} \\
> &= \sgn(p) f * \mathfrak{a}
> \end{align*}
> $$
> where we used
> $$
> \begin{align*}
> \sgn x^{-1}p^{-1}xz &= \sgn x^{-1} \sgn p^{-1} \sgn x \sgn z \\
> &= \sgn x \sgn p \sgn x \sgn z \\
> &= (\underbrace{ \sgn x }_{ \pm 1 })^2 \sgn p \sgn z \\
> &= \sgn p \sgn z
> \end{align*}
> $$
> Thus $\mathfrak{a}$ generates the minimal ideäl carrying $\chi^\mathfrak{a}$.
> The nonequivalence of these irreps may also be shown using the [[Equivalence of irreps on left ideals criterion]]:
> For any $f \in \mathbb{C}[G]$,
> $$
> \begin{align*}
> \mathfrak{s}*f * \mathfrak{a} = \mathfrak{s}*\mathfrak{a} &= \sum_{p,q \in S_{n}} \sgn(q) \delta_{pq} \\&= \sum_{p \in S_{n}} \sgn(p) \sum_{q \in S_{n}} \sgn(pq) \delta_{pq} \\ &= \sum_{{p \in S_{n}}} \sgn(p) \mathfrak{a} \\
> &= 0
> \end{align*}
> $$
> since there exist equal even and odd permutations.
> <span class="QED"/>

The symmetrizer and antisymmetrizer elements fall into the more general category of [[Young operator|Young operators]], the former corresponding to the one-row diagram and the latter to the one-column diagram.

#
---
#state/develop | #lang/en | #SemBr

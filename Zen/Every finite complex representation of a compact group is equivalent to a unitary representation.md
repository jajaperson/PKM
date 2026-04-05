---
tags:
  - public
---
[[Unitary representation]]
# Every finite complex representation of a compact group is equivalent to a unitary representation

Let $G$ be a [[compact group]], $\mathfrak{X} : G \to \mathrm{GL}(V)$ be a representation carried by a finite-dimensional complex [[inner product space]] $V$.
Then $\mathfrak{X}$ is [[Equivalence of group representations|equivalent]] to a [[unitary representation]]. #m/thm/rep2
Alternatively, there always exists an inner product on $V$ for which $V$ is unitary.[^Simon]

> [!check]- Proof
> Let $\mu$ be the normalised [[Haar measure]] for $G$.
> We define
> $$
> \begin{align*}
> (v|w) =  \int_{G} \langle \mathfrak{X}(g)v | \mathfrak{X} (g) w\rangle \,d\mu(g)
> \end{align*}
> $$
> which is also an [[Inner product space|inner product]] on $V$ since
> 
> 1. **conjugate symmetry**
> $$
> \begin{align*}
> (v|w) &= \int_{G} \langle \mathfrak{X}(g)v | \mathfrak{X}(g)w \rangle \,d\mu(g) \\
> &= \int_{G} \overline{\langle \mathfrak{X}(g)w | \mathfrak{X}(g)v \rangle } \,d\mu(g) \\
> &= \overline{(w|v)}
> \end{align*}
> $$
> 2. **linear in second argument**
> $$
> \begin{align*}
> (v | \alpha w + \beta u)
> &= \int_{G} \langle \mathfrak{X}(g) v | \alpha \mathfrak{X}(g) w + \beta \mathfrak{X}(g) u \rangle \,d\mu(g) \\
> &= \alpha\int_{G} \langle \mathfrak{X}(g) v| \mathfrak{X}(g) w \rangle \,d\mu(g) + \beta\int_{G} \langle \mathfrak{X}(g) v| \mathfrak{X}(g) u \rangle \, d\mu(g) \\
> &= \alpha (v|w) + \beta(v|u)
> \end{align*}
> $$
> 3. **positive definite**
> $$
> \begin{align*}
> (v|v) = \int_{G} \underbrace{ \langle \mathfrak{X}(g) v| \mathfrak{X}(g) v \rangle }_{> 0}\,d\mu(g) > 0
> \end{align*}
> $$
> 
> Let $\{ v_{j} \}$ be an [[Orthonormal basis]] with respect to $\langle \cdot|\cdot \rangle$
> and $\{ w_{j} \}$ be an orthonormal basis with respect to $(\cdot|\cdot)$.
> Then there exists an invertible [[change of basis]] $S : V \to V$ with $Sw_{j} = v_{j}$,
> which is also a [[Change of inner product]] with $(v | w) = \langle Sv | Sw \rangle$.
> We define
> $$
> \begin{align*}
> \tilde{\mathfrak{X}}(g) = S\mathfrak{X}(g)S^{-1}
> \end{align*}
> $$
> which is [[Equivalence of group representations|equivalent]] to $\mathfrak{X}$, and [[Unitary representation|unitary]] since
> $$
> \begin{align*}
> \langle \tilde{\mathfrak{X}}(g) v| \tilde{\mathfrak{X}}(g)w \rangle
> &= \langle S\mathfrak{X}(g)S^{-1}v | S\mathfrak{X}(g)S^{-1}w \rangle \\
> &= (\mathfrak{X}(g) S^{-1}v | \mathfrak{X}(g) S^{-1} w) \\
> &= \int_{G} \langle \mathfrak{X}(hg) S^{-1}v | \mathfrak{X}(hg) S^{-1} w \rangle \,d\mu(h) \\
> &= \int_{G} \langle \mathfrak{X}(h) S^{-1}v | \mathfrak{X}(h) S^{-1} w \rangle \,d\mu(h) \\
> &= (S^{-1} v | S^{-1} w) \\
> &= \langle v| w \rangle 
> \end{align*}
> $$
> as required.[^keppler]
> <span class="QED"/>
> 
> [^keppler]: 2021, [[@keppelerGroupsRepresentations2023|Groups and representations]], pp. 21–22
> [^Simon]: 1996, [[Sources/@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], pp. 21–22

## Infinite, non–compact groups

A simple counterexample to this result for a nonfinite group may be achieved with $\mathfrak{X} : \mathbb{Z} \to \mathrm{GL}(\mathbb{C}) : n \mapsto a^n$ where $n \in \mathbb{C} \setminus \{ 0 \}$.
For $a \neq 1$ the representation is not unitary under the only inner product $\mathbb{C}$ supports $\langle z|w \rangle = z^*w$.[^Simon]

#
---
#state/tidy | #lang/en | #SemBr

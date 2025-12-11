---
tags:
  - public
---
[[Complex general linear group]]
# Every irrep of $\mathrm{GL}_{n}(\mathbb{C})$ is an irrep of $\mathrm{U}(n)$ and $\mathrm{SU}(n)$

Let $\Gamma : \mathrm{GL}_{n}(\mathbb{C}) \to \mathrm{GL}(V)$ be a finite-dimensional [[irrep]] of $\mathrm{GL}_{n}(\mathbb{C})$.
Then the restrictions $\Gamma \restriction \mathrm{U}(n)$ and $\Gamma \restriction \mathrm{SU}(n)$ are also irreps of $\mathrm{U}(n)$ and $\mathrm{SU}(n)$ respectively. #m/thm/rep/lie

> [!chec\Spanroof (sketch)
> [[A representation of a Lie group is reducible iff its infinitesimal representation is reducible]].
> We can give a basis to the Lie algebra of each group as follows
> $$
> \begin{align*}
> \mathfrak{su}(n) &= \Span \{ J_{j} \}_{j=1}^{2n-1} \\
> \mathfrak{u}(n) &= \Span \{ J_{j} \}_{j=0}^{2n-1}, J_{0} = \mathbb{1} \\
> \mathfrak{gl}_{n}(\mathbb{C}) &= \Span \{ J_{j}, iJ_{j} \}_{j=1}^{2n-1}
> \end{align*}
> $$
> hence clearly a block diagonalization of a representation of $\mathfrak{gl}_{n}(\mathbb{C})$ yields a block diagonalization of the restrictions to $\mathfrak{su}(n)$ and $\mathfrak{u}(n)$. 
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

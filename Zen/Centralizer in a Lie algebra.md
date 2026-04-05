---
tags:
  - public
---
[[Lie algebras MOC]]
# Centralizer in a Lie algebra

Let $\mathfrak{g}$ be a [[Lie algebra]] over $\mathbb{K}$ and $V \leq \mathfrak{g}$ be a [[vector subspace]].
The **centralizer** $\mathfrak{c}_{\mathfrak{g}}(V)$ of $V$ in $\mathfrak{g}$ is then the [[Lie subalgebra]] of elements giving zero bracket with all elements of $V$, #m/def/lie i.e.
$$
\begin{align*}
\mathfrak{c}_{\mathfrak{g}}(V) = \{ x \in \mathfrak{g} : [x,V] = 0 \}
\end{align*}
$$

> [!check]- Proof of Lie subalgebra
> Let $x, y \in \mathfrak{c}_{\mathfrak{g}}(V)$.
> By the [[Lie algebra#^Jacobi]] 
> $$
> \begin{align*}
> [[x,y], V] = [x,[y,V]] + [y,[V,x]] = 0
> \end{align*}
> $$
> whence $[x,y] \in \mathfrak{c}_{\mathfrak{g}}(V)$. <span class="QED"/>

A related notion is the [[Centre of a Lie algebra]] $\mathfrak{z}(\mathfrak{g}) = \mathfrak{c}_{\mathfrak{g}}(\mathfrak{g})$,
which includes only those elements that give zero bracket for all elements.
A weakening is the [[Normalizer in a Lie algebra]].

#
---
#state/tidy | #lang/en | #SemBr

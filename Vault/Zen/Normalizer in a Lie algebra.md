---
tags:
  - public
mathLink-blocks:
  self-normalizing: self-normalizing
---
[[Lie algebras MOC]]
# Normalizer in a Lie algebra

Let $\mathfrak{g}$ be a [[Lie algebra]] over $\mathbb{K}$ and $V \leq \mathfrak{g}$ be a [[vector subspace]].
The **normalizer** $\mathfrak{n}_{\mathfrak{g}}(V)$ of $V$ in $\mathfrak{g}$ is the [[Lie subalgebra]] of all elements whose [[Adjoint Lie algebra representation|adjoint representations]] leave $V$ invariant, #m/def/lie  i.e.
$$
\begin{align*}
\mathfrak{n}_{\mathfrak{g}}(V) = \{ x \in V : [x,V] \leq V \}
\end{align*}
$$

> [!check]- Proof of Lie subalgebra
> Let $x,y \in \mathfrak{n}_{\mathfrak{g}}(V)$.
> Then by the [[Lie algebra#^Jacobi]],
> $$
> \begin{align*}
> [[x,y], V] &= [x, [y,V]] + [y,[V,x]] \\
> &\sube [x,V] + [y,V] \sube V
> \end{align*}
> $$
> as required. <span class="QED"/>

A subalgebra is the [[Centralizer in a Lie algebra]] $\mathfrak{c}_{\mathfrak{g}}(V) \leq \mathfrak{n}_{\mathfrak{g}}(V)$.

## Further terminology

- A subalgebra $\mathfrak{h} \leq \mathfrak{g}$ is called **self-normalizing** iff $\mathfrak{n}_{\mathfrak{g}}(\mathfrak{h})= \mathfrak{h}$. ^self-normalizing

## Properties

1. $\mathfrak{n}_{\mathfrak{g}}(V) = \mathfrak{g}$ iff $V$ is a [[Lie algebra ideal]] of $\mathfrak{g}$

## See also

- [[Normalizer in a group]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Centre of the general linear group]]
# Scalar transformation criterion

Let $\mathbf{v}_{0},\dots,\mathbf{v}_{n}$ form a basis of a [[vector space]] $\mathbb{K}^{n+1}$,
and let $\mathbf{v}_{n+1} = \sum_{i=0}^n \mathbf{v}_{i}$.
Then $\Phi \in \mathrm{GL}(n+1, \mathbb{K})$ is a [[Centre of the general linear group|scalar transformation]] iff every $\mathbf{v}_{i}$ for $i = 0, \dots, n+1$ is an [[Eigenvectors, eigenvalues, and eigenspaces|eigenvector]]. #m/thm/linalg 
Thus, if all $\mathbf{v}_{i}$ are eigenvectors then they all have the same nonzero eigenvalue.

> [!check]- Proof
> Let $\lambda_{i}$ be the eigenvalue corresponding to $\mathbf{v}_{i}$.
> Then
> $$
> \begin{align*}
> \sum_{i=0}^n \lambda_{n+1}\mathbf{v}_{i} = \lambda _{n+1}\mathbf{v}_{n+1} &= \Phi(\mathbf{v}_{n+1}) = \Phi\left( \sum_{i=0}^n \mathbf{v}_{i} \right) = \sum_{i=0}^n \lambda_{i} \mathbf{v_{i}}
> \end{align*}
> $$
> and since the decomposition of a vector into basis vectors is unique,
> it follows $\lambda_{i} = \lambda_{n+1}$ for all $i = 0, \dots, n+1$.
> The converse is trivial, since every nonzero vector is an eigenvalue of a scalar transformation.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

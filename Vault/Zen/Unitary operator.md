---
aliases:
  - unitary matrix
  - unitary
tags:
  - public
---
[[Linear algebra MOC]]
# Unitary operator

A **unitary operator** is a [[Bounded operator|bounded linear operator]] $U : H \to H$ on a [[Hilbert space]] $H$ which preserves the inner product, #m/def/linalg 
i.e. for any $v,w \in H$
$$
\begin{align*}
\langle Uv|Uw \rangle = \langle v|w \rangle 
\end{align*}
$$
An equivalent condition is that the [[Hermitian conjugate]] of $U$ is its inverse, i.e.
$$
\begin{align*}
U^{\dagger}U = UU^{\dagger} = I
\end{align*}
$$

## Properties

Let $U$ be a unitary operator

- The [[Spectrum]] of $U$ lies on the unit circle, i.e. each [[Eigenvectors, eigenvalues, and eigenspaces|eigenvalue]] $\lambda$ has $\abs \lambda =1$.

### Matrix

Let $\mathbf{U}$ be a unitary matrix. Then

- Both the columns and rows of $\mathbf{U}$ form an [[Orthonormal basis]] with respect to the inner product.
- $\mathbf{U}$ is an isometry with respect to the [[Lebesgue space|2-norm]], i.e. $\norm{\mathbf{U} \vab v}_{2} = \|\vab v\|_{2}$ for all $\vab v \in \mathbb{C}^n$.

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Multilinear algebra MOC]]
# Tensor

A **$(p,q)$-tensor** on a finite-dimensional [[vector space]] $V$ is a multilinear object which “eats” $p$ [[Dual vector space|covectors]] and $q$ vectors and spits out a scalar. #m/def/linalg/multi
Thus a $(p,q)$-tensor $T$ on $V$ is a [[multilinear map]]
$$
\begin{align*}
T : \underbrace{ V^* \times \dots \times V^* }_{ p } \times \underbrace{ V \times \dots \times V }_{ q } \to \mathbb{K}
\end{align*}
$$
or equivalently, and element of the [[Tensor product of vector spaces|tensor product space]]
$$
\begin{align*}
T \in \underbrace{ V \otimes \dots \otimes V }_{ p } \otimes \underbrace{ V^* \otimes \dots \otimes V^* }_{ q } = \mathcal{T}^p_{q}
\end{align*}
$$

## Further terminology

- [[Symmetric tensor]]
- [[Antisymmetric tensor]]

#
---
#state/develop | #lang/en | #SemBr

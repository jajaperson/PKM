---
tags:
  - public
---
[[Representation operator]]
# Irreducible operators applied to an irreducible orthonormal basis

Let $U : G \to \mathrm{GL}(V)$ be a [[unitary representation]] with its [[Decomposition of a representation|decomposition into irreps]].
Let $\{ \mathcal{O}^\mu_{i} \}_{i=1}^{d_{\mu}}$ be [[Representation operator|irreducible operators]] transforming in $\Gamma^\mu$ and $\{ \ket{e^{\nu\alpha}_{j}} \}_{j=1}^{d_{\nu}}$ be an [[irreducible orthonormal basis]] transforming in $\Gamma^{\nu}$.
Then $\mathcal{O}^\mu_{i}\ket{e^{\nu\alpha}_{j}}$ transform under $G$ in the [[Tensor product of group representations|product representation]] $\Gamma^{\mu \otimes \nu}$ (within the same carrier space)
$$
\begin{align*}
U(g) \mathcal{O}^\mu_{i} \ket{e^{\nu\alpha}_{j}} &= U(g) \mathcal{O}^\mu_{i} U(g)^{\dagger} U(g) \ket{e^{\nu\alpha}_{j}} \\
&= \sum_{k} \mathcal{O}_{k}\Gamma^\mu_{ki}(g) \sum_{\ell} \ket{e^{\nu\alpha}_{\ell}}  \Gamma^{\nu}_{\ell j} \\
&= \sum_{k,\ell} \mathcal{O}_{k} \ket{e^{\nu\alpha}_{\ell}}  \Gamma^\mu_{ki}(g) \Gamma^{\nu}_{\ell j}
\end{align*}
$$
which may then be expanded in a decomposed reälization using the [[Clebsch-Gordan coëfficients]].
$$
\begin{align*}
\mathcal{O}^\mu_{i} \ket{e^{\nu\alpha}_{j}} = \ket{i,j} = \sum_{\lambda;\beta,\ell} \ket{\alpha,\lambda,\ell} \braket{ \alpha, \lambda, \ell | i,j }_{\mu \otimes \nu}   
\end{align*}
$$
giving rise to the [[Wigner-Eckart theorem]].

#
---
#state/tidy | #lang/en | #SemBr

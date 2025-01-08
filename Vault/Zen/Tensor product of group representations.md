---
aliases:
  - product representation
tags:
  - public
---
[[Group representation theory MOC]]
# Tensor product of representations

Given two representations $\Gamma : G \to \mathrm{GL}(V)$ and $\tilde{\Gamma} : G \to \mathrm{GL}(W)$,
the **tensor product** $\Gamma \otimes \tilde{\Gamma} : G \to \mathrm{GL(V \otimes W)}$ is defined using the [[tensor product of linear maps]] as
$$
\begin{align*}
(\Gamma \otimes \tilde{\Gamma})(g) = \Gamma(g) \otimes \tilde{\Gamma}(g)
\end{align*}
$$
We denote the tensor product of irreps as $\Gamma^\mu \otimes \Gamma^\nu = \Gamma^{\mu \otimes\nu}$.
The tensor product of irreps is in general reducible,
i.e. in matrix form diagonalisable, by
$$
\begin{align*}
\Gamma^{\mu \otimes \nu} \cong \bigoplus_{\gamma \in \hat{G}} n^\gamma_{\alpha,\beta} \Gamma^\gamma
\end{align*}
$$
See also [[Tensor product of Lie algebra representations]].

#
---
#state/develop | #lang/en | #SemBr

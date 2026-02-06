---
tags:
  - public
---
[[Orphan]]
# Pauli matrices

The **Pauli matrices** are a set of traceless involutive hermitian matrices with a number of nice properties
$$
\begin{align*}
\sigma_{1}=\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}, \qquad
\sigma_{2} = \begin{bmatrix}
0 & -i \\
i & 0
\end{bmatrix}, \qquad
\sigma_{3} = \begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
\end{align*}
$$
Notably these form a basis for the real vector space $\mathfrak{su}(2)$,
and with the addition of $\sigma_{0} = \mathbf{I}$, they form a basis for the complex vector space $\mathbb{C}^{2 \times 2}$.

## Properties

Here we use [[Einstein summation convention]].

1. **[[Linear commutator]]**: $[\sigma_{j},\sigma_{k}] = \sigma _{j}\sigma_{k}-\sigma_{k}\sigma_{j} = 2i\epsilon_{jk\ell}\sigma_{\ell}$ with [[Levi-Civita symbol]]
2. **[[Matrix anticommutator]]**: $\{ \sigma_{j}, \sigma_{k} \} = \sigma_{j}\sigma_{k} + \sigma_{k}\sigma_{j} = 2\delta_{jk}\mathbf{I}$
3. **Product**: $\sigma_{j}\sigma_{k} = \frac{1}{2}[\sigma_{j}, \sigma_{k}] + \frac{1}{2}\{ \sigma_{j},\sigma_{k} \} = \delta_{jk}\mathbf{I} + i\epsilon_{jk\ell} \sigma_{\ell}$


#
---
#state/develop | #lang/en | #SemBr

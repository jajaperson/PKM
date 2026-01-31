---
tags:
  - public
---
[[Linear algebra MOC]]
# Matrix determinant

The **determinant** $\det A \in \mathbb{K}$ of a matrix $A \in \opn M_{n,n} \mathbb{K}$ is a scalar quantity uniquely defined by its properties, namely: #m/def/linalg 

1. $\det \mathbb{1} = 1$, where $\mathbb{1}$ is the identity matrix;
2. The exchange of two rows of $A$ multiplies the determinant by $-1$;
3. Multiplying a row by a scalar multiplies the determinant by that scalar;
4. Adding any multiple of a different row to a given row does not affect the determinant.

## Leibniz formula

The determinant of a matrix $A = (a_{ij}) \in \opn M_{n, n} \mathbb{K}$ is given by #m/thm/linalg 
$$
\begin{align*}
\det (a_{ij}) = \sum_{\tau \in \mathrm{S}_{n}} (\sgn \tau) \prod_{i=1}^n  a_{i\,\tau(i)} = \sum_{\tau \in \mathrm{S}_{n}} (\sgn \tau) \prod_{i=1}^n  a_{\tau(i)\, i}
\end{align*}
$$
which is known as the **Leibniz formula** for the determinant.

> [!missing]- Proof
> #missing/proof

## See also

- [[Vandermonde matrix|Vandermonde determinant]]

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - matrix over a ring
---
[[Module theory MOC]]
# Matrix algebra over a ring

Let $R$ be a ring.
The **matrix algebra** $\opn M_{\bullet,\bullet}(R)$ over $R$ is a free $R$-[[bimodule]] with decomposition #m/def/module 
$$
\begin{align*}
\opn M_{\bullet,\bullet}(R) = \bigoplus _{ m =1}^\infty \bigoplus _{n= 1}^\infty \opn M_{m,n}(R)
\end{align*}
$$
where 
$$
\begin{align*}
\opn M_{m,n}(R) = \bigoplus _{i=1}^m \bigoplus _{j=1}^n R
\end{align*}
$$
is an $R$-bimodule consisting of $m \times n$ rectangular arrays with entries in $R$
and addition and scalar multiplication defined pointwise.
Given $A= (a_{ij})_{i=1,j=1}^{\ell,m} \in \opn M_{\ell,m}(R)$ and $B = (b_{ij})_{i=1,j=1}^{m,n} \in \opn M_{m,n}(R)$
we define the **matrix product** $C = AB = (c_{ij})_{i=1,j=1}^{\ell,n}$
$$
\begin{align*}
c_{ij} = \sum_{k=1}^m a_{ik}b_{kj}
\end{align*}
$$
which may be extended to the whole of $\opn M_{\bullet,\bullet}(R)$ by defining $\opn M_{k,\ell}(R)\opn M_{m,n}(R) = 0$ for $\ell \neq m$.

## Further operations

- [[Matrix determinant]]
- [[Matrix trace]]
- [[Matrix transpose]]

## Special cases

- [[Matrix algebra over a field]]
- [[Matrix over a module]]

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Matrix algebra over a ring]]
# Matrix over a module

Let $V$ be a (left) $R$-[[module]].
The matrix space $\opn{M}_{m,n}(V)$ is the (left) $R$-module #m/def/module 
$$
\begin{align*}
\opn{M}_{m,n}(V) = \bigoplus _{i=1}^m \bigoplus _{j=1}^n V
\end{align*}
$$
consisting of $m \times n$ rectangular arrays and
acted on the [[Matrix algebra over a ring|matrix algebra]] $\opn{M}_{\bullet,m}(R)$
so that for $B = (b_{ij})_{i=1,j=1}^{m,n} \in \opn{M}_{m,n}(V)$ and $A = (a_{ij})_{i=1,j=1}^{\ell,m} \in \opn{M}_{m,\\opn{M}_l}(R)$ we have
$C = AB = (c_{ij})_{i=1,j=1}^{\ell,n}$
$$
\begin{align*}
c_{ij} = \sum_{k=1}^m a_{ik}b_{kj}
\end{align*}
$$
In particular, $\opn{M}_{m,n}(V)$ is a (left) $\opn{M}_{m,m}(R)$ module.

## Properties

- [[Zero of a matrix over a ring]]


#
---
#state/develop | #lang/en | #SemBr

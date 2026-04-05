---
tags:
  - public
aliases:
  - generalized eigenspace
---
[[Eigenvectors, eigenvalues, and eigenspaces]]
# Generalized eigenvector
A **generalized eigenvector** fulfils a more relaxed condition than a regular eigenvector.
If $V$ is a $\mathbb{K}$-vector space and $A \in \End_{\mathbb{K}}V$,
then a vector $w \in V$ is a generalized eigenvector of rank $m$ and eigenvalue $\lambda$ iff
$$
\begin{align*}
(A - \lambda 1_{V})^m w = \vab 0
\end{align*}
$$
and $m \in \mathbb{N}$ is the minimum integer such that the equation is satisfied.
Thus regular eigenvectors are subsumed as generalized eigenvectors of rank 1.
When the rank is left unspecified, the requirement is rather that there exists _some_ $m \in \mathbb{N}$ for which the above holds, and we define
$$
\begin{align*}
\opn{\tilde{E}}_{\lambda}V = \{ v \in V : (\exists m \in \mathbb{N})[(A-\lambda1_{V})^m = 0] \}
\end{align*}
$$
as the **generalized eigenspace**

> [!tip]- Finding eigenvectors of rank 2
> For generalised eigenvectors of rank 2,
> if a regular eigenvector $\vab v \in E_{\lambda}(A)$ is already known,
> the following equation can be solved for $\vab w$
> $$
> \begin{align*}
> (A - \lambda I)\vab w = \vab v
> \end{align*}
> $$
> 

## Properties

- [[Generalized eigenspace decomposition]]

#
---
#state/tidy| #lang/en | #SemBr

---
aliases:
  - An abelian representation is a sum of 1-dimensional irreps
tags:
  - public
---
[[Group representation theory MOC]]
# Abelian representation

An **abelian representation** $\Gamma : G \to \mathrm{GL}(V)$ is a representation whose range $\Gamma (G) \sube \mathrm{GL}(V)$ is abelian, #m/def/rep 
i.e. for all $g,h \in G$
$$
\begin{align*}
\Gamma(gh)= \Gamma(g)\Gamma(h) = \Gamma(h)\Gamma(g) = \Gamma(hg)
\end{align*}
$$

## Main theorem

A representation $\Gamma: G \to \mathrm{GL}(V)$ is abelian iff it is the direct sum of [[1-dimensional irrep]]. #m/thm/rep 

> [!check]- Proof
> If $\Gamma \cong \bigoplus_{k \in \hat{A}} a_{k} \chi^k$ then it is immediately abelian since there exists a reälization in which matrices are simultaneously [[Types of square matrix|diagonal]], and hence commute.
> Conversely, Let $V = \bigoplus V_{i}$ be the decomposition of $V$ into irreducible invariant subspaces.
> Since $\Gamma$ is abelian in each of these subspaces, the irrep carried thereby [[Irreps of abelian groups are 1-dimensional|they must be 1-dimensional]].
> Hence $\Gamma$ is the direct sum of 1-dimensional irreps.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

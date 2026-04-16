---
tags:
  - public
---
[[Quiver representation theory MOC]]
# Quiver

A **quiver** is, loosely speaking, a [[category]] minus the algebra #m/def/quiv — the [[oidification]] of a [[set]].

## Category theoretic definition

[[The walking]] quiver $\cat Q$ to is the [[category]] consisting of objects $E,V$ of edges and nodes and non-identity morphism $s,t : E \to V$ of source and target.
A quiver is then a [[functor]] $\Gamma : \cat Q \to \Set$.

## Notation
We use the notation
$$
\begin{align*}
\Gamma(v,w) = \{ e \in \Gamma(E) : s(e) = v, t(e) = w \}
\end{align*}
$$
to denote the set of edges between vertices $v$ and $w$.
As an abuse, we often identify $\Gamma$ with its underlying [[Graph|general graph]].
See [[Equivalence of quivers and general graphs]].

- A morphism of the [[free category]] $\underline \Gamma$ is called a **path**.

## See also

- [[Quiver representation theory MOC]]
- [[Adjacency matrix]]


#
---
#state/develop | #lang/en | #SemBr

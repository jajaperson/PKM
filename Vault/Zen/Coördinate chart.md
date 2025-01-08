---
aliases:
  - local parameterization
  - chart
tags:
  - public
---
[[Manifold]]
# Coördinate chart

A **coördinate chart** $(U,\varphi)$ translates between a manifold and the section of Euclidean space it resembles.
In a [[topological manifold]], the most basic kind of manifold, every point has a [[Topological manifold|Euclidean neighbourhood]] $U$.
A [[homeomorphism]] $\varphi$ between $U$ and an open subspace $V$ of $\mathbb{R}^n$ is called a **chart**. #m/def/geo 
$$
\begin{align*}
\varphi : U \sube X \twoheadrightarrowtail V \sube \mathbb{R}^n
\end{align*}
$$
Alternatively a chart is an [[embedding]] of $U$ in $\mathbb{R}^n$.
The inverse $\varphi^{-1} : V \sube \mathbb{R}^n \twoheadrightarrowtail U \sube X$ is called a **local parameterization** of $U$,
and setting $\varphi^{-1}(0) = x$ gives a local parameterization at $x$.
A collection of charts covering a whole manifold is called an [[atlas]].

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Affine connexion]]
# Parallel transport

In an [[affine space]], the “tangent space” at every point is identical, and encodes translations.
Thus we may freely transport vectors based at a point $p_{1}$ to vectors based at a point $p_{2}$,
maintaining parallelism.
For a “locally affine” space — a $C^\alpha$-[[Differentiable manifold|manifold]] — this is made possible by the data of an [[affine connexion]].

## Definition
Let $\gamma : I \to M$ be a $C^\alpha$-curve with tangent vector $\dot{\gamma}^a$,
and let $v^a$ be an assignment of a vector at each point along the curve.
We say that $v^a$ is **parallelly transported** along $\gamma$ iff #m/def/geo/diff 
$$
\begin{align*}
\dot{\gamma}^a \, \nabla_{a}v^b = 0
\end{align*}
$$
all along the curve.
Choosing [[Coördinate chart|local coördinates]] $x : U \to \mathbb{R}^m$ and taking the [[Connexion disagreement tensor|connexion coëfficients]] this becomes
$$
\begin{align*}
\dot{\gamma}^a \, \partial_{a} v^b + \dot{\gamma}^a\, \Gamma^b{}_{ac} \,v^c = 0
\end{align*}
$$
or in components
$$
\begin{align*}
\dot{v} +  \dot{\gamma}^\mu \, \Gamma^\nu{}_{\mu\lambda} \, v^\lambda = 0.
\end{align*}
$$
It follows from the [[existence and uniqueness theorem]] that the parallel transport of a vector along a given curve is unique.

## Remarks

- The [[Levi-Civita connexion]] is chosen precisely so that it is [[Torsion tensor|torsion-free]] and the inner product of vectors is preserved as they are parallelly transported together.

#
---
#state/tidy | #lang/en | #SemBr

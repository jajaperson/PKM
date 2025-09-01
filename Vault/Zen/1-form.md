---
tags:
  - public
---
[[Differential geometry MOC]]
# 1-form

Let $(M, \mathscr{A})$ be a $C^\alpha$-[[Differentiable manifold|manifold]].
A $C^\alpha$-**1-form** or **covector field** is something which eats [[vector field|vector fields]] and spits out scalar fields.
This can be formalized as a [[Bundle section|section]] of the [[cotangent bundle]], #m/def/geo/diff 
or equivalently as a $C^\alpha(M)$-[[module homomorphism]]
$$
\begin{align*}
\opn{Vect}(M) \to C^\alpha(M)
\end{align*}
$$
As a special case of [[differential form]], we denote the set of 1-forms on $M$ as
$$
\begin{align*}
\Omega^1(M) := \Gamma(T^*M) = \lMod{C^\alpha(M)}(\opn{Vect}(M), C^\alpha(M)).
\end{align*}
$$
At a point, each 1-form restricts to an $\mathbb{R}$-[[linear form]] on the tangent space, i.e. a [[Cotangent space|cotangent vector]].



---
#state/develop | #lang/en | #SemBr

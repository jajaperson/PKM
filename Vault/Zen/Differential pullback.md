---
tags:
  - public
---
[[Differential geometry MOC]]
# Differential pullback

Let $\varphi : M \to N$ be a morphism of $C^\alpha$-[[Differentiable manifold|manifolds]].
The **pullback** $\varphi^*$ is an operation for “pulling back” data defined on $N$ to data defined on $M$.
Usually this corresponds to some kind of precomposition in the sense of [[Pushforward and pullback of morphisms]].

## Of a scalar field

Let $f \in C^\alpha(N)$ be a [[scalar field]] on $N$.
The **pullback** $\varphi^*f \in C^\alpha(M)$ is a scalar field defined by #m/def/geo/diff 
$$
\begin{align*}
(\varphi^*f)(p) := f(\varphi(p))
\end{align*}
$$
for $p \in M$, i.e. $\varphi^* f = f \circ \varphi$.


## Of a contravariant vector field

The above may be viewed as a special case of the following.
Let $\omega \in \mathcal{T}^0_{p}(M)$ be a totally contravariant [[tensor field]].
The **pullback** $\varphi^* \omega \in \Omega^p(M)$ is the differential form defined by #m/def/geo/diff 
$$
\begin{align*}
(\varphi^*\omega)(v_{1}, \dots, v_{p}) := \omega(\varphi_{*}v_{1}, \dots, \varphi_{*} v_{p})
\end{align*}
$$
for [[vector field|vector fields]] $v_{1}, \dots, v_{p} \in \mathfrak{X}(M)$,
where $\varphi_{*}$ denotes the [[differential pushforward]].

## Related

- [[Differential pushforward]]

#
---
#state/develop | #lang/en | #SemBr

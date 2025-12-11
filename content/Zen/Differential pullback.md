---
tags:
  - public
---
[[Differential geometry MOC]]
# Differential pullback

Let $\varphi : M \to N$ be a $C^\alpha$-map.
The **pullback** $\varphi^*$ is an operation for “pulling back” data defined on $N$ to data defined on $M$.
Usually this corresponds to some kind of precomposition in the sense of [[Pushforward and pullback of morphisms]].

## Differential pullback of a scalar field

Let $f \in C^\alpha(N)$ be a [[scalar field]] on $N$.
The **pullback** $\varphi^*f \in C^\alpha(M)$ is defined by #m/def/geo/diff 
$$
\begin{align*}
(\varphi^*f)(p) := f(\varphi(p))
\end{align*}
$$
for $p \in M$, i.e. $\varphi^* f = f \circ \varphi$.


## Differential pullback of a covariant tensor field

The above may be viewed as a special case of the following.
Let $\omega \in \mathcal{T}^0_{p}(N)$ be a totally covariant [[tensor field]].
The **pullback** $\varphi^* \omega \in \mathcal{T}^0_{p}(M)$ is defined by #m/def/geo/diff 
$$
\begin{align*}
(\varphi^*\omega)_{a_{1}\cdots a_{p}} (v_{1})^{a_{1}} \cdots (v_{p})^{a_{p}} := \omega_{a_{1} \cdots a_{p}} (\varphi_{*}v_{1})^{a_{1}} \cdots (\varphi_{*}v_{p})^{a_{p}}
\end{align*}
$$
for [[vector field|vector fields]] $(v_{1})^a, \dots, (v_{p})^a \in \mathfrak{X}(M)$,
where $\varphi_{*}$ denotes the [[Differential pushforward#Differential pushforward of a vector field]].

For mixed tensor fields it is in general not possible to define the pushforward,
except for the special case of the [[Differential pullback along a diffeomorphism]].

## Related

- [[Tangent map]]

#
---
#state/develop | #lang/en | #SemBr

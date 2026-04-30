---
tags:
  - public
---
[[Differential geometry MOC]]
# Differential pushforward

Let $\varphi : M \to N$ be a $C^\alpha$-map.
The **pushforward** $\varphi_{*}$ is an operation for “pushing forward” data defined on $M$ to data defined on $N$.
Usually this corresponds to some kind of postcomposition in the sense of [[Pushforward and pullback of morphisms]].

## Differential pushforward of a vector field

Let $v \in \mathfrak{X}(M)$ be a [[vector field]] on $M$.
As a derivation on $C^\alpha(N)$, the **pushforward** $\varphi_{*} v \in \mathfrak{X}(N)$ is defined by #m/def/geo/diff
$$
\begin{align*}
(\varphi_{*}v)(f) = v(\varphi^* f)
\end{align*}
$$
where $\varphi^* f = f \circ \varphi$ is the [[Differential pullback#Differential pullback of a scalar field]] $f \in C^\alpha(M)$.
This is equivalent to the [[Tangent map]] acting on the tangent space or bundle of $M$.

## Differential pushforward of a contravariant tensor field

The above may be viewed as a special case of the following.
Let $T \in \mathcal{T}^p_{0}(M)$ be a totally contravariant [[tensor field]].
The **pushforward** $\varphi_{*}T \in \mathcal{T}^p_{0}(N)$ is defined by #m/def/geo/diff 
$$
\begin{align*}
(\varphi_{*}T)^{a_{1}\cdots a_{p}}(\omega_{1})_{a_{1}} \cdots (\omega_{p})_{a_{p}} := T^{a_{1}\cdots a_{p}} (\varphi^* \omega_{1})_{a_{1}} \cdots (\varphi^* \omega_{p})_{a_{p}}
\end{align*}
$$
for [[1-form|1-forms]] $(\omega_{1})_{a}, \dots, (\omega_{p})_{a} \in \Omega^1(M)$,
where $\varphi^*$ denotes the [[Differential pullback#Differential pullback of a covariant tensor field|differential pullback of a 1-form]].

For mixed tensor fields it is in general not possible to define the pushforward,
except for the special case of the [[Differential pullback along a diffeomorphism]].

## Related

- [[Tangent map]]

#
---
#state/tidy | #lang/en | #SemBr

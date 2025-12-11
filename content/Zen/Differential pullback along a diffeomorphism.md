---
tags:
  - public
---
[[Differential geometry MOC]]
# Differential pullback along a diffeomorphism

Let $\varphi : M \to N$ be a $C^\alpha$-[[diffeomorphism]].
For a mixed [[tensor field]] $T^{a_{1} \cdots a_{p}}{}_{b_{1} \cdots b_{q}} \in \mathcal{T}^p_{q}(N)$,
the [[Differential pullback|pullback]] $\varphi_{*}T^{a_{1}\cdots a_{p}}_{b_{1}\cdots b_{q}} \in \mathcal{T}^p_{q}(M)$ is defined by #m/def/geo/diff
$$
\begin{align*}
(\varphi^{*}T)^{a_{1} \cdots a_{p}}_{b_{1} \cdots b_{q}} (\omega_{1})_{a_{1}} \cdots (\omega_{p})_{a_{p}} (v_{1})^{b_{1}} \cdots (v_{q})^{b_{q}} 
= T^{a_{1} \cdots a_{p}}_{b_{1} \cdots b_{q}} (\varphi_{*}\omega_{1})_{a_{1}} \cdots ((\varphi^{-1})^* v_{q})^{b_{q}}.
\end{align*}
$$
The [[Differential pushforward|pushforward]] can be defined via the inverse so that
$$
\begin{align*}
(\varphi^{-1})_{*} = \varphi_{*} : \mathcal{T}^p_{q}(N) \to \mathcal{T}^p_{q}(M).
\end{align*}
$$

## Further terminology

- If $\varphi \in \Aut_{\Man^\alpha}(M)$ and $\varphi^{*}T = T$, we say $\varphi$ is a **symmetry transformation** of the tensor field $T$.
- In the particular case $\varphi^*g = g$ for the [[Semi-Riemannian manifold|metric tensor]], we say $\varphi$ is an **isometry** of $M$.

#
---
#state/tidy | #lang/en | #SemBr

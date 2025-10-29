---
aliases:
  - integral curve
  - flow
tags:
  - public
---
[[Diffeomorphism]]
# Flow on a manifold

Let $M$ be a $C^\alpha$-[[Differentiable manifold|manifold]] with [[Diffeomorphism|group of diffeomorphisms]] $\Aut^\alpha(M)$.
A (local) [[1-parameter group]] $\varphi^? : \mathbb{R} \to \Aut^\alpha(M)$ is called a (local) **flow** on $M$. #m/def/geo/diff 
The [[Group action orbit|orbit]] of a point $p \in M$ defines a $C^\alpha$-curve 
$$
\begin{align*}
\gamma = \varphi^?(p): (\epsilon_{-},\epsilon_{+}) \to M
\end{align*}
$$
with $\gamma(0) = p$.
The map
$$
\begin{align*}
p \mapsto \dot{\gamma}(0) = \left. \frac{\mathrm{d}}{\mathrm{d}t} \varphi^t(p) \right|_{t=0}
\end{align*}
$$
defines a $C^\alpha$-[[vector field]] $v^a \in \mathfrak{X}(M)$, called the **infinitesimal generator** of $\varphi^?$.


Conversely, given a vector field $v^a \in \mathfrak{X}(M)$, one can (usually) find a corresponding local flow whose orbits are called **integral curves**.

#
---
#state/develop | #lang/en | #SemBr

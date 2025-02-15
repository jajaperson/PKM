---
tags:
  - public
---
[[Geometric algebra MOC]]
# Quotient quadratic space

Let $V$ be a [[quadratic space]] and $U \trianglelefteq V$ be a [[Normal quadratic subspace|normal subspace]].
The **quotient quadratic space** $V / U$ is the corresponding [[quotient vector space]] with the (well-defined) quadratic form #m/def/geoalg 
$$
\begin{align*}
q(v+U) = q(v)
\end{align*}
$$

## Properties

1. The quotient vector space $V / U$ has a well-defined quadratic form iff $U$ is a normal [[Normal quadratic subspace|normal subspace]]. ^P1

> [!check]- Proof of 1.
> For the quadratic form to be well defined, we require $q(v+u)=q(v)$ for all $v \in V$ and $u \in U$.
> Equivalently
> $$
> \begin{align*}
> 0 = q(v+u) - q(v) = b_{q}(v,u) + q(u) 
> \end{align*}
> $$
> for all $v \in V$ and $u \in U$.
> This includes, however, that $0 = q(0+u) = q(u)$,
> so any such $u$ must be both [[Quadratic space#^nondegenerate|degenerate]] and [[Quadratic space#^isotropic]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

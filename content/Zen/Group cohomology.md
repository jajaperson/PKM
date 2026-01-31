---
tags:
  - public
---
[[Homological algebra MOC]]
# Group cohomology

To a [[group]] $G$ and a [[Module|$\mathbb Z[G]$-module]] we associate the [[Chain complex|cochain complex]] $(C^\bullet(G,M), d^\bullet)$ #m/def/homology  where the $k$-**cochains** 
$$
\begin{align*}
C^k(G,M) = \Set(G^k, M)
\end{align*}
$$
are functions $\alpha : G^k \to M$ and the **coboundary operators**
$$
\begin{align*}
d^{k+1}: C^k(G,M) &\to C^{k+1}(G,M)
\end{align*}
$$
are defined by the rather unwieldy formula
$$
\begin{align*}
d^{k+1} \alpha(g_{1}, \vdots, g_{k+1}) = g_{1}\alpha(g_{1},\vdots,g_{k+1}) + \sum_{i=1}^{k+1}(-1)^i \alpha(g_{1},\vdots,g_{i-1},g_{i}g_{i+1},g_{i+2},\vdots,g_{k+1})
\end{align*}
$$
where we interpret $g_{k+2} = e$.

## See also

- [[Central group extension]]

#
---
#state/develop | #lang/en | #SemBr

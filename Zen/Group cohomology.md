---
tags:
  - public
---
[[Homological algebra MOC]]
# Group cohomology



## Cochain complex

To a [[group]] $G$ and a [[Module|$\mathbb ZG$-module]] $M$ we associate the [[Chain complex|cochain complex]] $(C^\bullet(G,M), d^\bullet)$  where the $k$-**cochains** 
$$
\begin{align*}
C^k(G,M) = \Set(G^k, M)
\end{align*}
$$
are functions $\alpha : G^k \to M$.
For each $k \in \mathbb{N}$, the **coboundary operator**
$$
\begin{align*}
\mathrm{d}^\imp{k+1}: C^k(G,M) &\to C^{k+1}(G,M)
\end{align*}
$$
acts as follows:
Given a $k$-cochain $\alpha$,
the $(k+1)$-cochain $\mathrm{d}\alpha$ takes $(g_{1},\dots,g_{k+1})$ to the alternating sum
$$
\begin{align*}
g_{1} \alpha(g_{2}, \dots , g_{k+1}) + \sum_{i=1}^k (-1)^k \alpha(g_{1},\dots,g_{i}g_{i+1},\dots, g_{k+1}) + (-1)^k \alpha(g_{1},\dots,g_{k}).
\end{align*}
$$

## Special cases

- [[Second cohomology of a group with coëfficients in an abelian group]]

## See also

- [[Central group extension]]

#
---
#state/develop | #lang/en | #SemBr

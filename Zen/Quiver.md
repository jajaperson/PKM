---
tags:
  - public
mathLink-blocks:
  presheaf: quivers as presheaves
---
[[Graph theory MOC]]
# Quiver

A quiver is, loosely speaking, a (strict) [[category]] minus the algebra — the [[oidification]] of a [[set]].
A <dfn>quiver</dfn>[^1] $\Gamma$ consists of #m/def/quiv 

- A [[set]] $\Gamma_{0}$ of vertices;
- For any pair of vertices, a [[set]] $\Gamma(v,w)$ of edges.

These data are conveniently packaged as a [[presheaf]] $\Gamma : \op{\underline{\Theta_{2}}} \to \Set$ on the 2-[[Kronecker category]] $\underline{\Theta_{2}}$,
also called <dfn>the walking quiver</dfn>:
We take $\Gamma_{0} = \Gamma(0)$, and if $s$ and $t$, for source and target, are the non-identity morphisms of $\underline{\Theta_{2}}$
then
^presheaf

$$
\begin{align*}
\Gamma(v,w) = \{ e \in \Gamma_{1} : \Gamma s(e) = v, \Gamma t(e) = w \}
\end{align*}
$$


## Further terminology

-  A morphism of the [[free category]] $\underline \Gamma$ is called a **path** of $\Gamma$.

## See also

- [[Category of quivers]]
- [[Quiver representation theory MOC]]
- [[Adjacency matrix]]
- [[Quiver weight vector]]


## Particular quivers

- $n$-[[Kronecker quiver]] $\Theta_{n}$.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: A calque of German _Köcher_.

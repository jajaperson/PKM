---
aliases:
  - local group
tags:
  - public
---
[[Orphan]]
# Local topological group

A **local topological group** or **local group**  is a [[topological space]] which behaves like a [[topological group]] sufficiently close to a distinguished identity element. #m/def/topology 
Formally a local group $(X, \mathcal{T}, e, \Theta, \Omega, i, m)$ consists of a topological space $(X, \mathcal{T})$,
open subets $\Theta \sube G$ and $\Omega \sube G \times G$,
a distinguished identity element $e \in \Theta \sube G$,
and [[Continuity|continuous]] functions $i : \Theta \to \Theta$ and $m : \Omega \to G$
such that

1. $(e,g), (g,e) \in \Omega$ and $m(e,g)= m(g,e) = g$ for all $g \in G$ (identity) ^A1
2. if $(g,h), (h,t), (m(g,h),t), (g,m(h,t)) \in \Omega$ then $m(m(g,h),t) = m(g,(h,t))$ (associativity) ^A2
3. $(g,i(g)), (i(g), g) \in \Omega$ with $m(g,i(g)) = m(i(g),g) = e$ for all $g \in G$ (inverse) ^A3

Hence $G$ needn't be closed under $m$.

#
---
#state/tidy | #lang/en | #SemBr

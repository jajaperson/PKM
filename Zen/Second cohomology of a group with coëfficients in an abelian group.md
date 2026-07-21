---
date: 2026-07-17
mathLink-blocks:
  2-cocycle: 2-cocycle
  2-coboundary: 2-coboundary
tags:
  - public
---
[[Group cohomology]]
# Second cohomology of a group with coëfficients in an abelian group

Given a group $G$ and an abelian group $B$,
we may consider $B$ as a $\mathbb{Z}G$-module with $G$ acting trivially,
and therefore the [[Group cohomology|cohomology]] of $G$ with coëfficents in $B$.
In the resulting second chain complex,
the 2-cochains $C^2(A,B)$ are maps[^1988]
$$
\begin{align*}
\varepsilon_{0} : A \times A \to B
\end{align*}
$$
and the 2-cocycles $Z^2(G, B)$ are 2-cochains such that
$$
\begin{align*}
\varepsilon_{0}(a,b) + \varepsilon_{0}(ab,c) &= \varepsilon_{0}(b,c) + \varepsilon_{0}(a,bc) & \forall a,b,c \in G
\end{align*}
$$
^2-cocycle

and the 2-coboundaries $B^2(G,B)$ are 2-cochains such that
$$
\begin{align*}
\varepsilon_{0}(ab) &= \eta(ab) - \eta(a) - \eta(b) & \forall a,b \in G
\end{align*}
$$
^2-coboundary

for some 1-cochain $\eta : A \to B$.
Thus, in particular, $\mathbb{Z}$-[[Multilinear map|bilinear]] maps $A \times A \to B$ are 2-cocycles.
Thus
$$
\begin{align*}
H^2(A,B) = Z^2(A,B) / B^2(A, B).
\end{align*}
$$

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.1, p. 103

#
---
#state/develop | #lang/en | #SemBr

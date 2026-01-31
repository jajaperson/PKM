---
tags:
  - public
---
[[Graph theory MOC]]
# Adjacency matrix

Let $\Gamma$ be a [[Graph|general graph]] (which may be the underlying graph of a [[quiver]]).
Given two vertices $v,w \in \opn V(\Gamma)$, the **adjacency number** $\abs{\Gamma(v,w)}$ is the number of arcs $v \to w$.[^1]
If the vertices are enumerated $v_{1},\dots,v_{r}$, then these may be collected in an **adjacency matrix** $A_{\Gamma} = (a_{ij})$ where #m/def/graph 
$$
\begin{align*}
a_{ij} = \abs{\Gamma(v_{i},v_{j})}
\end{align*}
$$


#
---
#state/develop | #lang/en | #SemBr

[^1]: Thinking of $\opn A(\Gamma)$ as a [[multiset]] with characteristic function $\chi_{\opn A(\Gamma)}$, this is just $\chi_{\opn A(\Gamma)}(v,w)$. The notation  is preferred since it gives a uniform treatment to quivers and their underlying graphs.

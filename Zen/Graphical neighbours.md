---
tags:
  - public
---
[[Graph theory MOC]]
# Graphical neighbours

Let $\Gamma$ be a [[general graph]].
The **out-neighbours** of a vertex $v \in \opn V(\Gamma)$ is the set of all vertices _reachable_ from $v$ by a single arc #m/def/graph 
$$
\begin{align*}
\Gamma^+(v) = \{ w \in V : v \to w \}
\end{align*}
$$
and **in-neighbours** are defined analogously
$$
\begin{align*}
\Gamma^{-}(v) = \{ w \in V : w \to v \}
\end{align*}
$$
the cardinality of these being referred to as the **out-degree** and **in-degree** respectively.

- If $\Gamma$ is a graph, the out-neighbours and in-neighbours coïncide and are denoted $\Gamma( v)$.
- If $\Gamma$ is a [[Graph|multidigraph]], these are [[multiset|multisets]].

#
---
#state/tidy | #lang/en | #SemBr

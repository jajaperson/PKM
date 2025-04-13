---
tags:
  - public
---
[[Graph theory MOC]]
# Graph homomorphism

Let $\Gamma_{1},\Gamma_{2}$ be [[Graph|general graphs]].
A **graph homomorphism** $f : \Gamma_{1} \to \Gamma_{2}$ is a function $\opn V(f) : \opn V(\Gamma_{1}) \to \opn V(\Gamma_{2})$ which “almost preserves” the [[adjacency matrix]], #m/def/graph  i.e.
$$
\begin{align*}
\abs{\Gamma_{1}(v,w)} \geq \abs{\Gamma_{2}(f(v),f(w))}
\end{align*}
$$
where if the inequality is made an equality $f$ is a **full graph homomorphism**.
The terms **graph isomorphism**, **graph endomorphism**, and **[[graph automorphism]]** are then defined accordingly,
and we have the [[Category of general graphs]].

#
---
#state/develop | #lang/en | #SemBr

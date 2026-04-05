---
tags:
  - public
---
[[Number theory MOC]]
# Legendre symbol

Let $p$ be an odd prime, $a$ be an integer, and $\mathcal{Q}$ be the set of [[Quadratic residue|quadratic residues]] mod $p$.
The **Legendre symbol** is defined as #m/def/num 
$$
\begin{align*}
\left( \frac{a}{p} \right) = \begin{cases}
0 & a \equiv_{p} 0 \\
-1 & [a] \notin \mathcal{Q} \\
+1 & [a] \in \mathcal{Q} \setminus \{ [0] \}
\end{cases}
\end{align*}
$$


#
---
#state/tidy | #lang/en | #SemBr

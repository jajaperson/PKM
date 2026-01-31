---
tags:
  - public
---
[[Monstrous moonshine MOC]]
# Vertex algebra

A **vertex algebra** $V$ is a $\mathbb{Z}$-[[graded vector space]] (by weight[^wt])
$$
\begin{align*}
V &= \bigoplus _{n \in \mathbb{Z}} V_{(n)}; & \dim V_{(n)} < \infty
\end{align*}
$$
truncated from below such that $V_{(n)} = 0$ sufficiently small $n$,
equipped with a linear map into [[formal sums over endomorphisms]] called **vertex operators**
$$
\begin{align*}
V &\to (\End V) \D[z,z^{-1}\D] \\
v &\mapsto Y(v,z) = \sum_{n \in \mathbb{Z}}v_{n} z^{-n-1}
\end{align*}
$$
with a distinguished **vacuum element** $\mathbb{1} \in V$ such that the following conditions holds for $u,v \in V$[^1988]
#m/def/voa 

1. $u_{n} v = 0$ for sufficiently large $n$;
2. $Y(\mathbb{1}, v) = 1$;
3. $Y(v,z) \mathbb{1} \in V\D[z\D]$ and $\lim_{ z \to 0 }Y(v,z) \mathbb{1} = v$; and
4. the **generalized Jacobi identity** holds
   $$
  \begin{align*}
  z_{0}^{-1} \delta\left( \frac{z_{1}-z_{2}}{z_{0}} \right) Y(u,z_{1}) Y(v,z_{2}) - z_{0}^{-1} \delta\left( \frac{z_{2}-z_{1}}{-z_{0}} \right)Y(v,z_{2})Y(u,z_{1}) \\
  = z_{2}^{-1}\delta\left( \frac{z_{1}-z_{0}}{z_{2}} \right)Y(Y(u,z_{0})v,z_{2})
  \end{align*}
  $$
  where $\delta(z)$ is the [[formal delta]] and all terms are well-defined acting on $v \in V$ from the left.

Most vertex algebras appearing “in nature” carry a representation of the [[Virasoro algebra]] and are hence [[Vertex operator algebra|vertex operator algebras]].

  [^wt]: i.e. the grade of a homogenous element $v \in V_{(n)}$ is called its **weight** and denoted $\wt v$.
  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]]. §8.10, pp. 244–245
  
#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
---
[[Monstrous moonshine MOC]]
# Vertex operator algebra

A **vertex operator algebra** is a $\mathbb{Z}$-[[graded vector space]] (by weight[^wt])
$$
\begin{align*}
V &= \bigoplus_{n \in \mathbb{Z}} V_{(n)}; & \dim V_{(n)} < \infty
\end{align*}
$$
truncated from below such that $V_{(n)} = 0$ for sufficiently small $n$,
equipped with a linear map into [[formal sums over endomorphisms]] called **vertex operators**
$$
\begin{align*}
V &\to (\End V) \d[z,z^{-1}\d] \\
v &\mapsto Y(v,z) = \sum_{n \in \mathbb{Z}} v_{n} z^{-n-1}
\end{align*}
$$
with two distinguished homogenous vectors $\mathbb{1}, \omega \in V$, called the **vacuum element** and **conformal element** respectively, such that the following conditions hold for $u,v \in V$ #m/def/voa

1. $u_{n}v = 0$ for sufficiently large $n$;
2. $Y(\mathbb{1},v) = 1$;
3. $Y(v,z) \mathbb{1} \in V \d[z\d]$ and $\lim_{z \to \infty } Y(v,z)\mathbb{1}= v$;
4. the **generalized Jacobi identity** holds
   $$
  \begin{align*}
  z_{0}^{-1} \delta\left( \frac{z_{1}-z_{2}}{z_{0}} \right) Y(u,z_{1}) Y(v,z_{2}) - z_{0}^{-1} \delta\left( \frac{z_{2}-z_{1}}{-z_{0}} \right)Y(v,z_{2})Y(u,z_{1}) \\
  = z_{2}^{-1}\delta\left( \frac{z_{1}-z_{0}}{z_{2}} \right)Y(Y(u,z_{0})v,z_{2})
  \end{align*}
  $$
  where $\delta(z)$ is the [[formal delta]] and all terms are well-defined acting on $v \in V$ from the left;
5. $V$ represents the [[Virasoro algebra]], specifically
   $$
  \begin{align*}
  [L(m),L(n)] = (m-n)L(m+n) + \frac{\rank V}{12} (m^3 - m)\delta_{m+n}
  \end{align*}
  $$
  where $Y(\omega,z) = \sum_{n \in \mathbb{Z}}L(n)z^{-n-2}$ and $\rank V \in \mathbb{Q}$;
6. $L(0)v = (\wt v)v$ for homogenous $v \in V_{(n)}$; and
7. $\frac{d}{dz}Y(v,z) = Y(L(-1)v,z)$.

immediate consequences are

1. $$
  \begin{align*}
  [L(-1), Y(v,z)] = Y(L(-1)v, z)
  \end{align*}
  $$
2. $$
  \begin{align*}
  [L(0), Y(v,z)] = Y(L(0)v,z) + zY(L(-1)v, z)
  \end{align*}
  $$
3. $$
  \begin{align*}
  n \geq -1 \implies L(n)\mathbb{1} = 0
  \end{align*}
  $$
4.  $$
  \begin{align*}
  L(-2) \mathbb{1} = \omega
  \end{align*}
  $$
6. $$
  \begin{align*}
  L(0) \omega = 2\omega
  \end{align*}
  $$

  [^wt]: i.e. the grade of a homogenous element $v \in V_{(n)}$ is called its **weight** and denoted $\wt v$.
  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]]. §8.10, pp. 244–245


#
---
#state/develop | #lang/en | #SemBr

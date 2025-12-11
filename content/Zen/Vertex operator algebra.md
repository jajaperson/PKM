---
tags:
  - public
---
[[Monstrous moonshine MOC]]
# Vertex operator algebra

A **vertex operator algebra** $V$ is a [[Vertex algebra]] which carries a representation of the [[Virasoro algebra]], #m/def/voa 
specifically there is a distinguished homogenous **conformal element** $\omega \in V$
with vertex operator $Y(\omega,z) = \sum_{n \in \mathbb{Z}}L(n)z^{-n-2}$
such that[^1988]
$$
\begin{align*}
[L(m),L(n)] = (m-n)L(m+n) + \frac{\rank V}{12} (m^3 - m)\delta_{m+n}
\end{align*}
$$
where 

1. $\rank V \in \mathbb{Q}$;
2. $L(0)v = (\wt v)v$ for homogenous $v \in V_{(n)}$; and
3. $\frac{d}{dz}Y(v,z) = Y(L(-1)v,z)$.

## Properties

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

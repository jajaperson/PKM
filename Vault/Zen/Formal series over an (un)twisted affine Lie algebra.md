---
aliases:
  - formal series over an affine Lie algebra
  - formal series over an untwisted affine Lie algebra
tags:
  - public
---
[[Formal sums over a Lie algebra]]
# Formal series over an (un)twisted affine Lie algebra

Let $\mathfrak{g}$ be [[quadratic Lie algebra]], $\vartheta \in \Aut \mathfrak{g}$ be an involutive isometry, and $\tilde{\mathfrak{g}}$ and $\tilde{\mathfrak{g}}[\vartheta]$ be the associated [[Affine Lie algebra|extended untwisted affine Lie algebra]] and [[Twisted affine Lie algebra|extended twisted affine Lie algebra]] respectively.
Then to each $x \in \mathfrak{g}$, we associate the following formal series in $\tilde{\mathfrak{g}}\d[z,z^{-1}\d]$ and $\tilde{\mathfrak{g}}[\vartheta]\d[ z^{1/2}, z^{-1/2} \d]$ respectively: #m/def/lie 
$$
\begin{align*}
x_{\mathbb{Z}} (z) &= \sum_{n \in \mathbb{Z}} (x \otimes t^n) z^{-n} \in \tilde{\mathfrak{g}}\d[z,z^{-1}\d] \\
x_{\mathbb{Z} + 1 / 2} (z) &= \sum_{n \in \mathbb{Z}}(x_{(n)} \otimes t^{n/2}) z^{-n / 2} \in \tilde{\mathfrak{g}}[\vartheta]\d[ z^{1/2}, z^{-1/2} \d]
\end{align*}
$$
and we will drop the subscripts when it is clear.
In the latter
$$
\begin{align*}
x \mapsto x_{(i)} = \frac{1}{2}(x + (-1)^i \vartheta x)
\end{align*}
$$
denotes the appropriate projection into the $\vartheta$-eigenspace decomposition $\mathfrak{g} = \mathfrak{g}_{(0)} \oplus \mathfrak{g}_{(1)}$.[^1988]

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §2.3, pp. 58–60

## Commutation relations

For $x,y  \in \mathfrak{g}$, we may recast the commutation relations of $\tilde{\mathfrak{g}}$ using the [[Formal delta]] and [[Degree operator on formal sum over a vector space|$D$ operator]] as
$$
\begin{align*}
[x(z_{1}),x(z_{2})] &= [x,y](z_{2}) \delta(z_{1} / z_{2}) - \langle x,y \rangle (D\delta) (z_{1} / z_{2})c \\
[c,x(z)] &= 0 \\
[d,x(z)] &= -Dx(z) \\
[c,d] &= 0
\end{align*}
$$
and in $\tilde{\mathfrak{g}}[\vartheta]$ as
$$
\begin{align*}
[x(z_{1}),x(z_{2})] &= \frac{1}{2} \sum_{i \in \mathbb{Z}_{2}} [\vartheta^ix,y](z_{2})\delta((-1)^i z_{1}^{1/2} / z_{2}^{1/2}) - \frac{1}{2}\sum_{i \in \mathbb{Z}_{2}} \langle \vartheta^i x,y \rangle D_{1} \delta((-1)^i) z_{1}^{1/2}/ z_{2}^{1/2}) c  \\
[c,x(z)] &= 0 \\
[d,x(z)] &= -Dx(z) \\
[c,d] &= 0
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr

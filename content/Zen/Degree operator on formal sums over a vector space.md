---
aliases:
  - $D$ operator
tags:
  - public
---
[[Formal sums over a vector space]]
# Degree operator on formal sums over a vector space

Let $V$ be a [[vector space]] over $\mathbb{K}$ and $V \{ z \}$ denote [[Formal sums over a vector space|formal sums]] over $V$.
We define the $z$-**degree operator**[^1988] #m/def/fcalc 
$$
\begin{align*}
D=D_{z} =z \frac{d}{dz},
\end{align*}
$$
where $\frac{d}{dz}$ is the [[Formal derivative]].
This is not strictly a [[degree operator]], as $V \{ z \}$ is not a [[graded vector space]],
however its subspaces $V[z]$ and $V[z,z^{-1}]$ are.

## Properties

### Over a graded vector space
Now taking $V$ to be $\mathbb{K}$-[[Graded vector space|graded]] with [[degree operator]] $d \in \End V$, and letting
$$
\begin{align*}
v(z) &= \sum_{n\in \mathbb{K}}  v_{n} z^n \in V\{ z \} & X(z) &= \sum_{n \in \mathbb{K}} x(n)z^{-n} \in (\End V)\{ z \}
\end{align*}
$$
we have
$$
\begin{align*}
Dv(z) = dv(z) &\iff (\forall n \in \mathbb{K})[\deg v_{n} = n] \\
-DX(z) = [d, X(z)] &\iff (\forall n \in \mathbb{K})[\deg x(n) = n]
\end{align*}
$$


### With the formal Dirac delta

Let $\delta(z) \in \mathbb{K}\D[z,z^{-1}\D]$ denote the [[Formal delta]]. Then it follows from [[Formal delta#Properties]] that for any $v(z) \in v[z,z^{-1}]$ and $a \in \mathbb{K}^\times$
$$
\begin{align*}
v(z) D \delta(az) &= v(a^{-1})D\delta(az) - (Dv)(a^{-1})\delta(az)
\end{align*}
$$
and that for any $X(z_{1},z_{2}) \in (\End V) \D[z_{1},z_{1}^{-1},z_{2},z_{2}^{-1}\D]$ such that $\lim_{ z_{1} \to z_{2} }X(z_{1},z_{2})$ exists and $a \in \mathbb{K}^\times$
$$
\begin{align*}
X(z_{1},z_{2}) D_{1}\delta(az_{1}/z_{2}) &= X(a^{-1}z_{2},z_{2}) D_{1} \delta(az_{1} /z_{2}) - (D_{1}X)(a^{-1}z_{2},z_{2})\delta(az_{1} / z_{2}) \\
X(z_{1},z_{2})D_{2}\delta(az_{1} / z_{2}) &= X(z_{1},az_{1})D_{2}\delta(az_{1} / z_{2})- (D_{2}X)(z_{1},az_{1})\delta(az_{1} / z_{2})
\end{align*}
$$
where $D_{1}=D_{z_{1}}$ and $D_{2}=D_{z_{2}}$.

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], pp. 56–58

#
---
#state/tidy | #lang/en | #SemBr

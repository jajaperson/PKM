---
tags:
  - public
aliases:
  - commutator algebra
---
[[Algebra theory MOC]]
# Commutator

Let $A$ be an [[K-monoid]].
The **commutator** is a [[Lie algebra|Lie bracket]] defined by #m/def/falg
$$
\begin{align*}
[x,y] = xy - yx
\end{align*}
$$
which together with the associative product of $A$ forms a [[Poisson algebra]].
The **commutator algebra** or **associated Lie algebra** is sometimes denoted $A^{-}$, and a version with a renormalized product $(-) \times (-) = \frac{1}{2}[-,-]$ is denoted $A^{-1/2}$.

> [!check]- Proof of Poisson algebra
> Clearly for all $x,y,z \in A$ and $\lambda,\mu \in \mathbb{K}$
> 
> - $[x,\lambda y+\mu z] = \lambda[x,y]+\mu[x,z]$
> - $[\lambda x+\mu y,z] = \lambda[x,z]+\mu[y,z]$
> - $[x,x]=x x - xx = 0$
> 
> hence the commutator is an [[Alternating multilinear map|alternating multilinear map]].
> Now
> $$
> \begin{align*}
> 0&= [x,[y,z]] + [y,[z,x] + [z,[x,y]] \\
> &= [x,yz-zy] + [y,zx-xz] + [z,xy-yx] \\
> &= \begin{matrix}
> xyz -xzy -yzx + zyx + yzx - yxz \\ - zxy + xzy + zxy - zyx - xyz + yxz 
> \end{matrix}
> \end{align*}
> $$
> hence the commutator is a [[Lie algebra|Lie bracket]].
> Finally
> $$
> \begin{align*}
> [x,yz] &= xyz-yzx \\
> &= xyz - yxz + yxz  - yzx \\
> &= [x,y]z + y[x,z]
> \end{align*}
> $$
> as required.
> <span class="QED"/>

See also [[Anticommutator]] and [[Supercommutator]].

## Properties

1. $[x,yz] = [x,y]z + y[x,z]$ (see above) ^P1
2. $xy = yx + [x,y]$
3. Every [[Unital subalgebra]] is a [[Lie subalgebra]] under the commutator.

## Graded structure

If the associative algebra $A$ is $\mathfrak{A}$-graded where $\mathfrak{A}$ is an abelian monoid,
then the commutator forms a $\mathfrak{A}$-[[graded Lie algebra]].

## Examples

- [[Linear commutator]]

#
---
#state/tidy | #lang/en | #SemBr

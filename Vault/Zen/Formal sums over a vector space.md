---
tags:
  - public
---
[[Formal calculus MOC]]
# Formal sums over a vector space

Let $V$ be a [[vector space]] over $\mathbb{K}$.
Then the [[Formal sum]] in indeterminate $z$ with coëfficients in $V$ and exponents in $\mathbb{K}$ is denoted $V \{ z \}$, #m/def/fcalc 
with elements of the form $\sum_{n \in \mathbb{K}} v_{n} z^n$.
$V \{ z \}$ is itself a vector space with addition and scaling defined pointwise.
$$
\begin{align*}
\sum_{n \in \mathbb{K}} v_{n} z^n + \sum_{n \in \mathbb{K}} w_{n}z^n &= \sum_{n \in \mathbb{K}}(v_{n}+w_{n})z^n \\
\alpha \sum_{n \in \mathbb{K}} v_{n} z^n &= \sum_{n \in \mathbb{K}} \alpha v_{n }z^n
\end{align*}
$$
If $\opn{char} \mathbb{K} = 0$, we have the following useful subspaces[^1988]

- $V[[z]]$ has exponents in $\mathbb{N}_{0}$ only, and is called **Taylor series** over $V$;
- $V[[z, z^{-1}]]$ has exponents in $\mathbb{Z}$ only, and is called **Laurent series** over $V$;
- $V[z] = V \otimes \mathbb{K}[z]$ has exponents in $\mathbb{N}_{0}$ only and finitely many terms, and is called **polynomials** over $V$; and
- $V[z,z^{-1}] = V \otimes \mathbb{K}[z,z^{-1}]$ has exponents in $\mathbb{Z}$ only and finitely many terms, and is called **Laurent polynomials** over $V$

Given $v(z) = \sum_{n \in \mathbb{Z}}v_{n} z^n \in V \d[z,z^{-1}\d]$ we define $v(\alpha z) = \sum_{n \in \mathbb{Z}} \alpha^nv_{n}z^n$,
and for $v(z) \in V[z,z^{-1}]$ evaluation may be defined similarly.
We have two well-defined [[Multilinear map|bilinear]] multiplication maps

$$
\begin{align*}
V[z,z^{-1}] \times \mathbb{K}\{ z \} &\to V \{ z \} \\
V[z,z^{-1}] \times \mathbb{K}\d[z,z^{-1}\d] &\to V\d[z,z^{-1}\d]
\end{align*}
$$

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §2.1, pp. 47ff.

## See also

- [[Formal sums over endomorphisms]]
- [[Formal sums over a Lie algebra]]
- [[Degree operator on formal sum over a vector space]]


#
---
#state/develop | #lang/en | #SemBr

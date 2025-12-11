---
tags:
  - public
---
[[Rational lattice]]
# Even lattice

A [[rational lattice]] $L$ is said to be **even** iff $\langle \alpha,\alpha \rangle \in 2\mathbb{Z}$ for all $\alpha \in L$. #m/def/geo
It immediately follows from polarization that $L$ is [[Rational lattice#^integral]].

## Properties

- [[Associated Lie algebra of a positive definite even lattice]]

### Associated elementary 2-group

An even lattice $L$ of rank $n$ has an associated [[Elementary abelian group|elementary abelian]] [[p-group|2-group]] $\check L = L / 2L$ of dimension $n$,
where we write $\check \alpha = \alpha + 2L$.
We have a canonical [[Alternating multilinear map|alternating]] $\mathbb{Z}$-[[Multilinear map|bilinear]] map
$$
\begin{align*}
c_{0} : L \times L &\to \mathbb{Z}_{2} \\ 
(\alpha,\beta) &\mapsto \langle \alpha,\beta \rangle  + 2\mathbb{Z}
\end{align*}
$$
which induces the alternating $\mathbb{Z}_{2}$-[[bilinear form]]
$$
\begin{align*}
c_{1} : \check L \times \check L &\to \mathbb{Z}_{2} \\
(\check \alpha, \check \beta) &\mapsto \langle \alpha,\beta \rangle + \mathbb{Z}_{2}
\end{align*}
$$
Similarly we have a canonical map
$$
\begin{align*}
q_{0} : L &\to \mathbb{Z}_{2} \\
 \alpha &\mapsto \frac{1}{2} \langle \alpha,\alpha \rangle  + 2\mathbb{Z}
\end{align*}
$$
which induces the quadratic form
$$
\begin{align*}
q_{1} : \check L &\to \mathbb{Z}_{2} \\
\check \alpha &\mapsto \frac{1}{2} \langle \alpha, \alpha \rangle  + 2\mathbb{Z}
\end{align*}
$$
so that $c_{1}$ is the [[Quadratic form|polar form]] of $q_{1}$.
Now $q_{1}$ or equivalently $c_1$ is [[Quadratic space#^nondegenerate]] iff the [[Gram matrix]] has odd determinant,
in particular if $L$ is a [[unimodular lattice]].

#
---
#state/tidy | #lang/en | #SemBr

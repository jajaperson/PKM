---
tags:
  - public
---
[[Examples of groups]]
# Projective general linear group

The **projective general linear group** $\mathrm{PGL}(V)$ is the group of [[Homography|homographies]] on $\mathrm{P}(V)$, i.e. the [[quotient group]] #m/def/group 
$$
\begin{align*}
\mathrm{PGL}(V) = \mathrm{GL}(V) / \mathrm{Z}(V)
\end{align*}
$$
corresponding to the induced action of the [[general linear group]] $\mathrm{GL}(V)$ of a vector space $V$ on the associated to the [[Projective space]] $\mathrm{P}(V)$.
Here $\mathrm{Z}(V) \cong \mathbb{K}^\times$ is the [[Centre of the general linear group]] consisting of scalar matrices.

## Properties

Let $V = \mathbb{K}^{n+1}$, and denote $\mathrm{PGL}(n+1,\mathbb{K}) = \mathrm{PGL}(V)$

1. $\mathrm{PGL}(n+1,\mathbb{K})$ acts on $\mathrm{PG}(n,\mathbb{K})$ as a [[Collineätion]],
  and as such, $\mathrm{PGL}(n+1,\mathbb{K})$ forms a subgroup of the [[Projective semilinear group]] $\mathrm{P\Gamma L}(n,\mathbb{K})$.[^2020] ^P1
2. $\mathrm{PGL}(n+1,\mathbb{K})$ acts [[Regular group action|regularly]] on the set of $(n+2)$-tuples of points in [[general position]].[^2020b] ^P2


> [!check]- Proof of 1–2
> That each $A \in \mathrm{GL}(n+1,\mathbb{K})$ induces a bijection follows from it being a bijection on $V$.
> That it preserves incidence follows from the fact that it preserves linear combinations,
> proving [[#^P1]].
> 
> Let $(A_{0}, \dots, A_{n+1})$ and $(B_{0},\dots,B_{n+1})$ be ordered tuples of points in general position.
> It follows that there exist representative vectors $\mathbf{a}_{0}, \dots , \mathbf{a}_{n}$ and $\mathbf{b}_{0},\dots ,\mathbf{b}_{n}$ such that $A_{n+1} = [\mathbf{a}_{0} + \dots + \mathbf{a}_{n}]$ and $B_{n+1} = [\mathbf{b}_{0} + \dots + \mathbf{b}_{n}]$,
> since each set of $n$ vectors must form a basis of $V$.
> It follows there exists a linear automorphism $\Phi$ giving the corresponding change of basis,
> wherefore
> $$
> \begin{align*}
> \Phi(\mathbf{a}_{n+1}) = \Phi(\mathbf{a}_{0} + \dots + \mathbf{a}_{n}) = \mathbf{b}_{0} + \dots + \mathbf{b}_{n} = \mathbf{ b}_{n+1}
> \end{align*}
> $$
> which proves [[Transitive group action|transitivity]].
> Suppose $[A] \in \mathrm{PGL}(n+1, \mathbb{K})$ maps $(A_{0}, \dots, A_{n+1})$ to itself.
> Then each of $\mathbf{a}_{0}, \dots, \mathbf{a}_{n+1}$ is an eigenvector of $A$,
> so by the [[Scalar transformation criterion]] $A$ is a scalar transformation and thus $[A]$ is the identity,
> proving [[Free group action|freeness]].
> Hence the action is regular, proving [[#^P2]].
> <span class="QED"/>

[^2020]: 2020\. [[Sources/@kissFiniteGeometries2020|Finite geometries]], ¶4.9, p. 81
[^2020b]: 2020\. [[Sources/@kissFiniteGeometries2020|Finite geometries]], ¶4.16, p. 84

#
---
#state/tidy  | #lang/en | #SemBr

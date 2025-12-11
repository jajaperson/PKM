---
tags:
  - public
---
[[Quadratic form]]
# Diagonalization of a quadratic form

[[Away from 2]] a [[quadratic form]]
$$
\begin{align*}
F(\mathbf{X})= \sum_{i,j=0}^n t_{ij} X_{i}X_{j}
\end{align*}
$$
can be transformed to
$$
\begin{align*}
F(\mathbf{X}) = \sum_{i=0}^r a_{i} Y_{i}^2
\end{align*}
$$
under appropriate change of coördinates where $r \leq n$.[^2020] #m/thm/geo 

> [!check]- Proof
> Without loss of generality it can be assumed that $t_{00} \neq 0$.
> For if some $t_{ii} \neq 0$ then we can permute coördinates.
> If $t_{ii}=0$ for all $i$, then we may assume $t_{01} \neq 0$ by the same token.
> Let $X_{0}=Y_{0}$, $X_{1}=cY_{0}+Y_{1}$, and otherwise $X_{i}= Y_{i}$ for $i>1$.
> Then $F(\mathbf{X})= \sum_{i,j=1}^n s_{ij} Y_{i}Y_{j}$ where $s_{00} = t_{01}c + t_{10}c$.
> Hence we can choose $c=t_{01}^{-1}$ whence $s_{00}=2 \neq 0$.
> 
> Under this assumption, it follows
> $$
> \begin{align*}
> F(\mathbf{X}) &= t_{00}X_{0}^2 + X_{0} \sum_{j=1}^n t_{0j}X_{j} + X_{0} \sum_{i=1}^n t_{i0} X_{i} + \sum_{i,j=1}^n t_{ij}X_{i}X_{j} \\
> &= t_{00}^{-1} \left( \sum_{i=0}^nt_{i 0}X_{i} \right) \left( \sum_{j=0}^n t_{0j}X_{j} \right) + \sum_{i,j=1}^n t_{ij}' X_{i}X_{j}
> \end{align*}
> $$
> for some $t_{ij}'$.
> Let $X_{0}=Y_{0}-t_{00}^{-1}\sum_{j=1}^n t_{1j}X_{j}$ and otherwise $X_{i}=Y_{i}$ for $i > 0$.
> Then
> $$
> \begin{align*}
> F(\mathbf{X})= t_{00} Y_{0}^2 + \sum_{i,j=1}^n t_{ij}' Y_{i}Y_{j} = t_{00} Y_{0}^2 + F'(\mathbf{Y})
> \end{align*}
> $$
> One can then repeat the same steps for $F'$ &c. until one has a quadratic form
> $$
> \begin{align*}
> F(\mathbf{Y})= \sum_{i=0}^r a_{i}X_{i}^2
> \end{align*}
> $$
> where $r < n$ iff the corresponding [[Projective quadric|quadric]] is singular.
> <span class="QED"/>

[^2020]: 2020\. [[Sources/@kissFiniteGeometries2020|Finite geometries]], ¶4.25, p. 91

It follows that [[A quadric is singular iff its matrix is singular away from 2]].

#
---
#state/tidy | #lang/en | #SemBr

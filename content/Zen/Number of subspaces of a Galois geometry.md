---
tags:
  - public
---
[[Galois geometry]]
# Number of subspaces of a Galois geometry

The [[Galois geometry]] $\mathrm{PG}(n,q)$ contains ${n - 1 \choose d - 1}_{q}$ subspaces of dimension $d$, #m/thm/geo/fin 
where
$$
\begin{align*}
{n \choose d}_{q} = \prod_{i=0}^{d-1} \frac{q^{n-i}-1}{q^{i+1} - 1}
\end{align*}
$$
is the [[Gaußian binomial coëfficient]].[^2020]


[^2020]: 2020\. [[Sources/@kissFiniteGeometries2020|Finite geometries]], ¶4.7, p. 79

> [!check]- Proof
> We define
> $$
> \begin{align*}
> \Theta_{q}(r) &= \frac{q^{r+1} - 1}{q-1} \\
> [r,s]_{q} &= \prod(q^i-1)
> \end{align*}
> $$
> Let $V = \mathrm{GF}(q)^{n+1}$, so $\mathrm{PG}(n,q) = \mathrm{P}(V)$.
> As a vector space $V$ contains $q^n+1$ points.
> Now the number of points in $\mathrm{PG}(n,q)$ equals the number of 1-dimensional subspaces of $V$,
> and different subspaces have only the origin in common.
> Thus the number of 1-dimensional subspaces is
> $$
> \begin{align*}
> \frac{q^{n+1}-1}{n-1} = \Theta_{q}(n)
> \end{align*}
> $$
> Each $d$-dimensional subspace is determined by $d+1$ linearly independent points,
> so the number of $d$-dimensional subspaces in an $n$-dimensional projective space is the total number of independent sets of points of size $d+1$ divided by the number of independent sets of points of size $d+1$ in each $d$-dimensional subspace.
> This gives
> $$
> \begin{align*}
> \frac{[n-d+1,n+1]_{q}}{[1,d+1]_{q}}
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

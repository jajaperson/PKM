---
tags:
  - public
---
[[Projective space]]
# Abstract projective space

Let $\mathcal{S}$ be a set together with some distinguished subsets.
To each distinguished subset an integer $-1 \leq d \leq n$ is associated.
$\mathcal{S}$ is called an **abstract projective space** of dimension $n$,
and the subsets are called **subspaces** of dimension $d$,
if the following axioms are satisfied[^2020] #m/def/geo 

1. For every $-1 \leq d \leq n$ there is at least one subspace of dimension $d$, moreover ^P1
    - $\0$ is the unique subspace of dimension $-1$;
    - $\mathcal{S}$ is the unique subspace of dimension $n$; and
    - subspaces of dimension $0$ are singletons.
2.  If a subspace of dimension $r$ is contained in a subspace of dimension $s$, then $r \leq s$, and $r =s$ iff the subspaces coïncide. ^P2
3. The intersection of subspaces is a subspace ^P3
4. If the intersection of a subspace of dimension $r$ and a subspace of dimension $s$ is a subspace of dimension $t$, and the intersection of all subspaces containing both of the subspaces is a subspace of dimension $u$, then $r + s = t + u$. ^P4
5. Each subspace of dimension 1 contains $q+1 \geq 3$ elements. ^P5

Subspaces of dimension 0 are called points; 1 are called lines; 2 are called planes; and $n-1$ are called hyperplanes.
This generalizes the [[Abstract projective plane]].
See [[Finite projective space]].

[^2020]: 2020\. [[Sources/@kissFiniteGeometries2020|Finite geometries]],  p. 75

## Further terminology

- An isomorphism of projective spaces is a [[Collineätion]].
- A duality map of a projective space is a [[Projective correlation]]

#
---
#state/tidy | #lang/en | #SemBr

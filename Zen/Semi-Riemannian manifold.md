---
tags:
  - public
aliases:
  - metric tensor
  - semi-Riemannian $C^\alpha$-manifold
---
[[Differential geometry MOC]]
# Semi-Riemannian manifold

A **semi-Riemannian** $C^\alpha$-manifold $(M, \mathscr{A},g)$ is a $C^\alpha$-[[Differentiable manifold|manifold]] $(M, \mathscr{A})$ equipped with a special kind of [[tensor field]] $g_{ab} \in \mathcal{T}^0_{2}(M)$ called a **metric tensor**. #m/def/geo/diff 
This means $g_{ab}$ must satisfy

1. **symmetry**, i.e. $g_{ab} = g_{ba}$;
2. **non-degeneracy**, i.e. $g_{ab} \, v^a = 0$ iff $0 = v^a \in \mathfrak{X}(M)$;

Note that by non-degeneracy we can define the **inverse metric tensor** $g^{ab}$ so that $g^{ab} \, g_{bc} = \delta^a_{c}$.
See [[Raising and lowering of indices]].

## Further terminology

Locally the metric tensor can be brought into the form of a diagonal matrix with entries $\pm 1$.
For a connected manifold,
the numbers of positive and negative entries is an invariant $(s,t)$, called the [[Signature of a semi-Riemannian manifold|signature]].

- $(n, 0)$ gives a [[Riemannian manifold]]
- $(n-1,1)$ gives a [[Lorentzian manifold]]

## See also

- [[Christoffel symbols]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - normal subspace
---
[[Quadratic space]]
# Normal quadratic subspace

Let $(V,q)$ be a [[quadratic space]].
A **normal subspace**[^term] $U \trianglelefteq V$ is a [[vector subspace]] consisting of only [[Quadratic space#^nondegenerate|degenerate]] [[Quadratic space|isotropic]] vectors, #m/def/linalg/q
i.e. a [[Quadratic space#^totallyIsotropic]] subspace of the [[Radical of a quadratic space|radical]] $\opn{rad V}$.

  [^term]: This terminology is nonstandard, but nice.
  As [[Jeff Saunders]] remarks, it is not only reminiscent of [[Normal subgroup]],
  but also the fact that such a subspace is “normal” to everything else, under the bilinear form.

> [!tip]- [[Away from 2]] a subspace is normal iff it is radical
> Clearly a normal subspace must be radical.
> Let $U \leq \opn{rad} V$.
> Then $U$ is totally isotropic, since for any $u \in U$ we have
> $$
> \begin{align*}
> q(u) = \frac{1}{2} b_{q}(u,u) = 0
> \end{align*}
> $$

Normal subspaces of $V$ lie in correspondence with [[Congruence relation|congruence relations]] of $V$,
hence they may be used to form the [[Quotient quadratic space]].



#
---
#state/tidy | #lang/en | #SemBr

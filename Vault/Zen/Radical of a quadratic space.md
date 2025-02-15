---
tags:
  - public
---
[[Quadratic space]]
# Radical of a quadratic space

Let $(V,q)$ be a [[quadratic space]].
The **radical** $\opn{rad} V$ of $V$ is the set of all [[Quadratic space#^nondegenerate|degenerate]] vectors, #m/def/linalg  i.e.
$$
\begin{align*}
\opn{rad} V &= \{ v \in V : b_{q}(v,V) = 0 \}
\end{align*}
$$
i.e. the [[linear kernel]] of the [[Closed monoidal category|curried]] linear map $b_{q} : V \to \Vect_{\mathbb{K}}(K,V)$.
In particular ([[away from 2]]) it is a [[Quadratic space#^totallyIsotropic]] [[vector subspace]] of $V$.

## Properties

- [[Away from 2]] all degenerate vectors are isotropic, so any subspace of the radical is a [[Normal quadratic subspace]].

#
---
#state/tidy | #lang/en | #SemBr

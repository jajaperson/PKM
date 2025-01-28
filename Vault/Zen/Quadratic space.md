---
tags:
  - public
mathLink-blocks:
  totallyIsotropic: totally isotropic
  nondegenerate: nondegenerate
aliases:
  - quadrance
---
[[Linear algebra MOC]]
# Quadratic space

A **quadratic space** $(V, q)$ over $\mathbb{K}$ is a [[vector space]] $V$ over $\mathbb{K}$ equipped with a [[quadratic form]] $q$, or equivalently[^cav] a [[Bilinear form#^symmetric]] [[bilinear form]]. #m/def/linalg 
The value of $q(v)$ is called the **quadrance** of $v \in V$.

  [^cav]: [[Away from 2]], see [[Correspondence between quadratic forms and symmetric bilinear forms away from 2]]

## Further terminology

Let $b_{q}$ denote the polar form of $q$.

- A vector $v \in V$ is **isotropic** iff $q(v) = 0$, otherwise it is **anisotropic**; 
  $V$ is isotropic iff it has an isotropic vector. 
- Iff every vector is isotropic then $V$ is **totally isotropic**. ^totallyIsotropic
- A vector $v \in V$ is **degenerate** iff $b_{q}(v,u) = 0$ for all $u \in V$, otherwise it is **nondegenerate**; $V$ is degenerate iff it has a degenerate vector and nondegenerate otherwise. ^nondegenerate
- The set $\opn{rad} V$ of all degenerate vectors in $V$ forms a [[vector subspace|subspace]] called the **radical**.
- An **isometry** $f : (V, q) \to (V', q')$ is a [[linear map]] such that $q'(fv) = q(v)$ for all $v \in V$.
- A bijective isometry is called an **orthogonal transformation**, and these form the [[Orthogonal group of a quadratic space]].

## Properties

- [[Canonical tensors over a nondegenerate quadratic space]]

## See also

- [[Category of quadratic spaces]]

#
---
#state/develop | #lang/en | #SemBr

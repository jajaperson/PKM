---
mathLink-blocks:
  E2: Euclidean division
tags:
  - public
---
[[Ring theory MOC]]
# Euclidean domain

A **Euclidean domain** is an [[integral domain]] with a generalized version of the Euclidean division algorithm.
More precisely, an integral domain $R$ is called a Euclidean domain iff there exists a **Euclidean function** $d : R \to \mathbb{Z}$ such that[^2017] #m/def/ring

1. $0 \leq d(a) \leq d(ab)$ for all nonzero $a,b \in D$; and ^E1
2. if $a,b \in D$ and $b \neq 0$, then there exist elements $q,r \in D$ such that $a = qb + r$ and $d(r)<d(b)$. ^E2

  [^2017]: 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], §18, p. 315.

Every Euclidean domain is a [[Principal ideal domain]].

> [!missing]- Proof
> #missing/proof

## Properties

- [[The polynomial ring over a field is a Euclidean domain]]

#
---
#state/develop | #lang/en | #SemBr

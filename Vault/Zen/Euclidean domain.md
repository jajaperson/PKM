---
mathLink-blocks:
  E2: Euclidean division
tags:
  - public
---
[[Ring theory MOC]]
# Euclidean domain

An [[integral domain]] $D$ is called a **Euclidean domain** iff there exists a function $d : D  \to \mathbb{Z} \cup \{ -\infty  \}$ such that[^2017] #m/def/ring

1. $0 \leq d(a) \leq d(ab)$ for all nonzero $a,b \in D$; and ^E1
2. if $a,b \in D$ and $b \neq 0$, then there exist elements $q,r \in D$ such that $a = qb + r$ and $d(r)<d(b)$. ^E2

  [^2017]: 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], §18, p. 315. The definition given there has been modified slightly to accomodate $\deg 0 = -\infty$.

#
---
#state/develop | #lang/en | #SemBr

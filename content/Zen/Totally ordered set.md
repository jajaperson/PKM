---
aliases:
  - connex
  - totally ordered
tags:
  - public
---
[[Naïve set theory MOC]]
# Totally ordered set

A **totally ordered set** or **connex** is a [[poset]] in which any two elements are in relation. #m/def/order 
Hence it a set $S$ equipped with a [[Relation set]] $R$ that is

1. **reflexive** — for all $a \in S$, $(a,a) \in R$
2. **transitive** — if $(a,b) \in R$ and $(b,c) \in R$, then $(a, c) \in R$
3. **antisymmetric** — if $(a, b) \in R$ and $(b, a) \in R$, then $a = b$
4. **total** — for all $a,b \in S$, $(a,b) \in R$ or $(b,a) \in R$

Viewing [[Posets as categories]], a this is equivalent to a [[connex category]].
A subset of a poset that is total is called a **chain**.

#
---
#state/tidy | #lang/en | #SemBr



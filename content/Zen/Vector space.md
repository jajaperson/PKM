---
tags:
  - public
alias: linear space, vector spaces
---
[[Linear algebra MOC]]
# Vector space

A **vector space** or **linear space** $(V, \mathbb{K}, + ,\cdot)$ over a [[Field]] $\mathbb{K}$ of scalars
is an [[abelian group]] $(V,+)$ together with an action $(\cdot)$ of $\mathbb{K}$ on $V$ that is distributive and linear. #m/def/linalg 
Explicitly[^2008], for any $u,v,w \in V$ and $\mu,\lambda \in \mathbb{K}$

1. $(v+u)+w = v+(u+w)$ ^V1
2. $v+0 = v$ ^V2
3. $u+v = v+u$ ^V3
4. $1v = v$ ^V4
5. $(\mu\lambda)v = \mu(\lambda v)$ ^V5
6. $\lambda(u+v) = \lambda u + \lambda v$ ^V6
7. $(\mu+\lambda)v = \mu v + \lambda v$ ^V7


A generalization is a [[Module]], where the requirement that $\mathbb{K}$ be a field is relaxed to a ring. 
Hence a vector space is just a module over a field.
Another way to view vector spaces is as field actions on an [[abelian group]].

[^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], p. 35

## Physical vectors

In physics, the term “vector” is sometimes used more narrowly than “element of a vector space”.
See [[Proper vector]], [[Pseudovector]], [[Proper scalar]], [[Pseudoscalar]], [[Proper tensor]], [[Pseudotensor]].

#
---
#state/tidy | #SemBr | #lang/en 
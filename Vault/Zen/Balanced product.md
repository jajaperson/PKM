---
tags:
  - public
---
[[Module theory MOC]]
# Balanced product

A **balanced product** is a certain generalization of a [[Multilinear map|bilinear map]] for a general [[module]] over a (noncommutative) [[ring]] $R$.
Let $M$ be a right $R$-module, $N$ be a left $R$-module, and $G$ be an [[abelian group]] ($\mathbb{Z}$-module).
A map $\varphi : M \times N \to G$ is $R$-**balanced** iff for all $m,m' \in M$, $n,n' \in N$, $r \in R$ #m/def/module 

1. $\varphi(m,n+n') = \varphi(m,n) + \varphi(m,n')$ ^B1
2. $\varphi(m + m', n) = \varphi(m, n) + \varphi(m',n)$ ^B2
3. $\varphi (m \cdot r, n) = \varphi(m, r \cdot n)$ ^B3

Together, [[#^B1]] and [[#^B2]] demand **biadditivity**.
Just as bilinear maps are linear maps from the tensor product,
$R$-balanced maps are homomorphisms from the [[Tensor product of modules over a noncommutative ring]].

## Examples

- Any [[ring]] $R$ may be regarded as an $R$-[[bimodule]], in which case the ring multiplication is balanced.

#
---
#state/tidy | #lang/en | #SemBr

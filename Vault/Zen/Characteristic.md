---
tags:
  - public
---
[[Ring theory MOC]]
# Characteristic

The **characteristic** $\mathrm{char}(R)$ of a [[rng]] $R$ is the smallest positive integer $n \in \mathbb{N}$ such that the sum of $n$ copies of any $a \in R$ is $0$, i.e. $n a = 0$.
#m/def/ring 
If no such $n$ exists then $\mathrm{char}(R) = 0$.
For a [[ring]] with unity, the characteristic is the additive [[group order]] of unity (or zero if the order is infinite).

> [!check]- Proof
> If $1$ has infinite additive order, then there is no $n \in \mathbb{N}$ such that $\sum^{n} 1 = 0$ and thus $\mathrm{char}(R)=0$.
> Now suppose that $1$ has additive order $n$,
> i.e. $n$ is the smallest positive integer such that $\sum^n 1=0$
> and thus $\mathrm{char}(R) \geq n$.
> Now for any $x \in R$
> $$
> \begin{align*}
> \sum^n x = \sum^n 1 x = \left( \sum^n x \right)1 = 0 \cdot 1 = 0
> \end{align*}
> $$
> hence $\mathrm{char}(R) = n$.
> <span class="QED"/>

## Properties

1. [[The characteristic of an integral domain is 0 or prime]]
2. [[Integers#^P1]] (this gives a nice alternative definition of characteristic for a ring)

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Quadratic field]]
# Real quadratic field

A **real quadratic field** $K = \mathbb{Q}(\sqrt{ d })$ is a [[quadratic field]] where $d > 0$, #m/def/num/alg 
and hence [[Signature of a number field|signature]] $(r_{1},r_{2})=(2,0)$.

## Properties

1. The [[Dirichlet's unit theorem|group of units]] is $\{ \pm u^m : m \in \mathbb{Z} \}$ for the **fundamental unit** $u \in \mathcal{O}_{K}^\times$, uniquely determined by $u > 1$.[^1] 
   See [[Fundamental unit of a real quadratic field]]. ^P1

> [!check]- Proof
> [[#^P1]] easily follows from [[Dirichlet's unit theorem]], since we have
> $$
> \begin{align*}
> \mathcal{O}_{K} = \{ 1,-1 \} \times \mathbb{Z}
> \end{align*}
> $$
> as required. <span class="QED"/>

## Examples

- [[Rationals adjoin sqrt(223)]].

#
---
#state/tidy | #lang/en | #SemBr

[^1]: To find a fundamental unit, show that if $v > 1$ for $v \in \mathcal{O}_{K}^\times$, then $v \geq u$.

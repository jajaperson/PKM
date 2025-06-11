---
tags:
  - public
---
[[Quadratic field]]
# Imaginary quadratic field

An **imaginary quadratic field** $K = \mathbb{Q}(\sqrt{ d })$ is a [[quadratic field]] with $d < 0$, #m/def/num/alg 
and hence [[Signature of a number field|signature]] $(r_{1},r_{2})=(0,1)$. 

## Properties

1. The [[Dirichlet's unit theorem|group of units]] is $\{ 1,-1,i,-i \} \cap \mathcal{O}_{K}$. ^P1

> [!check]- Proof of 1.
> Since the [[field norm]] of $\alpha = a + b\sqrt{ d }$
> $$
> \begin{align*}
> \opn N_{K:\mathbb{Q}}(\alpha) = a^2 - b^2 d
> \end{align*}
> $$
> where both terms are positive, the only way to get $\opn N_{K:\mathbb{Q}}(\alpha) = 1$ is if
> $a = \pm 1$ and $b = 0$
> or $a = 0$, $b = \pm 1$, and $d = -1$, proving [[#^P1]] <span class="QED"/>

## Examples

- [[Rationals adjoin sqrt(-14)]]
- [[Rationals adjoin sqrt(-21)]]

---
#state/tidy | #lang/en | #SemBr

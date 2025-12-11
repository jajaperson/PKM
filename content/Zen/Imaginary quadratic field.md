---
tags:
  - public
---
[[Quadratic field]]
# Imaginary quadratic field

An **imaginary quadratic field** $K = \mathbb{Q}(\sqrt{ d })$ is a [[quadratic field]] with $d < 0$, #m/def/num/alg 
and hence [[Signature of a number field|signature]] $(r_{1},r_{2})=(0,1)$. 

## Properties

1. The [[Dirichlet's unit theorem|group of units]] $\mathcal{O}_{K}^\times$ is $\{ 1,-1 \}$ except for $d=-1$, giving ring of integers [[Gaußian integers]], or $d=-3$, giving [[Rationals adjoin sqrt(-3)]]. ^P1

> [!check]- Proof of 1.
> First consider the monogenic case, i.e. $d \not\equiv_{4} 1$ and hence $\mathcal{O}_{K} = \mathbb{Z}[\sqrt{ d }]$.
> Since the [[field norm]] of $\alpha = a + b\sqrt{ d }$
> $$
> \begin{align*}
> \opn N_{K:\mathbb{Q}}(\alpha) = a^2 - b^2 d
> \end{align*}
> $$
> where both terms are positive, the only ways to get $\opn N_{K:\mathbb{Q}}(\alpha) = 1$ are if
> 
> - $a = \pm 1$ and $b = 0$; or
> - $a = 0$, $b = \pm 1$, and $d = -1$.
> 
> This exceptional case is [[Gaußian integers]].
> 
> For $d \equiv_{4} 1$, we have $\mathcal{O}_{K} = \mathbb{Z}\left[ \frac{1+\sqrt{ d }}{2} \right]$.
> The field norm of a generic $\alpha = a + b \frac{1+\sqrt{ d }}{2}$ we have
> $$
> \begin{align*}
> \opn N_{K:\mathbb{Q}}(\alpha) &= \left( a+\frac{b}{2} \right)^2 - \frac{b^2d}{4}
> \end{align*}
> $$
> where both terms are positive,
> the only ways to get $\opn N_{K:\mathbb{Q}}(\alpha)=1$ are if
> 
> - $a =\pm 1$ and $b=0$;
> - $a= 0$, $b= \pm1$, and $d=-3$; or
> - $a = \pm 1$, $b= \mp 1$, and $d = -3$.
> 
> This exceptional case is [[Rationals adjoin sqrt(-3)]]. <span class="QED"/>


## Examples

- [[Rationals adjoin sqrt(-3)]]
- [[Rationals adjoin sqrt(-14)]]
- [[Rationals adjoin sqrt(-21)]]

---
#state/tidy | #lang/en | #SemBr

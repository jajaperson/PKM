---
tags:
  - public
---
[[Multilinear map]]
# Alternating iff anticommutative away from 2

Let $V,W$ be vector spaces [[away from 2]].
Then a bilinear map $B : V \times V \to W$ is [[Alternating multilinear map|alternating]] iff it is anticommutative (i.e. antisymmetric). #m/thm/linalg 

> [!check]- Proof
> Let $B$ be alternating
> $$
> \begin{align*}
> B(x,y) + B(y,x) &= B(x,x) + B(x,y) + B(y,x) + B(y,y) \\
> &= B(x, x + y) + B(y, x+y) \\
> &= B(x + y, x + y) \\
> &= 0
> \end{align*}
> $$
> hence $B$ is anticommutative.
> 
> Let $B$ be anticommutative.
> Then
> $$
> \begin{align*}
> 2 B(x,x) &= B(x,x) + B(x,x) = 0
> \end{align*}
> $$
> and since $2$ is a [[Units and zero-divisors|multiplicative unit]] it follows $B(x,x) = 0$.
> <span class="QED"/>

From the proof, it is clear that only the forward implication holds for $\mathrm{char}(\mathbb{K}) = 2$.

#
---
#state/tidy | #lang/en | #SemBr

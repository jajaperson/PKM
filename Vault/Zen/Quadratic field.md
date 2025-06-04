---
tags:
  - public
aliases:
  - quadratic number
---
[[Number field]]
# Quadratic field

A **quadratic field** $K$ is a [[number field]] of degree 2, #m/def/num/alg
i.e. $[K : \mathbb{Q}] = 2$ whence $K = \mathbb{Q}[\sqrt{ d }]$ for some [[Squarefree integer|squarefree]] $d \in \mathbb{Z}$.

> [!check]- Proof
> Let $\{1, \vartheta\}$ be a $\mathbb Q$-basis for $K$, where without loss of generality $\vartheta \in \mathcal O_K$ is an algebraic integer, whence $\vartheta^2 = a\vartheta + b$ for some $a, b \in \mathbb Z$.
> Let $\varphi = 2\vartheta - a$, so
> $\varphi^2 = 4\vartheta^2 - 4a\vartheta + a^2 =a^2 + 4b$,
> and clearly $\{1, \varphi\}$ is also a $\mathbb Q$-basis for $K$.
> Setting $a^2 + 4b = k^2 d$ where $k,d \in \mathbb Z$ and $d$ is squarefree,
> we have $\sqrt d = \varphi/k$, so $K = \mathbb Q(\sqrt d)$. <span class="QED"/>

The [[Algebraic integer|ring of integers]] of a quadratic field are the [[Quadratic integers]],
whose structure is largely determined by $d$ mod $4$.
Any number which is an element of a quadratic field is a **quadratic number**.

## Examples

- [[Rationals adjoin sqrt(223)]], a real quadratic field.

#
---
#state/tidy | #lang/en | #SemBr

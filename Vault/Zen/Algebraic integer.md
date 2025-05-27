---
tags:
  - public
aliases:
  - ring of integers
---
[[Integral element]]
# Algebraic integer

Let $K$ be a field with [[Characteristic|$\opn{char}\mathbb K = 0$]], whence $K : \mathbb{Z}$ is a [[ring extension]].
An element $a \in K$ is an **algebraic integer** iff it is [[Integral element|integral]] over $\mathbb{Z}$, #m/def/ring 
i.e. it is the root of some polynomial $m_{a}(x) \in \mathbb{Z}[x]$.
We denote the **ring of algebraic integers** in $K$ as $\mathcal{O}_{K} = \mathcal{O}_{K:\mathbb{Z}}$,
which is clearly an [[Integrally closed domain]].

## Properties

1. An [[Number field|algebraic number]] $a$ is an algebraic integer iff its [[Algebraic element|minimal polynomial]] $m_{a}(x) \in \mathbb{Q}[x]$ satisfies $m_{a}(x) \in \mathbb{Z}[x]$. ^P1
2. Every [[Number field|algebraic number]] $\alpha$ is an algebraic integer divided by some integer. ^P2


> [!check]- Proof of 1–2
> Clearly if $m_{\alpha}(x) \in \mathbb{Z}[x]$ then $\alpha$ is integral over $\mathbb{Z}$.
> Now suppose $\alpha$ is integral over $\mathbb{Z}$, so it is the root of some monic polynomial $h(x) \in \mathbb{Z}[x]$.
> Let $a_{1},\dots,a_{n}$ denote the roots of $m_{a}(x)$.
> Since $m_{\alpha}(x) \mid h(x)$, it follows $h(a_{i}) = 0$ for all $i \in \mathbb{N}_{n}$,
> so $a_{i}$ are each algebraic integers.
> Since $m_{\alpha}(x) = \prod_{i=1}^n (x-a_{i})^{\mu_{i}} \in \mathbb{Q}[x]$ for some algebraic multiplicities $\mu_{i}$ has coëfficients which are the products of algebraic integers,
> its coëfficients are themselves algebraic integers,
> and thus $m_{\alpha}(x) \in \mathbb{Z}[x]$ by [[Rational numbers#^P1]],
> proving [[#^P1]]. 
> 
> Let
> $$
> \begin{align*}
> m_{\alpha}(x) = x^n + a_{n-1}x^{n-1} + \dots + a_{0} \in \mathbb{Q}[x]
> \end{align*} 
> $$
> be the [[Algebraic element|minimal polynomial]] of $\alpha$ where $\deg f < n$.
> Then $km_{\alpha}(x) \in \mathbb{Z}[x]$ for some $k \in \mathbb{Z}$
> whence
> $$
> \begin{align*}
> 0= (k\alpha)^n + a_{n-1}k(k\alpha)^{n-1}  + a_{n-2}k^2 (k\alpha)^{n-2} + \dots + k^n a_{0} \in \mathbb{Z}[x]
> \end{align*}
> $$
> so $k\alpha$ is an algebraic integer.  <span class="QED"/>

### Other results

- [[Discriminant of an algebraic integer]]

## Special case

- [[Ring of integers of a number field]]

#
---
#state/tidy | #lang/en | #SemBr

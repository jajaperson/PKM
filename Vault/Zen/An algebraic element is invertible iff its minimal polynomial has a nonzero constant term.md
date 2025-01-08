---
tags:
  - public
---
[[Algebraic element]]
# An algebraic element is invertible iff its minimal polynomial has a nonzero constant term

Let $A$ be a [[unital associative algebra]] over $\mathbb{K}$ and $a \in A$ be an [[algebraic element]] with [[Algebraic element|minimal polynomial]] $m_{a}(x) \in \mathbb{K}[x]$.
Then the following are equivalent[^2008] 

1. $a$ is [[Units and zero-divisors|invertible]] in $A$
2. $a$ is not a left-[[Units and zero-divisors|zero-divisor]]
3. $a$ is not a right-[[Units and zero-divisors|zero-divisor]]
4. $a$ is not a (two-sided) [[Units and zero-divisors|zero-divisor]]
5. $m_{a}(x)$ has a nonzero constant term, i.e. $m_{a}(0) \neq 0$.

> [!check]- Proof
> If $a \in A$ is invertible but $m_{a}(x) = xp(x)$ for some $p(x) \in \mathbb{K}[x]$,
> then $ap(a) = m_{x}(a) = 0$ and thus $p(a) = 0$, a contradiction.
> For the converse,
> if $m_{a}(x) = \sum_{i=0}^n \alpha_{i}x^n$ and $\alpha_{0} \neq 0$,
> then
> $$
> \begin{align*}
> -\frac{1}{\alpha_{0}} \left( \sum_{i=1}^{n-1} \alpha_{i} a^i \right) a = 1
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> a^{-1} = -\frac{1}{\alpha_{0}} \left( \sum_{i=1}^{n-1} \alpha_{i} a^i \right)
> \end{align*}
> $$
> is the inverse. <span class="QED"/>

  [^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], §18, pp. 459–461


#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
alias: Lagrange remainder
---
[[Taylor series]]
# Taylor's theorem
**Taylor's theorem** describes the margin of error for a [[Taylor series]].
It states that if $f : [p,q] \to \mathbb{R}$ is $(n+1)$-[[Differentiability|differentiable]],
then for any $a,x \in (p,q)$ there exists a $z \in (a,x)$ such that #m/thm/anal 
$$
\begin{align*}
f(x) = T^f_{n,a}(x) + R^{f,z}_{n,a}(x)
\end{align*}
$$
where $T^f_{n,a}(x)$ is the [[Taylor series]] about $a$ to order $n$ and the **Lagrange remainder** $R_{n,a}^{f,z}(x)$ is given by
$$
\begin{align*}
R^{f,z{}}_{n, a}(x) = \frac{f^{(n + 1)}(z)}{(n+1)!}(x-a)^{n+1}
\end{align*}
$$
Therefore a maximum error is given by the maximum of $R_{n,a}^{f,z}(x)$ with respect to $z$.

> [!check]- Proof[^1953]
> Let
> $$
> \begin{align*}
> A = \frac{f(x) - T^f_{n,a}(x)}{(x-a)^{n+1}}(n+1)!
> \end{align*}
> $$
> i.e. so that
> $$
> \begin{align*}
> f(x) = T_{n,a}^f(x) + \frac{A}{(n+1)!}(x-a)^{n+1}
> \end{align*}
> $$
> We want to show there exists a $z \in (a,b)$ such that $A =f^{(n+1)}(z)$.
> Now define
> $$
> \begin{align*}
> F(\xi) = f(x) - T^f_{n,\xi}(x) - \frac{A}{(n+1)!}(x-\xi)^{n+1}
> \end{align*}
> $$
> Then $F(x) = F(a) = 0$, so by [[Rolle's theorem]] there exists some $z \in (x,a)$ such that $F'(z) = 0$.
> Now
> $$
> \begin{align*}
> F'(\xi) &= - \frac{d}{d\xi} \left( f(\xi)+ \sum_{i=1}^n \frac{f^{(i)}(\xi)}{i!}(x-\xi)^{i} + \frac{A}{(n+1)!}(x-\xi)^{n+1} \right) \\
> &= -\left( f'(\xi) + \sum_{i=1}^n \left( \frac{f^{(i+1)}(\xi)}{i!}(x-\xi)^i - \frac{f^{(i)}(\xi)}{(i-1)!}(x-\xi)^{i-1} \right) - \frac{A}{n!}(x-\xi)^{n} \right) \\
> &= -\left( f'(\xi) + \sum_{i=1}^n \frac{f^{(i+1)}(\xi)}{i!}(x-\xi)^i - \sum_{i=0}^{n-1} \frac{f^{(i+1)}(\xi)}{i!}(x-\xi)^i - \frac{A}{n!}(x-\xi)^n \right) \\
> &= -\left( f'(\xi) + \frac{f^{(n+1)}(\xi)}{n!} - f'(\xi) - \frac{A}{n!}(x-\xi)^n \right) \\
> &= \frac{-f^{(n+1)}(\xi)+A}{n!}(x-\xi)^n
> \end{align*}
> $$
> so $F'(z) = 0$ for $z \in (x,a)$ implies $f^{(n+1)}(z)=A$, as required. <span class="QED"/>


  [^1953]: 1953\. [[Sources/@wolfeProofTaylorsFormula1953|A Proof of Taylor's Formula]]


---
#state/tidy | #SemBr | #lang/en 

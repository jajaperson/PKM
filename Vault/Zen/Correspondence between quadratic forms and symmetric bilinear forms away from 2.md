---
tags:
  - public
---
[[Quadratic form]]
# Correspondence between quadratic forms and symmetric bilinear forms

[[Away from 2]] every [[Quadratic form]] $Q(x)$ is associated with a symmetric [[Bilinear form]] $B(x,y)$ via polarization
$$
\begin{align*}
B(x,y) = \frac{1}{2}( Q(x+y) - Q(x)-Q(y))
\end{align*}
$$
and vice versa by $Q(x) = B(x,x)$. #m/thm/general

> [!check]- Proof
> Let $Q(x) = \tp x A x$ be a quadratic form and choose $A$ to be [[Types of square matrix|symmetric]].
> It follows
> $$
> \begin{align*}
> B(x,y) &= \frac{1}{2}( Q(x+y) - Q(x)-Q(y)) \\
> &= \frac{1}{2} \left((\tp x + \tp y)A(x+y) - \tp x A x - \tp y A y \right) \\
> &= \frac{1}{2}(\tp x A y + \tp y A x) \\
> &= \tp x A y
> \end{align*}
> $$
> Similarly for any bilinear form $B(x,y)=\tp x A y$, one can derive a quadratic form from $Q(x)=B(x,x) = \tp x A x$.
> Clearly these processes are inverses of each other.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

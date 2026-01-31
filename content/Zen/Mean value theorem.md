---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Mean value theorem
The **mean value theorem** simply states that for suitably well-behaved functions there is always at least one point in an interval where the _instantaneous_ derivative equals the _average_ derivative for the whole interval.
Suppose $f : [a,b] \to \mathbb{R}$ is [[Continuity|continuous]] and is $C^1$ [[Differentiability|differentiable]] on $(a,b)$.
Then there exists a $c \in (a,b)$ such that #m/thm/anal 
$$
\begin{align*}
f'(c) = \frac{f(b)-f(a)}{b-a}
\end{align*}
$$

> [!check]- Proof
> Let
> $$
> \begin{align*}
> r = \frac{f(b)-f(a)}{b-a}
> \end{align*}
> $$
> and define $g(x) = f(x) - rx$, which is clearly $C^1$ [[Differentiability|differentiable]].
> Since $g(a)=g(b)$, it follows from [[Rolle's theorem]] that there exists a $c \in (a,b)$ such that $g'(c) = 0$, i.e. $f'(c) = r$, as required. <span class="QED"/>

This is a simple generalization of [[Rolle's theorem]] for differentiable functions.

---
#state/tidy | #SemBr | #lang/en

---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Rolle's theorem

Let $f : [a,b] \to \mathbb{R}$ be [[Continuity|continuous]] with $f(a)=f(b)$.
If for every $x \in (a,b)$ the [[Limits (Calculus)|limits]] $f'(x^+) = \lim_{ \xi \to x^+ } f'(\xi)$ and $f(x^{-}) = \lim_{ \xi \to x^{-} } f'(\xi)$ have $f'(x^+),f(x^{-}) \in [-\infty,\infty]$,
then there exists some $c \in (a,b)$ such that $\{ f'( c^{-}), f'(c^+) \}$ contains both a positive and negative (but [[Extended real line|possibly infinite]]) number. #m/thm/anal 

> [!check]- Proof
> By the [[extreme value theorem]] $f$ reaches either its maximum or minimum at $c \in (a,b)$,
> for if both lay on the boundary then $f$ would be constant.
> Without loss of generality assume $f$ has a maximum at $c$ (otherwise consider $-f$).
> Clearly
> $$
> \begin{align*}
> f'(c^+) = \lim_{ \epsilon \to 0^+ }  \frac{f(c+\epsilon) - f(c)}{h} \in [-\infty,0]
> \end{align*}
> $$
> and similarly
> $$
> \begin{align*}
> f'(c^{-}) = \lim_{ \epsilon \to 0^{-} }  \frac{f(c+\epsilon) - f(c)}{h} \in [0,\infty]
> \end{align*}
> $$
> as required. <span class="QED"/>

In case $f$ is $C^1$ [[Differentiability|differentiable]], Rolle's theorem is equivalent to saying there exists some $c \in (a,b)$ such that $f'(c) = 0$,
which itself is a special case of the [[mean value theorem]].

#
---
#state/tidy | #lang/en | #SemBr

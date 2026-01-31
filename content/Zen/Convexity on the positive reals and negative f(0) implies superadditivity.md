---
mathLink: Convexity on the positive reals and $f(0) \leq 0$ implies superadditivity
alias: strict convexity on the positive reals and $f(0) \leq 0$ implies superadditivity
tags:
  - public
---
[[Convex function]]
# Convexity on the positive reals and $f(0) \leq 0$ implies superadditivity

Let $f : [0,\infty) \to \mathbb{R}$ be a [[convex function]] and $f(0) \leq 0$. Then #m/thm/anal 
$$
\begin{align*}
f(a) + f(b) \leq f(a+b)
\end{align*}
$$
and if $f$ is strictly convex,
$$
\begin{align*}
f(a) + f(b) < f(a+b)
\end{align*}
$$

> [!check]- Proof
> From the definition of convexity
> $$
> \begin{align*}
> f(tx) &\stackrel{*}{\leq} tf(x) + (1-t)f(0) \leq tf(x)
> \end{align*}
> $$
> therefore
> $$
> \begin{align*}
> f(a) + f(b) &= f\left( (a+b) \frac{a}{a+b} \right) + f\left( (a+b) \frac{b}{a+b} \right) \\
> &\stackrel{*}{\leq} \frac{a}{a+b}f(a+b) + \frac{b}{a+b}f(a+b) \\
> &= f(a+b)
> \end{align*}
> $$
> where the marked inequalities become strict for a strictly convex function. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

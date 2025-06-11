---
tags:
  - public
---
[[Number theory MOC]]
# Simple continued fraction

A (simple) **continued fraction** for a [[Real numbers|real number]] $\alpha \in \mathbb{R}$ is an expression of the form
$$
\begin{align*}
\alpha = [a_{0};a_{1},a_{2},\dots] = a_{0} + \frac{1}{a_{1} + \frac{1}{a_{2} + \cdots}}.
\end{align*}
$$
where $a_{i} \in \mathbb{Z}$,
More precisely, $\alpha = \lim_{ n \to \infty }\alpha_{n}$, where the $n\mathrm{th}$ convergent
$$
\begin{align*}
\alpha_{n} = [a_{0} ; a_{1}, \dots, a_{n}] = \frac{p_{n}}{q_{n}}
\end{align*}
$$
where there are defined by the recurrence relations
$$
\begin{align*}
p_{-2} &= 0, & p_{-1} &= 1, & p_{n} &= a_{n}p_{n-1} + p_{n-2} \\
q_{-2} &= 1, & q_{-1} &= a_{0}, & q_{n} &= a_{n}q_{n-1} + q_{n-2}
\end{align*}
$$

> [!code]- Sage
> The methods `.p` and `.q` correspond to the notation given above
> ```sage
> K.<α> = QuadraticField(223)
> continued_fraction(α) 
> # [14; (1, 13, 1, 28)*]
> continued_fraction(α).p(1) 
> # 209
> continued_fraction(α).q(1) 
> # 14
> continued_fraction(α).convergent(2) 
> # 209/14
> ```

#
---
#state/develop  | #lang/en | #SemBr

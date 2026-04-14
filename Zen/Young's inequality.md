---
tags:
  - public
---
[[Hölder conjugate]]
# Young's inequality

Let $p,q \in (1,\infty)$ be Hölder conjugate and $\alpha,\beta \in (0,\infty)$.
Then
$$
\begin{align*}
\alpha\beta \leq \frac{\alpha^p}{p}+\frac{\beta^q}{q}
\end{align*}
$$
with equality iff $\alpha^p = \beta^q$. #m/thm/anal

> [!check]- Proof
> Since the [[exponential function]] is convex,
> $$
> \begin{align*}
> \exp(\lambda t + (1-\lambda)u) \leq \lambda \exp(t) + (1-\lambda)\exp(u)
> \end{align*}
> $$
> for $\lambda \in [0,1]$,
> with equality iff $\lambda \in \{ 0,1 \}$ or $t=u$.
> Thus setting $\lambda = \frac{1}{p}$ whence $1-\lambda = \frac{1}{q}$,
> $t = \ln \alpha^p$ and $u = \ln\beta^q$, we have
> $$
> \begin{align*}
> \exp\left( \frac{p\ln\alpha}{p} + \frac{q\ln\beta}{q} \right) = \alpha\beta \leq \frac{\alpha^p}{p}+\frac{\beta^q}{q}
> \end{align*}
> $$
> with equality iff $t=u$. 
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

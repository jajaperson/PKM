---
tags:
  - public
---
[[Functional analysis MOC]]
# Convolution

The **convolution** of two functions $f,g \in L^1(\mathbb{R}^n)$ is defined as #m/def/anal/fun 
$$
\begin{align*}
(f*g)(t) = \int _{\mathbb{R}^n} f(t')g(t-t') \, dt' = \int _{\mathbb{R}^n} f(t-t')g(t') \, dt'
\end{align*}
$$
This forms a commutative, associative, [[Multilinear map|bilinear]] product on integrable functions,
thereby forming an [[K-monoid]].

> [!check]- Proof
> For commutativity, note
> $$
> \begin{align*}
> (f * g)(t) &= \int _{\mathbb{R}^n} f(\tau)g(t-\tau) \, d\tau = \int _{\mathbb{R}^n} f(t-u)g(u) \, du = (g * t)(t)
> \end{align*}
> $$
> Distributivity follows from [[Fubini's theorem]].
> For linearity, note
> $$
> \begin{align*}
> ((\lambda f + \mu g)*h)(t) 
> &= \int _{\mathbb{R}^n}(\lambda f(\tau)+\mu g(\tau))h(t-\tau) \, d\tau \\
> &= \lambda \int _{\mathbb{R}^n} f(\tau)h(t-\tau) \, d\tau + \mu \int _{\mathbb{R}^n}g(\tau)h(t-\tau) \, d\tau \\
> &= \lambda(f*h)(t)+\mu(g*h)(t)
> \end{align*}
> $$
> and linearity in the other argument follows from commutativity.
> <span class="QED"/>

#
---
#state/develop  | #lang/en | #SemBr

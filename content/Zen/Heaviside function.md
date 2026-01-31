---
tags:
  - public
---
[[Functional analysis MOC]]
# Heaviside function

The **Heaviside function** is defined as #m/def/anal/fun 
$$
\begin{align*}
H : \mathbb{R} &\to \mathbb{R} \\
x &\mapsto \begin{cases}
0 & x < 0 \\
1 & x > 0 \\
\frac{1}{2}  & x = 0
\end{cases}
\end{align*}
$$

## Properties

1. $D H = \delta$ where $\delta$ is the [[Dirac delta]], hence $H$ is a [[Green's function]] of $D$.

> [!check]- Proof of 1
> Let $\rho(x)$ be an arbitrary non-pathological function
> $$
> \begin{align*}
> \int_{-\infty}^{\infty} \frac{d}{dx}H(x-x') \, \rho(x')  \, dx' 
> &= \frac{d}{dx} \int_{-\infty}^{\infty} H(x-x')\,\rho(x') \, dx' \\
> &= \frac{d}{dx} \left[\int_{-\infty}^{x} H(x-x')\,\rho(x') \, dx' + \int_{x}^{\infty} H(x-x')\,\rho(x') \, dx'  \right] \\
> &= \frac{d}{dx} \int_{-\infty}^{x} \rho(x') \, dx'  = \rho(x) \\
> &= \int_{-\infty}^{\infty} \delta(x-x') \, \rho(x') \, dx 
> \end{align*}
> $$
> as claimed. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
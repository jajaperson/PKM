---
tags:
  - public
---
[[Random function]]
# Distribution of a differentiable invertible random function

Let $X: \xi\to \mathbb{R}$ be a [[continuous random variable]] with [[probability density function]] $f_{X}$
and let $T : \mathbb{R}\to\mathbb{R}$ be a $C^1$ [[Differentiability|differentiable]] and strictly increasing [[random function]]. Then #m/thm/prob 
$$
\begin{align*}
f_{T}(t) = f_{X}(x) \abs{\frac{dx}{dt}}
\end{align*}
$$
where $x = T^{-1}(t)$.
Note the same applies for a strictly decreasing random function.

> [!check]- Proof
> Since $T(X) \leq t \iff X \leq T^{-1}(t)$, we have
> $$
> \begin{align*}
> F_{T}(t)= \mathbb{P}(T(X)\leq t) = \mathbb{P}(X \leq T^{-1}(t)) = F_{X}(T^{-1}(t))
> \end{align*}
> $$
> and differentiating both sides gives the above expression. <span class="QED"/>

Equivalently
$$
\begin{align*}
f_{T}(t) \,dt = f_{X}(x)\,dx
\end{align*}
$$

## Multiple dimensions

Let $\vab X : \xi \to \mathbb{R}^n$ be a [[Multivariate random variable|random vector]] with [[joint probability density function]] $f_{\vab X}$ and let $\vab T : \mathbb{R}^n \to \mathbb{R}^m$ be a $C^1$ [[Differentiability|differentiable]] and [[Surjectivity, injectivity, and bijectivity|injective]] [[Random function]].
Then #m/thm/prob 
$$
\begin{align*}
f_{\vab T}(\vab t) = f_{\vab X}(\vab x) \abs{\det{D\vab T^{-1}}}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

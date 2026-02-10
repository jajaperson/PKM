---
tags:
  - public
---
[[Infinite series]]
# Power series
A **power series** centred at $a$ is an infinite series with variable terms of the form
$$
\begin{align*}
f(x) = \sum_{ n = 0 }^{ \infty } b_{n}(x-a)
^n\end{align*}
$$
where $(b_{n})_{n=0}^\infty$ is an infinite [[sequence]] of real numbers,
and $a \in \mathbb{R}$.
In the case where $a = 0$ it is often just called a power series.
The domain of $f$ is therefore the set $D \sube \mathbb{R}$ for which the series converges.
A variant of the [[Ratio test for absolute convergence]] can be used 
to find the **radius of convergence**
$$
\begin{align*}
R = \lim_{ n \to \infty } \abs{\frac{b_{n}}{b_{n+1}}}
\end{align*}
$$
where
- $f(x)$ is [[Absolute and conditional convergence|absolutely convergent]] on the interval centred at $a$ given by $x \in (a-R, a+R) \cup \{ a \}$
- $f(x)$ must be checked manually for divergence at each $x = a \pm R$
- $f(x)$ is divergent for all other $x$

Note this gives rise to the special cases
- If $R = 0$ then $f(x)$ is absolutely convergent for $x = a$ 
  and divergent everywhere else.
- If $R = \infty$, i.e. the limit diverges,
  then $f(x)$ is absolutely convergent for all $x \in \mathbb{R}$.

Another property arising from this is 
that it is not possible for a power series to be convergent in several separate points or intervals.

Power series are used to define the notion of an [[Differentiability|analytic]] function, i.e. the ${C}^\omega$ differentiability class.
Note the derivative of a power series always has the same radius of convergence.

## Examples
Perhaps the most well known power series is the [[Taylor series|Taylor series]] centred at $a$,
often denoted
$$
\begin{align*}
T_{\infty,a}^f(x) = \sum^n_{m = 0}{
\frac{f^{(m)}(a)}{m!}(x-a)^m
}
\end{align*}
$$
which in the case of $a = 0$ is called the [[Taylor series|Maclaurin polynomial]].
In fact, [[Borel's theorem]] states 
that _every_ power series is in fact a Taylor series of some [[smooth]] function.
#
---
#state/tidy | #SemBr

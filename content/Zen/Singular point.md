---
alias: singularity
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Singular point
In analysis, a **singular point** or **singularity** is an input for which a function is not defined.
For example, $\log z$ has a singularity at $z=0$
and $z \mapsto \frac{1}{z-3i}$ has a singularity at $z=3i$.[^2023]

[^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 54


## Classification of singularities

### Removable singularity
A removable singularity is a singularity which may be removed using some kind of [[holomorphic extension]] of $f$,
often by taking the two-sided [[Limits (Calculus)|limit]] at singular points.
For example $f(x) = x^2/x$ is undefined for $f(0)$,
but it may be holomorphically extended to $f(x) = x$ so that $f(0) = 0$.
This is the only possible holomorphic extension,
and the value evaluated at the singularity corresponds to the limit $\lim_{ x \to 0 } x^2/x$.

### Poles

A **pole** is simply a [[zero (analysis)]] of a [[meromorphic]] function's reciprocal $1/f(x)$.
For a singularity at $f(z_{0})$, we say $z_{0}$ is a **pole of order $m$** 
if and only if multiplying the function by $(z-z_{0})^m$ makes the singularity [[#Removable singularity|removable]].
A pole of order 1 is called a **simple pole**.

For example, the function $f(z) = \frac{1}{z-z_{0}}$ has a simple pole at $z_{0}$ since $\lim_{ z \to x }(z-z_{0})f(z) = 1$ for all $x$.

The order of a pole can be determined by reducing each term with the **leading order term** of its [[Laurent series]], or equivalently

> **To calculate the order of a pole at $z_{0}$**
> Let $f(z)= \frac{g(z)}{h(z)}$ where $g(z)$ and $h(z)$ are analytic in a neighbourhood of $z_{0}$.
> Let $n$ be the smallest non-negative integer such that $g^{(n)}(z_{0}) \neq 0$,
> and $m$ be the smallest non-negative integer such that $h^{(m)}(z_{0}) \neq 0$.
> That is to say, $n$ is the order of the zero in the numerator and $m$ is the order of the zero in the denominator.
> Then,
> $$
> \begin{align*}
> \text{order of pole at $z_{0}$} = m - n
> \end{align*}
> $$


[^leading]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 62

### Essential singularity
An **essential singularity** is a singularity that is not a pole (and is not removable).
$$
\begin{align*}
f(z) = e^{-1/z^2}
\end{align*}
$$
has an essential singularity at $z=0$.

#
---
#state/tidy | #lang/en | #SemBr

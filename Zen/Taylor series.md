---
aliases: Taylor polynomial, Maclaurin series, Maclaurin polynomial
tags:
  - public
---
[[Power series]]
# Taylor series
A Taylor [[Power series|series]] can be viewed in two ways:
- As a way of _approximating_ any [[Differentiability|analytic]] function as a polynomial
- A one-to-one _correspondence_ between every [[Differentiability|analytic]] function and an order $\omega$ polynomial
  (which may be conceived as a vector space).

An order-$n$ Taylor polynomial is constructed 
so that its value 
and all its derivatives up to order $n$ 
match that of the original function $f$
at a point $f(a)$.
It is determined to be
$$
\begin{align*}
T^f_{n,a}(x) = \sum^n_{m = 0}{
\frac{f^{(m)}(a)}{m!}(x-a)^m
}
\end{align*}
$$
In the case of $a = 0$, 
it is called a **Maclaurin polynomial**
$$
\begin{align*}
T^f_{n,0}(x) = \sum^n_{m = 0}{
\frac{f^{(m)}(0)}{m!}x^m
}
\end{align*}
$$
As a _correspondance_,
we have the statement
$$
\begin{align*}
f(x) = T^f_{\infty,0}(x) = \sum^\infty_{m = 0}{
\frac{f^{(m)}(0)}{m!}x^m
}
\end{align*}
$$

## Error
The error of an order $n$ Taylor polynomial is given by [[Taylor's theorem]],
which converges to zero as $n \to \infty$ if and only if $f$ is an [[Differentiability|analytic]] function.

## Complex functions
The notion of the **Taylor series** applies to complex functions as well.
For any function $f$ that is [[Differentiability|analytic]] for some domain $D \sube \mathbb{C}$ where $z_{0} \in D$,
$$
\begin{align*}
f(z) = T^f_{\infty,z_{0}}(z) = \sum^\infty_{m = 0}{
\frac{f^{(m)}(z_{0})}{m!}(z-z_{0})^m
}
\end{align*}
$$
This series **converges** for any disc centred at $z_{0}$ contained by $D$.[^2023]
In [[Complex analysis MOC]], a similar power series called the [[Laurent series]] includes negative powers, that is $m$ ranges through all of $\mathbb{Z}$.
This generalises the Taylor series to cover some non-analytic functions.

  [^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 58

---
#state/tidy | #SemBr 
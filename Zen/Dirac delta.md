---
tags:
  - public
---
[[Functional analysis MOC]]
# Dirac delta (function)
The **Dirac delta** is a mathematical object which may be thought of as the continuous counterpart to the discrete [[Kronecker delta]].
It is often defined by the properties
$$
\begin{align*}
0 &= \delta(x) &\forall x \neq 0 \\ \\
1 &= \int_{-\infty}^{\infty} \delta(x) \, dx 
\end{align*}
$$
While often treated like a function, the Dirac delta is actually an example of a [[Generalised function]] or distribution.
It is associated with many abuses of notation.

> [!warning]
> This Zettel is neither complete nor rigorous, as is the case with many treatments of the Dirac delta

In quantum mechanics and indeed many of its analytical applications,
the Dirac delta is more useful for representing the linear forms for evaluation of a function at a specific point.[^grasso]

$$
\begin{align*}
\int_{-\infty}^{\infty} \delta(x-x') f(x) \, dx = f(x') 
\end{align*}
$$

[^grasso]: 2022\. [[Sources/@grassoMathematicalPhysicsLecture2022|Mathematical physics lecture notes]], p. 229

This motivates the [[Fourier transform]] representation of the delta function:
$$
\begin{align*}
\delta(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-i\omega x} \, d\omega 
\end{align*}
$$

## Properties

1. $$
  f(x)\delta(x-x') = f(x')\delta(x)
  $$
2. $$
\begin{align*}
\delta(kx) = \frac{1}{\abs k}\delta(x)
\end{align*}
$$
3. $$
\begin{align*}
\delta (x) = \frac{1}{2\pi} \int_{-\infty}^\infty e^{ikx} \, dk 
\end{align*}
$$

[^griffiths]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], pp. 46ff. (§1.5.2)

## Higher dimension
The Dirac delta can be generalised to inputs in $\mathbb{R}^n$ with
$$
\begin{align*}
0 &= \delta^n(\vab v) &\forall \vab v \neq \vab 0 \\ \\
1 &= \int_{\mathbb{R}^n} \delta^n(x) \, dR
\end{align*}
$$

## See also

- [[Formal delta]]

#
---
#state/develop | #lang/en | #SemBr

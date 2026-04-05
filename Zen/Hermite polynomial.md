---
tags:
  - public
---
[[Special functions MOC]]
# Hermite polynomial

The $n$th **Hermite polynomial** $H_{n}$ for $n \in \mathbb{N}_{0}$ is a polynomial of degree $n$ given by the [[Rodrigues' formula]] #m/def/fun 
$$
\begin{align*}
H_{n}(x) = (-1)^n\, \mathrm{e}^{x^2} \left( \frac{d}{dx} \right)^n \,\mathrm{e}^{-x^2}
\end{align*}
$$
in the Physicist's convention and is [[Odd and even functions|even or odd]] depending on the parity of $n$.

## Properties

1. The Hermite polynomials satisfy the orthonormality condition ^P1
  $$
  \begin{align*}
  \int_{-\infty}^{\infty} H_{m}(x)H_{n}(x) \mathrm{e}^{-x^2}\,dx = \sqrt{ \pi } \, 2^n \, n! \,\delta_{nm}
  \end{align*}
  $$ 

#
---
#state/develop | #lang/en | #SemBr

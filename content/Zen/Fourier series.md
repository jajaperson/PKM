---
tags:
  - public
---
[[Fourier analysis MOC]]
# Fourier series
The **Fourier series** of a periodic function is an [[Infinite series]] of trigonometric functions, equal to the original function except at points of discontinuity.

$$
\begin{align*}
\text{square}(x) = \frac{1}{4} \sum_{n \in \text{odd}} {\frac{1}{n} \sin(n \pi)}
\end{align*}
$$
> ![[Square Wave (Fourier Series).svg#invert]]
> 
> Fourier series of a square wave. 
> The above equation corresponds to $L=\pi$.

Specifically, the Fourier series is an infinite series of cosine and sine functions at positive integer frequencies, so that
$$
\begin{align*}
f(t) \approx a_{0} + \sum_{n=1}^\infty{a_{n} \cos(nt)} + \sum_{n=1}^\infty {b_{n} \sin(nt)}
\end{align*}
$$
At points of discontinuity, for example the vertical sections in the square wave above, the value of the Fourier series is the average of the limits either side of the point.
An alternate form is given by the [[Exponential Fourier series]].

[^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], pp. 79ff.

## Finding the Fourier series
The following integrals yield values for $a_{k}$ and $b_{k}$ respectively[^2023]
$$
\begin{align*}
a_{k} &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \cos(kt) \, dt \\
b_{k} &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \sin(kt) \, dt 
\end{align*}
$$

## Properties
- It follows from sine and cosine being [[odd and even functions]] respectively 
  that the Fourier series of an odd function has no cosine terms,
  and that of an even function has no sine terms.
  Additionally, note that $a_{0} = 0$ for odd functions.
- The following orthogonality relations may prove useful
  $$
  \begin{align*}
  \int_{-\pi}^{\pi} \cos(nx)\cos(nx) \, dx &= \pi\delta_{nm} \\
  \int_{-\pi}^{\pi} \sin (nx)\sin(nx) \, dx &= \pi\delta_{nm} \\
  \int_{-\pi}^{\pi} \cos(nx)\sin(nx) \, dx &= 0
  \end{align*}
  $$
  where $\delta_{nm} = [n = m]$ is the [[Kronecker delta]].[^libre]
  Another useful property is
  $$
  \begin{align*}
  \sin n\pi = 0 \quad\forall n\in\mathbb{N} \\
  \cos n\pi = (-1)^n \quad\forall n \in \mathbb{N}
  \end{align*}
  $$
- (**Fourier convergence theorem**) Any piecewise differentiable function on the interval $[-L, L]$ with period $2L$ has a Fourier series convergent to $f(x)$ where $f$ is continuous and the average of one-sided limits where $f$ is discontinuous.[^10.3.1]

[^libre]: Libretexts. [Chasnov: Differential Equations](https://math.libretexts.org/Bookshelves/Differential_Equations/Differential_Equations_(Chasnov)/09%3A_Partial_Differential_Equations/9.03%3A_Fourier_Series), §9.3
[^10.3.1]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 478 (theorem 10.3.1)

## Relation to Fourier transform
The Fourier series may be thought of as a discrete version of the [[Fourier transform]], 
which replaces summation of discrete frequencies with integration of a continuous range of frequencies.

## Practice problems
- 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 89 (§5 problems)
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]]
  - introduction: pp. 476–477 (§10.2 problems)
  - convergence: pp. 481–482 (§10.3 problems)
  - odd/even: pp. 487–488 (§10.4 problems)

#
---
#state/develop | #lang/en | #SemBr | #review

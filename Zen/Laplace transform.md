---
tags:
  - public
---
[[Differential equations MOC]]
# Laplace transform
The **Laplace transform** is a linear endomorphism (linear operator)
on the vector space of functions,
which converts a function of time domain $f(t)$ defined for $t \leq 0$
to a function of imaginary frequency domain $F(s) = \mathcal{L}\{ f \}(s)$.
Thus it may be thought of as a complex version of the [[Fourier transform]].
$$
\begin{align*}
F(s) = \mathcal{L}\{ f \}(s) = \int_{0}^{\infty} e^{-st}f(t) \, dt 
\end{align*}
$$
## Existence and domain
The domain of the Laplace transform $F(s)$ is the subset of $\mathbb{C}$ 
over which the [[improper integral]] is convergent. 
Given a [[Piecewise continuous]] function $f(t)$ is of [[Exponential order]] $\leq \gamma$,
then $F(s) = \mathcal{L}\{ f \}(s)$ exists for all $s \geq \gamma$.

## Properties

It follows from the [[Linear map|linearity]] of the [[integral]] that the Laplace transform is a [[Linear endomorphism]].
Moreover, the Laplace transform is a linear [[Morphism|epic]] [[Morphism|endomorphism]], 
allowing us to define the **inverse Laplace transform** for many functions such that
$$
\begin{align*}
\mathcal{L}^{-1}\{ \mathcal{L}\{ f \} \}(t) = f(t)
\end{align*}
$$

The properties of the Laplace transform as a linear operator, and the existence (for many functions) of the inverse,
gives the transform tremendous application in solving differential equations, 
especially [[Classifying DEs|non-homogeneous linear differential equations]].
See [[Solving differential equations using the Laplace transform]].

## See also

For a list of the Laplace transforms of some common functions, see [[Table of Laplace transforms]].

#
---
#state/develop | #SemBr

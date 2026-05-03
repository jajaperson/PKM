---
tags:
  - public
---
[[Differential equations MOC]]
# Odd and even functions
A function $f : V \to W$ between appropriate [[Module|modules]] (in particular we could take $V = W = \mathbb{R}$) is said to be **even** if it symmetric about 0, whereas it is said to be **odd** if it is antisymmetric about 0, i.e.
$$
\begin{align*}
f \text{ is even} &\iff f(x) = f(-x) \\
f\text{ is odd} &\iff f(x) = -f(-x)
\end{align*}
$$
The names come from the fact that for $f(x) = x^n$, odd $n$ is an odd function and even $n$ is even.

From an abstract perspective, this is naturally seen as the decomposition of the [[group representation]] of [[Symmetric group|$\mathrm{S}_{2}$]] on $V^W$ into homogenous components of the trivial and [[alternating character|alternating]] characters.

## Properties

#### Addition
Two functions of the same parity add or divide to a function of that parity.
Functions of different parity add to a function of no parity.[^2017]

#### Multiplication
The properties of odd and even functions under multiplication
are analogous to those of integers under addition:[^2017]

- $\text{odd } f \times \text{odd } g = \text{even } fg$
- $\text{even } f \times \text{even } g = \text{even } fg$
- $\text{odd } f \times \text{even } g = \text{odd } fg$

#### Integration properties
The properties of odd and even functions can be used to greatly simplify integration.[^2017]
For an odd function,
$$
\begin{align*}
\int_{-a}^{a} \text{odd } f(x) \, dx = 0 
\end{align*}
$$
whereas for an even
$$
\begin{align*}
\int_{-a}^{a} \text{even } f(x) \, dx = 2 \int_{0}^{a} \text{even } f(x)\,dx
\end{align*}
$$

#### Series
It follows that for any series with linearly independent terms,
such as a [[Fourier series]] or [[Taylor series]],
every term will be odd for an odd function or even or an even function.
In particular see [[Fourier series#Properties]].


[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], pp. 482ff. (§10.4)

#
---
#state/tidy | #lang/en | #SemBr

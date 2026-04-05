---
tags:
  - public
---
[[Analysis MOC]]
# Exponential function

The **exponential function** $\exp : \mathbb{R} \to \mathbb{R} : x \mapsto e^x$ was originally defined and motivated exponentiation (repeated multiplication), but is usually defined by the following [[Power series]] #m/def/anal 
$$
\begin{align*}
\exp x = \sum_{k=0}^\infty \frac{x^k}{k!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + \cdots
\end{align*}
$$
or equivalently by the [[Limits (Calculus)|limit]]
$$
\begin{align*}
\exp x =
\lim_{ k \to \infty } \left( 1 + \frac{x}{k} \right)^k
\end{align*}
$$
It solves the [[First-order linear differential equation]]
$$
\begin{align*}
\frac{dy}{dx} = y
\end{align*}
$$

## Remarks

- The power series definition is used to define the [[Matrix exponential]]

#
---
#state/develop | #lang/en | #SemBr

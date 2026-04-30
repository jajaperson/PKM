---
alias: Coulomb potential
tags:
  - public
---
[[Electrostatic potential]]
# Electric potential of point charges
The electric potential due to a point charge is given by
$$
\begin{align*}
\vab E(\vab r) = \frac{1}{4\pi\epsilon_{0}} \frac{q}{\Sr}
\end{align*}
$$
and for a collection of point charges
$$
\begin{align*}
\vab E(\vab r) = \frac{1}{4\pi\epsilon_{0}}\sum_{i=1}^n \frac{q_{i}}{\Sr_{i}}
\end{align*}
$$

## Derivation
Since by convention, we define the zero of an [[Electrostatic potential]] field
to be the point infinitely far away in which there is no electrostatic force,
we can derive a scalar field for the potential at each point
due to a point charge.
$$
\begin{align*}
V &= \lim_{\vab r_0 \to \vab\infty}{\frac{q}{4\pi\epsilon_0}\int_{r_0}^r\frac{\unitv r \cdot d\vab r}{r^2}} \\
&= \lim_{r_0 \to \infty}{\frac{q}{4\pi\epsilon_0} \int_{r_0}^r{\frac{dr}{r^2}}} \\
&= \lim_{r_0 \to \infty}{\frac{q}{4\pi\epsilon_0}\left[\frac{1}{r} - \frac{1}{r_0}\right]} \\
&= \frac{1}{4\pi\epsilon_0} \frac{q}{r}
\end{align*}
$$
This is sometimes called the **Coulomb potential**

#
---
#state/tidy | #SemBr | #lang/en 
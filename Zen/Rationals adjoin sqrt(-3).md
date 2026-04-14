---
mathLink: $\mathbb{Q}(\sqrt{ -3 })$
tags:
  - public
---
[[Imaginary quadratic field]]
# $\mathbb{Q}(\sqrt{ -3 })$

Consider the monogenic [[imaginary quadratic field]] $K = \mathbb{Q}(\alpha)$ where $\alpha = \sqrt{ -3 }$. #m/thm/num/alg 

> [!code]- Sage
> ```sage
> K.<α> = QuadraticField(-3)
> ```

## Discriminant

By [[Discriminant of an algebraic integer]],
$$
\begin{align*}
\Delta_{K} = -3.
\end{align*}
$$

## Group of units

By [[Imaginary quadratic field#^P1]], we have the exceptional case
$$
\begin{align*}
\mathcal{O}_{K}^ \times = \left\{  \pm 1, \pm \frac{1 - \alpha}{2}, \pm \frac{1+\alpha}{2}  \right\} \cong \mathrm{C}_{6}
\end{align*}
$$

## Class group

[[Minkowski's bound]] is given by
$$
\begin{align*}
M_{K} = \frac{2\sqrt{ 3 }}{\pi} < 2
\end{align*}
$$
hence $\Cl K$ is trivial, i.e. $\mathcal{O}_{K}$ is a [[Unique factorization domain|UFD]].

#
---
#state/tidy | #lang/en | #SemBr

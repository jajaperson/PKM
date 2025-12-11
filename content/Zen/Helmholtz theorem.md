---
aliases:
  - Helmholtz decomposition
tags:
  - public
---
[[Vector field]]
# Helmholtz theorem
The **Helmholtz theorem** is sometimes referred to as the **fundamental theorem of vector calculus** states the existence of the Helmholtz decomposition for a sufficiently smooth rapidly decaying vector field,
that is for any vector field $\vab F : \mathbb{R}^3 \to \mathbb{R}^3$
there exist $U : \mathbb{R}^3 \to \mathbb{R}$  and $\vab W: \mathbb{R}^3 \to \mathbb{R}^3$ such that
$$
\begin{align*}
\vab F = - \vab{\nabla}U + \vab{\nabla} \times \vab W
\end{align*}
$$
In other words, a vector field may be decomposed into a

- [[Conservative vector field]] with a scalar potential
- [[Incompressible vector field]] with a vector potential

> **Helmholtz Theorem**
> Any differentiable vector function $\vab F(\vab r)$ that goes to zero faster than $1 / r$ as $r \to \infty$ 
> can be expressed as the gradient of a scalar plus the curl of a vector.[^2013] #m/thm/anal/vec

## Calculation
Let $D = \vab{\nabla} \cdot \vab F$ be the divergence of $\vab F$
and $\vab C = \vab{\nabla} \cdot \vab F$ be the curl.
Then, the scalar potential of the irrotational component is given by
$$
\begin{align*}
U(\vab r) = \frac{1}{4\pi} \iiint _{\mathbb{R}^3} \frac{D(\vab r')}{\Sr} \, d\tau' = \frac{1}{4\pi} \iiint_{\mathbb{R}^3} \frac{D(\vab r')}{\|\vab r - \vab r'\|} \,d\tau'
\end{align*}
$$
and the vector potential of the incompressible component is given by
$$
\begin{align*}
\vab W(\vab r) = \frac{1}{4\pi} \iiint _{\mathbb{R}^3} \frac{\vab C(\vab r')}{\Sr} \, d\tau' = \frac{1}{4\pi} \iiint_{\mathbb{R}^3} \frac{\vab C(\vab r')}{\|\vab r - \vab r'\|} \,d\tau'
\end{align*}
$$
For a derivation, see Griffiths[^2013].

## Corollary: Uniqueness

Part of the reason that the Helmholtz theorem is so important is it verifies the uniqueness of solutions to [[Maxwell's equations]],
which is given by the corollary

> **Corollary** If the divergence $D(\vab r)$ and the curl $\vab C(\vab r)$ of a vector function $\vab F(\vab r)$ are specified,
> and if they both go to zero faster than $1 / r^2$ as $r \to \infty$,
> then $\vab F$ may be determined uniquely.[^2013] #m/thm/anal/vec


[^2013]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]]p. 582 (Appendix B)

#
---
#state/tidy | #lang/en | #SemBr 
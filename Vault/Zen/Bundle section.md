---
tags:
  - public
aliases: section
---
[[Fibre bundle]]
# Bundle section

Consider a [[fibre bundle]].
$$
\begin{align*}
F \to E \stackrel{\pi}{\twoheadrightarrow} B.
\end{align*}
$$
A **section** of the bundle is simply a [[Split epimorphism|section]] of $\pi$ in the sense of category theory, #m/def/top
i.e. a morphism $\sigma : B \hookrightarrow E$ such that $\pi\sigma = 1_{B}$.

This makes a section a special case of a [[bundle map]] if we consider $B$ as a bundle over itself, so the set of all sections is given by
$$
\begin{align*}
\Gamma(B,E) =  \Gamma E := \cat{Bund}_{B}(E,B)
\end{align*}
$$

A section can be thought of as a dependently typed function,
sending each $p \in B$ to a $\sigma(p)$ in the fibre $E_{p}$.
#
---
#state/tidy | #lang/en | #SemBr

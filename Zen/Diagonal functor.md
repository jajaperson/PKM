---
tags:
  - public
---
[[Category theory MOC]]
# Diagonal functor

Let $\cat J$ and $\cat C$ be categories.
The corresponding **diagonal functor** #m/def/cat
$$
\begin{align*}
\Delta_{\cat J}: \cat C \to \cat C^{\cat J}
\end{align*}
$$
is the [[functor]] into the [[functor category]] $\cat C^{\cat J}$ sending each object $X \in \cat C$ to the constant functor $X : \cat J \to \cat C$
and each morphism $f \in \cat C(X,Y)$
to the [[natural transformation]] whose components are all $f$.

In the case $\cat J = \cat 2 = \underline 1 \oplus \underline 1$, we have $\cat C^\cat{2} \cong \cat C \times \cat C$, giving the typical _binary_ diagonal functor.

## Properties

- The adjoints, if they exist, are limits and colimits of shape $\cat J$ in $\cat C$ — See [[Limits and colimits as adjoints to the diagonal]]

#
---
#state/develop | #lang/en | #SemBr

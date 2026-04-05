---
tags:
  - public
---
[[Compact space]]
# The continuous image of a compact space is compact

Let $X, Y \in \Top$ and $f \in  \Top(X,Y)$.
If $X$ is compact, so is $f(X)$. #m/thm/topology 

> [!check]- Proof
> Without loss of generality, consider a continuous surjection $f : X \twoheadrightarrow Y$.
> Let $\{ U_{\alpha} \}_{\alpha \in I}$ be an [[Cover set|open cover]] of $Y$.
> It follows that $\{ f^{-1}U_{\alpha} \}_{\alpha \in I}$ is an open cover of $X$
> with a finite subcover $\{ f^{-1}U_{\alpha_{n}} \}_{n=1}^m$.
> Therefore $\{ ff^{-1} U_{\alpha_{n}} \}_{n=1}^m = \{ U_{\alpha_{n}} \}_{n=1}^m$ is a finite subcover of $Y$.
> <span class="QED"/>

It follows that compactness is a [[Topological property]].

#
---
#state/tidy | #lang/en | #SemBr

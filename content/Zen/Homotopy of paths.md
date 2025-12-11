---
tags:
  - public
---
[[Homotopy theory MOC]]
# Homotopy of paths

Let $\alpha, \beta : \mathbb{I} \to X$ be [[Continuous path|paths]] with common endpoints, i.e. $\alpha(0) = \beta(0)$ and $\alpha(1) = \beta(1)$.
Then a **homotopy of paths** $H : \alpha \simeq \beta$ is a [[homotopy of maps]] with the additional constraint that the endpoints are the same for all $t$, #m/def/homotopy i.e. $G : [0,1] \times [0,1] \to X$ with
$$
\begin{align*}
H(u,0) &= \alpha(u) \\
H(u, 1) &= \beta(u) \\
H(0,t) &= \alpha(0) = \beta(0) \\
H(1,t) &= \alpha(1) = \beta(1)
\end{align*}
$$
This is equivalent to homotopy relative $\{ 0,1 \}$.
Homotopy classes of paths are the morphisms of the [[Fundamental groupoid]].

## Properties

- [[Path traversal lemma]]

#
---
#state/tidy | #lang/en | #SemBr

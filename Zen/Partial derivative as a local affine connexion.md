---
tags:
  - public
---
[[Affine connexion]]
# Partial derivative as a local affine connexion

Let $(M, \mathscr{A})$ be a $C^\alpha$-[[Differentiable manifold|manifold]] and $x : U \to \mathbb{R}^m$ be a chart in $\mathscr{A}$.
Let $(\partial_{\mu}{}^a)_{\mu=1}^m$ denote the associated partial derivatives.
We can define the **ordinary derivative** $\partial$ as an [[affine connexion]] local to $U$ #m/thm/geo/diff 
so that for $X^a = X^\mu  \, \partial_{\mu}{}^a \in \mathfrak{X}(U)$ and $Y^a = Y^\mu \, \partial_{\mu}{}^a \in \mathfrak{X}(U)$ we have[^2009]
$$
\begin{align*}
\partial_{Y} X^a = Y^b \, \partial_{b}X^a = Y^\mu (\partial_{\mu}X^\nu) \partial_{\nu}{}^a.
\end{align*}
$$

> [!check]- Proof
> Follows from standard properties of the [[Partial derivative]]. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@waldGeneralRelativity2009|General relativity]], §3.1, p. 32.

#
---
#state/tidy | #lang/en | #SemBr

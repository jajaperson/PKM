---
tags:
  - public
---
[[Differential geometry MOC]]
# Tangent bundle

Let $M$ be a $C^\alpha$-[[Differentiable manifold|manifold]].
The **tangent bundle** is a [[vector bundle]] of all the [[Tangent space|tangent spaces]] of $M$, #m/def/geo/diff  so as a set
$$
\begin{align*}
TM = \coprod_{p \in M} T_{x}M = \bigcup_{p \in M} \{ x \} \times T_{x}M
\end{align*}
$$
The construction of topological and $C^\alpha$-structure is a little more involved.
Let $\mathscr{A}$ be the maximal atlas for $M$, so each $(x, U) \in \mathscr{A}$ gives a $C^\alpha$-isomorphism
$$
\begin{align*}
x : U \to \mathbb{R}^n
\end{align*}
$$
which induces a bijection
$$
\begin{align*}
\tilde{x} : \pi^{-1}U &\to \mathbb{R}^n \times \mathbb{R}^n \\
(p, v^\mu \partial_{\mu}) &\mapsto (x(p), (v^\mu))
\end{align*}
$$
which induce an atlas on $TM$.
Thus $A \sube TM$ is open iff $\tilde{x}(A \cap \pi^{-1} U)$ is open for every $(x,U) \in \mathscr{A}$.
#
---
#state/develop | #lang/en | #SemBr

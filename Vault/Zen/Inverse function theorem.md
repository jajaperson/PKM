---
tags:
  - public
---
[[Analysis MOC]]
# Inverse function theorem

Let $U \sube \mathbb{R}^n$ be open, $F: U \to \mathbb{R}^n$ be $C^\infty$ [[Differentiability|differentiable]],
and $x \in U$.
Then if the [[total derivative]] $DF(x)$ is non-singular,
there exist open neighbourhoods $U'$ of $x$ in $U$ and $V$ of $f(x)$ in $\mathbb{R}^n$ such that
$$
\begin{align*}
F \restriction U' : U' \to V
\end{align*}
$$
is a $C^\infty$ [[diffeomorphism]], #m/thm/anal 
i.e. $F$ is locally a diffeomorphism at $x$.

> [!missing]- Proof
> #missing/proof

The constructive proof relates to [[Newton's method]].

## Corollary

The above theorem is easily extended to a $C^\infty$ [[Differentiability|differentiable]] map $f:X\to Y$ between $C^\infty$ [[Differentiable manifold|differentiable manifolds]] $X,Y$.
If the [[Differential pushforward]] $T_{x}f : T_{x}X \to T_{f(x)}Y$ is a [[linear isomorphism]],
then $f$ is a local [[diffeomorphism]],
as one expects from the [[Linearization dogma]].

#
---
#state/develop | #lang/en | #SemBr

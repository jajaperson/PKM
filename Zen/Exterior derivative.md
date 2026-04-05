---
tags:
  - public
---
[[Differential form]]
# Exterior derivative

The **exterior derivative** generalizes the concept of _differential_ to general [[Differential form|differential forms]] on a $C^\alpha$-[[Differentiable manifold|manifold]] $(M, \mathscr{A})$.
For $p \geq 0$, we have a map
$$
\begin{align*}
\mathrm{d} : \Omega^{p}(M) \to \Omega^{p+1}(M).
\end{align*}
$$
Note that to any 0-form, i.e. continuous function $f \in C^\alpha(M)$, we can naturally associate a 1-form by the
$$
\begin{align*}
(\mathrm{d}f)_{a} \, v^a = \nabla_{v}f.
\end{align*}
$$
The general exterior derivative is then the unique extension of this operation to a [[graded derivation]] $\Omega^\bullet(M) \to \Omega^\bullet(M)$ such that $\mathrm{d}^2 = 0$, i.e. if $\omega \in \Omega^p(M)$ and $\mu \in \Omega^q(M)$ we have
$$
\begin{align*}
\mathrm{d}(\omega \wedge \mu) = \mathrm{d}\omega \wedge \mu + (-1)^p \, \omega \wedge \mathrm{d}\mu.
\end{align*}
$$

> [!missing]- Proof of existence and uniqueness
> #missing/proof

## Local coördinates

Let $x : U \to \mathbb{R}^m$ be a [[Coördinate chart|chart]]. Then for
$$
\begin{align*}
\omega = \frac{1}{p!} \, \omega_{\mu_{1} \cdots \mu_{p}} \, \mathrm{d}x^{\mu_{1}} \wedge \dots \wedge \mathrm{d}x^{\mu_{p}}
\end{align*}
$$
we have
$$
\begin{align*}
\mathrm{d}\omega = \frac{1}{p!} \, \partial_{\mu_{p+1}} \omega_{\mu_{1} \cdots \mu_{p}} \, \mathrm{d}x^{\mu_{p+1}} \wedge \mathrm{d}x^{\mu_{1}} \wedge \dots \wedge \mathrm{d}x^{\mu_{p}}
\end{align*}
$$
This can be seen as a special case of [[#From a covariant derivative]].

## From a covariant derivative

Let $\nabla$ denote a [[Torsion tensor|torsion-free]] [[affine connexion]] on $M$.
Then for $\omega_{a_{1} \cdots a_{p}} \in \Omega^p(M)$,
the [[covariant derivative]] gives
$$
\begin{align*}
(\mathrm{d}\omega)_{ba_{1} \cdots a_{p}} =(p+1) \nabla_{[b} \omega_{a_{1} \cdots a_{p}]}
\end{align*}
$$
which is independent of the choice of $\nabla$.[^2009]

  [^2009]: 2009\. [[Sources/@waldGeneralRelativity2009|General relativity]], §B.1, pp. 428–429.

> [!missing]- Proof
> #missing/proof


## See also

- [[Covariant derivative]]

#
---
#state/develop | #lang/en | #SemBr

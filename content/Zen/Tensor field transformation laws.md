---
tags:
  - public
---
[[Tensor field]]
# Tensor field transformation laws

Let $(M, \mathscr{A})$ be a $C^\alpha$-[[manifold]] and $X \in \mathcal{T}^p_{q}(M)$ be a [[tensor field]].
If $x, x': U, V \to \mathbb{R}^n$ are [[Coördinate chart|charts]] in $\mathscr{A}$, then in local coördinates we have #m/thm/geo/diff 
$$
\begin{align*}
X'^{\mu_{1}\cdots\mu_{p}}_{\nu_{1}\cdots \nu_{q}}(x') = \frac{ \partial x'^{\mu_{1}} }{ \partial x^{\alpha_{1}} } \cdots \frac{ \partial x'^{\mu_{p}} }{ \partial x^{\alpha_{p}} } \, \frac{ \partial x^{\beta_{1}} }{ \partial x'^{\nu_{1}} } \cdots \frac{ \partial x^{\beta_{q}} }{ \partial x'^{\nu_{q}} }  \, X^{\alpha_{1}\cdots\alpha_{p}}_{\beta_{1}\cdots\beta_{q}}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

Often physicists will take this as the definition of a tensor: “A tensor is an object whose components transform as a tensor.”

#
---
#state/develop | #lang/en | #SemBr

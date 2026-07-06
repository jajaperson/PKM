---
date: 2026-06-24
mathLink: $\eta$-unicity
tags:
  - public
---
[[Type theory MOC]]
# $\eta$-unicity

An <dfn>$\eta$-unicity</dfn> rule is a conversion rule, usually a [[judgemental equality]], expressing the uniqueness of a connectives canonical terms.
This is in some sense dual to [[β-computation]], since $\eta$-unicity specifies the result of an introduction rule applied to an eliminator.
For example, in the [[untyped λ-calculus]], we have
$$
\begin{align*}
\lambda x. f\, x =_{\eta} f,
\end{align*}
$$
and thus “all functions are $\lambda$-abstractions”.
Similarly, in the [[simply typed λ-calculus]], we have
$$
\begin{align*}
p = \langle \mathbf{pr}_{1} (p), \mathbf{pr}_{2} (p) \rangle : A \times B
\end{align*}
$$
thus “all terms in the product type are pairs.”

## Internalizing judgemental structure

In terms of [[Internalizing judgemental structure]],
if a connective $\Upsilon$ is specified by a family of bijections

$$
\begin{align*}
\iota : A_{\Gamma} \cong B_{\Gamma}
\end{align*}
$$

natural in $\Gamma$ where

- $A_{\Gamma}$ is either $\opn{Tm}(\Gamma, \Upsilon)$ or $\opn{Tm}(\Gamma. \Upsilon, A)$;
- $B_{\Gamma}$ is a meta-set constructed from sets of terms (“judgementally-determined structure”)

then $\eta$-unicity comes from the identity
$$
\begin{align*}
\iota^{-1} \circ \iota = \id_{A_{\Gamma}}.
\end{align*}
$$


#
---
#state/tidy | #lang/en | #SemBr

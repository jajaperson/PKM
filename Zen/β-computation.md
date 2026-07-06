---
date: 2026-06-24
mathLink: $\beta$-computation
tags:
  - public
---
[[Type theory MOC]]
# $\beta$-computation

A <dfn>$\beta$-computation</dfn> rule is a conversion rule, usually a [[judgemental equality]],
specifying how a connective should compute.
Specifically, $\beta$-computation specifies the result of an eliminator applied to an introduction.
For example, in the [[untyped λ-calculus]], we have
$$
\begin{align*}
(\lambda x. t)\, u \rightsquigarrow_{\beta} t[u/x].
\end{align*}
$$

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

then $\beta$-computation comes from the identity
$$
\begin{align*}
\iota \circ \iota^{-1} = \id_{B_{\Gamma}}.
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

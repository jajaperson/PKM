---
tags:
  - public
aliases:
  - comonoid
mathLink-blocks:
  counit: coünit law
  coass: coässociative law
---
[[Monoidal internalization]]
# Comonoid object

Let $(\cat C, \otimes, 1, \alpha,\lambda,\rho)$ be a [[monoidal category]].
A <dfn>comonoid</dfn> in $\cat C$ is a [[Monoid object|monoid]] in the [[opposite category]] $\op{\cat C}$, #m/def/cat consisting of of the data
$$
\begin{align*}
1 \xleftarrow \epsilon M \xrightarrow \Delta M \otimes M
\end{align*}
$$
where $\epsilon$ is called the <dfn>coünit</dfn> and $\Delta$ is called the <dfn>comultiplication</dfn>,
and these satisfy the <dfn>left/right coünit laws</dfn>

![[coünital-string.svg#invert|c]]

^counit

the <dfn>coässociative law</dfn>.

![[coässociative-string.svg#invert|c]]

^coass


The category of comonoid objects is [[Category of comonoid objects]], which is simply [[Category of monoid objects|$\Mon_{\op{\cat C}}$]].

## Cocommutative cocomonoid

If $\cat C$ is [[Braided monoidal category|braided]], a comonoid satisfying the <dfn>cocommutative law</dfn>

![[cocommutative-string.svg#invert|c]]

is called <dfn>cocommutative</dfn>.

## Higher comultiplications
Note that by coässociativity, we can unambiguously define
$$
\begin{align*}
\Delta_{n} : M \to M^{\otimes (n+1)}
\end{align*}
$$

## Examples

- A **comonoid** in [[Category of monoid objects]] is a [[Bimonoid object]] (which is equivalently a [[Monoid object|monoid]] in $\cat{Mon}_{\op{\cat C}}$).
- A comonoid in $\lMod R$ is an [[R-comonoid]].

## See also

- [[Comonoid morphism]]
- [[Tensor product of (co)monoids|Tensor product of comonoids]]

#
---
#state/develop | #lang/en | #SemBr

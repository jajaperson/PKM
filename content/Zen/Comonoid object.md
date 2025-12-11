---
tags:
  - public
aliases:
  - comonoid
---
[[Internalization]]
# Comonoid object

Let $(\cat C, \otimes, 1, \alpha,\lambda,\rho)$ be a [[monoidal category]].
A **comonoid** in $\cat C$ is a [[Monoid object|monoid]] in the [[opposite category]] $\op{\cat C}$, #m/def/cat consisting of of the data
$$
\begin{align*}
1 \xleftarrow \epsilon M \xrightarrow \Delta M \otimes M
\end{align*}
$$
where $\epsilon$ is called the **coünit** and $\Delta$ is called the **comultiplication**,
and these satisfy the **left/right coünit laws** 

![[coünital-string.svg#invert|c]]

the **coässociative law**,

![[coässociative-string.svg#invert|c]]

and optionally the **cocommutative law** (whence it is called **cocommutative**).

![[cocommutative-string.svg#invert|c]]

The category of comonoid objects is [[Category of comonoid objects]], which is simply [[Category of monoid objects|$\Mon_{\op{\cat C}}$]].


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

- [[Tensor product of (co)monoids|Tensor product of comonoids]]

#
---
#state/develop | #lang/en | #SemBr

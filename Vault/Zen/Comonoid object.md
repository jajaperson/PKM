---
tags:
  - public
aliases:
  - comonoid
---
[[Category theory MOC]]
# Comonoid object

Let $(\cat C, \otimes, 1, \alpha,\lambda,\rho)$ be a [[monoidal category]].
A **comonoid** in $\cat C$ is a [[Monoid object|monoid]] in the [[opposite category]] $\cop C$, #m/def/cat consisting of of the data
$$
\begin{align*}
1 \xleftarrow \epsilon M \xrightarrow \Delta M \otimes M
\end{align*}
$$
where $\epsilon$ is called the **coünit** and $\Delta$ is called the **comultiplication**,
and these satisfy the **left/right coünit laws**, the **coässociative law**, and optionally the **cocommutative law** (whence the comonoid is called **cocommutative**)
The category of comonoid objects is simply [[Category of monoid objects|$\cat{Mon}_{\cop C}$]].

## Examples

- A **comonoid** in [[Category of monoid objects]] is a [[Bimonoid object]] (which is equivalently a [[Monoid object|monoid]] in $\cat{Mon}_{{\cop C}}$).

#
---
#state/develop | #lang/en | #SemBr

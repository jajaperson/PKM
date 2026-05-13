---
tags:
  - public
aliases:
  - Coüintal coässociative coälgebra over a commutative ring
mathLink: $\mathcal{K}$-comonoid
---
[[Hopf theory MOC]]
# $\mathcal{K}$-comonoid

Let $\mathcal{K}$ be a commutative ring.
A <dfn>$\mathcal{K}$-comonoid</dfn> $\mathcal{A}$ is a [[Comonoid object|comonoid]] in [[Category of modules over a commutative ring]], #m/def/ralg/hopf 
and thus consists of the data
$$
\begin{align*}
1 \xleftarrow \epsilon \mathcal{A} \xrightarrow \Delta \mathcal{A} \otimes \mathcal{A}
\end{align*}
$$
satisfying the [[Comonoid object#^counit]] and the [[Comonoid object#^coass]].

## Sweedler notation

It is convenient to introduce **Sweedler notation**, where we write
$$
\begin{align*}
\Delta a = \sum_{(a)}a_{(1)} \otimes a_{(2)}.
\end{align*}
$$
This extends to [[Comonoid object#Higher comultiplications|higher comultiplications]], so that
$$
\begin{align*}
\Delta_{n}a = \sum_{(a)} a_{(1)} \otimes \dots \otimes a_{(n)}.
\end{align*}
$$
The idea is that the tensor $\Delta a$ may be decomposed into a finite sum of separable tensors,
so we feel free to invoke such a decomposition without fixing it explicitly.

## Results

- [[Dual R-monoid of a R-comonoid]]

## Examples

- [[Free R-comonoid]]

## See also

- [[R-monoid]]
- [[Grouplike]]
- [[Coïdeal]]

#
---
#state/develop | #lang/en | #SemBr

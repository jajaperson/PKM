---
tags:
  - public
aliases:
  - finitely generated
---
[[Module]]
# Finitely generated module

An $R$-[[module]] $M$ is said to be **finitely generated** iff it has a finite [[Span|spanning set]] $\{ m_{i} \}_{i=1}^r$ #m/def/module 
so that
$$
\begin{align*}
M = \Span_{R} \{ m_{i} \}_{i=1}^r
\end{align*}
$$
Thus a [[vector space]] is finitely generate iff it is finite dimensional, however the situation is more complicated over a general ring.

## Properties

1. Let $M \in \lMod R$, $N \leq_{R} M$.
   If $N$ and $M / N$ are finitely generated, then so too is $M$. ^P1

> [!check]- Proof of 1.
> Suppose $M / N = \langle m_{1} + N, \dots, m_{r} + N \rangle_{R}$
> and $N = \langle n_{1}, \dots, n_{t} \rangle_{R}$.
> Then
> $$
> \begin{align*}
> M = \langle m_{1},\dots,m_{r}, n_{1}, \dots, n_{t} \rangle_{R}
> \end{align*}
> $$
> proving [[#^P1]]. <span class="QED"/>

### Other results

- [[Finitely generated module over a module-finite R-ring]]
- Finitely generated modules over a noetherian ring are noetherian ([[Noetherian module#^P2]])

#
---
#state/develop  #lang/en | #SemBr

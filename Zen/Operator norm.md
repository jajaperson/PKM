---
tags:
  - public
---
[[Bounded operator]]
# Operator norm
The **operator norm** is a [[Normed vector space|norm]] on a [[Space of bounded linear operators]].
Informally, it is the maximum factor by which it lengthens vectors. #m/def/anal/vec

$$
\begin{align*}
\|T\|_{\mathrm{op}} = \sup \left\{  \frac{\|T x\|}{\|x\|} : x \in X \setminus \{ 0 \} \right\}
= \sup \{ \|T x \| : \|x\|  = 1\}
\end{align*}
$$

> [!tip]- Example
> Consider the linear map $T : \mathcal C{(a,b)} \to \mathbb{R}$ with $\|\cdot\|_{\infty}$ and $\|\cdot\|_{2}$ respectively
> where
> $$
> \begin{align*}
> T f = \int_{a}^{b} f(x) \, dx 
> \end{align*}
> $$
> then $\|T\|_{\text{op}} = b-a$, since clearly $\abs{Tf} \leq (b-a) \|f\|_{\infty}$



#
---
#state/tidy  | #lang/en | #SemBr

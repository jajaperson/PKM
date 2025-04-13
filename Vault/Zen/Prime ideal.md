---
tags:
  - public
---
[[Ideal]]
# Prime ideal

A (two-sided) proper [[ideal]] $\mathfrak{p} \triangleleft R$ is called a **prime ideal** iff for any $a,b \in R$, $ab \in \mathfrak{p}$ implies $a \in \mathfrak{p}$ or $b \in \mathfrak{p}$[^2017], #m/def/ring i.e.
$$
\begin{align*}
\mathfrak{p} \ni ab \iff [\mathfrak{p} \ni a] \lor [\mathfrak{p} \ni b]
\end{align*}
$$

> [!info]- Historical note
> Considering the original notion of an [[Ideal number]], an ideal $\mathfrak{p}$ is the set of multiples of an ideal number $\mathscr{p}$. Therefore the above is equivalent to
> $$
> \begin{align*}
> \mathscr{p} \mid ab \iff [\mathscr{p} \mid a] \lor [\mathscr{p} \mid b]
> \end{align*}
> $$
> i.e. $\mathscr{p}$ is [[Prime element|prime]].

Note an ideal $I \trianglelefteq \mathbb{Z}$ is prime iff $I = p\mathbb{Z}$ where $p$ is prime or zero.
The set of all prime ideals of a commutative ring is called its [[Spectrum of a ring|spectrum]].

  [^2017]: 2017\. [[Sources/@gallianContemporaryAbstractAlgebra2017|Contemporary abstract algebra]], §14, p. 253

## Properties

- [[Condition for a quotient commutative ring to be an integral domain]] (often this is used to prove primality)
- [[A maximal ideal in a commutative ring is prime]]
- [[Product ideal#^D2]]

## See also

- [[Krull dimension]]

#
---
#state/tidy | #lang/en | #SemBr

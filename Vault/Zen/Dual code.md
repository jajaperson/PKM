---
tags:
  - public
aliases:
  - self-dual
---
[[Linear code]]
# Dual linear code

Let $\mathcal{C} \leq \mathbb{K}_{q}^n$ be a [[Linear code|$[n,k]$-code]].
The **dual code** $\mathcal{C}^\perp \leq \mathbb{K}_{q}^n$ is then a $[n, n-k]$-code given by its [[Orthogonal complement polarity|orthogonal complement]] #m/def/code
$$
\begin{align*}
\mathcal{C}^\perp = \{ S \in \GF(q)^n : \tp{\mathcal C}S = 0 \}
\end{align*}
$$
For a $[n, n / 2]$-code it is possible to be **self-dual**, i.e. $\mathcal{C} = \mathcal{C}^\perp$.[^1999]

## Properties

1. If $G = [\mathbb{1}_{k} \mid P]$ [[Linear code#^generator|generates]] $\mathcal{C}$, then $H = [-\tp P \mid \mathbb{1}_{n-k}]$ generates $\mathcal{C}^\perp$, and is the [[Linear code#^check]] for $\mathcal{C}$.

> [!check]- Proof
> Note $G\tp H = 0$ and $H$ has correct size and rank, thus
> $$
> \begin{align*}
> x \in \mathcal{C} \iff x \tp H = \vab 0
> \end{align*}
> $$
> as required. <span class="QED"/>

  [^1999]: 1999\. [[Sources/@vanlintIntroductionCodingTheory1999|Introduction to coding theory]], §3.2, p. 36

#
---
#state/tidy | #lang/en | #SemBr

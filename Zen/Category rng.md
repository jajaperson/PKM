---
tags:
  - public
aliases:
  - category ring
---
[[Category theory MOC]]
# Category semigroup

Let $R$ be a [[commutative ring]] and $\cat C$ be a [[small category]].
The <dfn>category rng</dfn> $\mathcal{K} \cat C$ is a [[R-semigroup]] constructed from the [[free module]] $\mathcal{K} ^{(\cat C_{1})}$. #m/def/cat 
This is a generalization of the [[monoid ring]] in light of [[monoids as categories]].
In the case $\Ob(\cat C)$ is finite, this construction gives an [[Ring extension|extension ring]] of $\mathcal{K}$
called the <dfn>category ring</dfn>.

## Construction

We begin with the [[free module]] $R^{(\cat C)}$ taking the [[objects as identities]] convention,
and linearly extend the following product for $f,g \in \cat C$
$$
\begin{align*}
g \cdot f = \begin{cases}
0 & \opn{cod} f \neq \opn{dom} g \\
f \circ g & \opn{cod} f = \opn{dom} g.
\end{cases}
\end{align*}
$$
If $\Ob(\cat C)$ is finite, then this forms an [[R-monoid]] with an identity given by
$$
\begin{align*}
1 = \sum_{x \in \Ob(\cat C)} 1_{{x}}.
\end{align*}
$$

## Properties

- [[Module over a category ring]]

## Special case

- [[Path algebra]]

#
---
#state/develop | #lang/en | #SemBr

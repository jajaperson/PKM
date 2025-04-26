---
tags:
  - public
aliases:
  - category ring
---
[[Category theory MOC]]
# Category ring

Let $R$ be a [[ring]] and $\cat C$ be a [[Small category]].
The **category rng** $R\cat C$ is an [[Associative algebra over a commutative ring|$R$-rng]] constructed from the [[free module]] $R^{(\cat C)}$. #m/def/cat 
This is a generalization of the [[Monoid ring]] in light of [[Monoids as categories]].
In the case $\Ob(\cat C)$ is finite, this construction gives an [[Ring extension|extension ring]] of $R$ and is called the **category ring** which we denote by $R[\cat C]$.

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
If $\Ob(\cat C)$ is finite, then this forms an [[Unital associative algebra over a commutative ring|$R$-ring]] with an identity given by
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

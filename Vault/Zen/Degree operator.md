---
aliases:
  - degree derivation
tags:
  - public
---
[[Graded vector space]]
# Degree operator

Let $V$ be an $S$-[[Graded vector space]] over $\mathbb{K}$ where $S \leq \mathbb{K}^+$ is a [[submonoid]] of the additive group.
Then the **degree operator** $d_{V} : V \to V$ is defined by #m/def/linalg 
$$
\begin{align*}
d_{V} v = \alpha v
\end{align*}
$$
for any $v \in V_{\alpha}$ and $\alpha \in S$.

## On a graded algebra

If $(A, \cdot)$ is an $M$-[[Graded algebra]] over $\mathbb{K}$ where $M \leq \mathbb{K}^+$ is a [[submonoid]] of the additive group,
the degree operator $d: A \to A$ is a [[Derivation on an algebra|derivation]], #m/thm/falg 
called the **degree derivation**.

> [!check]- Proof
> Note that for homogenous elements $a \in A_{\alpha}$ and $b \in B_{\beta}$ we have
> $$
> \begin{align*}
> d(a \cdot b) = (\alpha + \beta) a \cdot b = \alpha a \cdot b + a \cdot \beta b = d(a) \cdot b + a \cdot d(b)
> \end{align*}
> $$
> so by linearity $d$ is a [[Derivation on an algebra|derivation]]. <span class="QED"/>

In the case $A$ is a $M$-[[graded Lie algebra]], see [[adjoining the degree derivation]].

## Properties

Let $f : V \to W$ be a [[linear map]] between $S$-[[Graded vector space|graded vector spaces]] over $\mathbb{K}$ where $S \leq \mathbb{K}^+$

1. $f$ is [[Homomorphism of graded vector spaces#^graded]] iff $[d,f] = d_{W}f - f d_{V} = 0$
2. $f$ is [[Homomorphism of graded vector spaces#^homogenous]] of degree $\beta \in S$ iff $[d,f] = d_{W}f - f d_{V} = \beta f$

> [!missing]- Proof
> #missing/proof



#
---
#state/tidy | #lang/en | #SemBr

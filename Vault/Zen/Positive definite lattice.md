---
tags:
  - public
---
[[Rational lattice]]
# Positive definite lattice

A [[rational lattice]] $L$ is said to be **positive definite** iff $\langle \alpha,\alpha \rangle > 0$ for any nonzero $\alpha \in L$. #m/def/geo
Equivalently, the [[quadratic space]] $L_{\mathbb{R}}$ is $\mathbb{R}^{n,0}$ (“Euclidean space”).[^1988]

## Properties

1. There exist finitely many lattice points of a given norm, i.e. $\abs{L_{m}} < \infty$ for any $m \in \mathbb{Q}$. ^P1
2. Assume $L$ is [[Rational lattice#^integral]] and $\alpha,\beta \in L_{2}$. Then $\langle \alpha,\beta \rangle \in \{ 0, \pm 1, \pm2 \}$ and
   $$
  \begin{align*}
  \langle \alpha,\beta \rangle = -2 &\iff \alpha+\beta = 0 \\
  \langle \alpha,\beta \rangle = -1 &\iff \alpha + \beta \in L_{2}
  \end{align*}
  $$
  ^P2

> [!check]- Proof of 1–2
> Since
> $$
> \begin{align*}
> L_{m} = \mathrm{B}_{m}(\vab 0) \cap L
> \end{align*}
> $$
> where $\mathrm{B}_{m}(\vab 0)$ is [[Compact space|compact]] and $L$ is [[Discrete subgroup|discrete]], it follows $L_{m}$ is finite, proving [[^P2]].
> 
> [[#^P2]] follows from the [[Cauchy-Schwarz inequality]]. <span class="QED"/>

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §6.1, pp. 122–124

#
---
#state/tidy | #lang/en | #SemBr

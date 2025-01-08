---
tags:
  - public
---
[[Coding theory MOC]]
# Linear code

A $q$-ary **linear code** of length $n$ and dimension $k$ is a $k$-[[Dimension of a vector space|dimensional]] [[vector subspace]] $\mathcal{C} \leq \opn{GF}(q)^n$, #m/def/code
where $\opn{GF}(q)$ is the [[Galois field]] of order $q$. 
An element $C \in \mathcal{C}$ is thence called a **codeword**,
and the number of nonzero coördinates in a codeword $C$ is called its **weight** $\wt C$.
Typically we are interested in [[Binary linear code|binary linear codes]].

## Further notions

$\opn{GF}(q)^n$ is equipped with a natural [[Bilinear form#^nondegenerate]] [[Bilinear form#^symmetric]] [[bilinear form]]
$$
\begin{align*}
\vab x \cdot \vab y = \tp{\vab x} \vab y = \sum_{i=1}^n x_{i}y_{i}
\end{align*}
$$
which is used to define the [[dual code]].

#
---
#state/tidy | #lang/en | #SemBr

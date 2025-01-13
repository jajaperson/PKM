---
tags:
  - public
---
[[Coding theory MOC]]
# Generalized Hamming weight

The **Hamming $t$-weight**, is a generalization of [[Code#^weight]]: #m/def/code 
Let $\mathcal{D} \leq \mathbb{K}_{q}^n$ be a $t$-dimensional subcode. Then
$$
\begin{align*}
\wt_{t} \mathcal{D} = \sum_{i=1}^n [(\exists x \in \mathcal{D})[x_{i} \neq 0]]
\end{align*}
$$
where we have used an [[Iverson bracket]].
Clearly the case $t=1$ reduces to the ordinary concept of weight.[^2003]


## Properties

- [[MacWilliams theorem]]

  [^2003]: 2003\. [[Sources/@fanGeneralizedHammingWeights2003|Generalized hamming weights and equivalences of codes]]
#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Coding theory MOC]]
# Extended code
Let $\mathcal{C} \sube \mathbb{K}_{q}^n$ be a $(n,M)$-[[code]] with the [[Galois field]] $\mathbb{K}_{q}$ as its alphabet.
The corresponding **extended code** $\overline{\mathcal{C}}$ is a $(n+1,M)$-code defined by adding an additional parity check digit so that the sum of all digits is always zero,[^1999] #m/def/code i.e.
$$
\begin{align*}
\overline{\mathcal{C}} = \left\{ (c_i)_{i=1}^{n+1} : (c_i)_{i=1}^n \in \mathcal{C}; \sum_{i=1}^{n+1}c_{i} = 0  \right\}
\end{align*}
$$


  [^1999]: 1999\. [[Sources/@vanlintIntroductionCodingTheory1999|Introduction to coding theory]], §3.2, p. 38

## Properties

- If $\mathcal{C}$ is a [[linear code]] with [[Linear code#^check]] $H$, then $\overline{\mathcal{C}}$ has parity check matrix
$$
\begin{align*}
\overline{H} = \left[ \frac{\vab 1}{H \mid \vab 0} \right]
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

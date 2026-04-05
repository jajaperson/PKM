---
tags:
  - public
---
[[Formal calculus MOC]]
# Formal logarithm

Let $\mathbb{K}$ be a field with [[Characteristic|$\opn{char} \mathbb K = 0$]].
The **formal logarithm** is defined as[^1988] #m/def/fcalc 
$$
\begin{align*}
\ln(1+ax) = -\sum_{k \in \mathbb{N}} \frac{(-a)^k }{k}x^k \in \mathbb{K}\D[z\D] \leq \mathbb{K} \{ z \}
\end{align*}
$$

## Properties

The following identities relate the formal logarithm with the [[formal exponential]] amd [[formal binomial expansion]]
$$
\begin{align*}
\ln(\exp x) &= x \\
\exp(\ln(1 + ax)) &= 1+ax \\
\ln((1+ax)(1+bx)) &= \ln(1+ax) + \ln(1+bx) \\
\ln(1+ax)^b &= b 
\ln(1+ax)
\end{align*}
$$

the proofs being given by the relations of the coëfficients in standard calculus.

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §3.4, pp. 76–77

#
---
#state/tidy | #lang/en | #SemBr

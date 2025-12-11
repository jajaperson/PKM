---
tags:
  - public
mathLink: $\mathbb Z$
---
[[Ring theory MOC]]
# Integers

The **integers** $\mathbb{Z}$ are the [[Initial and terminal objects|initial object]] in [[Category of rings]]. #m/thm/ring
Given any [[ring]] $R$ with unity $1$, the unique [[ring homomorphism]] $I : \mathbb{Z} \to R$ is given by
$$
\begin{align*}
I : \mathbb{Z} &\xrightarrow ! R \\
n &\mapsto n \cdot 1_{R}
\end{align*}
$$

> [!check]- Proof
> $(m+n)a = ma + na$ by basic properties of groups,
> and $(n \cdot 1)(m \cdot 1) = (mn) \cdot 1$ by [[Rng#^P5]].
> Note that this homomorphism is completely determined from the fact $1 \mapsto 1_{R}$, hence it is unique. <span class="QED"/>

By standard Euclidean division, $\mathbb{Z}$ forms a [[Euclidean domain]].
In some number-theoretic contexts, these are referred to as the **rational integers** to distinguish them from [[Algebraic integer|algebraic integers]].

## Properties 

- $\ker I =(\mathrm{char} \,R) \mathbb{Z}$ ^P1
- [[A ring contains the integers or modular arithmetic]]
- [[A field contains modular arithmetic or the rationals]]
- The [[field of fractions]] of $\mathbb{Z}$ is [[Rational numbers]]

#
---
#state/develop | #lang/en | #SemBr

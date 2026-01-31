---
tags:
  - public
---
[[Inner product space]]
# Cauchy-Schwarz inequality

Let $(V,\mathbb{K},\braket{ \cdot | \cdot })$ be an [[inner product space]].
Then for any $x,y \in V$ we have the **Cauchy-Schwarz inequality** #m/thm/anal/vec 
$$
\begin{align*}
\abs{\braket{ x | y }}^2 &\leq \|x\|^2 \|y\|^2 \\
\braket{ x | y } \braket{ y | x }  &\leq \braket{ x | x } \braket{ y | y } 
\end{align*}
$$
and equality holds iff $x$ and $y$ are [[Linear (in)dependence|linearly dependent]].

> [!missing]- Proof
> #missing/proof

## Particular examples

### Probability theory

Using the [[Inner product space of real random variables]] we have
$$
\begin{align*}
\langle X,Y \rangle^2 &\leq \langle X,X \rangle \langle Y,Y \rangle \\
\Ex[X,Y]^2 &\leq \Ex[X,X] \Ex[Y,Y]
\end{align*}
$$

#
---
#state/develop  | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - adjoint representation
mathLink-blocks:
  nilpotent: $\ad$-nilpotent
---
[[Lie algebra representation]]
# Adjoint Lie algebra representation

The **adjoint representation** of a [[Lie algebra]] $\mathfrak{g}$ is a [[Lie algebra representation|representation]] carried by $\mathfrak{g}$ itself, given by #m/def/lie
$$
\begin{align*}
\ad_{X} : \mathfrak{g} &\to \mathfrak{g} \\
Y &\mapsto [X,Y]
\end{align*}
$$
The [[Jacobi identity]] implies $\ad_{X}$ is a [[Derivation on an algebra|derivation]] for all $X \in \mathfrak{g}$ ([[#^P1]]),
and [[away from 2]] these conditions are equivalent.

## Properties

1. $\ad_{X}[Y,Z] = [\ad_{X}Y, Z] + [Y,\ad_{X} Z]$ ^P1
2. $\ad_{X}$ has no nonzero eigenvalues for each $X \in \mathfrak{g}$ ^P2
3. $[\ad_{X},\ad_{Y}] = \ad_{[X,Y]}$ ^P3

> [!check]- Proof of 1–3
> Let $X,Y,Z \in \mathfrak{g}$.
> Assuming anticommutativity
> $$
> \begin{align*}
> \ad_{X}[Y,Z] &= [X,[Y,Z]] \\
> &= - [Y, [Z,X]] - [Z, [X,Y]] \\
> &= [Y, [X,Z]] + [[X,Y],Z] \\
> &= [Y, \ad_{X}Z] + [\ad_{X}Y, Z]
> \end{align*}
> $$
> proving [[#^P1]].
> 
> Assume $\ad_{X}(Y) = [X,Y] = \lambda Y$.
> Then
> $$
> \begin{align*}
> 0 &= [Y,[X,Y]] + \cancel{ [X, [Y,Y]] } + [X,[Y,X]] \\
> &= \cancel{ [Y, \lambda Y] } + [X,-\lambda Y] \\
> &= -\lambda[X,Y] = -\lambda^2 Y
> \end{align*}
> $$
> hence either $\lambda = 0$ or $Y = 0$,
> proving [[#^P2]].
> 
> For any $Z \in \mathfrak{g}$,
> $$
> \begin{align*}
> [\ad_{X},\ad_{Y}](Z) &= \ad_{X}\ad_{Y}(Z) - \ad_{Y}\ad_{X}(Z) \\
> &= [X,[Y,Z]] - [Y,[X,Z]] \\
> &= [X, [Y,Z]] + [Y,[Z,X]] \\
> &= - [Z,[X,Y]]  \\
> &= [[X,Y], Z] \\
> &= \ad_{[X,Y]}(Z)
> \end{align*}
> $$
> hence $[\ad_{X},\ad_{Y}] = \ad_{[X,Y]}$,
> proving [[#^P3]].
> <span class="QED"/>

## Further terminology

- We say $x \in \mathfrak{g}$ is **$\ad$-nilpotent** iff $\ad_{x}$ is nilpotent. ^nilpotent

#
---
#state/tidy | #lang/en | #SemBr

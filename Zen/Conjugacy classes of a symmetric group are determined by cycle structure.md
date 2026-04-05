---
tags:
  - public
---
[[Symmetric group]]
# Conjugacy classes of a symmetric group are determined by cycle structure

Two permutations $\sigma_{1}, \sigma_{2} \in S_{n}$ are [[Conjugation by an element|conjugate]] iff they have the same number of $j$-cycles $k_{j}(\sigma_{1}) = k_{j}(\sigma_{2})$ for each $j = 1, \dots, n$. #m/thm/group

> [!check]- Proof
> Let $\sigma, \tau \in S_{n}$ where $\sigma$ the product of $m$ disjoint cycles
> $$
> \begin{align*}
> \sigma = \alpha_{1} \alpha_{2} \cdots \alpha_{{m-1}} \alpha_{m}
> \end{align*}
> $$
> Then conjugating $\sigma$ by $\tau$ is the same as the product of conjugating each cycle
> $$
> \begin{align*}
> \tau \sigma \tau^{-1} = \tau \alpha_{1} \tau^{-1} \tau \alpha_{2} \tau^{-1} \cdots \tau\alpha_{m-1} \tau^{-1} \tau \alpha_{m} \tau^{-1}
> \end{align*}
> $$
> but [[The conjugate of an n-cycle is an n-cycle]],
> hence the cycle structure of $\tau \alpha \tau^{-1}$ is identical.
> <span class="QED"/>

The conjugacy classes of $S_{n}$ thus correspond to [[Numeric partition|partitions]] of $n$.

#
---
#state/tidy | #lang/en | #SemBr

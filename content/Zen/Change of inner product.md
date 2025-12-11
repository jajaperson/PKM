---
tags:
  - public
---
[[Inner product space]]
# Change of inner product

Let $\langle \cdot|\cdot \rangle$ and $(\cdot | \cdot)$ be [[Inner product space|inner products]] on a vector space $V$.
Let $\{ v_{j} \}$ and $\{ w_{j} \}$ be [[Orthonormal basis|orthonormal bases]] with respect to $\langle \cdot | \cdot \rangle$ and $(\cdot | \cdot)$,
and $S : V \to V$ be a [[change of basis]] such that $Sw_{j} = v_{j}$.
Then $\langle Sv | Sw \rangle = (v|w)$ for all $v,w \in V$. #m/thm/linalg 

> [!check]- Proof
> Let $v = \sum_{j}\alpha_{j}w_{j}$ and $w = \sum_{j}\beta_{j}w_{j}$.
> Then
> $$
> \begin{align*}
> \langle Sv | Sw \rangle 
> &= \braket{S \sum_{j} \alpha_{j}w_{j} | S \sum_{k}\beta_{k}w_{k}} \\
> &= \langle \sum_{j} \alpha_{j} v_{j} | \sum_{k} \alpha_{k} v_{k} \rangle \\
> &= \sum_{j,k} \overline{\alpha_{j}} \beta_{k} \langle v_{j} | v_{k} \rangle  \\
> &= \sum_{j,k} \overline{\alpha_{j}} \beta_{k} \delta_{jk} \\
> &= \sum_{j,k} \overline{\alpha_{j}} \beta_{k} (w_{j} | w_{k}) \\
> &= ( \sum_{j} \alpha_{j} w_{j} | \sum_{k} \alpha_{k} w_{k} ) \\
> &= (v|w)
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/tidy| #lang/en | #SemBr

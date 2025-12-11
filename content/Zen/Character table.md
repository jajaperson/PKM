---
tags:
  - public
---
[[Group character]]
# Character table

The **character table** $\chi^\alpha_{c}$ of a group is a square[^square] matrix where each column is labeled by [[Conjugation by an element|conjugacy class]] and each row by an [[Irrep]].
Let $\alpha = 1, \dots, m$ label irreps and $c = 1,\dots,m$ label conjugacy classes $C_{c}$.
Then $\chi^\alpha_{c} = \chi^\alpha(x)$ for all $x \in C_{c}$.


[^square]: Since [[The number of conjugacy classes equals the number of non-equivalent irreps of a group]].

| $\mathbb{Z}_{2} \times \mathbb{Z}_{2}$ | $\{ (0,0) \}$ | $\{ (1,1) \}$ | $\{ (1,0) \}$ | $\{ (0,1) \}$ |
| -------------------------------------- | -------------:| -------------:| -------------:| -------------:|
| $\chi^1$ (trivial)                     |           $1$ |           $1$ |           $1$ |           $1$ |
| $\chi^2$                               |           $1$ |          $-1$ |          $-1$ |          $-1$ |
| $\chi^3$                               |           $1$ |          $-1$ |          $-1$ |           $1$ |
| $\chi^4$                               |           $1$ |          $-1$ |           $1$ |          $-1$ |


Properties characterising the character table, and thereby useful for determining its entries, include the [[Square sum of irrep dimensions]] and the [[Orthonormality of irreducible characters]], which gives
$$
\begin{align*}
\sum_{c =1}^m \frac{n_{c}}{\abs G} \chi^\alpha_{c} \overline{\chi^\beta_{c} }&= \delta_{\alpha\beta} \\
\sum_{\alpha =1}^m \chi^\alpha_{c} \overline{\chi^\beta_{c}} &= \frac{\abs G}{n_{c}} \delta_{\alpha\beta}
\end{align*}
$$
we also have
$$
\begin{align*}
\sum_{\mu=1}^m \chi^\mu_{a} \overline{\chi^\mu_{b}} = \delta_{ab} \frac{\abs G}{n_{c}}
\end{align*}
$$


#
---
#state/tidy | #lang/en | #SemBr

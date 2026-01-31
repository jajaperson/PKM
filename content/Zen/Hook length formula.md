---
tags:
  - public
---
[[Young tableau]]
# Hook length formula

The number of [[Young tableau|standard Young tableaux]] in the shape of a given [[Young diagram]] $\lambda$ with $n$ boxes is given by #m/thm/comb
$$
\begin{align*}
d_{\lambda} = \prod_{i,j \in {\lambda}} \frac{n!}{h_{\lambda}(i,j)}
\end{align*}
$$
where $h_{\lambda}(i,j)$ is the [[Hook length]] at $(i,j)$. 

> [!missing]- Proof
> #missing/proof Very complicated combinatorial proof

## Example

Using [[Young tableau#Further notation]] we may write for $\lambda = (4,3,1)$
$$
\begin{align*}
d_{\lambda} = \frac{\begin{vmatrix}
8 & 7 & 6 & 5 \\
4 & 3 & 2 \\
1
\end{vmatrix}}{\begin{vmatrix}
6 & 4 & 3 & 1 \\
4 & 2 & 1 \\
1
\end{vmatrix}} = 70
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

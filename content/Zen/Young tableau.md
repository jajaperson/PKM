---
aliases:
  - standard Young tableaux
tags:
  - public
---
[[Young diagram]]
# Young tableau

A **Young tableau** is a [[Young diagram]] with numbers in each of the boxes. #m/def/comb

```
[2][3]  [1][3][4]
[1][4], [5][2],     &c.
```

The **normal Young tableau** has these numbers in ascending order,
and is hence unique for each [[numeric partition]]/Young diagram. #m/def/comb

```
[1][2]  [1][2][3]
[3][4], [4][5],     &c.
```

A **standard Young tableau** has ascending columns and rows,
hence the normal Young tableau is standard. #m/def/comb
Below are the only normal Young tableaux for $3 = 2 + 1$

```
[1][2]  [1][3]
[3],    [2]
```

We denote the normal young diagram of $\lambda$ as $\Theta_{\lambda}$,
whereas the result of permuting the boxes with $p \in S_{n}$ is $\Theta_{\lambda}^p = p \Theta_{\lambda}$.

## Properties

- The number of standard Young tableaux of shape $\lambda$ is given by the [[Hook length formula]]

## Further terminology and notation

- A young tableau in absolute value brackets denotes the product of its cells.
- A [[Semi-standard Young tableau]] has ascending columns and _non-decreasing_ rows.

#
---
#state/tidy | #lang/en | #SemBr

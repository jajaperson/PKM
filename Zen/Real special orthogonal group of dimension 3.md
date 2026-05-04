---
aliases:
  - SO(3)
  - Group of 3D rotations
  - 𝔰𝔬(3)
mathLink: $\opn{SO}(3)$
tags:
  - public
---
[[Real special orthogonal group]]
# Real special orthogonal group of dimension 3

The **real special orthogonal group of dimension 3**, also called the **group of 3D rotations**, and typically denoted $\mathrm{SO}(3)$, is the set of all $3 \times 3$ matrices $M \in \mathbb{R}^{3 \times 3}$ satisfying

- $\tp M M = \mathbf{I}$
- $\det M = 1$

See [[real special orthogonal group]] for a discussion of basic properties.

## Lie algebra

Following [[Keppeler's Lie algebra convention]], the Lie algebra $\mathfrak{so}(3)$ of $\mathrm{SO}(3)$ is given by imaginary hermitian matrices with the bracket $-i[-,-]$, where $[-,-]$ denotes the [[Linear commutator|matrix commutator]].
A suitable basis is
$$
\begin{align*}
J_{1}= \begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & -i \\
0 & i & 0
\end{bmatrix},
\qquad
J_{2}=\begin{bmatrix}
0 & 0 & i \\
0 & 0 & 0 \\
-i & 0 & 0
\end{bmatrix},
\qquad
J_{3}=\begin{bmatrix}
0 & -i & 0 \\
i & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\end{align*}
$$
which gives the [[Structure constants]]
$$
\begin{align*}
-i[J_{j}, J_{k}] &= \sum_{\ell=1}^3 \epsilon_{jk}{}^\ell J_{\ell} \\
\end{align*}
$$
where $\epsilon$ is the [[Levi-Civita symbol]].

## Properties

1. Exponentiation gives the [[Axis-angle parameterization]] $e^{-i \alpha \vec n \cdot \vec J} = \mathrm{R}_{\vec n}(\alpha)$
2. [[Irreps of SO(3)]]


#
---
#state/develop | #lang/en | #SemBr

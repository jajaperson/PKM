---
mathLink: $\opn{\mathfrak{sl}}_{2} \mathbb{K}$
tags:
  - public
---
[[Special linear Lie algebra]]
# $\opn{\mathfrak{sl}}_{2} \mathbb{K}$

Let $\mathbb{K}$ be a field. 
$\opn{\mathfrak{sl}}_{2}\mathbb{K}$ is the [[Lie algebra]] realized by traceless $2 \times 2$ matrices under their [[linear commutator]]. #m/def/lie
It has the [[Chevalley basis]]
$$
\begin{align*}
\alpha_{1} &= \begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix},
&
x_{\alpha_{1}} &= \begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix},
&
x_{-\alpha_{1}} = \begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix}
\end{align*}
$$
with the commutation relations
$$
\begin{align*}
[\alpha_{1}, x_{\pm \alpha_{1}}] &= \pm 2x_{\pm \alpha_{1}} 
= \langle \alpha_{1}, \pm \alpha_{1} \rangle x_{\pm \alpha_{1}} \\
[x_{\alpha_{1}}, x_{-\alpha_{1}}] &= \alpha_{1}
\end{align*}
$$
where we have the [[Bilinear form#^nondegenerate]] [[Invariant bilinear form on a Lie algebra|invariant]]  [[Bilinear form#^symmetric|symmetric bilinear form]] 
$$
\begin{align*}
\langle x,y \rangle  &= \Tr xy &
\langle \alpha_{1}, \alpha_{1} \rangle &= 2 \\
\langle x_{\alpha_{1}}, x_{-\alpha_{1}} \rangle &= 1 &
\langle \alpha_{1}, x_{\pm \alpha_{1}} \rangle &= \langle x_{\pm \alpha_{1}}, x_{\pm \alpha_{1}} \rangle = 0  
\end{align*}
$$
given by the [[Trace form]] of the [[fundamental representation]],
making $\opn{\mathfrak{sl}}_{2}\mathbb{K}$ a [[quadratic Lie algebra]].

> [!tip]- Gram matrix
> Ordering the basis $(\alpha_{1}, x_{\alpha_{1}}, x_{-\alpha_{1}})$, we have the following [[Gram matrix]]
> $$
> \begin{align*}
> \begin{bmatrix}
> 2 & 0 & 0 \\
> 0 & 0 & 1 \\
> 0 & 1 & 0
> \end{bmatrix}
> \end{align*}
> $$

## Properties

- [[Affine Lie algebras of sl_2]]


#
---
#state/develop | #lang/en | #SemBr

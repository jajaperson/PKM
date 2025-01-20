---
tags:
  - public
aliases:
  - dual lattice
---
[[Rational lattice]]
# Dual of a rational lattice

Let $L$ be a [[Rational lattice]] with basis $\{ \alpha_{i} \}_{i=1}^n$
The **dual** of $L$ is the set #m/def/linalg 
$$
\begin{align*}
L^\circ = \{ \alpha \in L_{\mathbb{Q}} : \langle \alpha, L \rangle \sube \mathbb{Z} \}
\end{align*}
$$
which is a rational lattice iff $L$ is nondegenerate,
in which case the **dual basis** is defined by
$$
\begin{align*}
\langle \alpha_{i}^\circ, \alpha_{j} \rangle = \delta_{ij}
\end{align*}
$$
$L$ is called **[[Self-dual rational lattice|self-dual]]** iff $L^\circ = L$.

#
---
#state/develop | #lang/en | #SemBr

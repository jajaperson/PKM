---
aliases:
  - Artin braid group
tags:
  - public
---
[[Group theory MOC]]
# Braid group

Let $X$ be a topological space,
and $X \choose n$ denote the space of subsets of $X$ of cardinality $n$.[^1]
The **braid group** $\mathfrak{B}_{n}(X)$ on $n$ strands in $X$ is the [[fundamental group]]
$$
\begin{align*}
\mathfrak{B}_{n}(X) = \pi_{1} {X \choose n}.
\end{align*}
$$
In the special case $X = \mathbb{R}^2$ is the [[Euclidean plane]], we have the **Artin braid group** $\mathfrak{B}_{n}$ on $n$ strands
$$
\begin{align*}
\mathfrak{B}_{n} = \mathfrak{B}_{n}(\mathbb{R}^2) = \pi_{1} {\mathbb{R}^2 \choose n}
\end{align*}
$$
which has [[Group presentation|presentation]] $\langle \sigma_{1} , \dots, \sigma_{{n-1}} : R \rangle$
where $R$ consists of the relations
$$
\begin{align*}
\sigma_{i}\sigma_{j}\sigma_{i} &= \sigma_{j}\sigma_{i}\sigma_{j} & \abs{i-j} &= 1, \\
\sigma_{i}\sigma_{j} &= \sigma_{j}\sigma_{i} & \abs{i-j} &\neq 1.
\end{align*}
$$


#
---
#state/develop | #lang/en | #SemBr

[^1]: The natural topology on $X \choose n$ is that of the [[orbit space]] ([[quotient topology]]) of [[Symmetric group|$\mathrm S_n$]] acting on the [[Subspace topology|subspace topology]] of the [[Product topology|product space]] $X^n \setminus \Delta$ where $\Delta$ consists of points with at least two components the same.

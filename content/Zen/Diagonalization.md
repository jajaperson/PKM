---
tags:
  - public
aliases:
  - diagonalizable
---
[[Linear algebra MOC]]
# Diagonalization

Let $\mathbb{K}$ be a field. 
A square matrix $A \in \opn M_{n,n}(\mathbb{K})$ is said to be **diagonalizable** iff
$$
\begin{align*}
A = PDP^{-1}
\end{align*}
$$
for some diagonal matrix $D$ and some invertible matrix $P$.
The diagonal entries of $D$ are then precisely the [[Eigenvectors, eigenvalues, and eigenspaces|eigenvalues]] of $A$.

## Properties

1. If $A$ is diagonalizable then $A^n$ is diagonalizable for $n \in \mathbb{N}$. ^P1
2. The converse holds if $\mathbb{K}$ is [[Algebraically closed field|algebraically closed]] and $A$ is invertible: If $A^n$ is diagonalizable for some $n \in \mathbb{N} \setminus \opn{char}(\mathbb{K})\mathbb{N}$ then $A$ is diagonalizable. ^P2

> [!missing]- Proof of 1–2
> If $A = PDP^{-1}$ then $A^n = PD^nP^{-1}$, proving [[#^P1]].

#
---
#state/tidy | #SemBr

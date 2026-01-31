---
aliases:
  - raising operator
  - lowering operator
  - raising and lowering operators
tags:
  - public
---
[[Linear algebra MOC]]
# Ladder operator

Let $N \in \Vect_{\mathbb{C}}(V,V)$ be an operator and $\ket{n} \in V$ be an [[Eigenvectors, eigenvalues, and eigenspaces|eigenvector]] such that $N \ket{n} = n \ket{n}$.
A **ladder operator** of $N$ is an operator $X$ such that $[N,X] = cX$ where $c \neq 0$.
#m/def/linalg 
It follows that
$$
\begin{align*}
N X \ket{n} &= (XN + [N,X])\ket{n} \\
&= XN \ket{n}  + cX\ket{n} \\
&= Xn\ket{n}  +c X\ket{n} \\
&= (n+c) X \ket{n} 
\end{align*}
$$
i.e. $X \ket{n}$ is either zero or an eigenvector.
A **raising operator** is a ladder operator for which $c$ is positive and real,
likewise a **lowering operator** is a ladder operator for which $c$ is negative and real.

## Properties

1. If $N$ is a [[Hermitian operator]] and $[N,X] = cX$ then either $c$ is real or $X \ket{n} = 0$; and $[N,X^{\dagger}] = -cX^{\dagger}$ and thus $N X^{\dagger} \ket{n} = (n-c) X^{\dagger} \ket{n}$. ^P1
2. A (pseudo)[[Vector operator]] $\hat{\mathbf{V}}$ has raising and lowering operators for $\hat{V}_{z}$ by $\hat{V}_{\pm} = \hat{V}_{x} \pm i \hat{V}_{y}$. #to/prove 

> [!check]- Proof of 1
> Let $\ket{n}$ be an eigenvector such that $N\ket{n}=n\ket{n}$,
> where $n$ is real by [[Hermitian operator#^P2]].
> Assuming $X \ket{n} \neq 0$, then $n + c$ is also an eigenvalue of $N$ which must also be real.
> Now
> $$
> \begin{align*}
> [N, X^{\dagger}] &= NX^{\dagger}-X^{\dagger}N = (XN - NX)^{\dagger} \\ &= [X,N]^{\dagger} = -[N,X]^{\dagger} = -cX^{\dagger}
> \end{align*}
> $$
> proving [[#^P1]]
> <span class="QED"/>



#
---
#state/tidy | #lang/en | #SemBr

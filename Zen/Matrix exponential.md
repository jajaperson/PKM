---
tags:
  - public
---
[[Analysis MOC]]
# Matrix exponential

The **matrix exponential** $\exp : \mathbb{C}^{n \times n} \to \mathbb{C}^{n \times n}$ uses the power series definition of the [[exponential function]] on matrices.
Let $\mathbf{A}$ be a $n \times n$ real/complex matrix. 
Then $e^\mathbf{A}$ is given by #m/def/anal/vec 
$$
\begin{align*}
e^\mathbf{A} = \sum_{k=0}^\infty \frac{\mathbf{A}^k}{k!}
\end{align*}
$$
This is convergent for all $\mathbf{A} \in \mathbb{C}^{n \times n}$ under any norm.

> [!check]- Proof of convergence
> Let $\|{\cdot}\|$ denote the [[Operator norm]].
> Then
> $$
> \begin{align*}
> 0 \leq \| \frac{\mathbf{A}^k}{k!} \| = \frac{\|\mathbf{A}^k\|}{k!} \leq \frac{\|\mathbf{A}\|^k}{k!}
> \end{align*}
> $$
> Since $e^{\|A\|} = \sum_{k=0}^\infty \frac{\|A\|^k}{k!}$ converges, the sequence converges absolutely and uniformly by the [[Weierstraß M-test]].
> $\mathbb{C}^{n \times n}$ is finite-dimensional: [[All finite dimensional normed vector spaces are Banach]] and [[All norms on a finite dimensional space are equivalent]].
> Thus the series converges, and does so regardless of norm.
> <span class="QED"/>

## Properties

For any $\mathbf{A} \in \mathbb{C}^{n \times n}$, the following properties hold: #m/thm/anal/vec 

1. For any invertible $\mathbf{T} \in \mathrm{GL}(n)$, $e^{\mathbf{T}\mathbf{A}\mathbf{T}^{-1}} = \mathbf{T}e^\mathbf{A}\mathbf{T}^{-1}$. ^P1
2. $e^{t\mathbf{A}}$ uniquely solves $\dot{\mathbf{X}}(t) = \mathbf{A}\mathbf{X}(t)$ with initial condition $\mathbf{X}(0) = \mathbf{I}$. ^P2
3. $e^{t\mathbf{A}}e^{s\mathbf{B}} = e^{t\mathbf{A} + s \mathbf B}$ if $\mathbf{AB} = \mathbf{BA}$ for all $t,s \in \mathbb{C}$.  ^P3
4. $(e^\mathbf{A})^{\dagger}= e^{(\mathbf{A}^{\dagger})}$  ^P4
5. $\det e^\mathbf{A} = e^{\Tr \mathbf{A}}$  ^P5
6. $e^{-i \phi \vab \sigma \cdot \vab{n} / 2} = \cos(\phi / 2) \mathbf{I} - i\sin(\phi / 2) \vab \sigma \cdot \vab n$ for $\vab n \in \mathbb{S}^3$ (see [[Pauli matrices]]) ^P6

> [!check]- Proof of properties 1–5
> Let $\mathbf{T} \in \mathrm{GL(n)}$.
> Then
> $$
> \begin{align*}
> e^{\mathbf{T}\mathbf{A}\mathbf{T}^{-1}} &= \sum_{k=0}^\infty \frac{(\mathbf{T}\mathbf{A}\mathbf{T}^{-1})^k}{k!} = \sum_{k=0}^\infty \frac{\mathbf{T}\mathbf{A}^k\mathbf{T^{-1}}}{k!} = \mathbf{T}e^\mathbf{A}\mathbf{T}^{-1}
> \end{align*}
> $$
> proving [[#^P1]]
> 
> Let
> $$
> \begin{align*}
> \mathbf{X}(t) = e^{t \mathbf{A}} = \sum_{k=0}^\infty \frac{(t\mathbf{A})^k}{k!}
> \end{align*}
> $$
> Then
> $$
> \begin{align*}
> \dot{\mathbf{X}}(t) = \sum_{k=1}^\infty \frac{t^{k-1}\mathbf{A}^k}{(k-1)!} = \mathbf{A} \sum_{k=0}^\infty \frac{(t\mathbf{A})^k}{k!} = \mathbf{A}\mathbf{X}(t)
> \end{align*}
> $$
> and by the [[Existence and uniqueness theorem for IVPs]] this is unique, proving [[#^P2]].
> 
> By [[Binomial expansion]]
> $$
> \begin{align*}
> e^{t \mathbf{A}}e^{s \mathbf{B}} &= \left( \sum_{k=0}^\infty \frac{(t\mathbf{A})^k}{k!} \right)\left( \sum_{\ell=0}^\infty \frac{(s \mathbf{B})^\ell}{\ell!} \right) \\
> &= \sum_{k=0}^\infty \sum_{\ell=0}^k \frac{t^\ell s^{k-\ell}\mathbf{A}^\ell \mathbf{B}^{k-\ell}}{\ell!(k-\ell)!} \\
> &= \sum_{k=0}^\infty \sum_{\ell=0}^k \frac{k!}{\ell!(k-\ell)!} \frac{t^\ell s^{k-\ell}\mathbf{A}^\ell \mathbf{B}^{\ell-k}}{k!} \\
> &= \sum_{k=0}^\infty \sum_{\ell=0}^k \binom k \ell \frac{{t^\ell s^{k-\ell} \mathbf{A}^\ell \mathbf{B}^{\ell-k}}}{k!} \\
> &= \sum_{k=0}^\infty \frac{(t \mathbf{A} + s \mathbf{B})^k}{k!} \\
> &= e^{(t\mathbf{A} + s \mathbf{B})}
> \end{align*}
> $$
> proving [[#^P3]]
> 
> By basic properties of the [[Conjugate transpose]]
> $$
> \begin{align*}
> (e^\mathbf{A})^{\dagger} = \left( \sum_{k=0}^\infty \frac{\mathbf{A}^k}{k!} \right)^{\dagger} = \sum_{k=0}^\infty \frac{(\mathbf{A}^k)^{\dagger}}{k!} = \sum_{k=0}^\infty \frac{(\mathbf{A}^{\dagger})^k}{k!} = e^{(\mathbf{A}^{\dagger})}
> \end{align*}
> $$
> proving [[#^P4]].
> 
> Let $\mathbf{D}$ be the [[Jordan canonical form]] so $\mathbf{A} = \mathbf{S}\mathbf{D}\mathbf{S}^{-1}$.
> Then
> $$
> \begin{align*}
> \det e^\mathbf{A} = \det e^\mathbf{D} = \prod_{k=1}^n e^{D_{kk}} = e^{\Tr \mathbf{D}} = e^{\Tr \mathbf{A}}
> \end{align*}
> $$
> proving [[#^P5]]
> <span class="QED"/>



## Generalisations

- [[Vector flow]]
- [[Exponential map]] of Lie theory.

#
---
#state/develop | #lang/en | #SemBr

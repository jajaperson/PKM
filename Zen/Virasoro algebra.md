---
tags:
  - public
---
[[Lie algebras MOC]]
# Virasoro algebra

The **Virasoro algebra** $\mathfrak{v}$ over $\mathbb{K}$[^char] is a [[Lie algebra]] given by the unique [[Lie algebra extension#^trivial|nontrival]] 1-dimensional [[Lie algebra extension#^central]] of the [[Witt algebra]] $\mathfrak{d}$.[^1988] #m/def/lie 
The Lie bracket is defined by
$$
\begin{align*}
[c, \mathfrak{v}] &= 0 \\
[L_{m}, L_{n}] &= (m-n) L_{m+n} + \frac{c}{12}(m^3 - m)\delta_{m+n} 
\end{align*}
$$
where $\pi (L_{n}) = d_{n} = t^{n}t \frac{d}{dt}$ is a basis element of $\mathfrak{d}$,
and $\delta_{\bullet}$ is the [[Kronecker delta]].
Thus we have the [[Lie algebra extension#^central]]
$$
\begin{align*}
0 \to \mathbb{K}c \hookrightarrow \mathfrak{v} \stackrel \pi\twoheadrightarrow \mathfrak{d} \to 0
\end{align*}
$$

  [^char]: $\opn{char} \mathbb{K} = 0$

> [!info]- Shifted equivalent extensions
> Letting $L'_{n}= L_{n}+\beta_{n}c$ for $\beta_{n} \in \mathbb{K}$ and $n \in \mathbb{Z}$,
> and $\pi' : L_{n}' \mapsto d_{n}$, we get an [[Lie algebra extension#^equivalent]] extension, with the bracket now given by
> $$
> \begin{align*}
> [L_{m}', L_{n}'] = (m-n)L_{m+n}' + \frac{c}{12} (m^3 - m)\delta_{m+n} + c(m-n) \beta_{m+n}
> \end{align*}
> $$
> In particular, $L_{n}' = L_{n} - \frac{1}{24} \delta _nc$ removes the linear term.
> ^shifted

> [!check]- Proof of uniqueness
> Let $\mathfrak{v}'$ be a central extension of $\mathfrak{d}$ such that
> $$
> \begin{align*}
> \mathfrak{v} =_{\Vect_{\mathbb{K}}} \mathfrak{d} \oplus \mathbb{K}c
> \end{align*}
> $$
> and
> $$
> \begin{align*}
> [d_{m}, d_{n}] &= (m-n) d_{m+n} + \gamma_{m,n}c \\
> [c,\mathfrak{v}'] &= 0
> \end{align*}
> $$
> It follows from the [[Alternating multilinear map|alternating]] property and the [[Lie algebra#^Jacobi]] that
> $$
> \begin{align*}
> \gamma_{m,n} + \gamma_{n,m} &= 0 \\
> (m-n)\gamma_{m+n,p} + (n-p)\gamma_{n+p,m} + (p-m)\gamma_{p+m,n} &= 0
> \end{align*}
> $$ 
> for $m,n,p \in \mathbb{Z}$.
> Assume $p = 0$ and $m+n \neq 0$, so
> $$
> \begin{align*}
> -(m+n)\gamma_{m,n} + (m-n)\gamma_{m+n,0} &= 0
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> \gamma_{m,n} = \frac{m-n}{m+n} \gamma_{m+n,0}
> \end{align*}
> $$
> By considering the [[#^shifted|equivalent shifted extension]] 
> $$
> \begin{align*}
> d_{n}' = d_{n} + c(1-\delta_{n}) \frac{1}{n} \gamma_{n,0}
> \end{align*}
> $$
> we can take $\gamma_{m,n}=0$ for $m+n \neq 0$ without loss of generality.
> The general solution to the constraints on $\gamma_{m,n}$ given $m+n+p = 0$ is then
> $$
> \begin{align*}
> \gamma_{m,-m} = \alpha m^3 + \beta m
> \end{align*}
> $$
> where $\alpha,\beta  \in \mathbb{K}$,
> since any solution is determined by $\gamma_{1,-1}$ and $\gamma_{2,-2}$.
> By shifting we can change $\beta$ arbitrarily and by rescaling $c$ we can multiply $\alpha$ by any nonzero scalar.
> Thus the extension of $\mathfrak{d}$ given by $\mathfrak{v}'$ is either  [[Lie algebra extension#^equivalent]] to $\mathfrak{v}$ or the [[Lie algebra extension#^trivial]]. <span class="QED"/>

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.9 pp. 32ff.

## Properties

1. The extension is the [[Lie algebra extension#^trivial]] restricted to $\mathfrak{p} = \mathbb{K}d_{-1} + \mathbb{K}d_{0} + \mathbb{K}d_{1}$, since the central term becomes zero.

#
---
#state/tidy | #lang/en | #SemBr

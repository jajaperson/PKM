---
tags:
  - public
---
[[Lie algebras MOC]]
# Witt algebra

Let $\mathbb{K}[t,t^{-1}]$ denote the [[algebra of Laurent polynomials]] over a field $\mathbb{K}$.
The **Witt algebra** $\mathfrak{d}= \der(\mathbb{K}[t,t^{-1}])$ over $\mathbb{K}$ is the [[derivation subalgebra]] of the [[Lie algebra]] $\End_{\mathbb{K}} \mathbb{K}[t,t^{-1}]$. #m/def/lie
It is equivalently characterized as follows:[^1988]
For each $p(t) \in \mathbb{K}[t,t^{-1}]$, define the derivation
$$
\begin{align*}
T_{p(t)} = p(t) \frac{d}{dt}
\end{align*}
$$
Then $\mathfrak{d} = \{ T_{p(t)} : p(t) \in \mathbb{K}[t,t^{-1}] \}$ is the Lie algebra of such derivations.
The bracket may be expressed as
$$
\begin{align*}
[T_{p(t)}, T_{q(t)}] = T_{p(t)q'(t) - q(t)p'(t)}
\end{align*}
$$
and a basis is given by
$$
\begin{align*}
d_{n} &= -t^{n+1} \frac{d}{dt} = -t^n t \frac{d}{dt} &
[d_{m}, d_{n}] &= (m-n) d_{m+n} & m,n &\in \mathbb{Z}
\end{align*}
$$

> [!check]- Proof of equivalence
> Let $\mathfrak{d}$ denote the first characterization.
> Let $T \in \mathfrak{d}$, and set $p(t) = T(t)$.
> Then
> $$
> \begin{align*}
> T(1) = T( 1 \cdot 1) = T(1) + T(1)
> \end{align*}
> $$
> whence $T(1) = 0$, furthermore
> $$
> \begin{align*}
> 0 = T(tt^{-1}) = T(t)t^{-1} + t T(t^{-1})
> \end{align*}
> $$
> whence $T(t^{-1}) = -t^{-2}T(t)$.
> Since these results hold for $T_{p(t)}$ in place of $T$, these two operators concur for all powers of $t$. <span class="QED"/>

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.9, pp. 31–32

In $\opn{char} \mathbb{K} = 0$, the Witt algebra admits a unique nontrivial 1-dimensional central extension, the [[Virasoro algebra]].

## Properties

  - For any $n \in \mathbb{N}$, $\Span \{ d_{-n}, d_{0}, d_{n} \}$ forms a [[Lie subalgebra]] isomorphic to [[Special linear Lie algebra|$\opn{\mathfrak{sl}}_2 \mathbb K$]], in particular
    $$
  \begin{align*}
  \mathfrak{p} = \mathbb{K}d_{-1} + \mathbb{K}d_{0} + \mathbb{K}d_{1} \cong_{\cat{Lie}_{\mathbb{K}}} \opn{\mathfrak{sl}}_{2}\mathbb{K}
  \end{align*}
  $$

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Projective correlation]]
# Orthogonal complement polarity

Let $U \leq \mathbb{K}^{n+1}$ be a $(k+1)$-dimensional vector subspace.
The **orthogonal complement** $\tau(U)$ defined as
$$
\begin{align*}
\tau(U) = \{ v \in \mathbb{K}^n : \tp U v = \{ 0 \} \}
\end{align*}
$$
is a $(n-k)$-dimensional vector subspace,
and $\tau : \mathrm{PG}(n,\mathbb{K}) \to \op{\mathrm{PG}(n,\mathbb{K})}$ defines a [[Projective correlation|projective polarity]]. #m/thm/geo 
Moreover, if $U = \colsp M$ for some matrix $M$,
then $\tau(U) = \ker \tp M$.

> [!check]- Proof
> First we will show the column/kernel characterization always exists.
> Let $( u_{i} )_{i=0}^k$ be a basis for $U$,
> and let $M = [u_{1}, \dots, u_{k}]$ so $\colsp M = U$.
> Then $v \in \ker M$ iff $\tp u_{i} v = 0$ for all $i = 1, \dots, k$.
> Since any $u \in U$ is a finite linear combination of $u_{i}$,
> it follows $\tp u v = 0$ for any $u \in U$.
> Thus $\tau(U) = \ker M$.
> 
> Since $\rank M = \rank \tp M = \dim U$ it follows from the [[Rank-nullity theorem]] that $\dim U + \dim \tau(U) = k+1$.
> 
> Note that $\tau$ clearly reverses inclusion of vector subspaces:
> If $U \leq V$ then certainly all vectors orthogonal to $V$ are orthogonal to $U$,
> i.e. $\tau(V) \leq \tau(U)$.
> With the observation above, this shows that $\tau$ is incidence-preserving and is therefore a [[Projective correlation|projective polarity]].
> <span class="QED"/>

It follows that every [[projective correlation]] of $\mathrm{PG}(n,\mathbb{K})$ can be written as a collineätion followed by $\tau$.

## Properties

1. The orthogonal complement commutes with any [[field automorphism]]. ^P1
2. Let $A \in \mathrm{PG L}_{n+1}(\mathbb{K})$. Then $\tau A \tau = \tp{(A^{-1})} = (\tp A)^{-1}$. ^P2

> [!check]- Proof of 1–2
> Let $\sigma \in \Aut(\mathbb{K})$ and $U = \colsp M$.
> Then
> $$
> \begin{align*}
> \tau (\sigma U) &= \tau (\sigma \colsp M) = \tau \colsp  (\sigma M) \\
> &= \ker \left(\tp{(\sigma M)}\right) = \ker(\sigma\tp M)
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> v \in \tau(\sigma U) \iff (\sigma \tp M) v = 0 \iff \sigma^{-1} ((\sigma \tp M) v) = 0 \iff \tp M (\sigma^{-1} v) = 0
> \end{align*}
> $$
> Similarly
> $$
> \begin{align*}
> \sigma (\tau U) &= \sigma (\tau \colsp M) = \sigma \ker \tp M
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> v \in \sigma (\tau U) \iff \sigma^{-1} v \in \ker \tp M \iff \tp M (\sigma^{-1}v) = 0
> \end{align*}
> $$
> Therefore $\tau (\sigma U) = \tau (\sigma U)$, proving [[#^P1]]. #to/check
> 
> Let $U = \colsp M$ and $A \in \mathrm{PGL}_{n+1}(\mathbb{K})$
> Then
> $$
> \begin{align*}
> v \in A \tau U \iff A^{-1} v\in \ker \tp M \iff \tp M A^{-1} v  = 0
> \end{align*}
> $$
> thus
> $$
> \begin{align*}
> A \tau U = \ker{\tp M A^{-1}} = \ker\tp{(\tp{(A^{-1})}M)} = \tau \colsp (\tp{(A^{-1})}M) = \tau \tp{(A^{-1})} U
> \end{align*}
> $$
> But since $\tau^2 = 1$, it follows $\tau A \tau U = \tp{(A^{-1})} U$, proving [[#^P2]].
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr 
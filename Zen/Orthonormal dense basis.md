---
tags:
  - public
---
[[Hilbert space]]
# Orthonormal dense basis

Let $X$ be a [[Hilbert space]].
An **orthonormal dense basis**[^term] is an [[Orthonormal set]] and [[dense basis]] of $X$. #m/def/anal/fun 


  [^term]: This is nonstandard terminology. Normally, this is just called an orthonormal basis, while the normal definition of a basis is relegated to [[Vector basis|Hammel basis]].

## Main theorem
If $\mathcal{E} = \{ \ket{e_{n}} \}_{n=1}^\infty$ is a [[countability|countable]] [[Orthonormal set]], the following are equivalent #m/thm/anal/fun 

1. $\mathcal{E}$ is an orthonormal dense basis of $X$ ^O1
2. $\mathcal{E}^\perp = \{ 0 \}$ ^O2
3. $\ket{x} = \sum_{n=1}^\infty \ket{e_{n}} \braket{ e_{n} | x }$ for all $x \in X$ ^O3

> [!missing]- Proof
> Assume $\mathcal{E}$ is an orthonormal dense basis of $X$
> and let $Y = \Span \mathcal{E}$.
> Note that $\mathcal{E}^\perp = Y^\perp$ by [[Orthogonal complement#^S6]].
> Let $x \in Y^\perp$.
> Now by the density of $Y$ there exists a sequence $(\ket{y_{i}})_{i=1}^\infty$ in $Y$ 
> such that $\lim_{ n \to \infty } \ket{y_{n}} = x$.
> But since [[the inner product is continuous]]
> $$
> \begin{align*}
> \braket{ x | x } = \lim_{ n \to \infty } \braket{ x | y_{k} } = 0
> \end{align*}
> $$
> whence $\Span so [[#^O1]] implies [[#^O2]].
> 
> Now assume $\mathcal{E}^\perp = \{ 0 \}$.
> Let
> $$
> \begin{align*}
> \ket{x_{k}} = \sum_{j=1}^k \ket{e_{j}} \braket{ e_{j} | x }
> \end{align*}
> $$
> We will show that $\lim_{ k \to \infty } \ket{x_{k}}=\ket{x}$.

## Properties

- [[Parseval's relation]] allows the expansion of arbitrary inner products.


#
---
#state/develop | #lang/en | #SemBr

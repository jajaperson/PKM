---
tags:
  - public
---
[[Formal calculus MOC]]
# Formal delta

The **formal delta** over a field $\mathbb{K}$ is the [[Algebra of Laurent series|Laurent series]][^1988] #m/def/fcalc 
$$
\begin{align*}
\delta(z) = \sum_{n \in \mathbb{Z}}z^n \in \mathbb{K}\d[z,z^{-1}\d]
\end{align*}
$$

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §2.1–§2.2, p. 52ff

## Properties

Let $V$ be a vector space over $\mathbb{K}$.
Let $v(z) \in V[z,z^{-1}]$ and $a \in \mathbb{K}^\times$.
Finally let $p(z) \in \mathbb{K}[z,z^{-1}]$ and $T= T_{p(z)} = p(z) \frac{d}{dz}$.
Then in [[Formal sums over a vector space|$V\{ z \}$]]
1.   $$
  \begin{align*}
  v(z)\delta(az) = v(a^{-1}) \delta (az)
  \end{align*}
  $$
  ^P1
2. $$
  \begin{align*}
  v(z) \frac{d}{dz}[\delta(az) ]= v(a^{-1}) \frac{d}{dz} [\delta(az)] - v'(a^{-1})\delta(az)
  \end{align*}
  $$
  ^P2
3. $$
  \begin{align*}
  v(z)T[\delta(az)] = v(a^{-1})T[\delta(az)]-(Tv)(a^{-1})\delta(az)
  \end{align*}
  $$
  ^P3

Let $X(z_{1},z_{2}) \in (\End V) \d[z_{1},z_{1}^{-1},z_{2},z_{2}^{-1}\d]$ such that $\lim_{ z_{1} \to z_{2} }X(z_{1},z_{2})$ exists and $a \in \mathbb{K}^\times$. 
Finally let $p(z_{1},z_{2}) \in \mathbb{K}[z_{1},z_{1}^{-1},z_{2},z_{2}^{-1}]$, $T_{1} = p(z_{1},z_{2}) \frac{ \partial }{ \partial z_{1} }$, and $T_{2}=p(z_{1},z_{2})\frac{ \partial }{ \partial z_{2} }$.
Then in [[Formal sums over endomorphisms|$(\End V)\{ z_{1},z_{2} \}$]]

4. $$
    \begin{align*}
    X(z_{1},z_{2}) \delta(az_{1} / z_{2}) &= X(a^{-1}z_{2},z_{2})\delta(az_{1}/z_{2}) \\
    &= X(z_{1},az_{1})\delta(az_{1} /z_{2})
    \end{align*}
    $$
    ^PA
5. $$
  \begin{align*}
  X(z_{1},z_{2})\frac{ \partial }{ \partial z_{1} } [\delta(az_{1} / z_{2})] 
  &= X(a^{-1}z_{2},z_{2}) \frac{ \partial }{ \partial z_{1} } [\delta(az_{1} / z_{2})] - \left( \frac{ \partial X }{ \partial z_{1} }  \right)(a^{-1}z_{2},z_{2})\delta(az_{1} / z_{2}) 
  \\
  X(z_{1},z_{2})\frac{ \partial }{ \partial z_{2} } [\delta(az_{1} / z_{2})] 
  &= X(z_{1},az_{1}) \frac{ \partial }{ \partial z_{2} } [\delta(az_{1} / z_{2})] - \left( \frac{ \partial X }{ \partial z_{2} }  \right)(z_{1},az_{1})\delta(az_{1} / z_{2})
  \end{align*}
  $$
  ^PB
6. $$
  \begin{align*}
  X(z_{1},z_{2}) T_{1}[\delta(az_{1} / z_{2})]
  &= X(a^{-1}z_{2},z_{2})T_{1}[\delta(az_{1} / z_{2})] - (T_{1}X)(a^{-1}z_{2},z_{2})\delta(az_{1} / z_{2}) \\
  X(z_{1},z_{2})T_{2}[\delta(az_{1} / z_{2})]
  &= X(z_{1},az_{1})T_{2}[\delta(az_{1} / z_{2})] - (T_{2}X)(z_{1},az_{1}) \delta(az_{1} / z_{2})
  \end{align*}
  $$
  ^PC


Note these fail for non-integer powers.

> [!check]- Proof of 1–6
> First we prove [[#^P1]].
> Consider the special case $v(z) = v_{n}z^n$. Then
> $$
> \begin{align*}
> v(z)\delta(az) &= (v_{n}z^n) \left( \sum_{k \in \mathbb{Z}}a^kz^k \right)
> = \sum_{k \in \mathbb{Z}}a^kv_{n}z^{k+n} \\
> &= \sum_{k \in \mathbb{Z}}a^{k-n}v_{n}z^k
> = (a^{-n}v_{n})\left( \sum_{k \in \mathbb{Z}}a^kz^k \right) \\
> &= v(a^{-1})\delta(az)
> \end{align*}
> $$
> whence follows [[#^P1]] by linearity.
> The proof of [[#^PA]] is similar.
> Let $X(z_{1},z_{2}) = \sum_{m,n \in \mathbb{Z}}z_{1}^mz_{2}^n$. Then
> $$
> \begin{align*}
> X(z_{1},z_{2})\delta(az_{1} / z_{2}) 
> &= \left( \sum_{m,n \in \mathbb{Z}} x(m,n)z_{1}^mz_{2}^n \right) \left( \sum_{k \in \mathbb{Z}} a^k z_{1}^k z_{2}^{-k} \right) \\
> &= \sum_{m,n, k \in \mathbb{Z}} a^k x(m,n) z_{1}^{m+k}z_{2}^{n-k} \\
> &= \sum_{m,n,k \in \mathbb{Z}}a^{k-m} x(m,n) z_{1}^kz_{2}^{m+n-k} \\
> &= X(a^{-1}z_{2},z_{2})\delta(az_{1} / z_{2})
> \end{align*}
> $$
> Then [[#^P3]] and [[#^PC]] follow by taking appropriate derivatives, and [[#^P2]] and [[#^PB]] are special cases. <span class="QED"/>


#
---
#state/develop | #lang/en | #SemBr

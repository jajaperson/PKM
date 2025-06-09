---
tags:
  - public
---
[[Algebraic number theory MOC]]
# Cyclotomic polynomial

The $n$th **cyclotomic polynomial** is defined to be #m/def/num/alg 
$$
\begin{align*}
\Phi_{n}(x) := \prod_{\begin{matrix}
1\leq m\leq n; \\
\gcd \{ m,n \} = 1
\end{matrix}} 
(x- \zeta_{n}^m) \in \mathbb{Z}[x]
\end{align*}
$$
is irreducible in $\mathbb{Q}[x]$, and has degree given by the [[Euler totient function]] $\phi(n)$.
Thus this is a [[Algebraic element|minimal polynomial]] over $\mathbb{Q}$ for a primitive $n$th root of unity,
and can be used to construct the [[cyclotomic field]] $\mathbb{Q}(\zeta_{n})$.

> [!check]- Proof of integer coëfficients
> By [[#^P1]] $\Phi_{n}$ can be reduced down to a product of prime cyclotomic polynomials which we know have integer coëfficients.
> 
> Now suppose towards contradiction that $\Phi_{n}(x) \in \mathbb{Z}[x]$ is reducibile.
> Then its roots $\zeta_{n}^m$ with $\langle m,n \rangle=\langle 1 \rangle$ are divided among the factors,
> so choose a root $\zeta_{n}^m$ of one irreducible monic factor $f(x) \mid \Phi_{n}(x)$,
> so that another root $\zeta_{n}^{mp}$ for a prime $p \not\mid n$ is not a root of $f(x)$.
> Write
> $$
> \begin{align*}
> \Phi_{n}(x) = f(x)g(x)
> \end{align*}
> $$
> where $f(x), g(x) \in \mathbb{Z}[x]$ are monic.
> Then $f(x)$ is the minimal polynomial of $\zeta_{n}^m$ over $\mathbb{Q}$ and $g(\zeta_{n}^{mp})=0$.
> 
> It follows that $\zeta_{n}^m$ is a root of $g(x^p)$,
> and hence $f(x) \mid g(x^p)$, whence
> $$
> \begin{align*}
> g(x^p) = f(x) h(x)
> \end{align*}
> $$
> for $h(x) \in \mathbb{Z}[x]$.
> Letting underling denote the projection $\mathbb{Z}[x] \twoheadrightarrow \mathbb{K}_{p}[x]$, and invoking the [[Frobenius endomorphism|Frobenius automorphism]] we have
> $$
> \begin{align*}
> \underline g(x)^p = \underline f(x) \underline h(x)
> \end{align*}
> $$
> so $\underline g(x)$ and $\underline h(x)$ have a nontrivial common factor $\underline \ell(x)$ in $\mathbb{K}_{p}[x]$.
> It follows
> $$
> \begin{align*}
> \underline \ell(x)^2 \mid \underline f(x) \underline g(x) = \underline{\Phi_{n}}(x)
> \end{align*}
> $$
> so $\underline{\Phi_{n}}(x)$ has a multiple factor.
> 
> This implies that $x^n - 1 \in \mathbb{K}_{p}[x]$ is [[Separable polynomial|inseparable]].
> On the other hand, its derivative $nx^{n-1} \in \mathbb{K}_{p}[x]$ is nonzero (since $p \not\mid n$),
> contradicting [[Separable polynomial#^P1]].
> Therefore $\Phi_{n}(x)$ must be irreducible. <span class="QED"/>

## Cyclotomic polynomial for a prime power
For the particular case of $n=p^h$ we have
$$
\begin{align*}
\Phi_{n}(x) = \frac{x^{p^h} - 1}{x^{p^{h-1}}-1} = \sum_{j=0}^{p-1} x^{jp^{h-1}} = x^{(p-1)p^{h-1}} + \dots + x^{p^{h-1}}+1
\end{align*}
$$

## Properties

1. For all $n \in \mathbb{N}$,
   $$
  \begin{align*}
  x^n-1 = \prod_{1\leq d \mid n} \Phi_{d}(x)
  \end{align*}
  $$
  ^P1

> [!check]- Proof of 1
> If $n = de$, then every $d$th root $\zeta$ of unity is also an $n$th root of 1,
> which holds in particular for every _primitive_ $d$th root $\zeta$ of unity.
> 
> On the other hand, every $\zeta \in \mu_{n}$ generates a subgroup $H \leq \mu_{n}$,
> where if $\opn{ord} \zeta = d$ then $H = \mu_{d}$.
> Thus every $\zeta \in \mu_{n}$ is a primitive $d$th root of unity for some $d \mid n$.
> 
> Therefore the set of $n$th roots of unity eauals the union of the sets of primitive $d$th roots of unity as $d$ ranges over factors of $n$, whence follows [[#^P1]]. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

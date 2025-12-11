---
tags:
  - public
aliases:
  - ramified
  - unramified
  - inert
---
[[Ring of integers of a number field]]
# Splitting of prime ideals in a number field

Suppose $L : K$ is an [[field extension|extension]] of [[Number field|number fields]] and $\mathfrak{p} \trianglelefteq \mathcal{O}_{K}$ is a [[prime ideal]] of the [[Ring of integers of a number field|ring of integers]].
Then by [[Unique factorization of ideals|UFI]], $\mathfrak{p}\mathcal{O}_{L}$ has a unique factorization into prime ideals $\mathfrak{p}_{j} \trianglelefteq \mathcal{O}_{L}$
$$
\begin{align*}
\mathfrak{p} \mathcal{O}_{L} = \prod_{j=1}^g \mathfrak{p}_{j}^{e_{j}}
\end{align*}
$$
where the multiplicities $e_{j}$ are called **ramification indices**. #m/def/num/alg 
Moreover,

- if $\mathfrak{p} \mathcal{O}_{L}$ is a prime ideal, then $L:K$ is **inert** at $\mathfrak{p}$;
- if $e_{j} > 1$ for some $j$, then $L:K$ is **ramified** at $\mathfrak{p}$;
- otherwise $L:K$ is **unramified** at $\mathfrak{p}$.

A fundamental result is [[Kummer's factorization theorem]]. 

## Properties

Let $K = \mathbb{Q}(\vartheta)$ be a number field. Then[^2022]

1. If a [[Algebraic element|minimal polynomial]] $m_{\vartheta}(x)$ is [[Eisenstein's criterion|Eisenstein]] at $p$, then $p$ is totally ramified in $\mathcal{O}_{K}$. ^P1
2. If $p$ does not divide the [[annoying index]], then $p$ ramifies in $\mathcal{O}_{K}$ iff $p \mid \Delta_{K:\mathbb{Q}}$. ^P2
3. Only finitely many primes ramify ramify in $K$. ^P3

> [!warning]- Proof of 1.
> From [[Annoying index#^P2]], we know that $p$ does not divide $\abs{\mathcal{O}_{K} / \mathbb{Z}[\vartheta]}$.
> By [[Kummer's factorization theorem]], $m_{\vartheta}(x) \equiv_{p} x^n$ implies $\langle p \rangle = \langle p,\vartheta \rangle^{n}$, proving [[#^P1]].

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], §2.3.1 , pp. 41–43

#
---
#state/tidy | #lang/en | #SemBr

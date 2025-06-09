---
tags:
  - public
---
[[Field theory MOC]]
# Splitting field

Let $K$ be a [[field]] and $f(x) \in K[x]$ be a [[Polynomial ring|polynomial]] of degree $d$.
The **splitting field** $F$ for $f(x)$ over $K$ is an [[Field extension|extension]] $F:K$ such that
$$
\begin{align*}
f(x) = c \prod_{i=1}^d (x-\alpha_{i})
\end{align*}
$$
splits in $F[x]$, and $F = K(\alpha_{1},\dots,\alpha_{d})$.
It is unique up to isomorphism with[^2009]
$$
\begin{align*}
[F : K] \leq (\deg f)!
\end{align*}
$$

> [!notes]- Proof
> We construct the splitting field by iterating the process of [[adjoining a root to a field]].
> Let $f(x) \in K[x]$
> Suppose the statement and bound have been proven for polynomials $g(x) \in K[x]$ with $\deg g < \deg f$.
> Let $q(x) \in K[x]$ be an irreducible factor of $f(x)$, so that
> $$
> \begin{align*}
> K(\alpha) := \frac{K[x]}{\langle q(x) \rangle } : K
> \end{align*}
> $$
> is an extension of degree $\deg q \leq \deg f$,
> in which $f(x)$ has a linear factor $(x-\alpha)$,
> so letting $g(x) = f(x) / (x-\alpha)$ gives $\deg g = \deg f - 1$ so the splitting field $F$ of $g(x)$ over $K(\alpha)$ exists with $[F: K(\alpha)] \leq (\deg f -1)!$.
> It follows that $F$ is a splitting field for $f(x)$ over $K$ and
> $$
> \begin{align*}
> [F:K] = [F:K(\alpha)][K(\alpha):K] \leq (\deg f)(\deg f - 1)! = (\deg f)!
> \end{align*}
> $$
> as claimed.
> 
> Now suppose that $\psi : K' \to K$ is an isomorphism of fields,
> and let $h(x) \in K'[x]$ such that $f(x) = \psi(h(x))$,
> and let $F'$ be a splitting field for $h(x)$ over $K'$.
> Consider the composite extension $\overline{K} : K \cong K'$.
> Since $F: K'$ is [[Algebraic element|algebraic]], by [[Embedding an algebraic extension into an algebraically closed field]] there exists a morphism
> $$
> \begin{align*}
> i \in \cat{Fld}_{K'}(F',\overline{K}).
> \end{align*}
> $$
> where $i \restriction K' = \iota \restriction K'$.
> Since $F' = K'(\alpha'_{i})_{i=1}^d$ where $\{ \alpha_{i}' \}_{i=1}^d \sube F'$ are the roots of $h(x)$,
> it follows
> $$
> \begin{align*}
> i(F') = K(\alpha_{i})_{i=1}^d \leq \overline{K}
> \end{align*}
> $$
> where $\{ \alpha_{i} \}_{i=1}^d$ are the roots of $i(g(x)) = \iota(g(x))=f(x)$ in $\overline{K}$, 
> so $i(F')$ is independent of the chosen morphism $i$ and the splitting field $F'$. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.4.1, pp. 429–430

## Properties

1. Suppose $F$ is the splitting field of $f(x) \in K[x]$, and that $g(x) \in K[x]$ is a factor of $f(x)$.
   Then $F$ contains a unique [[subfield]] which is the splitting field for $g(x)$. ^P1

> [!check]- Proof of 1
> Let
> $$
> \begin{align*}
> f(x) = c \prod_{i=1}^d (x-\alpha_{i})
> \end{align*}
> $$
> as above.
> Then for some subset of indices $I \in \mathbb{N}_{d}$ and some $C \in K$,
> $$
> \begin{align*}
> h(x) = \prod_{i \in I}(x-\alpha_{i}).
> \end{align*}
> $$
> Then $K(\alpha_{i})_{i \in I}$ is the splitting field of $h(x)$,
> and indeed is the only such field contained in $F$ since $\alpha_{i}$ are the only roots of $h(x)$ in $F$, proving [[#^P1]] <span class="QED"/>


#
---
#state/develop | #lang/en | #SemBr

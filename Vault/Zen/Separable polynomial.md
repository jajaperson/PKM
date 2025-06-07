---
tags:
  - public
aliases:
  - inseparable polynomial
---
[[Field theory MOC]]
# Separable polynomial

Let $K$ be a [[field]].
A [[Polynomial ring|polynomial]] $f(x) \in K[x]$ is **separable** iff all its roots have multiplicity 1 in $F[x]$,
where $F$ is its [[splitting field]] (or [[algebraic closure]]). #m/def/field
Equivalently,
$$
\begin{align*}
\gcd_{K[x]} \left\{ f(x) , \frac{d}{dx} f(x) \right\} = 1
\end{align*}
$$
Otherwise $f(x)$ is called **inseparable**.[^2009]

> [!check]- Proof of equivalence
> Suppose $f(x) \in K[x]$ is inseparable, i.e. it has a multiple root in a splitting field $F$, i.e.
> $$
> \begin{align*}
> f(x) = (x-\alpha)^m g(x)
> \end{align*}
> $$
> for some $\alpha \in F$, $g(x) \in F[x]$, $m \geq 2$.
> It follows
> $$
> \begin{align*}
> f'(x) = m(x-\alpha)^{m-1}g(x) - (x-\alpha)^mg'(x),
> \end{align*}
> $$
> so $\alpha$ is a common root of $f(x)$ and $f'(x)$.
> Thus both are divisible by the [[Algebraic element|minimal polynomial]] $h(x) \in K[x]$ of $\alpha$,
> so
> $$
> \begin{align*}
> \gcd_{K[x]} \left\{ f(x), \frac{d}{dx} f(x) \right\} \neq 1.
> \end{align*}
> $$
> 
> For the converse, suppose
> $$
> \begin{align*}
> \gcd_{K[x]} \left\{ f(x), \frac{d}{dx} f(x) \right\} \neq 1.
> \end{align*}
> $$
> so that in particular, $f(x)$ and $f'(x)$ have a common root $\alpha \in \overline{K}$ in the [[algebraic closure]].
> Write $f(x) = (x-\alpha)h(x)$ where $h(x) \in \overline{K}(x)$ and thus
> $$
> \begin{align*}
> f'(x) = h(x) + (x-\alpha)h'(x)
> \end{align*}
> $$
> whence $(x-\alpha) \mid h(x)$ and thus $(x-\alpha)^2 \mid f(x)$,
> so $f(x)$ is inseparable. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.4.2, p. 434

## Properties

1. If $f(x) \in K[x]$ is an inseparable [[Polynomial ring#^irreducible]], then $f'(x) = 0$. ^P1
2. If [[Characteristic|$\opn{char} K = 0$]], all irreducible polynomials are inseparable. ^P2

> [!check]- Proof of 1
> Since $f(x)$ is inseparable, $f(x)$ and $f'(x)$ have a common irrreducible factor $q(x)$, but since $f(x)$ is irreducible, $q(x)$ and $f(x)$ must be [[Associate elements|associate]] and thus of the same degree.
> But since $q(x) \mid f'(x)$, it follows $f'(x) = 0$, proving [[#^P1]]. [[#^P2]] is an immediate corollary. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Field theory MOC]]
# Perfect field

Let $K$ be a [[field]]. $K$ is called **perfect** iff [[Characteristic|$\opn{char} K = 0$]] or $K$ is a [[field of prime characteristic]] for which the [[Frobenius endomorphism]] is an automorphism. #m/def/field 
Equivalently,[^2009] 

1. every [[Polynomial ring#^irreducible]] $f(x) \in K[x]$ is a [[separable polynomial]];
2. every [[Algebraic element|algebraic extension]] of $K$ is a [[separable extension]].

> [!check]- Proof of equivalence
> Assume $K$ is perfect.
> [[Separable polynomial#^P2]] already covers the case $\opn{char} K = 0$, 
> so assume $K$ is a field of prime characteristic $p$ with a [[Frobenius endomorphism|Frobenius automorphism]] $\sigma : K \to K$
> By [[Separable polynomial#^P1]], an inseparable irreducible polynomial $f(x) \in K[x]$ must be of the form
> $$
> \begin{align*}
> f(x) = \sum_{i=0}^n a_{i} \,(x^p)^i
> \end{align*}
> $$
> for some $\{ a_{i} \}_{i=0}^n \subset K$.
> But
> $$
> \begin{align*}
> \sigma^{-1} (f(x)) = \sum_{i=0}^n \sigma^{-1}(a_{i})\,x^i := g(x)
> \end{align*}
> $$
> whence $g(x)^p = f(x)$, contradicting irreducibility,
> so every irreducible polynomial must in fact be separable.
> 
> For the converse, assume $K$ is imperfect, so $K$ is a prime field of characteristic $p$ and the [[Frobenius endomorphism]] is not surjective.
> It suffices to construct an inseparable irreducible polynomial.
> 
> By non-surjectivity there exists an $\alpha \in K$ such that $f(x) := x^p - \alpha \in K[x]$ has no roots in $K$ and therefore no linear factors.
> In $\overline{K}$, on the other hand, $f(x)$ does have a root $\beta$, and in fact, applying the Frobenius endomorphism, we see
> $$
> \begin{align*}
> f(x) = (x - \beta)^p
> \end{align*}
> $$
> which is separable.
> It follows that an irreducible factor of $f(x)$ is separable, as required. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §§VII.4.2–4.3

Note that by the elementary [[Pigeonhole principle]], every [[Galois field]] is perfect.

#
---
#state/tidy | #lang/en | #SemBr

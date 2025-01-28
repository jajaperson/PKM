---
tags:
  - public
---
[[Formal sums over a vector space]]
# Formal sums over endomorphisms

Let $V$ be a [[vector space]] over $\mathbb{K}$ and consider [[Formal sums over endomorphisms|formal sums]] over the [[endomorphism ring]] $\End V$, denoted $(\End V)\{ z \}$.[^1988]
We define the following operations: #m/def/fcalc 

## Operations

### Summation
The sum of a family $\{ X_{i}(z) \}_{i \in I}$ in $(\End V) \{ z \}$ with $X_{i}(z) = \sum_{n \in \mathbb{K}} x_{i}(n)z^n$ exists iff the $\{ x_{i}(n) \}_{i \in I}$ are [[Summable endomorphisms|summable]] for all $n \in \mathbb{K}$,
and is given by
$$
\begin{align*}
\sum_{i \in I}X_{i}(z) = \sum_{n \in \mathbb{K}} \left( \sum_{i \in I}x_{i} (n) \right) z^n
\end{align*}
$$


### Multiplication

The product of a finite list $(X_{i}(z))_{i=1}^r$ in $(\End V)\{ z \}$ exists iff for every $n \in \mathbb{K}$,
the set
$$
\begin{align*}
\left\{  \prod_{i=1}^r x_{i}(n_{i}) : \sum_{i=1}^r n_{i} = n  \land \{ n_{i} \}_{i=1}^r \sube \mathbb{K}  \right\}
\end{align*}
$$
is [[Summable endomorphisms|summable]] and is defined as
$$
\begin{align*}
\prod_{i=1}^r X_{i}(z) = \sum_{n \in \mathbb{K}} \left( \sum_{\substack{n_{1}+\dots+n_{r}=n \\ n_{1},\dots,n_{r} \in \mathbb{K}}} \prod_{i=1}^r x_{i}(n_{i}) \right) z^n
\end{align*}
$$
Importantly, partitioning a product into existent subproducts and taking the product of those will give the same result, but the converse doesn't hold:
Multiplication of formal sums fails to be associative, instead satisfying **partial associativity**.

> [!tip]- Counterexamples
> Consider the [[Formal delta]] $\delta(z) \in \mathbb{K} \d[ z,z^{-1} \d]$.
> Then naïve manipulation would suggest
> $$
> \begin{align*}
> \delta(z) = \left( \left( \sum_{n = 0}^\infty z^n \right)(1-z)  \right) \delta(z) &\stackrel{!}= \left( \sum_{n=0}^\infty z^n\right) \left( (1-z)\delta(z) \right) = 0
> \end{align*}
> $$
> On the other hand, this triple product exists but contains a nonexistant subproduct
> $$
> \begin{align*}
> \left( \sum_{n=0}^\infty z^n \right) \left( \sum_{n=0}^\infty z^{-n}  \right)0 = 0
> \end{align*}
> $$


### Limits of multivariable formal sums

Let
$$
\begin{align*}
X(z_{1},z_{2}) = \sum_{m,n \in \mathbb{K}} x(m,n) z_{1}^mz_{2}^n \in (\End V) \{ z_{1},z_{2} \}
\end{align*}
$$
Then $\lim_{ z_{1} \to z_{2} } X(z_{1},z_{2})$ exists iff for every $n \in \mathbb{K}$ the family $\{ x(m,n-m) \}_{m \in \mathbb{K}}$ is summable,
and is given by
$$
\begin{align*}
\lim_{ z_{1} \to z_{2} } \left( \sum_{m,n \in \mathbb{K}}x(m,n)z_{1}^mz_{2}^n \right) = \sum_{n \in \mathbb{K}} \left( \sum_{m \in \mathbb{K}}x(m,n-m) \right) z_{2}^n
\end{align*}
$$


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §2.1, pp. 49–50

## See also

- [[Normal ordered product]]

#
---
#state/develop | #lang/en | #SemBr

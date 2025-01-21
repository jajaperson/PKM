---
tags:
  - public
---
[[Natural Heisenberg algebras]]
# Normal ordered product

Let $V$ be a space carrying a representation of a [[Natural Heisenberg algebras|natural Heisenberg algebra]] $\hat{\mathfrak{h}}_{Z}$ for $Z = \mathbb{Z}$ or $Z = \mathbb{Z} + \frac{1}{2}$,
and let $Z^\pm$ denote the strictly positive and negative parts of $Z$ respectively.
The **normal ordered product** is a procedure for obtaining well-defined operators from infinite expressions.[^3.3][^4.2]

## Definition
In general, if for $\alpha \in \mathfrak{h}$ we have the [[Formal sums over endomorphisms|formal sum of operators]]
$$
\begin{align*}
\alpha(z) = \sum_{n \in \mathbb{Z}} \alpha(n) z^{-n}
\end{align*}
$$
where $\alpha(n)$ is a [[Homomorphism of graded vector spaces#^homogenous]] operator of degree $n$, we define #m/def/lie
$$
\begin{align*}
\alpha(z)^\pm &= \frac{1}{2}\alpha(0) [0 \in Z] + \sum_{n \in Z^\pm}\alpha(n)z^{-n} \\
\implies \alpha(z) &= \alpha(z)^+ + \alpha(z)^{-}
\end{align*}
$$
where we have used an [[Iverson bracket]].
Then the **normal ordered product** is defined recursively for $\{ \alpha_{i} \}_{i=1}^k \sube \mathfrak{h}$ by
$$
\begin{align*}
\mathopen{:}\alpha_{1}(z)\mathclose{:} &= \alpha_{1}(z) \\
\mathopen{:}\alpha_{1}(z)\cdots \alpha_{k}(z)\mathclose{:}
&= \alpha_{k}(z)^{-}\mathopen{:}\alpha_{1}(z) \cdots \alpha_{k-1}(z)\mathclose{:} + \mathopen{:}\alpha_{1}(z) \cdots \alpha_{k-1}(z)\mathclose{:}\alpha_{k}(z)^+
\end{align*}
$$
which induces a map $S^\bullet \mathfrak{h} \to (\End V) \{ z \}$.
In particular
$$
\begin{align*}
\mathopen{:}\alpha_{1}(n_{1})\alpha_{2}(n_{2})\mathclose{:} = \begin{cases}
\alpha_{1}(n_{1})\alpha_{2}(n_{2})  & n_{1} \leq n_{2} \\
\alpha_{2}(n_{2})\alpha_{1}(n_{1}) & n_{2} \leq n_{1}
\end{cases}
\end{align*}
$$
and
$$
\begin{align*}
\mathopen{:}\alpha(z)^k\mathclose{:} = \sum_{\ell=0}^k {k \choose \ell} (a(z)^{-})^\ell (a(z)^+)^{k - \ell}
\end{align*}
$$


### For $D^{-1}$

Let $D^{-1}$ be the inverse [[degree operator on formal sum over a vector space|degree operator]] on $D((\End V) \{ z \})$, so
$$
\begin{align*}
D^{-1}\alpha(z) &=  D^{-1}\alpha(z)^+ + D^{-1}\alpha(z)^{-} \\
\mathopen{:}D^{-1}\alpha_{1}(z)\mathclose{:} &= D^{-1}\alpha_{1}(z) \\
\mathopen{:}D^{-1}\alpha_{1}(z)\cdots D^{-1 }\alpha_{k}(z)\mathclose{:}
&= D^{-1}\alpha_{k}(z)^{-}\mathopen{:}D^{-1}\alpha_{1}(z) \cdots D^{-1}\alpha_{k-1}(z)\mathclose{:} \\ &{\phantom =} + \mathopen{:}D^{-1}\alpha_{1}(z) \cdots D^{-1}\alpha_{k-1}(z)\mathclose{:}D^{-1}\alpha_{k}(z)^+
\end{align*}
$$
and
$$
\begin{align*}
\mathopen{:} \exp D^{-1}\alpha(z)\mathclose{:} = \sum_{k \in \mathbb{N}_{0}} \frac{\mathopen{:}(D^{-1}\alpha(z))^k\mathclose{:}}{k!}
\end{align*}
$$


  [^3.3]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §3.3, p. 73–76
  [^4.2]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §4.2, p. 89–92

#
---
#state/develop | #lang/en | #SemBr

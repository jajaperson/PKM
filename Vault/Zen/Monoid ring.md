---
tags:
  - public
---
[[Ring theory MOC]]
# Monoid ring

Let $R$ be a [[ring]] and $M$ be a [[monoid]][^semi].
The **monoid ring** $R[M]$ is the [[Ring extension|extension ring]] of $R$ by [[Adjunction of a ring|adjoining]] $M$ in the most general way maintaining the monoid product as ring multiplication, #m/def/ring 
as formalized by the [[#Universal property]]
Thus it is the [[free module]] $R[M]$ with additional ring structure. 

  [^semi]: Or a [[semigroup]], where one simply uses its completion to a monoid.

## Universal property

Let $R$ be a ring and $M$ be a monoid. 
The associated **monoid ring** is a triple consisting of a ring $R[M]$, 
a [[ring homomorphism]] $\iota : R \to R[M]$, 
and a [[monoid homomorphism]] $\mu : M \to R[M]$;
such that given any ring $T$, ring homomorphism $i : R \to T$, and monoid homomorphism $m : M \to T$
there exists a unique ring homomorphism $f : R[M] \to T$ such that the following commutes in $\Set$

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJSIl0sWzIsMCwiUltNXSJdLFs0LDAsIk0iXSxbMiwyLCJUIl0sWzAsMSwiXFxpb3RhIl0sWzIsMSwiXFxtdSIsMl0sWzAsMywiSSIsMl0sWzIsMywibSJdLFsxLDMsIlxcZXhpc3RzICFmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09R%20%26%26%20%7BR%5BM%5D%7D%20%26%26%20M%20%5C%5C%0A%09%5C%5C%0A%09%26%26%20T%0A%09%5Carrow%5B%22%5Ciota%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22i%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cexists%20!f%7D%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Cmu%22'%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22m%22%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJSIl0sWzIsMCwiUltNXSJdLFs0LDAsIk0iXSxbMiwyLCJUIl0sWzAsMSwiXFxpb3RhIl0sWzIsMSwiXFxtdSIsMl0sWzAsMywiSSIsMl0sWzIsMywibSJdLFsxLDMsIlxcZXhpc3RzICFmIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d" /></p>

This admits a unique extension to a [[Multifunctor|bifunctor]] $(-)[-] : \Ring \times \cat{Mon} \to \Ring$
such that
$$
\begin{align*}
\iota : \Pi_{1} \Rightarrow (-)[-] : \Ring \times \cat{Mon} \to \Ring \\
\mu: \Pi_{2} \Rightarrow (-)[-] : \Ring \times \cat{Mon} \to \cat{Mon}
\end{align*}
$$
 become [[Natural transformation|natural transformations]].

## Construction as maps

As with the [[free module]], $R[M]$ may be constructed as the set of maps of [[Support of a map|finite support]] $M \to R$,
where we identify $m \in M$ with $\mu(m) = \delta_{m} : t \mapsto [m=t]$ invoking an [[Iverson bracket]],
and elements of $R$ with constant functions.
For $a, b \in R[M]$, the product is given by
$$
\begin{align*}
[a * b](x) = \sum_{m n = x}  a(m)b(n)
\end{align*}
$$

> [!check]- Proof of universal property
> Clearly $R[M]$ is an abelian group under pointwise addition.
> The convolution operation is associative, since
> $$
> \begin{align*}
> [a*(b*c)](x) 
> &= \sum_{mn = x} a(m) [b*c](n) 
> = \sum_{mn=x} \sum_{k\ell = n} a(m)b(k)c(\ell) \\ 
> &= \sum_{\alpha\beta\gamma = x} a(\alpha)b(\beta)c(\gamma) \\
> &= \sum_{mn=x} \sum_{k\ell=m} a(k)b(\ell)c(n) = \sum_{mn=x} [a*b](m) c(n) \\
> &= [(a * b) * c](x)
> \end{align*}
> $$
> and a multiplicative identity is given by $\iota(1) = 1$.
> Clearly $\iota$ is a [[Ring monomorphism]],
> and $\mu$ is a [[monoid monomorphism]] since
> $$
> \begin{align*}
> [\delta_{m} * \delta_{n}](x) 
> = \sum_{k\ell = x} \delta_{m}(k) \delta_{n}(\ell) = \delta_{mn}(x)
> \end{align*}
> $$
> 
> Now suppose $T, i, m$ is another such triple.
> For the diagram to commute, we require that $f(r) = i(r)$ for all $r \in R$
> and that $f(\delta_{n}) = m(n)$ for all $m \in M$.
> For $f$ to be a ring homomorphism, it follows
> $$
> \begin{align*}
> f(r \delta_{n}) = i(r) m(n)
> \end{align*}
> $$
> and thus for $a \in R[M]$
> $$
> \begin{align*}
> f(a) = \sum_{n \in M} i(a(n)) m(n)
> \end{align*}
> $$
> which is unique, as required. <span class="QED"/>

## See also

- [[Group ring]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Galois field]]
# Finite extension of a Galois field

Let $p$ be a prime and $1 \leq d\leq e$ be integers.
Then there exists an [[Field extension|extension]]
$$
\begin{align*}
\GF(p^d) \hookrightarrow \GF(p^e)
\end{align*}
$$
iff $d \mid e$.
Moreover, when such an extension exists it is unique and [[Simple extension|simple]].[^2009] #m/thm/field


> [!check]- Proof
> Suppose such an extension exists, whence we have a [[Intermediate field extension|tower of field extensions]] $\GF(p^e) : \GF(p^d) : \GF(p)$,
> so in particular $[\GF(p^d): \GF(p)]$ divides $[\GF(p^e): \GF(p)]$,
> i.e. $d \mid e$.
> 
> Conversely, assume $d \mid e$, whence $(p^d - 1) \mid (p^e -1)$,
> and by the same token $(x^{p^d-1} - 1) \mid (x^{p^e-1}-1)$.
> Therefore $(x^{p^d}-x) \mid (x^{p^e}-x)$.
> By [[Galois field#Construction and uniqueness]], $\GF(p^e)$ is the splitting field of the second polynomial.
> It follows from [[Splitting field#^P1]] that $\GF(p)$. 
> 
> For the last statement, note that [[Finite subgroup of the group of units of a field is cyclic]], so in particular $\GF(p^e)^\times$ has a generator $\alpha$,
> which will necessarily generate $\GF(p^e)$ over any subfield.
> If $d \mid e$ this means $\GF(p^e) = \GF(p^d)(\alpha)$,
> so the extension is simple. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.5.1, p. 442.

#
---
#state/tidy | #lang/en | #SemBr

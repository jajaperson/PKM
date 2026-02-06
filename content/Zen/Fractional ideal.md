---
mathLink-blocks:
  inverse: inverse ideal
aliases:
  - invertible ideal
tags:
  - public
---
[[Ring theory MOC]]
# Fractional ideal

A **fractional ideal** is a generalization of an [[ideal]] in the same way [[Rational numbers]] generalizes [[Integers]].
Let $R$ be an [[Integral domain]], and $K = \opn{Frac} R$ its [[field of fractions]].
A **fractional ideal** $\mathfrak{x} \leq_{R} K$ is an $R$-[[submodule]] of $K$ such that $r \mathfrak{x} \sube R$ for some $r \in R$. #m/def/ring
Thus fractional ideals are proper ideals divided by a nonzero elements.

## Ideal quotient

The **ideal quotient**, which in these notes refers to the generalized [[colon ideal]], is defined as follows for fractional ideals $\mathfrak{a},\mathfrak{b} \leq_{R} K$
$$
\begin{align*}
\left( \frac{\mathfrak{a}}{\mathfrak{b}} \right) = (\mathfrak{a} :_{K} \mathfrak{b}) = \{ x \in K : \mathfrak{b}x \sube \mathfrak{a}\}
\end{align*}
$$
A fractional ideal $\mathfrak{a}$ is **invertible** iff $(\mathfrak{a}\mathfrak{a}^{-1}) = (1)$ for some (provably unique) **inverse** fractional ideal $\mathfrak{a}^{-1} \leq_{R} K$, which if it exists is given by
$$
\begin{align*}
\mathfrak{a}^{-1} = \left( \frac{(1)}{\mathfrak{a}} \right)
\end{align*}
$$
^inverse

> [!check]-  Proof
> For uniqueness of the inverse, note
> if $\mathfrak{a}\mathfrak{b} = (1) = \mathfrak{a}\mathfrak{b}'$ then $\mathfrak{b} = \mathfrak{b}(1) = \mathfrak{b}\mathfrak{a}\mathfrak{b}' = (1)\mathfrak{b}' = \mathfrak{b}'$.
> Suppose now $\mathfrak{a}$ is invertible
> Then $b \mathfrak{a} \sube (1)$ for all $b \in \mathfrak{a}^{-1}$,
> so $\mathfrak{a}^{-1} \sube (\frac{(1)}{\mathfrak{b}})$.
> Thus
> $$
> \begin{align*}
> (1) = \mathfrak{a}\mathfrak{a}^{-1} \sube \mathfrak{a} \left( \frac{(1)}{\mathfrak{a}} \right) \sube (1)
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> \mathfrak{a}\left( \frac{(1)}{\mathfrak{a}} \right) = (1)
> \end{align*}
> $$
> as required. 
> Clearly the inverse is a fractional ideal, as for any $0 \neq a \in I$ we have $aI^{-1} \sube R$. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

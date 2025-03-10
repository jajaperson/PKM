---
tags:
  - public
---
[[Ring theory MOC]]
# Rng
A **rng** <span class="broad">rʊŋ</span> is a generalized [[ring]] which may lack a multiplicative identity.
That is, a **rng** $(R, +, \cdot)$ consists of an [[Abelian group]] $(R, +)$ called **addition**
and a [[Semigroup]] $(R, \cdot)$ called **multiplication**, with the extra conditions #m/def/ring
- **left-distributivity** $a \cdot (b + c) = (a \cdot b) + a \cdot c)$
- **right-distributivity** $(b + c) \cdot a = (b \cdot a) + (c \cdot a)$

## Examples

An example of a rng that is not a [[ring]] is the even integers
$$
\begin{align*}
2\mathbb{Z} = \{ 2k \mid k \in \mathbb{Z} \}
\end{align*}
$$
with the ordinary operations of integer addition and multiplication.

## Properties

Let $a,b \in R$ and $n,m \in \mathbb{N}$

1. $a 0 = 0a = 0$ ^P1
2. $a(-b) = (-a)b = -(ab)$ ^P2
3. $(-a)(-b) = ab$ ^P3
4. $a(b-c)=ab-ac$ and $(b-c)a = ba - ca$ ^P4
5. $(na)(mb)=(nn)(ab)$ ^P5

> [!check]- Proof of 1–5
> Clearly $0 + a 0 = a 0 = a(0 + 0) = a 0 + a 0$ so $a 0 = 0$,
> and likewise for $0a$, proving [[#^P1]].
> Similarly $a(-b) =a(-b) + ab - ab = a(b-b) - ab = a 0 - ab = -ab$ and likewise for $(-a)b$, proving [[#^P2]].
> It follows that $(-a)(-b) = -(a(-b)) = -(-(ab)) = ab$, proving [[#^P3]].
> Note
> $a(b-c) = a(b + (-c)) =ab + a(-c) = ab-ac$, and likewise for right-distributivity, proving [[#^P4]].
> 
> Now
> $$
> \begin{align*}
> \left( \sum^n a \right)\left( \sum^m b \right) = \sum^n\left(  a\sum^m b \right) = \sum^n \sum^m (ab) = \sum^{nm} (ab)
> \end{align*}
> $$
> proving [[#^P5]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

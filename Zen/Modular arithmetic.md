---
tags:
  - public
---
[[Ring theory MOC]]
# Modular arithmetic
Modular arithmetic concerns the algebraic properties of natural numbers that have been “cut off” at a certain point.

## Modular congruence
The starting point of modular arithmetic are the modular [[Congruence relation|congruence relations]] $\equiv_{n}$, where for two natural numbers $x,y \in \mathbb{N}$
$$
\begin{align*}
x \equiv_{n} y \iff n \mid (y-x)
\end{align*}
$$
that is $x,y$ have the same remainder after euclidean division by $n$.

## Quotients
The congruence relations create new algebraic structures called the [[Algebraic quotient]], denoted $\mathbb{Z}/{\equiv_{n}}$ or equivalently $\mathbb{Z}_{n}$,
The properties of $\mathbb{Z}_{n}$ as a [[Congruence relation]] allow us to define
$$
\begin{align*}
[x] + [y] &= [x+y] \\
[x] \times [y] &= [x \times y]
\end{align*}
$$
Hence, $(\mathbb{Z}_{n}, +, \times)$ constitutes a [[Ring]]. 

### Quotient ring $\mathbb{Z}_{n}$
In the case that $n$ is prime, $\mathbb{Z}_{n}$ constitutes an [[field]], which follows from [[A finite integral domain is a field]].

- Addition and multiplication are commutative (i.e. $+$ forms an [[Abelian group]], $\times$ forms an [[Abelian group|abelian]] monoid/group)
  $$
  \begin{align*}
  x + y \equiv y+x \qquad x \times y \equiv y \times x
  \end{align*}
  $$
- There is an additive identity $0$
- Additive inverse exists
- There is a multiplicative inverse $1$
- Some elements (called units) may have a multiplicative inverse

## Properties of modular arithmetic
- [[Fermat's little theorem]]
- [[Chinese remainder theorem]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Ring theory MOC]]
# Irreducible element

Let $R$ be a [[ring]].
An element $x \in R$ is **irreducible** iff $x$ is not a [[unit]] but whenever $x = ab$ with $a,b \in R$ 
then $a$ or $b$ is a unit. #m/def/ring 
$$
\begin{align*}
(\forall a,b \in R)[x = ab \implies \{ a,b \} \cap R^\times \neq \0]
\end{align*}
$$
This is one way to generalize the [[Prime number]] to an arbitrary ring.[^2022]

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], §1.1, p. 1

## Properties

1. For $R$ an [[Integral domain]], $x \in R$ is irreducible iff $\langle x \rangle$ is maximal among principal ideals. ^P1

> [!check]- Proof of 1
> Assume $x \in R$ is irreducible, and suppose $\langle x \rangle \sube \langle y \rangle$.
> Then $x = ay$ for some $a \in R$,
> whence either $y$ is a unit, implying $\langle y \rangle = \langle 1 \rangle$,
> or $a$ is a unit, implying $y = a^{-1} x$ and thus $\langle y \rangle = \langle x \rangle$.
> Therefore $\langle x \rangle$ is maximal among principal ideals.
> 
> Now suppose $\langle x \rangle$ is maximal among principal ideals,
> and let $x = ab$ for $a,b \in R$.
> Then $x \in \langle a \rangle$ and $x \in \langle b \rangle$.
> If $a \in R^\times$ we are done, so assume $\langle a \rangle = \langle x \rangle$.
> Then $a$ and $x$ are [[associate elements]] and thus $x = au$ for $u \in R^\times$.
> Hence $au = ab$ and thus $b = u \in R^\times$.
> Therefore $x$ is irreducible, proving [[#^P1]] <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

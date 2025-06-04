---
aliases:
  - derivation
tags:
  - public
---
[[Algebra theory MOC]]
# Derivation on an algebra

A **derivation** $D$ on an [[Algebra over a field|algebra]] $(A, \cdot)$ over a field $\mathbb{K}$
is a [[linear endomorphism]] $D : A \to A$
satisfying the [[product rule]] #m/def/falg 
$$
\begin{align*}
D(a \cdot b)=D(a) \cdot b + a \cdot D(b)
\end{align*}
$$
for all $a,b \in A$.
One can more generally define a derivation from one algebra to another.

## Properties

1. [[Derivation subalgebra|The commutator of two derivations is itself a derivation]]
2. A derivation on a [[Unital associative algebra over a field]] is a derivation on its [[commutator]] ^P2

> [!check]- Proof of 2
> Let $A$ be a unital associative algebra over $\mathbb{K}$ and $d : A \to A$ be a derivation of $A$.
> Then for any $a, b \in A$
> $$
> \begin{align*}
> d[a,b] &= d(ab - ba) = d(ab) - d(ba) \\
> &= (da)b + a(db) - (db)a - b(da) \\
> &= [da,b] + [a,db]
> \end{align*}
> $$
> proving [[#^P2]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

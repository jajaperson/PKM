---
mathLink-blocks:
  sup: supremum
  inf: infimum
  chain: chain
tags:
  - public
---
[[Naïve set theory MOC]]
# Partially ordered set
A **poset** or **partially ordered set** is a set $S$ equipped with a [[Relation set]]  $R$
such that $R$ (viewed here as a set) is #m/def/order

1. **reflexive** — for all $a \in S$, $(a,a) \in R$
2. **transitive** — if $(a,b) \in R$ and $(b,c) \in R$, then $(a, c) \in R$
3. **antisymmetric** — if $(a, b) \in R$ and $(b, a) \in R$, then $a = b$

So a poset is a [[Preorder]] with the additional property of antisymmetry.
We may also view [[Posets as categories]].
They are themselves objects in [[Category of posets]].
If the poset has the additional property of being **total**, i.e. all elements are related in some way, it is a [[Totally ordered set]].

## Further terminology

Let $P$ be a poset.

- The **maximum** or **terminal** element $M \in P$ has $p \in P \implies p\leq M$ ^minimum
- The **minimum** or **initial** element $N \in P$ has $p \in P \implies N \leq p$ ^maximum
- A **maximal** element $m \in P$ has $m \leq p \implies m = p$ ^maximal
- A **minimal** element $n \in P$ has $p \leq n \implies p = n$ ^minimal
- The **least upper bound** $\sup \{ a,b \}$ or **join** is the smallest $u$ such that $a,b \leq u$ (hence it is the [[Products and coproducts|categorical coproduct]]) ^sup
- The **greatest lower bound** $\inf\{ a,b \}$ or **meet** is the largest $\ell$ such that $\ell \leq a,b$ (hence it is the [[Products and coproducts|categorical product]]) ^inf
- A poset for which every pair of elements have a l.u.b. and g.l.b. is called a [[Lattice order]].
- A subset of $P$ that is [[Totally ordered set|total]] is called a **chain** of $P$. ^chain

## Archetypal examples

### Set inclusion
Sets together with $\sube$ form a partially ordered class[^paradox]

- **reflexive** — for any set $A$, $A \sube A$.
- **transitive** — if $A \sube B$ and $B \sube C$, then $A \sube C$
- **antisymmetric** — if $A \sube B$ and $B \sube A$, then $A = B$.[^useful]

[^paradox]: I avoid saying poset since considering a set of all sets introduces problems.
[^useful]: This property is often used to prove sets are the same.

## Properties

- [[Zorn's lemma]], equivalent to the axiom of choice

#
---
#state/tidy | #lang/en | #SemBr

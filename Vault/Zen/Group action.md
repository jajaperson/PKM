---
tags:
  - public
aliases:
  - G-space
---
[[Group theory MOC]]
# Group action

A **group action**[^Wirkung] is a way to associate symmetries on a set (as automorphisms) with a group. #m/def/group If $G$ is a group and $\Omega$ is a set[^spal], then a **left group action** is a map $\alpha : G \times \Omega \to \Omega : (g,\omega) \mapsto g\omega$[^juxt] satisfying

1. **Identity:** $e\omega = \omega$ for all $m \in M$
2. **Compatibility:** $g(h\omega) = (gh) \omega$ for all $g,h \in G$ and $\omega \in \Omega$.

and a **right group action** is a map $\beta : \Omega \times G \to \Omega : (\omega,g) \mapsto \omega^g$ satisfying

1. **Identity:** $\omega^e = \omega$ for all $\omega \in \Omega$
2. **Compatibility:** $(\omega^g)^h = \omega^{gh}$ for all $g,h \in G$ and $\omega \in \Omega$

[^Wirkung]: German _Wirkung_ or _Operation_.
[^spal]: Usually taken to be a [[Space.canvas|Space]] or an algebraic structure.
[^juxt]: When the action is understood the convention is to juxtapose the group element to the point/element in the set

The group $G$ is said to **act** on the space or structure $\Omega$, 
where the function $\alpha(g, -)$ is said to be the action of $g$ on $\Omega$ —
which is always an automorphism.
$\Omega$ is thence called a **$G$-space**.

## Terminology

- A group actions associates to each point $\omega \in \Omega$ an [[Group action orbit|orbit]].
- For a given point $\omega \in \Omega$, the set of group elements that map $m$ to itself are called the [[Stabilizer group]], which is a subgroup.
- The set of all orbits is called the [[Orbit space]] or quotient.
- Types of action
  - Iff every stabilizer is $\{ e \}$ the action is [[Free group action|free]].
  - Iff $\alpha_{(-)}(\omega) : G \to \Omega$ is [[Surjectivity, injectivity, and bijectivity|surjective]] for all/any $\omega \in \Omega$ the action is [[Transitive group action|transitive]].
  - Iff $\alpha_{(-)} : G \to \Aut(\Omega)$ is a [[group monomorphism]] the action is [[Effective group action|effective]].
  - A [[Regular group action]] is free and transitive.
- The **degree** of $\alpha$ is the cardinality of $\Omega$.

## Properties

- The product of the cardinality of the orbit and the order of the stabiliser is the order of the group ([[Orbit-stabilizer theorem]])
- (Left-)$G$-spaces form a [[Category of G-spaces]] with equivariant maps as morphisms.

## Related concepts

- For topological properties, see [[Continuous group action]]
- [[Permutation group]]

#
---
#state/tidy | #lang/en | #SemBr

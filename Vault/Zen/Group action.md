---
tags:
  - public
aliases:
  - G-space
---
[[Group theory MOC]]
# Group action

A **group action**[^Wirkung] is a way to associate symmetries on a set (as automorphisms) with a group. #m/def/group If $G$ is a group and $M$ is a set[^spal], then a **left group action** is a map $\alpha : G \times M \to M : (g,m) \mapsto gm$[^juxt] satisfying

1. **Identity:** $em = m$ for all $m \in M$
2. **Compatibility:** $g(hm) = (gh) m$ for all $g,h \in G$ and $m\in M$.

and a **right group action** is a map $\beta : M \times G \to M : (m,g) \mapsto m^g$ satisfying

1. **Identity:** $m^e = m$ for all $m \in M$
2. **Compatibility:** $(m^g)^h = m^{gh}$ for akk $g,h \in G$ and $m \in M$

[^Wirkung]: German _Wirkung_ or _Operation_.
[^spal]: Usually taken to be a [[Space.canvas|Space]] or an algebraic structure.
[^juxt]: When the action is understood the convention is to juxtapose the group element to the point/element in the set

The group $G$ is said to **act** on the space or structure $M$, 
where the function $\alpha(g, \cdot)$ is said to be the action of $g$ on $M$ —
which is always an automorphism.
$M$ is thence called a **$G$-space**.

## Terminology

- A group actions associates to each point $m \in M$ an [[Group action orbit|orbit]].
- For a given point $m \in M$, the set of group elements that map $m$ to itself are called the [[Stabilizer group]], which is a subgroup.
- The set of all orbits is called the [[Orbit space]] or quotient.
- Types of action
  - Iff every stabilizer is $\{ e \}$ the action is [[Free group action|free]].
  - Iff $\alpha_{-}(m) : G \to M$ is [[Surjectivity, injectivity, and bijectivity|surjective]] the action is [[Transitive group action|transitive]].
  - Iff $\alpha_{-} : G \to \Aut(M)$ is a [[group monomorphism]] the action is [[Effective group action|effective]].
  - A [[Regular group action]] is free and transitive.

## Properties

- The product of the cardinality of the orbit and the order of the stabiliser is the order of the group ([[Orbit-stabilizer theorem]])
- (Left-)$G$-spaces form a [[Category of G-spaces]] ${}_{G}\Set$ with equivariant maps as morphisms.

## Related concepts

- For topological properties, see [[Continuous group action]]

#
---
#state/tidy | #lang/en | #SemBr

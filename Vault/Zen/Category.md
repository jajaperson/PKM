---
tags:
  - public
---
[[Category theory MOC]]
# Category

If groups are the algebraic structure which abstract symmetry,
categories are the algebraic structure which abstract mathematical theories.
A **category** $\cat C$ is a mathematical object consisting of: #m/def/cat

- a [[collection]] of **objects**, $\ob (\cat C)$, sometimes referred to as $\cat C$ when its meaning is clear;
- for every ordered pair of objects $X,Y \in \Ob(\cat C)$
  a [[collection]][^loc] of **[[Morphism|morphisms]]** $\cat C(X, Y)$; and
- a composition operation $(\circ)$ so that given $f \in \cat C (X ,Y)$ and $g \in \cat C(Y,Z)$ we have $g \circ f \in \cat C(X,Z)$.

and satisfying the following properties

- for any $X \in \ob(\cat C)$,
  there exists a unique $1$ or $\id_X : X \to X$
  which is the left and right identity under composition, 
  i.e. $f = \id_X \circ f$ and $g = g \circ \id_Y$.
- composition is associative, i.e. $f \circ (g \circ h) = (f \circ g) \circ h$.

[^loc]: If this is restricted to be a [[Small set]], the category is said to be [[Locally small category|locally small]].

It is common for $\circ$ to be abandoned in favour of juxtaposition, so $f \circ g = f\,g$.
Note that since objects are in correspondence with identity morphisms, it is possible to avoid considering a separate class of objects and instead use identity morphisms.
See [[Objects as identities]].
Yet another fruitful perspective is [[Objects as functors]].
These notions are interchanged as is notationally convenient.

## See also

- See also [[Glossary of categories]] and [[Opposite category]].
- Morphisms come in different shapes and sizes — see [[Morphism]]
- There are also different kinds of category — see [[Types of Category]].
- Reasoning about categories is often done through a [[Commutative diagram]]
- A category is the [[Oidification]] of a [[monoid]] — a **monoidoid**!
- [[Things as categories]]

---
#state/tidy | #SemBr | #lang/en 
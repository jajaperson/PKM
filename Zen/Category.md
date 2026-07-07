---
tags:
  - public
---
[[Category theory MOC]]
# Category

Categories are motivated from several perspectives

1. If groups are the algebraic structure which abstract symmetry,
  categories are the algebraic structure which abstract mathematical theories.[^2]
2. A category is a _directed_ [[groupoid]], in the same way a [[poset]] is a directed [[set]].
3. Along the same lines, a ([[Univalent category|univalent]]) category is a [[poset]] in the next dimension, see [[(n,r)-category]].[^1]
4. A category is the [[oidification]] of a [[monoid]] — a **monoidoid**!

## In terms of collections

A <dfn>category</dfn> $\cat C$ is a mathematical object consisting of: #m/def/cat

- a [[collection]] of **objects**, $\cat C_{0}$ or $\Ob(\cat C)$, sometimes referred to as $\cat C$ when its meaning is clear;
- for any $X,Y \in \cat C_0$
  a [[set]] of **[[Morphism|morphisms]]** $\cat C(X, Y)$; and
- a composition operation $(\circ)$ so that given $f \in \cat C (X ,Y)$ and $g \in \cat C(Y,Z)$ we have $g \circ f \in \cat C(X,Z)$;

and satisfying the following properties

- for any $X \in \cat C_0$,
  there exists a unique $1$ or $\id_X : X \to X$
  which is the left and right identity under composition, 
  i.e. $f = \id_X \circ f$ and $g = g \circ \id_Y$.
- composition is associative, i.e. $f \circ (g \circ h) = (f \circ g) \circ h$.


It is common for $\circ$ to be abandoned in favour of juxtaposition, so $f \circ g = f\,g$.
Note that since objects are in correspondence with identity morphisms, it is possible to avoid considering a separate class of objects and instead use identity morphisms, as described in [[Objects as identities]].

## Examples

For a larger list, see [[Glossary of categories]].

- A motivating example is the category [[Category of sets]], where objects are sets and morphisms are functions.
    Along these lines one might consider [[Category of topological spaces]], where objects are topological spaces and morphisms are _continuous_ functions;
    or [[Category of groups]], where objects are groups and morphisms are group homomorphisms.

- There are also many familiar objects in mathematics which can be recontextualized as a special kind of category, see [[Things as categories]].

## See also

- Reasoning in a category is usually carried out with a [[commutative diagram]].
- [[Morphism#Classification|Classification of morphisms]].
- A “homomorphism” of categories is called a [[functor]]. 
- Since categories have an additional dimension, there are morphisms between functors, called [[Natural transformation|natural transformations]].
- The hallowed [[Principle of equivalence]], which forbids certain operations with categories as “evil.”

---
#state/tidy | #SemBr | #lang/en 

[^1]: Without univalence, we get a [[preorder]].

[^2]: It turns out this is only works properly for “0-dimensional” theories. Since categories are 1-dimensional, they assemble into a 2-dimensional object called a [[Bicategory]].

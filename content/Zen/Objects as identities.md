---
tags:
  - public
---
[[Category]]
# Objects as identities

There is an equivalent formulation of the notion of [[category]] where an object is viewed as a special kind of [[morphism]].
Namely, one defines a category as a [[Class]] $\cat C$ of morphisms equipped with

1. a unary operation $\opn{dom}$ (**domain**)
2. a unary operaton $\opn{cod}$ (**dodomain**)
3. a partial binary operation $(\circ)$, also written as juxtaposition (**composition**)

such that for any $f,g,h \in \cat C$

1. $f g$ exists iff $\opn{dom} f = \opn{cod} g$
2. $\opn{dom}(fg) = \opn{dom} g$
3. $\opn{cod}(fg) = \opn{cod} f$
4. $\opn{cod}(\opn{dom} f) = \opn{dom}f$
5. $\opn{dom}(\opn{cod}f) = \opn{cod}f$
6. $(\opn{cod} f)f = f = f(\opn{dom} f)$
7. $(fg)h = f(gh)$ iff either side exists

Thus an _object_ is just a morphism that is the domain or codomain of another morphism,
and these are precisely _identities_.
The class of all such morphisms is denoted as $\Ob \cat C$.
This unifies certain parts of the theory, as outlined below.

## (Multi)functors

One advantage of this approach is that a [[functor]] $F: \cat C \to \cat D$ becomes a single map on morphisms, preserving composition and (co)domains
$$
\begin{align*}
F(gf) &= (Fg)(Ff) \\
\opn{dom}(Ff) &= F(\opn{dom} f) \\
\opn{cod}(Ff) &= F(\opn{cod} f)
\end{align*}
$$
The concept of a [[multifunctor]], e.g. $F : \cat C \times \cat D \to \cat E$, is also unified slightly.
In particular, it is clear how one can produce a functor $F(-,A) : \cat C \to \cat E$ by fixing an object $A$,
since in this conception $A = \id_{A}$.

#
---
#state/develop | #lang/en | #SemBr

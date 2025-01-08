---
aliases:
  - regularly monic
  - regularly mono
tags:
  - public
---
[[Morphism]]
# Regular monomorphism

A **regular monomorphism**[^not] is a morphism into some object $X$ which occurs as the [[Equalizer]] of some parallel pair of morphisms out of $X$. #m/def/cat 
In particular by the universal property of the equalizer it is a [[Morphism|monomorphism]].

> [!check]- Proof
> Let $f,g : X \to Y$ and $t: E \to X$ be their equalizer.
> Let $a,b : Z \to X$ so that $ta = tb := h$.
> Since the universal property demands that the factorization of $h$ via $t$ be unique,
> it follows that $a = b$. <span class="QED"/>

Regular monomorphisms are a categorical generalization of an [[embedding]],
as demonstrated by the [[#Examples]].
See [[Regular epimorphism]] for the dual notion.

  [^not]: In these notes, regular monomorphisms are implicitly denoted by $\hookrightarrow$,
  whereas $\rightarrowtail$ denotes a monomorphism which may not be regular.

## Examples

- [[Regular monomorphisms in the category of topological spaces]]

#
---
#state/tidy | #lang/en | #SemBr

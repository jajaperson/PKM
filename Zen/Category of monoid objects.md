---
categoryName: category of monoids in $\cat C$
mathLink: $\cat{Mon}_{\cat C}$
object: "[[monoid object]] in $\\cat C$"
morphism: "[[monoid morphism]]"
arguments:
  - $\cat C$ [[monoidal category]]
tags:
  - category
  - public
cssclasses:
  - img-grid
---
[[Monoid object]]
# Category of monoid objects

The <dfn>category of monoids</dfn> in $\cat C$, denoted $\cat{Mon}_{\cat C}$, is a [[category]] where
an object is a [[Monoid object]] in $\cat C$
and a morphism is a [[Monoid morphism]]. #m/def/cat 
In particular, $\cat{Mon}_{\Set}$ is the same as [[Category of monoids]].

## As the cocartesian completion of a symmetric monoidal category

If $\cat C$ is a [[symmetric monoidal category]] then the tensor product of two monoids in $\cat C$
naturally carries the structure of a monoid
with the unit and multiplication

![[product-unit.svg|c]]
![[product-multiplication-string.svg|c]]


With the product defined as such, $\Mon_{\cat C}$ is in fact a [[cocartesian category]]. #m/thm/cat

> [!check]- Proof
> Suppose $\Red, \Blue, \Purple$ are monoids in $\cat C$. We define monoid morphisms
> 
> ![[in_1-string.svg|c]]
> ![[in_2-string.svg|c]]
> ![[codiagonal-string.svg|c]]
> 
> and claim these satisfy the universal property of the [[Products and coproducts|coproduct]].
> Namely, if $f : \Red \to \Purple$ and $g : \Blue \to \Purple$ are monoid morphisms in $\cat C$, 
> then we claim $\{ f,g \}$ is the unique monoid morphism such that
> 
> ![[coproduct-ump.svg|c]]
> 
> commutes.
> Suppose that $h : \Red \otimes \Blue \to \Purple$ can replace $\{ f,g \}$ in the commutative diagram.
> Then
> 
> ![[codiagonal-ump-string.svg]]
> 
> so $h = \{ f,g \}$ as required. <span class="QED"/>

## Related categories

- There is an evident forgetful functor $\cat{Mon}_{\cat C} \to \cat C$, [[Monoidal functor|monoidal]] if $\cat C$ is [[Symmetric monoidal category|symmetric]].
- [[Category of comonoid objects]] = $\op{{\Mon_{\op{\cat C}}}}$

#
---
#state/tidy  | #lang/en | #SemBr

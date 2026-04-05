---
tags:
  - public
---
[[Category theory MOC]]
# Enriched category

An **enriched category** is a certain generalization of an ordinary [[category]], for which the hom-sets may be given additional structure, namely the structure of objects of another category.


Let $\cat M$ be a [[monoidal category]]. 
A category $\cat C$ **enriched over $\cat M$**, also called an **$\cat M$-category** consists of #m/def/cat 

- a [[Collection]] of objects $\Ob (\cat C$;
- for every ordered pair of objects $a,b \in \cat C$, a **hom-object** $\cat C(a,b) \in \cat M$;
- a morphism $\id_{a} : \mathbb{1} \to \cat C(a,a)$ in $\cat M$ designating the **identity**; and
- fir evert ordered triple of object $a,b,c \in \cat C$, a morphism $(\circ)_{a,b,c} : \cat C(b,c) \otimes \cat C(a,b) \to \cat C(a,c)$ in $\cat M$ designating **composition**;

such that we have **associativity**

![[enriched-assoc.svg#invert|https://q.uiver.app/#q=WzAsNSxbMCwwLCIoXFxjYXQgQyhjLGQpIFxcb3RpbWVzIFxcY2F0IEMoYixjKSkgXFxvdGltZXMgXFxjYXQgQyhhLGIpIl0sWzIsMCwiXFxjYXQgQyhiLGQpIFxcb3RpbWVzIFxcY2F0IEMoYSxiKSJdLFswLDIsIlxcY2F0IEMoYyxkKSBcXG90aW1lcyAoXFxjYXQgQyhiLGMpIFxcb3RpbWVzIFxcY2F0IEMoYSxiKSkiXSxbMiwyLCJcXGNhdCBDKGMsZCkgXFxvdGltZXMgXFxjYXQgQyhhLGMpIl0sWzMsMSwiXFxjYXQgQyhhLGQpIl0sWzAsMiwiXFxhbHBoYSIsMix7ImN1cnZlIjoxfV0sWzIsMCwiIiwyLHsiY3VydmUiOjF9XSxbMiwzLCIxIFxcb3RpbWVzIChcXGNpcmMpIiwyXSxbMCwxLCIoXFxjaXJjKSBcXG90aW1lcyAxIl0sWzEsNCwiKFxcY2lyYykiXSxbMyw0LCIoXFxjaXJjKSIsMl1d&macro_url=https%3A%2F%2Fraw.githubusercontent.com%2Fjajaperson%2FPKM%2Frefs%2Fheads%2Fmain%2FVault%2Fpreamble.sty]]

and **unitality**

![[enriched-unitality.svg#invert|https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhiYiAxIFxcb3RpbWVzIFxcY2F0IEMoYSxiKSJdLFsyLDIsIlxcY2F0IEMoYSxiKSJdLFsyLDAsIlxcY2F0IEMoYixiKSBcXG90aW1lcyBcXGNhdCBDKGEsYikiXSxbNCwwLCJcXGNhdCBDKGEsYikgXFxvdGltZXMgXFxjYXQgQyhhLGEpIl0sWzQsMiwiXFxjYXQgQyhhLGIpIl0sWzYsMCwiXFxjYXQgQyhhLGIpIFxcb3RpbWVzIFxcbWF0aGJiIDEiXSxbMCwyLCJcXGlkX2EgXFxvdGltZXMgMSJdLFsyLDEsIihcXGNpcmMpIl0sWzAsMSwiXFxsYW1iZGEiLDJdLFszLDQsIihcXGNpcmMpIiwyXSxbNSwzLCIxIFxcb3RpbWVzIFxcaWRfYSIsMl0sWzUsNCwiXFxyaG8iXV0=&macro_url=https%3A%2F%2Fraw.githubusercontent.com%2Fjajaperson%2FPKM%2Frefs%2Fheads%2Fmain%2FVault%2Fpreamble.sty]]


Note it does not necessarily follow from this definition that $\cat C$ is a [[category]].
Nevertheless, usually $\cat M$ is a [[concrete category]] and we have some compatible “ordinary category” structure for $\cat C$ arising from the underlying sets of hom-objects.

## Further terminology

- The appropriate notion of functor is an [[Enriched functor]].

## Examples

- An ordinary [[locally small category]] is the same as a $\Set$-category.
- A [[closed category]] is naturally enriched over itself.
- An [[Additive category]] is enriched over $\Ab$, as are the stronger notions of [[Preäbelian category]] and [[Abelian category]].

#
---
#state/develop | #lang/en | #SemBr

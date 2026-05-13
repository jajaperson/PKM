---
categoryName: category of bimonoids in $\cat C$
mathLink: $\cat{Bimon}_{\cat C}$
object: "[[bimonoid object]] in $\\cat C$"
morphism: "[[bimonoid morphism]]"
tags:
  - category
  - public
---
[[Bimonoid object]]
# Category of bimonoid objects

The <dfn>category of bimonoids</dfn> in $\cat C$, denoted $\cat{Bimon}_{\cat C}$, is a [[category]] where
an object is a [[bimonoid object]] in $\cat C$
and a morphism is a [[bimonoid morphism]]. #m/def/cat 
We therefore have [[Isomorphism of categories|isomorphisms of categories]]
$$
\begin{align*}
\cat{Bimon}_{\cat C} \cong \cat{Comon}_{\cat{Mon}_{\cat C}} \cong \cat{Mon}_{\cat{Comon}_{\cat C}}
\end{align*}
$$
where we invoke [[Category of monoid objects]] and [[Category of comonoid objects]].

## As the bicartesian completion of a symmetric monoidal category

If $\cat C$ is a [[symmetric monoidal category]] then the tensor product of two bimonoids in $\cat C$ naturally carries the structure of a bimonoid.

## Related categories

- By the above isomorphism, we have the following diamond of forgetful functors
  ![[bimon-forgetfuls.svg#invert|c|https://q.uiver.app/#q=WzAsNCxbMSwwLCJcXGNhdHtCaW1vbn1fe1xcY2F0IEN9Il0sWzAsMSwiXFxjYXR7TW9ufV97XFxjYXQgQ30iXSxbMiwxLCJcXGNhdHtDb21vbn1fe1xcY2F0IEN9Il0sWzEsMiwiXFxjYXQgQyJdLFswLDFdLFswLDJdLFsxLDNdLFsyLDNdXQ==&macro_url=https%3A%2F%2Fraw.githubusercontent.com%2Fjajaperson%2FPKM%2Frefs%2Fheads%2Fmain%2Fpreamble.sty]]
  which are all [[Monoidal functor|monoidal]] if $\cat C$ is [[Symmetric monoidal category|symmetric]].

#
---
#state/tidy | #lang/en | #SemBr

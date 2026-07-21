---
date: 2026-07-07
tags:
  - public
---
[[2-category theory MOC]]
# Bicategory

A <dfn>bicategory</dfn> is motivated from several perspectives:

1. A bicategory is a [[category]] in the [[Categorification|next dimension]]:
    While categories have a [[set]][^1] of morphisms between objects, a bicategory has a [[category]] of morphisms between objects.
    Because the objects of each “hom-category” need not form a set, the “identities” involved are higher isomorphisms having coherence relations of their own, similar to the associator and unitors of a [[monoidal category]].
2. A bicategory is the [[oidification]] of a [[monoidal category]], so that each object has a monoidal category of endomorphisms.

Thus, in terms of collections, a bicategory $\mathfrak{C}$ is a mathematical object consisting of: #m/def/cat/bi

1. a [[collection]] of <dfn>objects</dfn>, $\mathfrak{C}_{0}$;
2. for any $A,B \in \mathfrak{C}_{0}$, a [[category]] $\mathfrak{C}(A,B)$;

> [!info]- Notation
> We call the elements of the collection $\mathfrak{C}_{1}(A,B) := \mathfrak{C}(A,B)_{0}$ <dfn>1-morphisms</dfn>, and notate $f \in \mathfrak{C}_{1}(A,B)$ with 
> $$
> f : A \to B.
> $$
> For any $f,g \in \mathfrak{C}_{1}(A,B)$ we call the elements of the [[set]] $\mathfrak{C}_{2}(A,B)(f,g) := \mathfrak{C}(A,B)(f,g)$ <dfn>2-morphisms</dfn>, and notate $\beta \in \mathfrak{C}_{2}(A,B)(f,g)$ with 
> $$
> \beta : f \Rightarrow g : A \to B.
> $$



3. for any $A,B,C \in \mathfrak{C}_{0}$, a composition [[Multifunctor|bifunctor]];
    $$
    \begin{align*}
    (\circ) : \mathfrak{C}(B,C) \times \mathfrak{C}(A,B) \to \mathfrak{C}(A,C);
    \end{align*}
    $$
4. for any $A \in \mathfrak{C}_{0}$, a distinguished $\mathbb{1}_{A} \in \mathfrak{C}_{1}(A,A)$, sometimes by [[Objects as identities|abuse]] denoted $A$;
5. for any $A,B,C,D \in \mathfrak{C}_{0}$, a [[natural isomorphism]] called the <dfn>associator</dfn> with components $\alpha_{h,g,f} : (h \circ g) \circ f \Rightarrow h \circ (g \circ f) : A \to D$ for indices $h \in \mathfrak{C}_{1}(C,D)$,  $g \in \mathfrak{C}_{1}(B,C)$, and $f \in \mathfrak{C}_{1}(A,B)$;
6. for any $A,B \in \mathfrak{C}_{0}$, a [[natural isomorphism]] called the <dfn>left-unitor</dfn> with components $\lambda_{f} : \mathbb{1}_{B} \circ f \Rightarrow f : A \to B$ for index $f \in \mathfrak{C}(A,B)$; and
7. for any $A,B \in \mathfrak{C}_{0}$, a [[natural isomorphism]] called the <dfn>right-unitor</dfn> with components $\rho_{f} : f \circ \mathbb{1}_{A} \Rightarrow f : A \to B$ in index $f \in \mathfrak{C}(A,B)$;

satisfying the so-called <dfn>triangle identity</dfn>

![[bicat-triangle.svg#invert|c|https://q.uiver.app/#q=WzAsMyxbMCwwLCIoZyBcXGNpcmMgQikgXFxjaXJjIGYiXSxbMSwxLCJnIFxcY2lyYyBmIl0sWzIsMCwiZyBcXGNpcmMgKEIgXFxjaXJjIGYpIl0sWzAsMiwiXFxhbHBoYV97ZyxCLGZ9IiwwLHsibGV2ZWwiOjJ9XSxbMCwxLCJcXHJob19nIFxcY2lyYyBmIiwyLHsibGV2ZWwiOjJ9XSxbMiwxLCJnIFxcY2lyYyBcXGxhbWJkYV9mIiwwLHsibGV2ZWwiOjJ9XV0=]]

and <dfn>pentagon identity</dfn>

![[bicat-pentagon.svg#invert|c|https://q.uiver.app/#q=WzAsNSxbMCwzLCIoaSBcXGNpcmMgKGggXFxjaXJjIGcpKSBcXGNpcmMgZiJdLFsyLDMsImkgXFxjaXJjICgoaCBcXGNpcmMgZykgXFxjaXJjIGYpIl0sWzAsMSwiKChpIFxcY2lyYyBoKSBcXGNpcmMgZykgXFxjaXJjIGYiXSxbMiwxLCJpIFxcY2lyYyAoaCBcXGNpcmMgKGcgXFxjaXJjIGYpKSJdLFsxLDAsIihpIFxcY2lyYyBoKSBcXGNpcmMgKGcgXFxjaXJjIGYpIl0sWzAsMSwiXFxhbHBoYV97aSxoIFxcY2lyYyBnLGZ9IiwwLHsibGV2ZWwiOjJ9XSxbMiwwLCJcXGFscGhhX3tpLGgsZ30gXFxjaXJjIGYiLDIseyJsZXZlbCI6Mn1dLFsxLDMsImkgXFxjaXJjIFxcYWxwaGFfe2gsZyxmfSIsMix7ImxldmVsIjoyfV0sWzQsMywiXFxhbHBoYV97aSAsaCxnIFxcY2lyYyBmfSIsMCx7ImxldmVsIjoyfV0sWzIsNCwiXFxhbHBoYV97aSBcXGNpcmMgaCxnLGZ9IiwwLHsibGV2ZWwiOjJ9XV0=]]

for any $A \xrightarrow f B \xrightarrow g C \xrightarrow h D \xrightarrow i E$ in $\mathfrak{C}$.
Together these diagrams ensure that the operation of $(\circ)$ is unital associative up to canonical natural isomorphism, by the [[Coherence theorem for bicategories]].

## Examples

- Just as [[Category of sets]] is the fundamental example of a [[category]], [[Bicategory of categories]] is the fundamental example of a bicategory

## See also

- [[Notions of 2-functor]]

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Which is the same as a [[(n,r)-category|$(0,0)$-category]].

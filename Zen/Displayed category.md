---
tags:
  - public
mathLink-blocks:
  thinly: thinly displayed
---
[[Displayed category theory MOC]]
# Displayed category

In category theory, it is common to construct one category $\cat D$ from a simpler one $\cat C$ by requiring objects and morphisms to carry additional data.
This situation is perfectly encapsulated by a functor
$$
\begin{align*}
F : \cat D \to \cat C
\end{align*}
$$
which “forgets” the additional data we demanded,
but there is an equivalent notion which is intentionally closer to the way $\cat D$ is constructed.
A <dfn>displayed category</dfn> $\cat{D}$ over a [[category]] $\cat C$,
a situation denoted by
$$
\begin{align*}
\cat D \liesover \cat C 
\end{align*}
$$
consists of[^2017] #m/def/cat/dis

- for each object $c \in \cat C_{0}$, a [[collection]] $\cat D_{c}$ of objects over $c$;
- for each morphism $f \in \cat C(a,b)$, $x \in \cat D_{a}$ and $y \in \cat D_{b}$, a [[set]] of morphisms from $x$ to $y$ over $f$, denoted $\cat D_{f}(x,y)$ or $x \to_{f} y$;
- for each object $c \in \cat C_{0}$ and $x \in \cat D_{c}$, a morphism $1_{x} \in \cat D_{\id_{c}}(x,x)$;
- for all morphisms $f \in \cat C(a,b)$ and $g \in \cat C(b,c)$ and objects $x \in \cat D_{a}$, $y \in \cat D_{b}$, and $z \in \cat D_{c}$, a composition function
  $$
  \begin{align*}
  (\circ) : \cat D_{g}(y,z) \times \cat D_{f}(x,y) \to \cat D_{gf} (x,z)
  \end{align*}
  $$

where these data satisfy

- $1_{y} \circ \bar{f} = \bar{f}$ and  $\bar{f} \circ 1_{x} = \bar{f}$ for any $\bar{f} \in \cat D_{f}(x,y)$;
- $\bar{h} \circ (\bar{g} \circ \bar{f}) = (\bar{h} \circ \bar{g}) \circ \bar{f}$ for appropriately typed $\bar{f},\bar{g},\bar{h}$.

In the quintessential examples, we think of an object $x$ over $a$ as a structure on $a$,
and a morphism $\bar{f} \in \cat D_{f}(x,y)$ as a _witness_ that $\bar{f}$ is structure-preserving.
Thus displayed categories are naturally used in a paradigm with [[propositions as types]].

## Further terminology

Consider a displayed category $\cat D \liesover \cat C$.

- $\cat D$ is called <dfn>thinly displayed</dfn> iff every displayed hom-set $\cat D_{f}(x',y')$ is [[h-Prop|subsingleton]],
  i.e. there is at most one morphism lying over any morphism in $\cat C$. ^thinly

## See also

- [[Total category of a displayed category]]



#
---
#state/develop | #lang/en | #SemBr

[^2017]: 2017\. [[Sources/@ahrensDisplayedCategories2017|Displayed categories]]
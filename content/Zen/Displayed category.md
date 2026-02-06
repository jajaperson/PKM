---
tags:
  - public
---
[[Displayed category theory MOC]]
# Displayed category

A **displayed category** $\cat{D}$ over a [[category]] $\cat C$ consists of[^2017] #m/def/cat

- for each object $c \in \cat C_{0}$, a [[collection]] $\cat D_{c}$ of objects over $c$;
- for each morphism $f \in \cat C(a,b)$, $x \in \cat D_{a}$ and $y \in \cat D_{b}$, a [[set]] of morphisms from $x$ to $y$ over $f$, denoted $\cat D_{f}(x,y)$ or $x \to_{f} y$;
- for each object $c \in \cat C_{0}$ and $x \in \cat D_{c}$, a morphism $1_{x} \in \cat D_{1_{c}}(x,x)$;
- for all morphisms $f \in \cat C(a,b)$ and $g \in \cat C(b,c)$ and objects $x \in \cat D_{a}$, $y \in \cat D_{b}$, and $z \in \cat D_{c}$, a composition function
  $$
    \begin{align*}
    (\circ) : \cat D_{g}(y,z) \times \cat D_{f}(x,y) \to \cat D_{g \circ f} (x,z)
    \end{align*}
    $$

where these data satisfy

- $1_{y} \circ \bar{f} = \bar{f}$ and  $\bar{f} \circ 1_{x} = \bar{f}$ for any $\bar{f} \in \cat D_{f}(x,y)$;
- $\bar{h} \circ (\bar{g} \circ \bar{f}) = (\bar{h} \circ \bar{g}) \circ \bar{f}$ for appropriately typed $\bar{f},\bar{g},\bar{h}$.

In the quintessential examples, we think of an object $x$ over $a$ as a structure on $a$,
and a morphism $\bar{f} \in \cat D_{f}(x,y)$ as a _witness_ that $\bar{f}$ is structure-preserving.
Thus displayed categories are naturally used in a paradigm with [[propositions as types]].
This motivates the **total category** $\int_{\cat C} \cat D$ as the category of structures and structure morphisms,
defined as follows:

- an object $(a,x) \in \int_{\cat C} \cat D$ is a pair consisting of an object $a \in \cat C$ and an object $x \in\cat D_{a}$ over $a$, so that
  $$
  \begin{align*}
  \left( \int_{\cat C} D \right)_{0} := \sum_{a \in \cat C_{0}} \cat D_{a}
  \end{align*}
  $$
- a morphism $(f, \bar{f}) : (a,x) \to (b,y)$ is a pair where $f \in \cat C(a,b)$ and $\bar{f} \in \cat D_{f}(x,y)$, so that 
  $$
  \left( \int _{\cat C} \cat D \right)((a,x),(b,y)) = \sum_{f \in \cat C(a,b)} \cat D_{f}(x,y)
  $$
- composition and identities are induced from those of $\cat C$ and $\cat D$ in the straightforward way, and similarly for the axioms.

This is naturally equipped with a [[Free-forgetful adjunction|forgetful functor]] 
$$
\begin{align*}
\pi_{1}^{\cat D} : \int_{\cat C} \cat D \to \cat C.
\end{align*}
$$

[^2017]: 2017\. [[Sources/@ahrensDisplayedCategories2017|Displayed categories]]

#
---
#state/develop | #lang/en | #SemBr

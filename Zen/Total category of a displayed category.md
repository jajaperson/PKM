---
date: 2026-06-19
tags:
  - public
aliases:
  - total category
---
[[Displayed category theory MOC]]
# Total category

Consider a [[displayed category]] $\cat D \liesover \cat C$.
In order to return to the realm of ordinary category theory, we may construct the <dfn>total category</dfn> $\int_{\cat C} \cat D$
defined as follows: #m/def/cat/dis 

- an object $(a,x) \in \int_{\cat C} \cat D$ is a pair consisting of an object $a \in \cat C$ and an object $x \in\cat D_{a}$ over $a$, so that
  $$
  \begin{align*}
  \left( \int_{\cat C} D \right)_{0} := \coprod_{a \in \cat C_{0}} \cat D_{a}
  \end{align*}
  $$
- a morphism $(f, \bar{f}) : (a,x) \to (b,y)$ is a pair where $f \in \cat C(a,b)$ and $\bar{f} \in \cat D_{f}(x,y)$, so that 
  $$
  \left( \int _{\cat C} \cat D \right)((a,x),(b,y)) = \coprod_{f \in \cat C(a,b)} \cat D_{f}(x,y)
  $$
- composition and identities are induced from those of $\cat C$ and $\cat D$ in the straightforward way, and similarly for the axioms.

This is naturally equipped with a “forgetful functor”
$$
\begin{align*}
\pi_{1}^{\cat D} : \int_{\cat C} \cat D \to \cat C.
\end{align*}
$$
and indeed one can give an equivalence between pairs $(\cat D, \pi_{1}^\cat{D})$ and displayed categories $\cat D \liesover \cat C$.


#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Class]]
# Class function

A **class function**[^conf] is a generalization of a [[set function]], such that the domain may be any [[Class]] #m/def/set 
Exactly how this is treated depends on the [[axiomatic set theory]] employed,
but generally one takes a [[Relation class]] with the restriction that each element in the domain is related to exactly one element in the codomain.
Thus in [[NBG]]
$$
\begin{align*}
\fhood(F) \iff \rhood(F) \land (\forall x)(\forall y)[(x,y) \in F \land (x,z) \in F \implies y = z]
\end{align*}
$$
while in [[ZF]] we may treat the notion indirectly by a [[predicative formula]] $\varphi(x,y)$ such that 
$$
\begin{align*}
(\forall x)(\forall y)[\varphi(x,y) \land \varphi(x,z) \implies y = z]
\end{align*}
$$

  [^conf]: Not to be confused with a [[group class function]], which is often referred to by the same name.


#
---
#state/tidy | #lang/en | #SemBr

---
aliases:
  - ordered tuple
tags:
  - public
---
[[Set theory MOC]]
# Ordered pair

An **ordered pair** is a construction satisfying the fundamental property #m/def/set
$$
\begin{align*}
(a_{1},b_{1}) = (a_{2},b_{2}) \iff [a_{1}=a_{2}] \land [b_{1}=b_{2}]
\end{align*}
$$
the set of all ordered pairs from a given pair of sets forms the [[cartesian product]].
One may then define an ordered $n$-tuple by $(a,b,c) =((a,b),c)$, &c.
Compare this with the related universal property of the [[Products and coproducts|categorical product]].

## Construction

Within [[ZF]] the typical model, due to [[Kazimierz Kuratowski]], is as follows
$$
\begin{align*}
(a,b) =_{K} \{ \{ a \}, \{ a,b \} \}
\end{align*}
$$
which satisfies the fundamental property.

#
---
#state/develop | #lang/en | #SemBr

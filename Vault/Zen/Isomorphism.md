---
aliases:
  - iso
tags:
  - public
---
[[Morphism]]
# Isomorphism

An **isomorphism** is a **fully invertible morphism**,
i.e. in a category $\cat C$,  $f \in \cat C(X,Y)$ is an isomorphism iff there exists $f^{-1} \in \cat C(Y,X)$ such that #m/def/cat
$$
\begin{align*}
\id_{X} &= f^{-1} \circ f \\
\id_{Y} &= f \circ f^{-1}
\end{align*}
$$
It is important to note that the inverse must exist in the same category, and hence 
```mermaid
graph LR;
  bijection["bijection (concrete)"]
  mopic["monic and epic"]
  isomorphism ==>|implies| bijection ==>|implies| mopic
```
Consider, for example, a bijective [[Continuity|continuous map]] that are not [[homeomorphism]].


#
---
#state/tidy | #lang/en | #SemBr

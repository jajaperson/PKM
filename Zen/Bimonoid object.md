---
alias: bimonoid
tags:
  - public
---
[[Category theory MOC]]
# Bimonoid object

A **bimonoid** $B$ in a [[Symmetric monoidal category]] is at once a [[Monoid object|monoid]] and [[Comonoid object|comonoid]] in a compatible way, consisting of the data
$$
\begin{align*}
\eta &: 1 \to B & \nabla &: B \otimes B \to B \\
\epsilon &: B \to 1 & \Delta &: B \to B \otimes B
\end{align*}
$$
such that it is a [[Comonoid object|comonoid]] in [[Category of monoid objects|$\cat{Mon}_{\cat C}$]] or, what is the same, a [[monoid]] in $\cat{Mon}_{\op{\cat C}}$.
Unravelling definitions in terms of string diagrams, this gives the following compatibility conditions:

![[bimonoid-0-string.svg#invert|c|200]]

![[bimonoid-1-string.svg#invert|c|200]]

![[bimonoid-2-string.svg#invert|c|200]]

![[bimonoid-3-string.svg#invert|c|50]]

#
---
#state/develop | #lang/en | #SemBr

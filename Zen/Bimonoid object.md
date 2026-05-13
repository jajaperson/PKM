---
aliases: bimonoid
tags:
  - public
mathLink-blocks:
  compat: compatibility conditions
---
[[Monoidal internalization]]
# Bimonoid object

A **bimonoid** $B$ in a [[symmetric monoidal category]] $\cat C$ is at once a [[Monoid object|monoid]] and [[Comonoid object|comonoid]] in $\cat C$ in a compatible way,  #m/def/cat consisting of the data
$$
\begin{align*}
\eta &: 1 \to B & \nabla &: B \otimes B \to B \\
\epsilon &: B \to 1 & \Delta &: B \to B \otimes B
\end{align*}
$$
such that it is a [[Comonoid object|comonoid]] in [[Category of monoid objects|$\cat{Mon}_{\cat C}$]] or, what is the same, a [[Monoid object|monoid]] in [[Category of comonoid objects]].

> [!tip]- String diagrams
> Unravelling definitions in terms of string diagrams, this gives the following compatibility conditions:
> 
> ![[bimonoid-0-string.svg#invert|c|200]]
> 
> ![[bimonoid-1-string.svg#invert|c|200]]
> 
> ![[bimonoid-2-string.svg#invert|c|200]]
> 
> ![[bimonoid-3-string.svg#invert|c|50]]

^compat

The category of bimonoid objects is [[Category of bimonoid objects]].

## See also

- [[Hopf monoid object]]
- [[Bimonoid morphism]]
- [[R-bimonoid]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Topology MOC]]
# Proper map

Given topological spaces $X, Y$, a map $f : X\to Y$ is called **proper** iff the preïmage $f^{-1}(K)$ of every [[Compact space|compact]] $K \sube Y$ is compact. #m/def/topology 

## Properties

- If $X$ and $Y$ are [[Locally compact space|locally compact]]
  - If $X$ is [[Second countability axiom|second-countable]]: a continuous map $f:X \to Y$ is proper iff every sequence without limit points maps to a sequence without limit points.
  - A continuous map $f : X \to Y$ is compact iff the map
  $$
  \begin{align*}
  f^\star : X^\star &\to Y^\star \\
  \omega &\mapsto \omega \\
  x \in X &\mapsto f(x)
  \end{align*}
  $$
  between [[Alexandrov extension|Alexandroff extensions]] is continuous.
- If $X$ is compact: all continuous maps are proper, since all compact subsets of $Y$ are closed and all closed subsets of $X$ are compact.

#
---
#state/develop | #lang/en | #SemBr

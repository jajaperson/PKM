---
tags:
  - public
---
[[Group theory MOC]]
# Normal closure

Let $G$ be a group, and $S \sube G$ be a subset.
The **normal closure** $\mathrm{ncl}_{G}(S)$ of $S$ is the smallest normal subgroup of $G$ containing $S$. #m/def/group 
This is well-defined because [[The intersection of subgroups is a subgroup|the intersection of normal subgroups is a normal subgroup]], hence
$$
\begin{align*}
\mathrm{ncl}_{G}(S) = \bigcap \{ N \trianglelefteq G : S \sube N \}
\end{align*}
$$

## Properties

- $\mathrm{ncl}_{G}(S)$ has the conjugates of elements of $S$ as generators.

#
---
#state/tidy | #lang/en | #SemBr

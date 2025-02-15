---
tags:
  - public
---
[[Group theory MOC]]
# Coset

Given a subgroup $H \leq G$, the **left coset** of $H$ in an element $g \in G$ is defined as #m/def/group 
$$
\begin{align*}
gH = \{ gh : h \in H \} \sube G
\end{align*}
$$
likewise the **right coset** as
$$
\begin{align*}
Hg = \{ hg : h \in H \} \sube G
\end{align*}
$$

## Properties

1. $g \in H$ iff $gH = Hg = H$ ($\implies$ by [[Reärrangement lemma]], $\impliedby$ by $ge = g$)
2. As a consequence of the [[Reärrangement lemma]] $\abs{gH} = \abs{H}$.
3. [[Cosets are either identical or disjoint]].
4. Every $g \in G$ is contained in at least one coset of $H$, namely $gH$ (by $ge = g$)
5. From 2–4, $G$ may be partitioned into equally sized cosets. Hence [[Lagrange's Theorem|the order of a subgroup divides the order of a group]].

#
---
#state/develop | #lang/en | #SemBr 
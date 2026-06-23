---
date: 2026-06-19
tags:
  - public
aliases:
  - cocanonical self indexing
---
[[Displayed category theory MOC]]
# Canonical self-indexing

Let $\cat C$ be a [[category]].
The <dfn>canonical self-indexing</dfn> $\cat C_{/} \liesover \cat C$ is defined so that

- an object over $a \in \cat C_{0}$ is a pair $(x,f)$ where $x \in \cat C_{0}$ and $f : x \to a$;
- for $h : a \to b$ in $\cat C$, a morphism $h' : (x, f) \to (y, g)$ is a commuting square, i.e. a morphism $h' : x \to y$ in $\cat C$ such that $gh' = hf$.

The [[fibre category|fibre categories]] of $\cat C$ are equivalent to [[Slice category|slice categories]].
Dualizing, we can form the <dfn>cocanonical self-indexing</dfn> $\cat C^{\backslash} \liesover \cat C$, whose fibres are equivalent to [[coslice categories]].

#
---
#state/develop | #lang/en | #SemBr

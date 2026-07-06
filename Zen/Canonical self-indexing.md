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
The <dfn>canonical self-indexing</dfn> $\cat C_{/} \liesover \cat C$ is defined so that #m/def/cat/dis

- an object over $a \in \cat C_{0}$ is a pair $(x,f)$ where $x \in \cat C_{0}$ and $f : x \to a$;
- for $h : a \to b$ in $\cat C$, a morphism $h' : (x, f) \to (y, g)$ is a commuting square, i.e. a morphism $h' : x \to y$ in $\cat C$ such that $gh' = hf$.

The “display map” arrows in a diagram in $\cat C_{/} \liesover \cat C$ literally correspond to morphisms in $\cat C$.
The [[fibre category|fibre categories]] of $\cat C$ are equivalent to [[Slice category|slice categories]].
Dualizing, we can form the <dfn>cocanonical self-indexing</dfn> $\cat C^{\backslash} \liesover \cat C$, whose fibres are equivalent to [[coslice categories]].


## As a fibration

A fundamental property of the canonical self-indexing is that it is a [[Cartesian fibration]] iff $\cat C$ has all [[Fibre product and coproduct|pullbacks]].
This follows from the fact that the diagram in $\cat C_{/} \liesover \cat C$ says the same thing as the diagram in $\cat C$ on the right

![[cartesian-morphism-in-canonical.svg#invert|https://q.uiver.app/#q=WzAsMTIsWzIsMSwiKGEsIGYpIl0sWzIsMywieCJdLFs0LDMsInkiXSxbNCwxLCIoYixnKSJdLFswLDIsInoiXSxbMCwwLCIoYywgaCkiXSxbNiwyLCJ6Il0sWzYsMCwiYyJdLFs4LDMsIngiXSxbMTAsMywieSJdLFs4LDEsImEiXSxbMTAsMSwiYiJdLFswLDEsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbMywyLCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV0sWzEsMiwiXFx2YXJwaGkiLDJdLFswLDMsIlxcdmFycGhpJyJdLFs1LDQsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbNCwxLCJcXGxhbWJkYSIsMl0sWzUsMCwiXFxvdmVybGluZSBcXGxhbWJkYSIsMV0sWzUsMywiXFxyaG8iLDAseyJjdXJ2ZSI6LTJ9XSxbNyw2LCJoIiwyXSxbNiw4LCJcXGxhbWJkYSIsMl0sWzgsOSwiXFx2YXJwaGkiLDJdLFsxMCw4LCJmIiwxXSxbMTEsOSwiZyJdLFsxMCwxMSwiXFx2YXJwaGknIiwxXSxbNywxMCwiXFxvdmVybGluZVxcbGFtYmRhIiwxXSxbNywxMSwiXFxyaG8iLDAseyJjdXJ2ZSI6LTJ9XV0=]]

so $f$ and $\varphi'$ are precisely the pullbacks of $g$ and $\varphi$ respectively.


#
---
#state/develop | #lang/en | #SemBr

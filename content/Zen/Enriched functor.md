---
tags:
  - public
---
[[Enriched category]]
# Enriched functor

Let $\cat C, \cat D$ be [[Enriched category|$\cat M$-categories]].
An **$\cat M$-functor**[^1] $F : \cat C \to \cat D$ is the appropriate generalization of an ordinary [[functor]].
Thus it consists of

- A [[class function|(class) function]] $\Ob(F) : \Ob(\cat C) \to \Ob(\cat D) : a \mapsto Fa$;
- For every ordered pair $a,b \in \Ob(\cat C)$ a morphism $F_{a,b} : \cat C(a,b) \to \cat D(Fa,Fb)$

such that these data respect composition

![[enriched-functor-composition.svg#invert|https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXGNhdCBDKGIsYykgXFxvdGltZXMgXFxjYXQgQyhhLGIpIl0sWzIsMCwiXFxjYXQgQyhhLGMpIl0sWzAsMiwiXFxjYXQgRChGYixGYykgXFxvdGltZXMgXFxjYXQgRChGYSwgRmIpIl0sWzIsMiwiXFxjYXQgRChGYSxGYykiXSxbMCwxLCIoXFxjaXJjKSJdLFswLDIsIkZfe2IsY30gXFxvdGltZXMgRl97YSxifSIsMl0sWzIsMywiKFxcY2lyYykiLDJdLFsxLDMsIkZfe2EsY30iXV0=&macro_url=https%3A%2F%2Fraw.githubusercontent.com%2Fjajaperson%2FPKM%2Frefs%2Fheads%2Fmain%2FVault%2Fpreamble.sty]]

and unitality

![[enriched-functor-unitality.svg#invert|https://q.uiver.app/#q=WzAsMyxbMSwwLCJcXG1hdGhiYiAxIl0sWzAsMiwiXFxjYXQgQyhhLGEpIl0sWzIsMiwiXFxjYXQgRChGYSxGYSkiXSxbMCwyLCJcXGlkX3tGYX0iXSxbMCwxLCJcXGlkX2EiLDJdLFsxLDIsIkZfe2EsYX0iLDJdXQ==&macro_url=https%3A%2F%2Fraw.githubusercontent.com%2Fjajaperson%2FPKM%2Frefs%2Fheads%2Fmain%2FVault%2Fpreamble.sty]]

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Also called a functor **enriched over $\cat M$**.

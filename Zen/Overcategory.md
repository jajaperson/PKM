---
categoryName: overcategory
symbol: $\cat C \downarrow X$
object: morphism to $X$
morphism: commuting triangle
tags:
  - category
  - public
date: 2026-05-09
arguments:
  - $\cat C$ [[category]]
  - $X$ object
---
[[Category theory MOC]]
# Overcategory

Let $X$ be an object of $\cat C$.
The <dfn>overcategory</dfn>, denoted $\cat C \downarrow X$, is a [[category]] where
an object is a morphism $a \in \cat C$ such that $\cod a = X$
and a morphism $f : a \to b$ is a commuting triangle, #m/def/cat 
i.e. a morphism $f : \dom a \to \dom b$ such that $b f = a$.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Also denoted $\cat C / X$, though we favour $\cat C \downarrow X$ since it generalizes to [[Comma category|comma categories]].

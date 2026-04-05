---
alias: monoids-as-categories
tags:
  - public
---
[[Things as categories]]
# Monoids as categories

The definition of a [[monoid]] is wholly equivalent to that of a single-object [[category]].
Given a monoid $M = (M, \circ)$, one may construct a category $\mathbf{B}M$
consisting of a single object $\bullet$
such that $\mathbf{B}M(\bullet,\bullet)  = M$ and composition is given by $(\circ)$.
Conversely, $\cat C(\bullet,\bullet)$ forms a monoid under composition for any $\bullet \in \Ob \cat C$.
Thus a category is the [[oidification]] of a monoid, i.e. a _monoidoid_.

#
---
#state/tidy | #lang/en | #SemBr

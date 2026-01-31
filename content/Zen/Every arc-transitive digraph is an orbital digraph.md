---
tags:
  - public
---
[[Group action orbital]]
# Every arc-transitive digraph is an orbital digraph

A (simple) [[Graph|digraph]] is [[Graph automorphism|arc-transitive]] iff it is the [[Group action orbital|orbital digraph]] for some [[permutation group]]. #m/thm/graph

> [!check]- Proof
> Let $\Gamma$ be an [[Graph automorphism|arc-transitive]] [[Graph|digraph]] and $G = \Aut(\Gamma)$.
> Then for any $(\alpha,\beta) \in \opn A(\Gamma)$ we have $G(\alpha,\beta) = \opn A(\Gamma)$.
> Therefore $\Gamma$ is an orbital digraph.
> 
> Now suppose $G$ acts on $\Omega$ and let $\Delta = G(\alpha,\beta)$ be an [[Group action orbital|orbital]].
> Then $(\alpha',\beta') \in \Delta$ iff $(\alpha',\beta') = g(\alpha,\beta)$ for some $g \in G \leq \Aut(\Gamma)$,
> thus $\Delta$ is arc-transitive. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

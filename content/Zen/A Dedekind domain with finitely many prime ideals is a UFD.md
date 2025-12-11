---
tags:
  - public
---
[[Dedekind domain]]
# A Dedekind domain with finitely many prime ideals is a UFD

Let $R$ be a [[Dedekind domain]] with finitely many prime ideals.
Then every prime ideal is [[Principal ideal|principal]], whence $R$ is a [[Principal ideal domain|PID]] and in particular a [[Unique factorization domain|UFD]]. #m/thm/ring 

> [!check]- Proof
> Let $\{ \mathfrak{p}_{i} \}_{i=1}^n$ enumerate all prime ideals in $R$.
> By a similar construction to that in the proof of [[Ideals of a Dedekind domain need at most two generators]],
> we can choose for each $i$ a $\beta_{i} \in \mathfrak{p}_{i}$ which is not in $\mathfrak{p}_{i}^2$ or $\mathfrak{p}_{j}$ for $j \neq i$ via the [[Chinese remainder theorem for rings]].
> It follows that $\langle \beta_{i} \rangle = \mathfrak{p}_{i}$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

---
alias: Burnside's lemma
tags:
  - public
---
[[Group action orbit]]
# Orbit counting lemma

Given an [[Group action|action]] of the group $G$ on the set $\Omega$,
let $\opn{Fix}_{\Omega}(g)$ denote the set of all $\omega \in \Omega$ left invariant by $g \in G$.
Then the number of [[Group action orbit|orbits]] of $G$ in $\Omega$ is #m/thm/group
$$
\begin{align*}
\abs{\Omega / G} = \frac{1}{\abs G} \sum_{g \in G} \abs{\opn{Fix}_{\Omega}(g)}
= \frac{1}{\abs G} \sum_{i=1}^r \abs{{g_{i}}^G} \abs{\opn{Fix}_{\Omega}(g)}
\end{align*}
$$
where ${g_{i}}^G$ enumerate [[Conjugation by an element|conjugacy classes]].

> [!missing]- Proof
> #missing/proof


#
---
#state/develop | #lang/en | #SemBr

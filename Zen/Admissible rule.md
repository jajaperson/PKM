---
tags:
  - public
aliases:
  - admissible
---
[[Logic MOC]]
# Admissible rule

Given a [[formal system]] $(\mathcal{L}, \mathcal{I})$, an inference rule $R$ is said to be **admissible** iff $\mathcal{I}' = \mathcal{I} \cup \{ R \}$ gives the same [[Formal system#Syntactic formal theory]] as $\mathcal{I}$, #m/def/logic 
i.e.
$$
\begin{align*}
\opn{Th}(\mathcal{L},\mathcal{I}) = \opn{Th}(\mathcal{L}, \mathcal{I}').
\end{align*}
$$
Informally, the inclusion of $R$ does not affect the strength of the formal system. 
Another (at least constructively) equivalent definition is that there exists an algorithm for turning derivations in $\opn{Th}(\mathcal{L},\mathcal{I}')$ into derivations in $\opn{Th}(\mathcal{L}, \mathcal{I}).$

## See also

- [[Derivable rule]]


#
---
#state/tidy | #lang/en | #SemBr

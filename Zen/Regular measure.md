---
tags:
  - public
---
[[Measure theory MOC]]
# Regular measure

Let $X$ be a [[topological space]] $(X, \mathcal{T})$ and a [[measure space]] $(X, \Sigma, \mu)$.
Let $\mathcal{K}$ denote the set of all [[Compact space|compact subsets]] of $X$.
A measurable set $A \in \Sigma$ is said to be **inner regular** iff
$$
\begin{align*}
\mu(A) = \sup \{ \mu(K) : K \sube A, K \in \Sigma \cap \mathcal{K} \}
\end{align*}
$$
and **outer regular** iff
$$
\begin{align*}
\mu(A) = \inf \{ \mu(G) : A \sube G, G \in \Sigma \cap \mathcal{T} \}
\end{align*}
$$
A measure is called **inner regular** iff every measurable set $A \in \Sigma$ is inner regular,
and likewise a measure is called **outer regular** iff every measurable set is outer regular.
A measure which is both inner regular and outer regular is called **regular**. #m/def/measure 
Thus a measure is regular iff
$$
\begin{align*}
\mu(A) = \sup\{\mu(K) : K \sube A, K \in \Sigma \cap \mathcal{K}\} = \inf\{ \mu(G) : A \sube G, G \in \Sigma \cap \mathcal{T} \}
\end{align*}
$$
for every $A \in \Sigma$.

#
---
#state/tidy | #lang/en | #SemBr

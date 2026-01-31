---
tags:
  - public
---
[[Topological space]]
# The intersection of topologies on a fixed set is again a topology

Let $(\mathcal{T}_{\alpha})_{\alpha\in I}$ be a family of topologies on a set $X$.
Then the union $\mathcal{T} = \bigcap_{\alpha \in I} \mathcal{T}_{\alpha}$ is again a topology on $X$. #m/thm/topology 

> [!check]- Proof
> Since $\{ \0, X \} \sube \mathcal{T}_{\alpha}$ for all $\alpha \in I$, it follows that $\{ \0, X \} \sube \mathcal{T}$.
> Let $\{ U_{\beta} \}_{\beta \in J} \sube \mathcal{ T}$ be a family of open subsets under $\mathcal{T}$.
> Then the union $\{ U_{\beta} \}_{\beta \in J} \sube \mathcal{T}_{\alpha}$ and hence $\bigcup_{\beta \in J} U_{\beta} \in \mathcal{T_{\alpha}}$ for all $\alpha \in I$,
> wherefore $\bigcup_{\beta \in J} U_{\beta} \in \mathcal{T}$.
> Similarly let $\{ V_{i} \}_{i =1}^n \sube \mathcal{ T}$ be a finite family of open subsets under $\mathcal{T}$.
> Then the intersection $\{ V_{i} \}_{i =1}^n \sube \mathcal{T}_{\alpha}$ and hence $\bigcup _{i =1}^n U_{n} \in \mathcal{T_{\alpha}}$ for all $\alpha \in I$,
> wherefore $\bigcup _{i =1}^n U_{n} \in \mathcal{T}$.
> Therefore $\mathcal{T}$ is a topology on $X$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

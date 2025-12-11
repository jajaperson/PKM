---
tags:
  - public
---
[[Subgroup]]
# The intersection of subgroups is a subgroup

The intersection of any number of subgroups, whether it be countable or uncountable, is itself a subgroup. #m/thm/group
For any set $\{H_i\}_{i\in I}$ of subgroups of a group $G$,
the intersection
$$
\begin{align*}
K = \bigcap_{i \in I} H_{i}
\end{align*}
$$
is itself a subgroup of $G$. 

> [!check]- Proof
> Clearly $e \in H_{i}$ for all $i \in I$ and therefore $e \in K$.
> Let $a,b \in K$. Then $a,b \in H_{i}$ for all $i \in I$.
> This implies that $ab^{-1} \in H_{i}$ for all $i \in I$
> and therefore $ab^{-1} \in K$.
> Therefore $K$ is a subgroup by [[Subgroup#One step subgroup test]]. <span class="QED"/>

## Properties

1. If each subgroup is a [[normal subgroup]], so too is their intersection. ^P1

> [!check]- Proof of 1
> Let $N_{i} \trianglelefteq G$ for $i \in I$, and let $K = \bigcap_{i\in I} N_{i}$.
> From above, $K$ is a subgroup.
> Now let $g \in G$ and $k \in K$.
> Since each subgroup is normal, $gkg^{-1} \in N_{i}$ for all $i \in I$,
> hence $gkg^{-1} \in K$.
> Therefore $K$ is a normal subgroup.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 

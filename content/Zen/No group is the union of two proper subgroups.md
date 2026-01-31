---
tags:
  - public
---
[[Subgroup]]
# No group is the union of two proper subgroups

For any group $G$ it is impossible to construct the entire group as the union two proper subgroups $F,H \subne G$. #m/thm/group 

> [!check]- Proof
> Let $F, H \subne G$ be strict subgroups of $G$
> such that $F \cup H = G$.
> Clearly these subgroups cannot be identical,
> so without loss of generality assume that there exists some $x \in F$ such that $x \notin H$.
> For any $y \in H$ it follows that $xy \in F \cup H = G$.
> If $xy \in H$ then $xyy^{-1} = x \in H$ which is a contradiction.
> If $xy \in F$ then $x^{-1} xy = y \in F$.
> Therefore for any $y \in H$ also $y \in F$,
> hence $H \subne G$ and $F \cup H = H = G$,
> contradicting the requirement that $H \subne G$.
> Thus no group is the union of two proper subgroups. <span class="QED"/>

For more than two proper subgroups it is possible.
For example, consider the group $G = \{ R_{0}, R_{180}, H, V \}$, itself a subgroup of $D_{4}$.
In this case $G = \{ R_{0}, R_{180} \} \cup \{ R_{0}, H \} \cup \{ R_{0}, V \}$, which are all proper subgroups.

#
---
#state/tidy | #lang/en | #SemBr 

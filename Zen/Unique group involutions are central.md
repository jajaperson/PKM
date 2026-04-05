---
tags:
  - public
---
[[Centre of a group]]
# Unique group involutions are central

If a group has a single unique involution (element $a$ of order $\abs a = 2$)
then that involution is in the group’s centre,
i.e. it commutes with every element $x$ so that $ax = xa$. #m/thm/group

> [!check]- Proof
> Let $a = a^{-1}$ be the unique involution in group $G$.
> Let some $x \in G$ and $y = xax^{-1}$.
> Then $y^2 = xax^{-1}xax^{-1} = e$,
> thus $y \in \{ e,a \}$.
> The first case immediately implies $a=e$, a contradiction,
> therefore $y = a$.
> Hence $a = xax^{-1}$ and moreover $ax = xa$ for arbitrary $x \in G$,
> wherefore $a \in Z(G)$. <span class="QED"/>

From the above proof it is clear this statement extends to any order.

> [!question]
> According to [this StackExchange answer](https://math.stackexchange.com/a/821589) this is an example of a broader phenomenon where [[All group elements with a unique property are central]].
> This is currently beyond my scope.

#
---
#state/tidy  | #lang/en | #SemBr 

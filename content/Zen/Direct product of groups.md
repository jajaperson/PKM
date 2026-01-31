---
tags:
  - public
aliases:
  - direct sum of abelian groups
---
[[Group theory MOC]]
# Direct product of groups

The (external) **direct product** is the [[Products and coproducts|categorical product]] in [[Category of groups]].
Given two groups $A, B$, their product $A \times B$ is their [[Cartesian product]] with the group operation $(\cdot)$ such that #m/def/group 
$$
\begin{align*}
(a_{1}, b_{1}) \cdot (a_{2}, b_{2}) = (a_{1}a_{2}, b_{1}b_{2})
\end{align*}
$$
for any $a_{1},a_{2} \in A$ and $b_{1},b_{2} \in V$.
It follows that $e_{A \times B} = (e_{A}, e_{B})$
and $(a, b)^{-1} = (a^{-1}, b^{-1})$.
This generalized to arbitrarily large products
$$
\begin{align*}
G = \prod_{i \in I}G_{i}U
\end{align*}
$$
The projections $\pi_{i} : G \twoheadrightarrow  G_{i}$ are [[Split epimorphism|split epic]].

## Internal direct product

Noting [[#^P3]], a related _internal_ construction occurs when there exist [[normal subgroup|normal subgroups]] $N, M \trianglelefteq G$ such that $N \cap M=\{ e \}$ and $NM = G$. #m/def/group
This motivates generalisation to the [[Semidirect product]] (both external and internal),
where only one group need be normal.

## Properties

1. If $\mathbb{1}$ is the trivial group, $G \times \mathbb{1} \cong G \cong \mathbb{1} \times G$ P1
2. Clearly $\abs{A \times B} = \abs{A}\abs{B}$. ^P2
3. $A \cong \{ (a, e_{B}) : a \in A \} \trianglelefteq A \times B$ ^P3
4. $A \cong (A \times B) / (\{ e_{A} \} \times B)$. 
  Usually this is stated as $A = (A \times B) / B$.
  However it is not generally true that given $H \trianglelefteq G$ we have $G \cong H \times (G / H)$.


#
---
#state/tidy | #lang/en | #SemBr

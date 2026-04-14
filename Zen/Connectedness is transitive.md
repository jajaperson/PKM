---
tags:
  - public
---
[[Connectedness]]
# Connectedness is transitive

Let $X$ be a topological space and $x,y \in X$.
If $x$ is ([[Path connectedness|path-]])connected to $y$ and $y$ is (path-)connected to $z$,
then $x$ is (path-)connected to $z$. #m/thm/topology 
Hence both forms of connectedness form an equivalence relation.

> [!check]- For plain connectedness
> Let $x \sim' y$ and $y \sim' z$,
> i.e. there exists connected subspaces $U_{1} \ni x, y$ and $U_{2} \ni y, z$.
> We claim that $V = U_{1} \cup U_{2}$ is a connected subspace of $X$.
> Let $\iota_{k} : U_{k} \to V$ denote that natural inclusions of $U_{k}$ in $V$,
> and $f : V \to \{ 0,1 \}$ be a continuous function.
> Since $f$ and $\iota_{k}$ are continuous, so too are $f\iota_{k} : U_{k} \to \{ 0,1 \}$.
> Thus $fw = fy$ for all $w \in U_{1} \cup U_{2} = V$.
> Hence $f$ is constant for $V$.
> Therefore $x \sim' z$.
> <span class="QED"/>

> [!check]- For path connectedness
> Let $f$ be a [[continuous path]] from $x$ to $y$ and $g$ be a continuous path from $y$ to $z$.
> Then the product $f \cdot g$ is a continuous path from $x$ to $z$.
> Hence $x \sim y \land y \sim z \implies x \sim z$.
> <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

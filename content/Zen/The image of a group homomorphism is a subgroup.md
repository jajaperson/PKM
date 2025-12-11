---
tags:
  - public
---
[[Group homomorphism]]
# The image of a group homomorphism is a subgroup

Let $G$ and $H$ be groups, and $f : G \to H$ be a [[Group homomorphism]].
Then the image
$$
\begin{align*}
f(G) = \{ f(g) : g \in G \}
\end{align*}
$$
is a subgroup of $H$. #m/thm/group 

> [!check]- Proof
> Since $f(e) = e$, clearly $e \in f(G)$.
> Let $a,b \in f(G)$.
> Then there exist (not necessarily unique) $x,y \in G$ such that $f(x) = a$ and $f(y) = G$.
> It follows that $ab^{-1} = f(x)f(y)^{-1} = f(xy^{-1}) \in f(G)$.
> Therefore $f(G)$ is a subgroup by [[Subgroup#One step subgroup test]].
> <span class="QED"/>

## Corollary

It follows that the image of a subgroup is also a subgroup, since [[a group homomorphism induces a subgroup homomorphism]].

#
---
#state/tidy | #lang/en | #SemBr

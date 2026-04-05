---
tags:
  - public
---
[[Group theory MOC]]
# Group homomorphism

A **group homomorphism** is a [[Morphism|morphism]] in [[Category of groups]],
that is to say it is a structure-preserving map between [[group|groups]].
#m/def/group Let $(G, \circ)$ and $(H, •)$ be groups, and let $f : G \to H$.
Then $f$ is a homomorphism iff
for any $a,b \in G$
$$
\begin{align*}
f(a \circ b) = f(a) • f(b)
\end{align*}
$$
It immediately follows that $f(e) = e$ and $f(a^{-1}) = f(a)^{-1}$.

> [!check]- Proof
> For the identity property, it is clear that $f(a \circ e) = f(a) = f(a) • f(e)$ for any $a \in G$, hence $f(e) = e$.
> For the latter property, notice that for any $a \in G$ it follows $f(a \circ a^{-1}) = f(a) • f(a^{-1}) = f(e) = e$,
> so $f(a^{-1}) = f(a)^{-1}$. <span class="QED"/>

A bijective homomorphism is the a group [[Morphism|isomorphism]].
Isomorphic groups have the same group table, and are essentially the same up to relabelling.

## Properties and related

- [[Group monomorphism]], [[Group epimorphism]]
- The [[Kernel of a group homomorphism]] $\ker(f)$ is the set of all domain elements that map to the identity, and it forms a normal subgroup (proof in Zettel)
- The image $f(G)$ is the range of $f$, and [[The image of a group homomorphism is a subgroup]].
- [[A group homomorphism induces a subgroup homomorphism]] when its domain is restricted.

#
---
#state/tidy | #lang/en | #SemBr
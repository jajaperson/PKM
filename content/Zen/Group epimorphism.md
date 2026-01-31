---
tags:
  - public
---
[[Group homomorphism]]
# Group epimorphism

Let $\varphi : G \to H$ be a homomorphism. 
The following two statements are equivalent[^1970]: #m/thm/group

- $\varphi$ is [[Surjectivity, injectivity, and bijectivity|surjective]]
- $\varphi$ is [[Morphism|epic]] in [[Category of groups]] 

> [!check]- Proof
> Since all surjective functions are epic, it follows that surjective homomorphisms are too.
> The converse requires more care.
> Let $\phi:G\twoheadrightarrow H$ be an [[Morphism|epimorphism]] and $A = \phi(G)$.
> It is sufficient to show $A = H$.
> Consider the set $G / A$ of [[Coset|left-cosets]] of $A$ in $G$,
> and let $u$ be a unique symbol,
> $S = G / A \amalg \{ u \}$,
> and $S!$ denote the [[Symmetric group|permutation group]] of the set $S$.
> We define a homomorphism $\psi_{1} : H \to S!$ so that for any $h, h_{1} \in H$
> $$
> \begin{align*}
> \psi_{1}(h) : Ah_{1} &\mapsto Ah_{1}h \\
> u &\mapsto u
> \end{align*}
> $$
> Let $\sigma \in S!$ be the permutation which swaps $A$ and $u$ and leaves everything else invariant,
> and let $\hat{\sigma}$ be its induced [[Conjugation by an element|inner automorphism]].
> Then $\psi_{2} = \hat{\sigma}\psi_{1}$ is also a homomorphism.
> Now, for any $a \in A$ it follows $\psi_{1}(a)$ leaves both $A$ and $u$ fixed (the latter is by construction),
> and hence $\sigma$ commutes with $\psi_{1}$ and thus $\psi_{2}(a)=\hat{\sigma}\psi_{1}(a) = \psi_{1}(a)$.
> Hence $\psi_{1}\phi = \psi_{2} \phi$,
> and since $\phi$ is [[Morphism|epic]] $\psi_{1}=\psi_{2}$.
> But thence follows that $\sigma$ commutes with $\psi_{1}(h)$ for all $h \in H$,
> wherefore $\psi_{1}(h)$ must leave $A$ fixed,
> and thus $\psi_{1}(h) = hA = A$ and thus $h \in A$ for all $h \in H$.
> <span class="QED"/>

[^1970]: 1970\. [[Sources/@linderholmGroupEpimorphismSurjective1970|A Group Epimorphism is Surjective]]

## Corollaries

- The above argument holds for [[Category of finite groups]], since $S!$ is finite if $G$ and $H$ are finite.

#
---
#state/tidy | #lang/en | #SemBr

---
aliases:
  - inner automorphism
tags:
  - public
---
[[Conjugation by an element]]
# Inner group automorphism

The **inner group automorphism** $\Inn(G) \trianglelefteq \Aut(G)$ is a [[normal subgroup]] given by [[conjugation by an element]], #m/def/group i.e. if $\hat{g} \in \Inn(G)$ then $\hat{g}(h) = ghg^{-1}$ for some $g \in G$.
It is hence the image of [[Conjugation by an element#Conjugation as an action|conjugation as a group action]] $\widehat{\cdot}: G \to \Aut(G)$.

> [!check]- Proof of normal subgroup
> That $\Inn(G)$ is a subgroup follows from the fact that it is the image of the homomorphism $\widehat{\cdot} : G \to \Aut(G)$.
> Let $g \in G$ and $\varphi \in \Aut(G)$.
> Then for any $h \in G$
> $$
> \begin{align*}
> (\varphi \widehat{g}\varphi^{-1})(h) = (\varphi \widehat{g})(\varphi^{-1}(h)) = \varphi(g\varphi^{-1}(h)g^{-1}) = \varphi(g) h \varphi(g)^{-1} = \widehat{\varphi(g)}(h)
> \end{align*}
> $$
> thus $\varphi \widehat{g}\varphi^{-1} = \widehat{\varphi(g)} \in \Inn(G)$.
> <span class="QED"/>

By the [[Group isomorphism theorems#First isomorphism theorem]], this is isomorphic to $G / Z(G)$, where the divisor is the [[Centre of a group|centre]].

#
---
#state/tidy | #lang/en | #SemBr

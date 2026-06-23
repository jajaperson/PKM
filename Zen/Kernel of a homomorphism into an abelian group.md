---
tags:
  - public
---
[[Abelian group]]
# Kernel of a homomorphism into an abelian group

A group $G$ is abelian iff for any group $H$ and any homomorphism $\varphi \in \Grp(H,G)$ the kernel contains the [[commutator subgroup]], i.e.
$$
\begin{align*}
[H,H] \trianglelefteq \ker \varphi 
\end{align*}
$$

> [!check]- Proof
> Let $H$ and $G$ be groups with $H$ abelian and let $\varphi \in \Grp(G,H)$.
> Then $\varphi([a,b]) = \varphi(a)\varphi(b)\varphi(a)^{-1}\varphi(b)^{-1} = e$.
> But every element of the [[Commutator subgroup]] $[G,G]$ is a product of such commutators,
> so $\varphi [G,G] = \{e\}$.
> 
> Now let $H$ a group such that $[G,G] \sube \ker \varphi$ for every group $G$ and every homomorphism $\varphi \in \Grp(G,H)$.
> Let $G = H$ and $\varphi = \id_G$.
> It follows that $[H,H] = \{e\}$.
> Therefore $H$ is abelian.
> <span class="QED"/>

## See also

- [[Abelianization]]

#
---
#state/tidy | #lang/en | #SemBr

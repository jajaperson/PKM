---
tags:
  - public
---
[[Group representation]]
# Representations of finite groups

In general, a representation of a finite group $G$ with a finite carrier space is a homomorphism $\Gamma : G \to \mathrm{SL}(G)$,
i.e. representation matrices of finite group elements have determinant 1. #m/thm/rep 

> [!check]- Proof
> Let $G$ be a finite group and $\Gamma$ be a representation thereof with finite carrier space.
> Assume there exists $g \in G$ such that $\abs{\det \Gamma (g)} = a \neq 1$.
> Then $\abs{\det \Gamma(g^n)} = \abs{\det(\Gamma(g)^n)} = a^n \neq a$ for all $n \neq 1$, and therefore $g^n \neq g$ for all $n \neq 1$.
> Thus the cyclic subgroup $\langle g \rangle$ is infinite, contradicting our requirement. 
> Therefore $\abs{\det \Gamma(g)} = 1$ for all $g \in G$
> <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

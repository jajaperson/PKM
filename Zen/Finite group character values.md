---
tags:
  - public
---
[[Group character]]
# Finite group character values

Let $G$ be a [[finite group]], $\Gamma : G \to \mathbb{C}^d$ be a [[group representation]], affording [[Group character|character]] $\psi : G \to \mathbb{C}$.
Then for all $g \in G$, $\psi(g) \in \mathbb{Z}[\zeta_{n}]$ where $\mathbb{Z}[\zeta_{n}]$ are the [[cyclotomic integers]] 
and $n = \abs G$. #m/thm/rep
Moreover,

1. $\abs{\psi(g)} \leq \psi(1)$;
2. $\abs{\psi(g)} = \chi(1)$ iff $\Gamma(g) \in \opn Z(\mathbb{C}^d)$ is a homothety;
3. $\chi(g) = \chi(1)$ iff $\Gamma(g) = 1_{d}$ is the identity.

> [!check]- Proof
> The eigenvectors of $\psi(g)$ must have eigenvalues of finite order dividing $n$,
> and thus are each powers of $\zeta_{n}$.
> It follows that $\chi(g)$, which is equal to the sum of these eigenvalues, is in $\mathbb{Z}[\zeta_{n}]$. <span class="QED"/>

It follows that $\ker \chi = \{ g \in G: \chi(g) = \chi(1) \}$ is precisely the kernel of any representation affording $\chi$.
#
---
#state/tidy | #lang/en | #SemBr

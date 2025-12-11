---
tags:
  - public
---
[[Ideal of the complex group ring]]
# Equivalence of irreps on left ideals criterion

Let $L^{\mu\alpha}$ and $L^{\nu\beta}$ be [[Ideal of the complex group ring|minimal left ideals]] transforming under the [[Regular group representation]] in [[irrep|irreps]] $\Gamma^{\mu}$ and $\Gamma^{\nu}$ respectively,
and $e_{\mu\alpha}$ and $e_{\nu\beta}$ be the generating [[Idempotent of the complex group ring|primitive idempotents]].
Then $\Gamma^\mu \cong \Gamma^\nu$ iff $e_{\mu\alpha} * q * e_{\nu\beta} \neq 0$ for some $q \in \mathbb{C}[G]$. #m/thm/rep

> [!check]- Proof
> If $\mu = \nu$ then there exists an intertwiner $S : L^{\mu\alpha} \to L^{\mu\beta}$ with $S \Gamma^{\mu\alpha} = \Gamma^{\nu\beta}S$ and thus by lineärity
> $$
> \begin{align*}
> S \Rho(e_{\mu\alpha}) \Lambda(r) p &= \Rho(e_{\nu\alpha})\Lambda(r)S p \\
> Sr*p * e_{\mu\alpha} &=r*Sp *e_{\mu\alpha}
> \end{align*}
> $$
> for all $p,r \in \mathbb{C}[G]$.
> Then $q = Se_{\mu\alpha} \in L^{\nu\beta}$ has the required property, since
> $$
> \begin{align*}
> e_{\mu\alpha} * Se_{\mu\alpha} * e_{\nu\beta} = Se_{\mu\alpha} * e_{\mu\alpha} * e_{\mu\alpha} =  Se_{\mu\alpha}
> \end{align*}
> $$
> 
> For the converse, let $s = e_{\mu\alpha}*q*e_{\nu\beta} \neq 0$ for some $q \in \mathbb{C}[G]$.
> Then
> $$
> \begin{align*}
> \Rho(s) \Lambda(r) = \Lambda(r) \Rho(s)
> \end{align*}
> $$
> for all $r \in \mathbb{C}[G]$  and in particular
> $$
> \begin{align*}
> \Rho(s) \Gamma^{\mu\alpha}(g) &= \Gamma^{\nu\beta}(g) \Rho(s) \\
> \Rho(s) \Rho(e_{\mu\alpha}) \Lambda(g) &= \Rho(e_{\nu\alpha})\Lambda(g) \Rho(s) \\
> \Rho(e_{\mu\alpha} e_{\mu\alpha}qe_{\nu\beta}) \Lambda(g) &= \Lambda(g) \Rho(e_{\mu\alpha}qe_{\nu\beta}e_{\nu\beta}) \\
> \Rho(s) \Lambda(g) &=  \Lambda(g) \Rho(s)
> \end{align*}
> $$
> for all $g \in G$, so by [[Schur's lemma]] the two irreps are equivalent.
> <span class="QED"/>

Using lineärity arguments, it is sufficient to show $e_{\mu\alpha} * \delta_{g} * e_{\nu\beta} = 0$ for all $g \in G$ to prove the idempotents generate non-equivalent irreps.

#
---
#state/tidy | #lang/en | #SemBr

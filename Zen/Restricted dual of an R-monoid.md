---
date: 2026-07-20
mathLink: Restricted dual of a $\mathcal{K}$-monoid
tags:
  - public
---
[[Hopf theory MOC]]
# Restricted dual of a $\mathcal{K}$-monoid

Let $(\mathcal{A}, \mu, \eta)$ be a [[R-monoid]].
Since the canonical inclusion
$$
\begin{align*}
\iota: \mathcal{A}^* \otimes \mathcal{A}^* &\hookrightarrow (\mathcal{A} \otimes \mathcal{A})^* \\
f \otimes g &\mapsto x \otimes y \mapsto (fx)(gy)
\end{align*}
$$
may not be [[Linear epimorphism|epic]],
we cannot in general treat $\mu^* : \mathcal{A}^* \to (\mathcal{A} \otimes \mathcal{A})^*$ as a [[Comonoid|comultiplication]] on $\mathcal{A}^*$.
To remedy this situation, we can construct the <dfn>restricted dual</dfn> as the [[Image and preïmage|preïmage]] #m/def/ralg/hopf 
$$
\begin{align*}
\mathcal{A}^o = (\mu^*)^{-1} \iota (\mathcal{A}^* \otimes \mathcal{A}^*)
\end{align*}
$$
which is canonically a [[R-comonoid]] with comultiplication and coünit
$$
\begin{align*}
\mu^o &:= \mu^* \restriction \mathcal{A}^o,
& \eta^o := \eta^* \restriction \mathcal{A}^o
\end{align*}
$$
respectively.

> [!missing]- Proof of $\mathcal{K}$-comonoid
> #missing/proof 

When $\mathcal{A}$ is a finite-dimensional $\mathbb{K}$-monoid, $\iota$ is an isomorphism and we call $\mathcal{A}^o = \mathcal{A}^*$ the <dfn>dual</dfn>.

## Representative forms

Over a field $\mathbb{K}$, the restricted dual is exactly the $\mathbb{K}$-vector space of [[Representative form|representative forms]]:
The subspace of $\mathcal{A}^*$ spanned by the matrix coëfficients of finite-dimensional [[Module over a K-monoid|$\mathcal{A}$-modules]]. #m/thm/ralg/hopf 

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr

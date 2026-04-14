---
tags:
  - public
---
[[Category of coverings]]
# Equivalence of coverings criterion

Let $p : (\tilde{X}, \tilde{x}_0) \twoheadrightarrow (X, x_{0})$ and $q : (\tilde{X}', \tilde{x}_{0}') \twoheadrightarrow (X,x_{0})$ be connected and locally path-connected [[covering|coverings]].
Then $p$ and $q$ are equivalent iff $\im \pi_{1}p = \im \pi_{1}q$, #m/thm/homotopy 
i.e. iff they have the same [[Characteristic subgroup of a covering|characteristic subgroup]].

> [!check]- Proof
> By discussion in [[Category of coverings#Category of coverings with basepoint]],
> if $\im \pi_{1}p = \im\pi_{1}q$ there exists a unique $f \in \Cov_{(X,x_{0})}(p,q)$ and $g \in \Cov_{(X,x_{0})}(q,p)$.
> Moreover, the identities $\id_{p} = \id_{(\tilde{X},\tilde{x}_{0})}$ and $\id_{q} = \id_{(\tilde{X}',\tilde{x}_{0}')}$ are the only morphisms in $\Cov_{(X,x_{0})}(p,p)$ and $\Cov_{(X,x_{0})}(q,q)$ respectively.
> Therefore $fg = \id_{p}$ and $gf = \id_{q}$,
> hence $p$ and $q$ are equivalent.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

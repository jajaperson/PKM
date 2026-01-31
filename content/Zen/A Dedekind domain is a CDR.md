---
tags:
  - public
---
[[Dedekind domain]]
# A Dedekind domain is a CDR

A [[Dedekind domain]] $R$ is also a [[Containment-division ring|CDR]], #m/thm/ring  i.e. given ideals $\mathfrak{a},\mathfrak{b} \trianglelefteq R$ we have[^2022]
$$
\begin{align*}
\mathfrak{a} \mid \mathfrak{b} \iff \mathfrak{b} \sube \mathfrak{a}
\end{align*}
$$

> [!check]- Proof
> The forward direction already holds in general (vide [[Product ideal#^D1]]).\
> Since [[Fractional ideals of a Dedekind domain form an abelian group]],
> if $\mathfrak{b} \sube \mathfrak{a}$ then $\mathfrak{c} := \mathfrak{b}\mathfrak{a}^{-1} \sube \mathfrak{a}\mathfrak{a}^{-1} = R$ so $\mathfrak{c} \trianglelefteq R$ and $\mathfrak{a}\mathfrak{c}=\mathfrak{b}$. <span class="QED"/>

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶1.39, p. 20

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Category theory MOC]]
# Russell's paradox for categories

One formulation of [[Russell's paradox]] for categories is about naïve category theory, i.e. category theory without a choice of foundations.
It states that there cannot exist a **Russellian** [[category of categories]] $\cat D$ such that every non-[[Pseudoautistic category]] $\cat A$ is isomorphic to a category $\tilde{\cat A}\in \cat D$.[^1999]

> [!check]- Proof
> Suppose towards contradiction that $\cat C$ is a universal category of categories,
> and $\cat D \sube \cat C$ be the [[Subcategory|full subcategory]] consisting of all categories which are not [[Pseudoautistic category|pseudoautistic]].
> Then $\cat D$ is a category of categories containing (up to isomorphism) [[Interval category]] and [[Ordinal category|$\cat 3$]].
> 
> Suppose, again towards contradiction, that $\cat D$ is [[Autistic category|autistic]].
> Then there exists some category $\tilde{\cat D} \in \cat D$ such that $\tilde{\cat D} \cong \cat D$,
> so $\tilde{\cat D}$ is pseudoautistic and thus cannot be in $\cat D$,
> a contradiction.
> Thus $\cat D$ is not autistic.
> 
> Now by [[Simpson's lemma]], $\cat D$ is not pseudoautistic,
> and by universality there exists $\tilde{\cat D} \in \cat C$ such that $\cat D \cong \tilde{\cat D}$,
> hence $\tilde{\cat D}$ is not pseudoatustic and thus $\tilde{\cat D} \in \cat D$, so $\cat D$ is autistic, a contradiction. <span class="QED"/>

  [^1999]: 1999\. [[Sources/@simpsonFOMRussellParadox1999|FOM: Russell paradox for naive category theory]]

#
---
#state/tidy | #lang/en | #SemBr

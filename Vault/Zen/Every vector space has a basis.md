---
tags:
  - public
---
[[Vector basis]]
# Every vector space has a basis

Let $V$ be a vector space, $I$ be a [[Linear (in)dependence|linearly independent]] set in $V$ and $S$ be a [[Span|spanning set]] in $V$ containing $I$.
Then there exists a basis $\mathcal{B}$ for $V$ for which $I \sube \mathcal{B} \sube S$.[^2008]
#m/thm/linalg 
Hence any linearly independent set belongs to some basis,
and every spanning set contains a basis.

[^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]]

> [!check]- Proof
> Consider the set $\mathcal{A}$ of all linearly independent subsets of $S$ containing $I$,
> which is inhabited since $I \sube S$.
> Clearly $\mathcal{A}$ forms a [[complete lattice]].
> If $\mathcal{C} = \{ I_{k} \}_{k\in K}$ is a [[Totally ordered set|chain]],
> then the union $U = \bigcup_{k \in K}I_{k}$ is linearly independent and satisfies $I \sube U \sube S$.
> Hence the hypothesis of [[Zorn's lemma]] is satisfied so assuming choice $\mathcal{A}$ has a maximal element $\mathcal{B}$ which is linearly independent.
> <span class="QED"/>

This proof relies on [[Zorn's lemma]] and hence the axiom of choice.

#
---
#state/tidy | #lang/en | #SemBr



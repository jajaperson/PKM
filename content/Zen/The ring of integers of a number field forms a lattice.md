---
tags:
  - public
---
[[Algebraic integer|Ring of integers]]
# The ring of integers of a number field forms a lattice

Let $K$ be a [[number field]] of degree $n$ and $\mathcal{O}_{K}$ denote its [[Algebraic integer|ring of integers]].
Then $\mathcal{O}_{K}$ is a [[lattice subgroup]] of $K$ of rank $n$.[^2022] #m/thm/ring 

> [!check]- Proof
> By [[Algebraic integer#^P2]], we can form a $\mathbb{Q}$-basis $\{ \alpha_{i} \}_{i=1}^n \sube \mathcal{O}_{K}$ of algebraic integers spanning $K$.
> Suppose towards contradiction that $\mathcal{O}_{K}$ is _not_ discrete,
> so there are arbitrarily small $\{ \lambda_{i} \}_{i=1}^n \sube \mathbb{Q}$ such that $\alpha = \sum_{i=1}^n \lambda_{i}\alpha_{i} \in \mathcal{O}_{K}$ is nonzero.
> Now for each embedding $\sigma : K \hookrightarrow \mathbb{C}$ we have
> $$
> \begin{align*}
> \sigma(\alpha) = \sum_{i=1}^n \lambda_{i}\sigma(\alpha_{i})
> \end{align*}
> $$
> so $\opn N_{K:\mathbb{Q}}(\alpha) = \phi(\lambda_{1},\dots,\lambda_{n})$ for some homogenous polynomial of degree $n$,
> whence $\opn N_{K:\mathbb{Q}}(\alpha)$ becomes arbitrarily small as $\lambda_{i}$ are made arbitrarily small.
> But since $\alpha$ is an algebraic integer, so is $N_{K:\mathbb{Q}}(\alpha)$,
> meaning it must be an “arbitrarily small nonzero integer”, a contradiction. <span class="QED"/>

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶1.18, p. 14

  [^quad]: We don't really need the quadratic structure of the lattice, but we can get it by considering the [[Field trace]], which gives the [[Trace form]] of the defining/fundamental representation of $K$ over $\mathbb{Q}$.

It follows that any nonzero [[ideal]] $I \trianglelefteq \mathcal{O}_{K}$ is a (full rank) sublattice of $\mathcal{O}_{K}$,
whence $\mathcal{O}_{K}/I$ is finite. ^C1

#
---
#state/tidy | #lang/en | #SemBr

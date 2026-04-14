---
tags:
  - public
---
[[General linear Lie algebra]]
# Lie algebra of nilpotent endomorphisms

Let $\mathfrak{g} \leq \mathfrak{gl}_{n}\mathbb{K}$ be a [[General linear Lie algebra#^subalgebra]] for which every $x \in \mathfrak{g}$ is a nilpotent endomorphism of $\mathbb{K}^n$.
Then there exists some nonzero $v \in \mathbb{K}^n$ for which $\mathfrak{g} v = 0$.[^1972] #m/thm/lie 

  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]]

> [!check]- Proof
> Let $\mathfrak{g} \leq \mathfrak{gl}_{n}\mathbb{K}$ be a linear Lie algebra.
> Assume that for $\dim \mathfrak{g} < m$, every $x \in \mathfrak{g}$ being nilpotent implies the existence of some nonzero $v \in \mathbb{K}^n$ such that $\mathfrak{g} v = 0$.
> Note that this clearly holds for $m = 2$.
> 
> Now take $\dim \mathfrak{g} = m$, and let $\mathfrak{h} < \mathfrak{g}$ be a strict subalgebra,
> so that $\dim \mathfrak{h} < m$.
> Then by [[General linear Lie algebra#^P1]],
> $\mathfrak{g}$ acts on $\mathfrak{g}$ under the [[Adjoint Lie algebra representation|adjoint representation]] nilpotently, as does $\mathfrak{h}$ on $\mathfrak{g} / \mathfrak{h}$:
> Thus we have a [[Lie algebra homomorphism]]
> $$
> \begin{align*}
> \pi: \mathfrak{h} \to \mathfrak{gl}(\mathfrak{g / \mathfrak{h}})
> \end{align*}
> $$
> such that $\pi(\mathfrak{h})$ contains only nilpotent endomorphisms.
> Since $\dim \pi(\mathfrak{h}) < m$ satisfies the induction hypothesis,
> there exists a nonzero $x + \mathfrak{h} \in \mathfrak{g}/\mathfrak{h}$ such that $\pi(\mathfrak{h})(x+\mathfrak{h}) = \mathfrak{h}$,
> or equivalently, the [[Normalizer in a Lie algebra|normalizer]] $\mathfrak{n}_{\mathfrak{g}}(\mathfrak{h})$ is a strict superset of $\mathfrak{ h}$.
> 
> Taking $\mathfrak{h}$ to be a maximal strict subalgebra,
> it follows that $\mathfrak{n}_{\mathfrak{g}}(\mathfrak{h}) = \mathfrak{h}$, thus $\mathfrak{h}$ is an [[Lie algebra ideal|ideal]] of codimension one:
> Hence $\mathfrak{g} = \mathfrak{h} + \mathbb{K}z$ for any $z \in \mathfrak{g} \setminus \mathfrak{h}$.
> Let $W = \{ v \in V : \mathfrak{h} v = 0 \}$ be the subspace of vectors annihilated by $\mathfrak{h}$.
> Since $\mathfrak{h}$ is an ideal, this is invariant under $\mathfrak{g} = \mathfrak{h} + \mathbb{K}z$,
> and since $z$ is nilpotent, it has an eigenvector $v \in W$ such that $zv = 0$,
> and therefore $\mathfrak{g}v = 0$ as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

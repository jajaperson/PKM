---
tags:
  - public
---
[[Symmetrizer and antisymmetrizer elements]]
# Trivial and alternating characters of a finite symmetric group in tensor product decomposition

Let $\Gamma^\mu, \Gamma^\nu$ be irreps of $S_{n}$, and $\Gamma^{\mu \otimes \nu} = \Gamma^\mu \otimes \Gamma^\nu$ be their [[Tensor product of group representations|tensor product]].
Then the [[Decomposition of a representation|decomposition]] of $\Gamma^{\mu \otimes \nu}$ contains #m/thm/rep/sym

- $\chi^\mathfrak{s}$ exactly once iff $\Gamma^\mu \cong \Gamma^\nu$ are [[Equivalence of representations|equivalent representations]], otherwise not at all
- $\chi^\mathfrak{a}$ exactly once iff $\Gamma^\mu = \chi^\mathfrak{a} \otimes \Gamma^\nu$ are [[Associate representation|associate representations]], otherwise not at all

> [!check]- Proof
> Using [[Orthonormality of irreducible characters]] and the fact that [[Characters of a finite symmetric group are real]] to find multiplicities
> $$
> \begin{align*}
> (\chi^\mathfrak{s} | \chi^{\mu \otimes \nu}) &= \frac{1}{n!} \sum_{p \in S_{n}} \overline{\chi^\mu(p)} \chi^\nu(p) = (\chi^\mu | \chi^\nu) \\
> (\chi^\mathfrak{a}|\chi^{\mu \otimes \nu}) &= \frac{1}{n!} \sum_{p \in S_{n}} \overline{\chi^\mathfrak{a}(p)\chi^\mu(p)} \chi^\nu(p) = (\chi^{\mathfrak{a} \otimes \mu} | \chi^\nu)
> \end{align*}
> $$
> Since the right hand inner products only involve irreps,
> the first is one iff $\Gamma^\mu \cong \Gamma^\nu$ and zero otherwise,
> while the second is one iff $\Gamma^{\mathfrak{a} \otimes \mu} \cong \Gamma^\nu$, i.e. they are [[Associate representation|associate representations]], and zero otherwise.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

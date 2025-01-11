---
tags:
  - public
---
[[Lie algebra]]
# Lie algebra ideal

A **Lie algebra ideal** $\mathfrak{a} \trianglelefteq \mathfrak{g}$ is just an [[algebra ideal]] of a [[Lie algebra]]. #m/def/lie 
Equivalently, $\mathfrak{a} \trianglelefteq \mathfrak{g}$ is a [[Module over a Lie algebra|submodule]] under the [[Adjoint Lie algebra representation|adjoint representation]].
Note that a [[Lie subalgebra]] is a (two-sided) ideal iff it is a left or right ideal, by the [[Alternating multilinear map|alternating]] property.
A Lie algebra is [[Simple Lie algebra|simple]] iff it has no nontrivial ideals.

## Properties

Let $\mathfrak{a},\mathfrak{b} \trianglelefteq \mathfrak{g}$ be ideals. Then
1. $\mathfrak{a} + \mathfrak{ b}$ is an ideal ^P1
2. $\mathfrak{a} \cap \mathfrak{b}$ is an ideal ^P2
3. $[\mathfrak{a}, \mathfrak{b}]$ is an ideal (see [[Commutator ideal]]) ^P3

> [!check]- Proof
> [[#^P1]] and [[#^P2]] follow immediately.
> Note that for any $x \in \mathfrak{ g}$,
> by [[Adjoint Lie algebra representation#^P1]]
> $$
> \begin{align*}
> \ad_{x} [\mathfrak{a}, \mathfrak{b}] = [\ad_{x} \mathfrak{a}, \mathfrak{b}] + [\mathfrak{a}, \ad_{x} \mathfrak{b}] = [\mathfrak{a}, \mathfrak{b}]
> \end{align*}
> $$
> so $[\mathfrak{a}, \mathfrak{b}]$ is an ideal. <span class="QED"/>

## Special ideals

- [[Centre of a Lie algebra]]
- [[Kernel of a Lie algebra homomorphism]]
- [[Central ideal]]
- [[Radical of a Lie algebra]]

## See also

- [[Quotient Lie algebra]]

#
---
#state/tidy | #lang/en | #SemBr

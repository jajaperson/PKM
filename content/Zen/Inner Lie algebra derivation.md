---
alias: inner derivation
tags:
  - public
---
[[Derivation on an algebra]]
# Inner derivation

Let $\mathfrak{g}$ be a [[Lie algebra]] and $\ad_{(-)}$ be its [[Adjoint Lie algebra representation|adjoint representation]].
An **inner derivation** is a [[Derivation on an algebra|derivation]] on $\mathfrak{g}$ that can be written as $\ad_{x}$ for some $x \in \mathfrak{g}$.
The set of all such derivations $\inder(\mathfrak{g})$ is an [[Lie algebra ideal|ideal]] of [[Derivation subalgebra|$\der(\mathfrak g)$]].

> [!check]- Proof of ideal
> Let $D \in \der(\mathfrak{g})$ be a derivation, and let $\ad_{x} \in \der(\mathfrak{g})$.
> Then for any $y \in \mathfrak{g}$
> $$
> \begin{align*}
> [D,\ad_{x}] y 
> &= D\ad_{x}y - \ad_{x}Dy
> = D[x,y] - [x,Dy] \\
> &= [Dx, y] + [x, Dy] - [x,Dy] \\
> &= \ad_{Dx} y
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

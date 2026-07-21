---
tags:
  - public
---
[[Connectedness]]
# Connected fibres and quotient implies connected space

Let $X$ be a topological space, $f : X \twoheadrightarrow S$ a surjective function, where $S$ is given the [[Quotient topology]].
If $S$ is a connected space and each of the fibres of $f$ (i.e. equivalence classes) are connected subspaces of $X$,
then $X$ is connected.

> [!check]- Proof
> Let $g : X \to \{ 0,1 \}$.
> Since the fibres of $f$ are connected,
> $g$ must be constant on each fibre.
> Thus there exists $\overline{g} : Y \to \{ 0,1 \}$ so that $g = \overline{g}f$.
> But $Y$ is connected so $\overline{g}$ must be constant,
> so $g$ is also constant.
> Therefore $X$ is connected.
> <span class="QED"/>
#
---
#state/tidy | #lang/en | #SemBr

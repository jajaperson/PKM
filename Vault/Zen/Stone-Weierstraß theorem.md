---
tags:
  - public
---
[[Analysis MOC]]
# Stone-Weierstraß theorem

Let $Y$ be a [[compact space]] and $X$ be a [[∗-subalgebra]] of the [[continuous function ∗-algebra]] $\Top(Y,\mathbb{C})$ that is [[Separating set|separating]].
Then $X$ is [[Dense set|dense]] in $\Top(Y,\mathbb{C})$, #m/thm/anal/fun 
i.e. $\Cl(X) =  \Top(Y,\mathbb{C})$.

> [!missing]- Proof
> #missing/proof

## Finite version

Let $X \leq \mathbb{C}[Y]$ be a complex function space on a finite set $Y$.
Then $X = \mathbb{C}[Y]$ iff[^sim]: #m/thm/anal/fun

- $f \cdot g \in X$ for all $f,g \in X$
- $X$ separates points, i.e. for any distinct $x,y \in Y$ there exists $f_{xy} \in X$ so that $f_{xy}(x) = 1$ and $f_{xy}(y) = 0$

[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §III.1, p. 37

> [!check]- Proof
> Assume $X$ has the two properties.
> For each $x \in Y$ let $\delta_{x}: y \mapsto \delta_{xy}$, and let $f$ be defined as above.
> Since $\delta_{x}(z) = \prod_{y \neq x}f_{xy}(z)$,
> $\delta_{x} \in X$ for all $x \in Y$
> and since $\delta_{x}$ form a basis of $\mathbb{C}[x]$,
> it follows that $X = \mathbb{C}[X]$.
> Clearly the two constructions are guaranteed functions in $\mathbb{C}[Y]$, so the converse is trivial.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

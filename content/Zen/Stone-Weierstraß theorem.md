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


Let $X \leq \mathbb{K}^Y$ be a subalgebra of the [[function algebra]] $\mathbb{K}^Y$ on a finite set $Y$.
Then $X = \mathbb{K}^Y$ iff 
$X$ separates points, #m/thm/linalg  i.e. for any distinct $x,y \in Y$ there exists $f_{x,y} \in X$ so that $f_{x,y}(x) = 1$ and $f_{x,y}(y) = 0$

> [!check]- Proof
> Assume $X$ is separating.
> For each $x \in Y$, let $\delta_{x} \in \mathbb{K}^Y$ so that $\delta_{x}(y) = [x=y]$^[Invoking an [[Iverson bracket]].].
> Defining $f_{x,y}$ as above, it follows
> $$
> \begin{align*}
> \delta_{x} = \prod_{y \neq x} f_{x,y}
> \end{align*}
> $$
> and since $\{ \delta_{x} \}_{x \in Y}$ span $\mathbb{K}^Y$ it follows $X = \mathbb{K}^Y$.
> For the converse just set $f_{x,y} = \delta_{x}$ for all $y \neq x$. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

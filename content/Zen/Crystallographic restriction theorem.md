---
tags:
  - public
---
[[Crystallographic group]]
# Crystallographic restriction theorem

The **crystallographic restriction theorem** is a group theoretic and geometric result which places an important restriction on which [[Point group|point groups]] can form [[Crystallographic group|crystallographic groups]].

> Let $S$ be a [[crystallographic group]] on a [[Lattice subgroup|lattice]] $L$ of $\mathbb{R}^2$ or $\mathbb{R}^3$ with point group $S / L$.
> Then the order of elements in $S / L$ are in $\{ 1,2,3,4,6 \}$ #m/thm/group  

> [!check]- Trigonometric proof
> Consider two lattice points $A,B$ with separation vector $AB$, 
> and suppose that rotation by an angle $\alpha$ is a symmetry operation.
> Then $B' = A+R_{\alpha}AB$ and $A' = B + R_{-\alpha}BA$ are also lattice points.
> It follows that $A'B' = mAB$ for some $m \in \mathbb{Z}$.
> The vectors $AB,R_{\alpha}AB,R_{-\alpha}BA,A'B'$ form a trapezium,
> therefore the length of $A'B'$ is given by
> $$
> \begin{align*}
> \abs{A'B'} =\abs{AB} (2\cos\alpha - 1)
> \end{align*}
> $$
> thus letting $M = m+1$
> $$
> \begin{align*}
> \cos\alpha = \frac{M}{2}
> \end{align*}
> $$
> whence follows $M \in \{ -2,-1,0,1,2 \}$,
> thus $\alpha = \frac{2\pi}{n}$ for $n \in \{ 1,2,3,4,6 \}$. <span class="QED"/>

## Generalized theorem

See [[@bambergCrystallographicRestrictionPermutations2003]]

#
---
#state/tidy | #lang/en | #SemBr

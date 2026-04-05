---
tags:
  - public
---
[[Projective quadric]]
# Orthogonality by a quadric

Let $\mathcal{Q}_{n}$ be a non-singular [[Projective quadric|quadric]] in $\mathrm{PG}(n,\mathbb{K})$ belonging to the quadratic form $Q_{n}$ and let
$$
\begin{align*}
G(\mathbf{x},\mathbf{y}) = Q_{n}(\mathbf{x}+\mathbf{y}) - Q_{n}(\mathbf{x}) - Q_{n}(\mathbf{y})
\end{align*}
$$
be the corresponding bilinear form.[^2020]
Then for $X \in \mathcal{Q}_{n}$ #m/thm/geo

1. Let $Y \neq X$ be an arbitrary point. Then $G(\mathbf{x},\mathbf{y}) \neq 0$ iff the line $XY$ is a secant of $\mathcal{Q}_{n}$, i.e. $\abs{XY \cap \mathcal{Q}_{n}} = 2$. ^1
2. Let $Y \notin \mathcal{Q}_{n}$. Then $G(\mathbf{x},\mathbf{y})=0$ iff the line $XY$ is a tangent of $\mathcal{Q}_{n}$ at $X$, i.e. $XY \cap \mathcal{Q}_{n} = \{ X \}$. ^2
3. Let $X \neq Y \in \mathcal{Q}_{n}$. Then $G(\mathbf{x},\mathbf{y}) = 0$ iff the line $XY$ is a line of $\mathcal{Q}_{n}$, i.e. completely contained in $\mathcal{Q}_{n}$. ^3

> [!check]- Proof
> Any point other than $X$ on the line $XY$ has homogenous coördinates $\mathbf{y}+ \lambda \mathbf{x}$.
> $$
> \begin{align*}
> Q_{n}(\mathbf{y} + \lambda\mathbf{x}) = \lambda G(\mathbf{y}, \mathbf{x}) + Q_{n}(\mathbf{y}) + \lambda^2 Q_{n}(\mathbf{x}) = \lambda G(\mathbf{y}, \mathbf{x}) + Q_{n}(\mathbf{y})
> \end{align*}
> $$
> So if $Y \in \mathcal{Q}_{n}$ then $Q_{n}(\mathbf{y}+ \lambda \mathbf{x}) = \lambda G(\mathbf{y},\mathbf{x})$,
> giving cases [[#^2]] and [[#^3]].
> If $Y$ is arbitrary and $G(\mathbf{y},\mathbf{x}) \neq 0$, 
> then $Q_{n}(\mathbf{y}+ \lambda \mathbf{x}) = 0$ iff $\lambda = -Q_{n}(\mathbf{y}) / G(\mathbf{x}, \mathbf{y})$, giving case [[#^1]].
> <span class="QED"/>

[^2020]: 2020\. [[Sources/@kissFiniteGeometries2020|Finite geometries]], ¶4.50, pp. 104–105

#
---
#state/tidy | #lang/en | #SemBr

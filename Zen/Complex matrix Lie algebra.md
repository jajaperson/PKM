---
tags:
  - public
---
[[Lie theory MOC]]
# Complex matrix Lie algebra

Let $G \sube \mathrm{GL}_{n}(\mathbb{C})$ be a [[Matrix Lie group]],
and $\mathscr C$ denote the set of curves in $G$ intersecting identity at zero, i.e.
$$
\begin{align*}
\mathscr C = \{ c \in \Man^\omega(\mathbb{R},G) : c(0) = \mathbf{1}_{n} \}
\end{align*}
$$
The **matrix Lie algebra** $\mathfrak{g}$ is given by
$$
\begin{align*}
\mathfrak{g} = \{ c'(0) : c \in \mathscr C \} \sube \mathbb{C}^{n \times n}
\end{align*}
$$
i.e. the _tangent space at identity_,
with the [[Lie algebra|Lie bracket]] given by the [[Linear commutator]]:
$$
\begin{align*}
[X, Y] = XY - YX
\end{align*}
$$

> [!check]- Proof of Lie algebra
> By properties of the [[Linear commutator]],
> $-i[-,-]$ is alternating bilinear and satisfies the Jacobi identity.
> All that remains to show is that $\mathfrak{g}$ is closed under this operation.
> To this end let $x,y \in \mathscr C$ so that $X = -ix'(0) \in \mathfrak{g}$ and $Y = -iy'(0) \in \mathfrak{g}$.
> Now define a curve $\tilde{X} : \mathbb{R} \to \mathfrak{g}$ by $\tilde{X}(t) = y(t) \,X \,y(t)^{-1}$.
> Since $\mathfrak{g}$ is a vector space and the [[Tangent space at any point in a vector space is the vector space]], $\tilde{X}'(0) \in \mathfrak{g}$.
> From the product rule
> $$
> \begin{align*}
> \frac{d}{dt} \tilde{X}(t) = y(t) \frac{d}{dt}y(t)^{-1} + y(t)^{-1} \frac{d}{dt}y(t)
> \end{align*}
> $$
> and
> $$
> \begin{align*}
> \left. \frac{d}{dt} y(t)y(t)^{-1} \right|_{t=0} &= y(0)\left. \frac{d}{dt} y(t)^{-1} \right|_{t=0} + y(0)^{-1}\left. \frac{d}{dt} y(t) \right|_{t=0}  \\
> &= \left. \frac{d}{dt}y(t)^{-1} \right|_{t=0} + iY \\
> &= 0
> \end{align*}
> $$
> it follows that $\left. \frac{d}{dt}y(t)^{-1} \right|_{t=0} = -iY$ and thus
> $$
> \begin{align*}
> \left. \frac{d}{dt} \tilde{X}(t) \right|_{t=0} &= y(0) \,X\, \left. \frac{d}{dt} y(t)^{-1} \right|_{t=0} + \left. \frac{d}{dt} y(t) \right|_{t=0} \, X \, y(0)^{-1} \\
> &= -iXY + iYX \\
> &= -i[X,Y]
> \end{align*}
> $$
> hence $\mathfrak{g}$ is closed under the Lie bracket.
> <span class="QED"/>

## Basis

A good choice of basis uses coördinate lines in a chart containing the identity matrix.
Let $(U, \varphi)$ be a $n$-dimensional [[coördinate chart]] with $\varphi(\vab 0) = e$.
Then
$$
\begin{align*}
X_{i} = \left. \frac{ \partial }{ \partial x_{i} } \varphi^{-1}(x_{1}, \dots, x_{n})  \right|_{\vec x = \vab 0} 
\end{align*}
$$
See also [[Lie algebra#Basis|Lie algebra basis]].

#
---
#state/tidy | #lang/en | #SemBr

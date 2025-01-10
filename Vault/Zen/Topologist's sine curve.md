---
tags:
  - public
---
[[Topology counterexamples MOC]]
# Topologist's sine curve

The **topologist's sine curve** is defined as the following [[Subspace topology|subspace]] of [[Real coördinate space]] $\mathbb{R}^2$ #m/def/topology 
$$
\begin{align*}
L &= \{ (0,y) : y \in [-1,1] \} \\ S &= \{ (x, \sin(1/x)): x \in (0,1] \} \\
X &= L \cup S
\end{align*}
$$
Specifically, defined above is the [[Compact space|compact]] variant.

## Properties

- $S$ is [[Connectedness|connected]], but not path-connected.

> [!check]- Proof
> Let $\iota:X \hookrightarrow \mathbb{R}^2$ denote the inclusion and $\pi_{x}: \mathbb{R}^2 \twoheadrightarrow \mathbb{R}$ denote the projection onto the $x$-axis,
> so $\pi_{x}\iota : X \to \mathbb{R}$ is the continuous projection of $X$ onto the $x$-axis.
> Suppose $p : \mathbb{I} \to X$ is a continuous path from $(1,0)$ to $(0,0)$.
> It follows by the [[Intermediate value theorem]] that the image $\pi _{x}\iota f(\mathbb{I}) = \mathbb{I}$.
> Let $\tau = \sup \{ t: p(t) \in S \}$.
> Clearly $p(\tau) \notin S$, for if it were we could find a $\tilde{\tau} > \tau$ such that $\pi _x \iota p(\tilde{\tau}) \in (0,p(\tau))$ by the intermediate value theorem.
> Again invoking the intermediate value theorem,
> there exists an increasing sequence $(t_n)_{n=1}^\infty$ such that $\pi_{x}\iota p(t_{n}) = \frac{2}{\pi (2n + 1)}$.
> Now $(t_{n}) \to \tau$ (why?), so by [[sequential continuity]] $p(t_{n}) \to p(\tau)$.
> But $p(t_{n})$ is not convergent, since its $y$-coördinate alternates between $-1$ and $1$,
> a contradiction.
> Therefore $p$ cannot be a continuous path. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
aliases: $n$th variation
---
[[Calculus of variations MOC]]
# First variation

Let $V$ be a [[function space]] over $\mathbb{K}$[^1]
and $F : V \to \mathbb{K}$ be a [[functional]],
e.g. an [[action functional]].
Loosely speaking, the **first variation** $\delta F$ tells you how the functional $F$ varies in response to an infinitesimal variation $f \to f + \delta f$ in its input, #m/def/anal/fun/var 
i.e.
$$
\begin{align*}
\delta F = F[f + \delta f] - F[f].
\end{align*}
$$
This is made rigorous by considering $\delta F[f] : V' \to \mathbb{K}$ to be a functional in its own right,
defined for some subset $V' \sube V$,[^giaquinta]
where the argument is akin to the _direction_ of a directional derivative.
We take
$$
\begin{align*}
\delta F[f; \eta] = \delta F[f][\eta] = \lim_{ \epsilon \to 0 } \frac{F[f+\epsilon \eta] - F[f]}{\epsilon} = \phi_{F}[\eta]'(0)
\end{align*}
$$
where
$$
\begin{align*}
\phi_{F}[\eta] : (-\epsilon_{0}, \epsilon_{0}) \to \mathbb{R}
: \epsilon &\mapsto F[f + \epsilon \eta].
\end{align*}
$$
This generalizes easily to the **$n$th variation**
$$
\begin{align*}
\delta^n F[f,\eta] = \phi_{F}[\eta]^{(n)}(0).
\end{align*}
$$

[^giaquinta]: 2004\. [[Sources/@giaquintaCalculusVariations2004|Calculus of variations I]], §1

## Extrema of functionals

The main utility of $n$th variation is for identifying extrema of functionals as a necessary (but in general insufficient) condition under certain hypotheses.
Suppose $V$ is [[Topological space|topological]] and $F : V \to \mathbb{K}$ is [[Continuity|continuous]].
Further let $f_{0} \in V$ be a local extremum of $F$.

- If $\delta F[f_{0}]$ exists, then it is zero.
    - If $f_{0}$ is a local minimum and $\delta^2F[f_{0}]$ exists, then it is strictly positive.
    - If $f_{0}$ is a local maximum and $\delta^2F[f_{0}]$ exists, then it is strictly negative.

> [!missing]- Proof
> #missing/proof

## See also

- This definition can be strengthened into either the [[Gateaux derivative]] or the stronger [[Fréchet derivative]].
- First variation may be used to define the [[Functional derivative]].

#
---
#state/develop | #lang/en | #SemBr

[^1]: Where $\mathbb{K} \in \{ \mathbb{R},\mathbb{C} \}$.

[^2]: One can either take the [[Gateaux derivative]] or [[Fréchet derivative]], the latter being distinguished by the fact the resulting functional will be linear.

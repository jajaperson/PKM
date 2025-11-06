---
tags:
  - public
aliases: $n$th variation
---
[[Calculus of variations MOC]]
# First variation

Let $V$ be a [[function space]] over $\mathbb{K}$[^1]
and $F : V \to \mathbb{K}$ be a [[functional]],
e.g. an [[Action functional]].
Loosely speaking, the **first variation** $\delta F$ tells you how the functional $F$ varies in response to an infinitesimal variation $f \to f'$ in its input, #m/def/anal/fun/var 
i.e.
$$
\begin{align*}
\delta F = F[f'] - F[f].
\end{align*}
$$
This is made rigorous by considering $\delta F$ to be a functional in its own right.

A **variation** of $f$ is a map $\alpha_{?} : (-\epsilon_{0},\epsilon_{0}) \to F$ such that $\alpha_{0} = f$.
Let $\mathscr{V}_{f}$ denote the function space of all variations of $f$.[^3]
We define the functional $\delta F[f] : \mathscr{V}_{f} \to \mathbb{R}$ so that
$$
\begin{align*}
\delta F[f;\alpha] = \delta F[f][\alpha] = \lim_{ \epsilon \to 0 } \frac{F[\alpha_{\epsilon}] - F[f]}{\epsilon} = F[\alpha_{?}]'(0)
\end{align*}
$$
This generalizes easily to the **$n$th variation**
$$
\begin{align*}
\delta^n F[f;\alpha] = F[\alpha_{?}]^{(n)}(0).
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

- First variation may be used to define the [[Functional derivative]].

#
---
#state/develop | #lang/en | #SemBr

[^1]: Where $\mathbb{K} \in \{ \mathbb{R},\mathbb{C} \}$.

[^2]: One can either take the [[Gateaux derivative]] or [[Fréchet derivative]], the latter being distinguished by the fact the resulting functional will be linear.

[^3]: cf. [[Homotopy of maps|homotopy]].

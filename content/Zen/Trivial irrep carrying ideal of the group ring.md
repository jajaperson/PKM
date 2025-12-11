---
aliases:
  - left ideal carrying the trivial representation
tags:
  - public
---
[[Ideal of the complex group ring]]
# Trivial irrep carrying ideäl of the group ring

The [[Idempotent of the complex group ring|primitive idempotent]]
$$
\begin{align*}
e_{1} = \frac{1}{\abs G} \sum_{g \in G} \delta_{g}
\end{align*}
$$
generates the one-dimensional left ideäl $L^1$ carrying the trivial irrep.

$$
\begin{align*}
\Lambda(g) q * e_{1} &= \delta_{g} * \sum_{x \in G}q(x)\delta_{x} * e_{1} \\
&= \frac{1}{\abs G} \delta_{g} * \sum_{x,y \in G} q(x) \delta_{y} \\
&= \frac{1}{\abs G} \sum_{x,y \in G} q(x) \delta_{gxy}  \\
&= \frac{1}{\abs G} \sum_{x,z \in G} q(x) \delta_{xz} \\
&= \sum_{x \in G}q(x)\delta_{x} * e_{1} \\
&= q * e_{1}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

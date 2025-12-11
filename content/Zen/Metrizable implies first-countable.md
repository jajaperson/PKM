---
tags:
  - public
---
[[Metric topology]]
# Metrizable implies first-countable

Let $(X,d)$ be a [[metric space]].
Then $X$ is [[First countability axiom|first-countable]] under its [[metric topology]].
#m/thm/topology 

> [!check]- Proof
> The following set defines a (nested) [[neighbourhood basis]] for a point $x \in X$:
> $$
> \begin{align*}
> \mathcal{B}(x) =\{ \mathrm{B}_{1/k}(x)  \}_{k=1}^\infty
> \end{align*}
> $$
> For any open neighbourhood $U$ of $x$ must contain an open ball $\mathrm{B}_{\delta}(x)$ for $0 <\delta \leq 1$.
> Letting $k = \lceil \delta^{-1} \rceil$, it follows the basic open neighbourhood $\mathrm{ B}_{1 / k}(x) \sube \mathrm{B}_{\delta}(x) \sube U$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

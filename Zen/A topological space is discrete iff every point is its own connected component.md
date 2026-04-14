---
tags:
  - public
---
[[Discrete topology]]
# A topological space is discrete iff every point is its own connected component

A topological space $X$ has the [[discrete topology]] iff each point $x \in X$ is in its own [[Connectedness|connected component]] $\{ x \}$. #m/thm/topology 

> [!check]- Proof
> $X$ is discrete iff the following function is continuous for all $x_{0} \in X$
> $$
> \begin{align*}
> f : X &\to \{ 0,1 \} \\
> x &\mapsto \begin{cases}
> 0 & x=x_{0} \\
> 1 & x \neq x_{0}
> \end{cases}
> \end{align*}
> $$
> which holds iff every $x_{0} \in X$ is disconnected from all other points.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

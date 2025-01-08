---
tags:
  - public
---
[[Naïve set theory MOC]]
# The intersection of nonempty nested sets may be empty

Consider a strictly decreasing sequence $(S_n)_{n=1}^\infty$ of nonempty subsets (i.e. such that $\0 \neq S_{n} \supsetneq S_{n+1}$ for $n \in \mathbb{N}$).
Then it is possible that #m/thm/set/naïve
$$
\begin{align*}
\bigcap_{n=1}^\infty S_{n} = \0
\end{align*}
$$

> [!check]- Proof
> For example, let
> $$
> \begin{align*}
> S_{n} = \{ m \in \mathbb{N} : m \geq n \} \sube \mathbb{N}
> \end{align*}
> $$
> for $n \in \mathbb{N}$.
> Then clearly $(S_n)_{n=1}^\infty$ is strictly decreasing,
> but every $m \in \mathbb{N}$ has $m \notin S_{m+1}$.
> Therefore $\bigcap_{n=1}^\infty S_{n} = \0$.
> <span class="QED"/>

However, [[The intersection of nested nonempty Hausdorff-compact sets is nonempty]].

#
---
#state/tidy | #lang/en | #SemBr

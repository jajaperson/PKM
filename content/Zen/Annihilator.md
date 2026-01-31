---
tags:
  - public
---
[[Module theory MOC]]
# Annihilator

Let $M$ be a (left) $R$-[[module]] and $S \sube M$.
The **annihilator** $\lAnn R S$ is the (left) [[ideal]] made up of all elements of $R$ which annihilate $S$, #m/def/module  i.e.
$$
\begin{align*}
\lAnn R S = \{ r \in R : r \odot  S = 0 \}.
\end{align*}
$$
If $S \leq_{R} M$ is a [[submodule]], then $\lAnn R S$ is a two-sided ideal.

> [!check]- Proof of ideal
> If $r \in \lAnn R S$ then for any $t \in R$ we have
> $$
> \begin{align*}
> tr \odot  S = t \odot  (r \odot  S) = t(0) = 0
> \end{align*}
> $$
> so $tr \in \lAnn R S$. 
> With the additional assumption that $S \leq_{R} M$ is a submodule,
> we have
> $$
> \begin{align*}
> rt \odot  S = r \odot  (t \odot  S) \sube r \odot  S = 0
> \end{align*}
> $$
> so $rt \in \lAnn R S$ as required. <span class="QED"/>

## See also

- [[Faithful module]]

#
---
#state/tidy | #lang/en | #SemBr

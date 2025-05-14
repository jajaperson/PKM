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
A module for which all annihilators are trivial is called a [[Faithful module]].

> [!check]- Proof of (left) ideal
> If $r \in \lAnn R S$ then for any $t \in R$ we have
> $$
> \begin{align*}
> tr \odot  S = t(r \odot  S) = t(0) = 0
> \end{align*}
> $$
> so $ts \in \lAnn R S$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

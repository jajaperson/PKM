---
tags:
  - public
---
[[Probability theory MOC]]
# Bonferroni inequalities

Let $\{ A_{i} \} \sube \mathcal{F}$ be events and
$$
\begin{align*}
S_{1} &= \sum_{i=1}^n \mathbb{P}(A_{i}), \\ S_{2} &= \sum_{1\leq i_{1}< i_{2}\leq n} \mathbb{P}(A_{i_{1}} \cap A_{i_{2}}) , \\ \vdots \\ S_{k} &= \sum_{i\leq i_{1} < \dots < i_{k} \leq n} \mathbb{P}(A_{i_{1}} \cap \dots \cap A_{i_{k}})
\end{align*}
$$
for $k=1,\dots,n$.
Then for odd $K \leq n$
$$
\begin{align*}
\sum^K_{j=1}(-1)^{j-1}S_{j} \geq \mathbb{P}\left( \bigcup_{i=1}^n A_{i}\right) = \sum_{j=1}^n(-1)^{j-1}S_{j} 
\end{align*}
$$
and for even $K \leq n$ #m/thm/prob 
$$
\begin{align*}
\sum_{j=1}^K (-1)^{j-1} S_{j} \leq \mathbb{P}\left( \bigcup_{i=1}^n A_{i} \right) = \sum_{j=1}^n (-1)^{j-1}S_{j}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof


#
---
#state/develop | #lang/en | #SemBr

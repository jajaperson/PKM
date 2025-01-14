---
tags:
  - public
aliases:
  - Hamming weight
---
[[Coding theory MOC]]
# Hamming distance

Let $S$ be an arbitrary [[set]]. 
The **Hamming distance** $d(x,y)$ of $x,y \in S^n$ is the number of positions in which they differ, #m/def/code i.e.
$$
\begin{align*}
d(x,y) = \sum_{i=1}^n [x_{i}= y_{i}]
\end{align*}
$$
where we have used an [[Iverson bracket]].
This defines a [[Metric space|metric]] on $S^n$.
The distance of a word from a distinguished $\vab 0$ word is called the **Hamming weight**, or just **weight**,
which sees a generalization in the linear case to [[Generalized Hamming weight]].

#
---
#state/tidy | #lang/en | #SemBr

---
aliases:
  - continuous arc
tags:
  - public
---
[[Analysis MOC]]
# Continuous path
Given a [[Topological space]] $(X, \mathcal{T})$ a **continuous path** or **path** in $X$ is a [[Continuity|continuous]] function $c : \mathbb{I} \to X$, where $\mathbb{I} = [0,1]$.
Iff $c$ is also a [[Embedding]] it is called an **arc**. #m/def/topology
A continuous path with the same start and endpoints is a [[Continuous loop]].

## Algebra

The set of paths $\Top(\mathbb{I}, X)$ may be made into a [[Magmoid]] $\mathscr PX$ with the concatenation operation.
Let $\alpha \in \mathscr PX(x,y)$ and $\beta \in \mathscr PX(y,z)$.
Then their concatenation $\beta \odot \alpha \in \mathscr P X(x,z)$ is defined as
$$
\begin{align*}
\beta \odot \alpha : t \mapsto \begin{cases}
\alpha(2t) & t \in \left[ 0, \frac{1}{2} \right] \\
\beta(2t - 1) & t \in \left[ \frac{1}{2}, 1 \right]
\end{cases}
\end{align*}
$$
Additionally, we have the involution of reverse path traversal:
For $\alpha \in \mathscr P X(x,y)$ its reverse path $\overline{\alpha} \in \mathscr PX(y,x)$ is given by
$$
\begin{align*}
\overline{\alpha} : t \mapsto \alpha(1-t)
\end{align*}
$$
Clearly $\mathscr P$ defines a [[functor]] from [[Category of topological spaces]] to [[Category of magmoids]]
Of more importance are the [[Category of paths]] and [[Fundamental groupoid]],
which are quotients modulo traversal and homotopy of paths respectively.

## Properties

- A path is just a [[homotopy of maps]] from the [[Single point space]], i.e. of constant maps.

#
---
#state/tidy | #lang/en | #SemBr 

---
date: 2026-05-12
tags:
  - public
---
[[Module theory MOC]]
# Annihilator submodule

Let $V$ be a (left) $R$-[[module]] and $V^*$ be its [[Dual module]].
Given a subset $S \sube V$, the <dfn>annihilator</dfn> of $S$ in $V^*$ is the set of all linear functionals which annihilate $S$, #m/def/module i.e.
$$
\begin{align*}
\lAnn{V^*}(S) := \{ f \in V^* :\mid: \langle f , S \rangle = 0 \}.
\end{align*}
$$
Clearly this is an $R$-[[submodule]] of $V^*$.
For the remainder of this Zettel (and elsewhere) the annihilator of $S$ is denoted $S^\perp$,
and this concept does in a sense generalize the [[orthogonal complement]].

## Properties

The following hold when $R = \mathcal{K}$ is a [[commutative ring]]

1. For $W \leq_{\mathcal{K}} V$, we have $\langle W^\perp, x \rangle = 0$ iff $x \in W$. ^P1

[!check]- Proof
By definition, if $x \in W$ then $\langle W^\perp, x \rangle = 0$.
For the converse, suppose towards contradiction that $\langle W^\perp , x \rangle = 0$ but $x \notin W$.
Then there exists a (possibly null) $Z \leq_{\mathcal{K}} W$ such that
$$
\begin{align*}
V = W \oplus \mathcal{K}x \oplus Z
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr

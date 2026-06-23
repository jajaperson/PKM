---
date: 2026-06-23
tags:
  - public
---
[[Type theory MOC]]
# Typal equivalence

Let $A, B$ be types. 
A function $f : A \to B$ is said to be an <dfn>equivalence</dfn> iff it has [[contractible type|contractible]] [[Typal fibration|fibres]], #m/def/type  i.e.

$$
\begin{align*}
\opn{isEquiv}(f) := \prod_{x : B} \opn{isContr}\left( \sum_{y : A} (f y \equiv_{B} x) \right)
\end{align*}
$$

Intuitively, this says that for every $x : B$ there exists a unique $y : A$ in its fibre.
We also refer to the type $A \simeq B$ of equivalences between $A$ and $B$, so
$$
\begin{align*}
A \simeq B := \sum_{f : A \to B} \opn{isEquiv}(f)
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - left exact
  - right exact
---
[[Functor]]
# Exact functor

Let $\cat C,\cat D$ be [[Completeness and cocompleteness|finitely (co)complete categories]].
A [[functor]] $F : \cat C \to \cat D$ is **left exact** iff it commutes with finite [[Limits and colimits|limits]], #m/def/cat 
i.e.
$$
\begin{align*} 
F\catlim \mathscr{D} = \catlim F\mathscr{D}
\end{align*}
$$
for any [[Commutative diagram|finite diagram]] $\mathscr{D} : \cat J \to \cat C$;
and **right exact** iff it commutes with finite [[Limits and colimits|colimits]],
i,e,
$$
\begin{align*}
F\colim \mathscr{D} = \colim F\mathscr{D}
\end{align*}
$$
for any [[Commutative diagram|finite diagram]] $\mathscr{D} : \cat J \to \cat C$.
A functor which is both left and right exact is simply called an **exact functor**.
A more general notion is [[Continuity and cocontinuity]] of functors.

The concept originated in the context of [[Exact functor on abelian categories]].

#
---
#state/develop | #lang/en | #SemBr

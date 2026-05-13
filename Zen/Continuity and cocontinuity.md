---
aliases:
  - continuous functor
  - cocontinuous functor
tags:
  - public
---
[[Functor]]
# Continuity and cocontinuity

A [[functor]] $F : \cat C \to \cat D$ is called **continuous** iff it commutes with (small) [[Limits and colimits|limits]], i.e.
$$
\begin{align*} 
F\catlim \mathscr{D} = \catlim F\mathscr{D}
\end{align*}
$$
and **cocontinuous** iff it commutes with (small) [[Limits and colimits|colimits]], i.e.
$$
\begin{align*}
F\colim \mathscr{D} = \colim F\mathscr{D}
\end{align*}
$$
and **bicontinuous** iff it is both continuous and cocontinuous. #m/def/cat 
A weaker notion is [[Exact functor]].

## Results

- [[Right adjoint functors are continuous]]


#
---
#state/develop | #lang/en | #SemBr

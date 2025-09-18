---
tags:
  - public
---
[[Abelian category]]
# Exact functor on abelian categories

Let $\cat C, \cat D$ be [[Abelian category|abelian categories]] and $F : \cat C \to \cat D$ be an [[Enriched functor|$\Ab$-functor]].
Then #m/thm/homology 

- $F$ is [[Exact functor|left exact]] iff it preserves kernels; equivalently for any [[exact sequence]]
    $$
    \begin{align*}
    0 \to X \to Y \to Z
    \end{align*}
    $$
    the sequence 
    $$
    \begin{align*}
    0 \to FX \to FY \to FZ
    \end{align*}
    $$
    is exact.
- $F$ is [[Exact functor|right exact]] iff it preserves cokernels; equivalently for any [[exact sequence]]
    $$
    \begin{align*}
    X \to Y \to Z \to 0
    \end{align*}
    $$
    the sequence
    $$
    \begin{align*}
    FX \to FY \to FZ \to 0
    \end{align*}
    $$
    is exact. 

Thus $F$ is [[Exact functor|exact]] iff it preserves [[Short exact sequence|short exact sequences]].

> [!check]- Proof
> It suffices to show the left exact case, whence the right exact case follows by duality.
> 
> Suppose $F$ is left exact and $0 \to X \to Y \to Z$ is an exact sequence.
> Then the designated arrows $0 \to X$ and $X \to Y$ are the [[Kernels and cokernels|kernels]] of $X \to Y$ and $Y \to Z$ respectively.
> It follows $0 \to FX$ and $FX \to FY$ are the kernels of $FX \to FY$ and $FY \to FZ$ respectively, so the sequence $0 \to FX \to FY \to FZ$ is exact.
> 
> For the converse, if for any exact $0 \to X \to Y \to Z$ we have $0 \to FX \to FY \to FZ$ exact,
> then $F$ preserves kernels.
> It must also preserve biproducts since it is $\Ab$-enriched.
> Thus, by the [[(Co)limit construction theorems|limit construction theorems]] we have a left exact functor. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

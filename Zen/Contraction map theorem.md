---
tags:
  - public
---
[[Contraction map]]
# Contraction map theorem
The **contraction map theorem** applies to contracting endomorphisms of complete metric spaces in [[Category of topological spaces]].

> Let $(X, d)$ be a non-empty [[Complete metric space]] 
> and $T : X \to X$ be a [[Contraction map]].
> Then $T$ has a **unique** fixed point $x_{0} \in X$,
> i.e. such that $T(x_{0}) = x_{0}$.
> #m/thm/anal 

> [!check]- Proof (sketch)
> The uniqueness part of the theorem is easy to prove,
> for if there exist $x \neq y$ such that $T(x) = x$ and $T(y) = y$,
> then $d(T(x),T(y)) = d(x, y)$
> meaning the distance $d(x,y)$ was not contracted.
> 
> The existence part is proven using a sequence of repeated applications of $T$,
> which must be a [[Cauchy sequence]] since distances contract upon each subsequent application.
> The [[Convergence|limit]] of this sequence[^com] is $x_{0}$.

[^com]: Which exists by completeness.

#
---
#state/tidy | #lang/en | #SemBr

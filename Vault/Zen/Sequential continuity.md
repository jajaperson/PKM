---
aliases:
  - sequentially continuous
tags:
  - public
---
[[Continuity]]
# Sequential continuity
A function between [[Topological space|topological spaces]] $f : X \to Y$ is **sequentially continuous** at a point $a \in X$
iff any [[Convergence|convergent sequence]] $(a_{n})_{n=1}^\infty$ in $X$ with limit $c$ maps to a convergent sequence $(f(a_{n}))_{n=1}^\infty$ in $Y$ with limit $f(a)$,
i.e.
$$
\begin{align*}
(a_{n}) \to a \implies (f(a_{n})) \to f(a)
\end{align*}
$$
All continuous maps are sequentially continuous.
In case $X$ is [[First countability axiom|first-countable]],
then $f$ is sequentially continuous at a point $c$ iff. it is [[Continuity|continuous]] at that point. #m/thm/topology 

> [!check]- Proof for first-countable equivalence
> Let $(X, \mathcal{T}_{X})$ and $(X, \mathcal{T}_{Y})$ be topological space,
> $f : X \to Y$ be a map,
> and $a \in X$ be a point.
> Let $b = f(a)$,
> and $X$ be [[First countability axiom|first-countable]].
> 
> First, assume $f$ is continuous at $a$.
> Let $(a_n)_{n=1}^\infty$ be a sequence in $X$ with $(a_{n}) \to a$,
> and $T \in \mathcal{T}_{Y}(b)$.
> Then $f^{-1}(T) \in \mathcal{T}_{X}(a)$,
> and thus there exists $N$ such that $a_{n} \in f^{-1}(T)$ for all $n > N$,
> whence $f(a_{n}) \in T$ for all $n > N$.
> Therefore $f(a_{n}) \to b$,
> without invoking the [[First countability axiom]].
> 
> For the converse, assume $f$ is sequentially continuous at $a$.
> Let $(S_{n})_{n \in \mathbb{N}}$ a countable [[Nested neighbourhood basis|nested open neighbourhood basis]] of $a$.
> Assume $f$ is not continuous at $a$, 
> i.e. there exists $T \in \mathcal{T}_{Y}(b)$ such that $S_{n} \not\subseteq f^{-1}(T)$ for all $n \in \mathbb{N}$.
> We can then construct a sequence such that $a_{n} \in S_{n}$ for all $n \in \mathbb{N}$,
> where clearly $(a_{n}) \to a$,
> but $f(a_{n}) \notin T$ for all $n \in \mathbb{N}$.
> whence $(f(a_{n})) \not\to f(a)$,
> contradicting our requirement that $f$ be sequentially continuous.
> Therefore, $f$ is continuous at $a$.
> <span class="QED"/>

Another topological property that can be shown using sequences for metric spaces is [[Sequential closedness]].

#
---
#state/tidy | #lang/en | #SemBr

---
aliases:
  - sequentially closed
tags:
  - public
---
[[First countability axiom]]
# Sequential closedness 

Let $X$ be a [[topological space]].
A subset $F \sube X$ is **sequentially closed** iff every [[Convergence|convergent sequence]] $(x_{n})_{n=1}^\infty$ in $F$ such that $(x_{n}) \to x$ has $x \in F$. #m/def/topology 
Every [[Topological space|closed]] set is sequentially closed.

> [!check]- Proof
> Let $F \sube X$ be closed, $V = X \setminus F$,
> and $(x_n)_{n=1}^\infty$ be sequence in $F$ such that $(x_{n})\to x \in V$.
> But since $V$ is an open neighbourhood of $x$,
> there exists some $N$ such that $x_{n} \in V$ for all $n > N$,
> so $x_{n} \notin F$ for all $n > N$, a contradiction.
> <span class="QED"/>

## Main theorem

Let $X$ be [[First countability axiom|first-countable]] space.
Then $F \sube X$ is [[Topological space|closed]] iff it is sequentially closed. #m/thm/topology 

> [!check]- Proof
> The forward direction is given above.
> For the converse, let $F \sube X$ such that for every sequence $(x_n)_{n=1}^\infty$,
> $(x_{n}) \to x$ implies $x \in F$.
> Suppose $V = X \setminus F$ is not open in $X$
> Then there exists some $y \in V$ such that for every neighbourhood $U$ of $y$,
> $U \cap F \neq \0$.
> Since $X$ is [[First countability axiom|first-countable]], we may construct a [[nested neighbourhood basis]] $\{ S_{n} \}_{n=1}^\infty$,
> for which $S_{n} \cap F \neq \0$ for all $n \in \mathbb{N}$.
> One may then construct a sequence $(x_n)_{n=1}^\infty$ such that $x_{n} \in S_{n} \cap F$ for all $n \in \mathbb{N}$.
> But then $(x_{n})\to y \in V$,
> contradicting the requirement that $F$ be sequentially closed.
> Hence $V$ must be open, whence $F$ is closed.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 

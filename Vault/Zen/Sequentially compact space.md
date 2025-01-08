---
aliases:
  - compact metric space
  - sequential compactness
tags:
  - public
---
[[Complete metric space]]
# Sequentially compact space

A topological space $X$ is said to be **sequentially compact** iff every sequence $(x_n)_{n=1}^\infty$ in $X$ has a convergent [[subsequence]] with a limit in $X$. #m/def/topology 

In general, sequential compactness is neither [[Strong and weak conditions|weaker nor stronger]] than [[Compact space|compactness]].
However, the [[#Main theorem]] describes when these conditions are equivalent.

## Main theorem

Let $X$ be a [[Second countability axiom|second-countable]] [[topological space]], e.g. a [[Metric space]].
Then $X$ is [[Compact space|compact]] iff it is sequentially compact. #m/thm/topology 

> [!check]- Proof
> Let $X$ be a [[First countability axiom|first-countable]] [[Compact space]],
> and $(x_n)_{n=1}^\infty \in X$ be a sequence with end pieces $M_{m} = \{ m_{n} \}_{n=m}^\infty$.
> The intersection of finite end pieces will always be nonempty,
> since $m \geq n \implies M_{m} \sube M_{n}$,
> so by [[Compact space#Complement characterisation]] $\bigcap_{n = 1}^\infty M_{n} \neq \0$
> and thus the intersection of [[closure|closures]] $\bigcap_{n=1}^\infty M_{n} \neq \0$.
> Since [[Limit points are points contained in the closure of every end piece]],
> $x_n$ has at least one limit point,
> and since [[Limit points are limits of convergent subsequences in a first-countable space]],
> $x_{n}$ has a convergent subsequence.
> Therefore $X$ is sequentially compact.
> 
> For the converse, let $X$ be a [[Second countability axiom|second-countable]] sequentially compact space.
> [[Second countable implies Lindelöf]], so without loss of generality we can take a countable [[Cover set|open cover]] $( U_{n} )_{n = 1}^\infty \sube X$.
> Let $V_n = \bigcup_{i=1}^n U_{i}$ be partial unions of the open cover.
> Assume $U_{n}$ has no finite subcover,
> so $X \setminus V_{n} \neq \0$ for all $n \in \mathbb{N}$,
> so we can construct a sequence $(x_{n})_{n=1}^\infty \in X$ with $x_{n} \notin V_{n}$.
> Since $X$ is sequentially compact, $x_{n}$ has a convergent subsequence,
> and the limit thereof is a limit point of $x_{n}$ because [[Limit points are limits of convergent subsequences in a first-countable space]].
> Therefore let $a \in X$ be a [[Limit point]] of $x_{n}$.
> Since $U_{n}$ covers $X$,  $a \in U_{m}$ for some $m \in \mathbb{N}$,
> so both $U_m$ and $V_m$ are open neighbourhoods of $a$.
> Since $a$ is a limit point of $x_n$, its neighbourhood $V_m$ contains infinite $x_n$,
> which contradicts our construction.
> Therefore $U_n$ must have a finite subcover.
> <span class="QED"/>

Note the forward statement only requires the [[First countability axiom]],
whereas the converse requires both first-countability and [[Lindelöf space|Lindelöf]].

## Properties
- Any finite subspace is compact[^fin]
- Any compact subspace is closed and bounded[^clobou]
- Closed subspaces of a compact space are compact
- [[Heine-Borel theorem]]: For Euclidean space, a subset is compact iff. it is closed a bounded

[^fin]: Since at least one element must be repeated infinitely many times in a sequence by the [[Pigeonhole principle]],
  yielding an eventually constant subsequence.
[^clobou]: Closedness follows from the fact that it must be [[Sequential closedness|sequentially closed]] (since subsequences of a convergent sequence converge to the same limit).
  Boundedness is trivial, since an unbounded set contains divergent sequences.


#
---
#state/tidy | #lang/en | #SemBr

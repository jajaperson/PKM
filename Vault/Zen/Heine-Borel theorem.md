---
tags:
  - public
---
[[Compact space]]
# Heine-Borel theorem

The **Heine-Borel** characterizes compact subsets of [[Real coördinate space]].
Let $S \sube \mathbb{R^n}$.
Then $S$ is [[Compact space|compact]] iff it is [[Topological space|closed]] and [[Bounded set|bounded]]. #m/thm/topology 

> [!check]- Proof
> The forward direction follows from [[Compact subsets of a Hausdorff space are closed]] and [[Compact sets in a metric space are bounded]].
> 
> For the converse, let $K \sube X$ be closed and bounded.
> Then it can be enclosed with an $n$-box $[-a,a]^n$.
> Since [[Closed subsets of a compact space are compact]], it is enough to prove $T_{0} =[-a,a]^n$ is compact.
> 
> Suppose $T_{0}$ is not compact.
> Then there exists an open cover $\{ U_{\alpha} \}_{\alpha \in A}$ with no finite subcover.
> $T_{0}$ can be broken into $2^n$ sub-boxes of half its side length,
> at least one of which must require an infinite subcover of $\{ U_{\alpha} \}_{\alpha \in A}$.
> Call this $T_{1}$.
> Continuing this argument iteratively,
> one obtains a sequence of shrinking $n$-boxes
> $$
> \begin{align*}
> T_{0} \supsetneq T_{1} \supsetneq \dots \supsetneq T_{k} \supsetneq \cdots
> \end{align*}
> $$
> each requiring infinite subcovers, where $T_{k}$ has side length $2^{1-k}a$.
> One may construct a sequence $(x_k)_{k=1}^\infty$ such that $x_{k} \in T_{k}$,
> which is clearly a [[Cauchy sequence]] and thus [[Convergence|converges]] to some $x$ by completeness of $\mathbb{R}^n$.
> By [[sequential closedness]] $x \in T_{k}$ for all $k \in \mathbb{N}_{0}$.
> Now since $\{ U_{\alpha} \}_{\alpha \in A}$ is a cover there exists some $\beta \in A$ such that $x \in U_{\beta}$,
> and by openness there exists open ball $\mathrm{B}_{\epsilon}(x) \sube U_{\beta}$.
> For sufficiently large $k$, $T_{k} \sube \mathrm{B}_{\epsilon}(x) \sube U_{\beta}$,
> whence $\{ U_{\beta} \}$ is a finite subcover of $T_{k}$, a contradiction.
> Therefore $T_{0}$ is compact, so $K$ is compact.
> <span class="QED"/>

An alternate proof follows from [[Tikhonov's theorem]].

#
---
#state/tidy | #lang/en | #SemBr

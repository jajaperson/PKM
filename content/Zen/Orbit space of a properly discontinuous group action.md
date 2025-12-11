---
tags:
  - public
---
[[Properly discontinuous group action]]
# Orbit space of a properly discontinuous group action

Let $G$ be a (discrete) group acting [[Continuous group action|continuously]] and [[Properly discontinuous group action|properly discontinuously]] on a topological space $\tilde{X}$,
and let $X = \tilde{X} / G$ be the [[orbit space]] with the [[quotient topology]] and projection $p : \tilde{X} \twoheadrightarrow X$.
Then $p$ is a [[covering]].[^loose] #m/thm/topology 

> [!check]- Proof
> Let $x = p(\tilde{x}) = G \tilde{x} \in X$.
> Since $G$ acts [[Properly discontinuous group action|properly discontinuously]],
> $\tilde{x}$ has an open neighbourhood $\tilde{U}$ such $\gamma_{1} \tilde{U} \cap \gamma_{2} \tilde{U} = \0$ for any $\gamma_{1},\gamma_{2} \in G$ with $\gamma_{1} \neq \gamma_{2}$.
> Then $U = p(\tilde{U}) = G \tilde{U}$ is an evenly covered open neighbourhood of $x$: $p^{-1}(U) = p^{-1}(p(\tilde{U})) = \amalg_{\gamma  \in G} \gamma \tilde{U}$ 
> and $p \restriction \gamma \tilde{U} : \gamma \tilde{U} \to U$ is a homeomorphism for each $\gamma \in G$,
> since it is surjective and continuous (by construction),
> injective (no to points in $\tilde{U}$ lie in the same orbit by proper continuity),
> and open (in fact $p$ is open, since $\tilde{V}$ open implies $\gamma \tilde{V}$ open for all $\gamma$, so $\bigcup_{\gamma} \gamma\tilde{V} = p^{-1} V$ is open and thus $V = p(\tilde{V})$ is open).
> Thus every $x \in X$ has an evenly covered neighbourhood, so $p$ is a [[covering]] of the [[orbit space]] $X$ with $\tilde{X}$ itself.
> <span class="QED"/>

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], pp. 81–82

## Properties

- A stronger result is obtained for the [[Orbit space of a properly discontinuous effective group action]]: $G$ is itself the deck transformation group.
- If $\tilde{X}$ is simply connected $\pi_{1}(X,x_{0}) = G$ and $p$ is a [[Universal covering]].

#
---
#state/tidy | #lang/en | #SemBr

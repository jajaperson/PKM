---
aliases:
  - properly discontinuous
  - properly discontinuously
tags:
  - public
---
[[Group action]]
# Properly discontinuous group action

A group $G$ acting on a [[topological space]] $X$ is called **properly discontinuous**[^eig] 
iff every $x \in X$ has a neighbourhood $U$
such that for every $\gamma_{1},\gamma_{2} \in G$ with $\gamma_{1} \neq \gamma_{2}$, $\gamma_{1}U \cap \gamma_{2}U = \0$. #m/def/topology

[^eig]: German _eigentlich diskontinuierlich_

## Properties

1. A properly discontinuous group action is necessarily [[Free group action|free]].
2. If $G$ is also topological group and acts [[Continuous group action|continuously]], then the orbit map $G \to Gx$ is a homeomorphism of [[Discrete topology|discrete]] topological spaces.

> [!check]- Proof of properties 1–2
> Let $G$ be a topological group acting on $X$ [[Continuous group action|continuously]] and properly discontinuously.
> 
> Assume that $G$ does not act [[free group action|freely]], i.e. there exist $\gamma_{1},\gamma_{2} \in G$ with $\gamma_{1} \neq \gamma_{2}$ such that $\gamma_{1} x = \gamma_{2} x$ for some $x$.
> Then for any neighbourhood $U$ of $x$, $\gamma_{1}x = \gamma_{2}x \in \gamma_{1}(U) \cap \gamma_{2}(U)$,
> violating proper discontinuity.
> Thus $G$ acts freely.
> 
> Now consider the [[Group action orbit|orbit]] of a point $x$ with its subspace topology and the corresponding orbit map $o_{x} : G \to Gx : \gamma \mapsto \gamma x$.
> 
> Assume there exists $\gamma_{1}x \in Gx$ with $\{ \gamma_{1}x \}$ not open in $Gx$.
> Let $U$ be an open neighbourhood of $x$ in $X$.
> Since $\gamma_{1}$ is a homeomorphism, $\gamma_{1} U$ is open in $X$, and thus $\gamma_{1} U \cap Gx$ is open in $Gx$,
> so at least one distinct point $\gamma_{2} x$ is contained in $\gamma_{1} U$.
> Then $\gamma_{2}x \in \gamma_{1} U \cap \gamma_{2} U$,
> violating proper discontinuity.
> Therefore $Gx$ must be [[Discrete topology|discrete]].
> 
> Now clearly the orbit map $o_{x}$ is continuous and bijective (injectivity by freeness, surjectivity by construction).
> Thus every singleton $\{ \gamma_{1} \}$ in $G$ is the preïmage of a singleton $\{ \gamma_{1}x \}$ in $Gx$
> and is therefore open.
> Therefore $G$ is discrete,
> and $o_{x}$ is a homeomorphism, since the inverse $o_{x}^{-1}$ is continuous as a map between discrete spaces.
> <span class="QED"/>


3. [[Orbit space of a properly discontinuous group action]] $X / G$ covers $X$.

#
---
#state/tidy | #lang/en | #SemBr

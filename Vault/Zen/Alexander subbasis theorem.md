---
tags:
  - public
---
[[Topological subbasis]]
# Alexander subbase theorem

Let $X$ be a [[topological space]].
Then $X$ is [[Compact space|compact]] iff $X$ has a [[Topological subbasis|subbasis]] $\mathcal{S}$ such that every open subbasic [[Cover set|cover]] of $X$ (i.e. by elements of $\mathcal{S}$) has a finite subcover. #m/thm/topology 

> [!check]- Proof
> The forward direction is trivially proven.
> For the converse, suppose towards contradiction that $X$ is not compact but every subbasic open cover from $\mathcal{S}$ has a finite subcover.
> Let $P$ denote the set of all open covers of $X$ lacking a finite subcover [[poset|partially ordered]] by inclusion.
> By [[Zorn's lemma]], $P$ has a [[Poset#^maximal|maximal]] element $\mathcal{C}$, which itself is an open cover of $X$ admitting no finite subcover,
> By maximality, if $V$ is an open set such that $V \notin \mathcal{C}$ then $\mathcal{C} \cup \{ V \}$ has a finite subcover $\{ V \} \cup \mathcal{C}_{V}$ for some finite $\mathcal{C}_{V} \sube \mathcal{C}$.
> 
> Now clearly $\mathcal{C}\cap \mathcal{S}$ does not cover $X$, for if it did it would have a finite subcover.
> Thus there exists some $x \in X$ not covered by $\mathcal{C} \cap \mathcal{ S}$.
> But since $\mathcal{C}$ does cover $X$, there exists some $U \in \mathcal{C}$ with $x \in U$.
> Since $\mathcal{S}$ is a [[Topological subbasis|subbasis]], there must exist some finite collection $\{ S_{i} \}_{i=1}^n \sube \mathcal{S}$ of subbasic open sets such that $x \in \bigcap_{i=1}^n S_{i} \sube U$.
> Now $\{ S_{i} \}_{i=1}^n \not\sube \mathcal{C}$, for otherwise $\mathcal{C}\cap \mathcal{S}$ would cover $x$.
> Defining $\mathcal{C}_{S_{i}}$ as above and $\tilde{\mathcal{C}} = \bigcap_{i=1}^n \mathcal{C}_{S_{i}}$, it follows $\{ S_{i} \} \cup \tilde{\mathcal{C}}$ is a finite subcover of $\{ S_{i} \} \cup \mathcal{C}$ for any $i \in \mathbb{N}_{n}$.
> Let $Y = \bigcup \tilde{\mathcal{C}}$ and $Z = X \setminus Y$.
> Now for any $A \sube X$, $\{ A \} \cup \tilde{\mathcal{C}}$ covers $X$ iff $Z \sube A$,
> whence $Z \sube S_{i}$ for each $i \in \mathbb{N}_{n}$ and thus $Z \sube \bigcap_{i=1}^n S_{i} \sube U \in \mathcal{C}$,
> implying $\{ U \} \cup \tilde{\mathcal{C}}$ is a finite subcover of $\mathcal{C}$,
> contradicting $\mathcal{C} \in P$.
> Therefore $X$ must be compact. <span class="QED"/>

This proof requires [[Zorn's lemma]], and therefore depends on the [[Axiom of Choice]],
however it may be formulated to only require the weaker [[Ultrafilter lemma]] which is equivalent to the [[Boolean prime ideal theorem]].

#
---
#state/tidy | #lang/en | #SemBr

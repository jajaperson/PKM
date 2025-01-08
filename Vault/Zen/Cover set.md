---
tags:
  - public
aliases:
  - open cover
---
[[Topology MOC]]
# Cover

Let $X$ be a set
A collection $\mathcal{U} \sube \mathcal{T}$ of subsets of $X$ is called a **cover** iff $X \sube \bigcup_{U \in \mathcal{U}}U$. #m/def/topology 
Typically $X$ is a [[topological space]], in which case $\mathcal{U}$ is called an **open cover** iff every $U \in \mathcal{U}$ is open.

## Further terminology

- A **subcover** of $\mathcal{U}$ is a a subcollection of $\mathcal{U}$ that is also a cover of $X$.
- A **refinement** of $\mathcal{U}$ is a cover $\mathcal{V}$ such that every $V \in \mathcal{V}$ is contained in at least one $U \in \mathcal{U}$, i.e. $U \sube V$.
- A cover $\mathcal{U}$ is **locally finite** iff every $x \in X$ as a [[neighbourhood]] intersecting with finitely many $U \in \mathcal{U}$.

## Properties

- A space is [[Compact space|compact]] iff every open cover has a finite subcover.
- A space is [[Paracompact space|paracompact]] iff every open cover has a locally finite open refinement.

#
---
#state/tidy | #lang/en | #SemBr

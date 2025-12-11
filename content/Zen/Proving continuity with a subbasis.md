---
tags:
  - public
---
[[Topological subbasis]]
# Proving continuity with a subbasis

Let $(X, \mathcal{T}_{X})$ and $(Y, \mathcal{T}_{Y})$ each be a [[Topological space]],
let $\mathcal{S}$ be a [[Topological subbasis|subbasis]] of $\mathcal{T}_{Y}$,
and let $f : X \to Y$.
Then $f$ is [[Continuity|continuous]] iff
the preïmage $f^{-1}(V)$ is open for all $V \in \mathcal{S}$.
#m/thm/topology 

> [!check]- Proof
> Since a subbasis is a family of open sets,
> it is clear that given continuous $f$ the preïmage of subbasic open neighbourhoods is open.
> Let $f : X \to Y$ such that for all $V \in \mathcal{S}$,
> the preïmage $f^{-1}(V)$ is open.
> First consider the completed [[Topological basis|basis]] $\mathcal{B}$.
> Let $V \in \mathcal{B}$, implying there exists a finite sequence $(S_{i})_{i=1}^n \in \mathcal{S}$ where $n \in \mathbb{N}$ such that $V = \bigcap_{i=1}^n S_{i}$.
> Then
> $$
> \begin{align*}
> f^{-1}(V) = f^{-1} \left(\bigcap_{i=1}^n S_{i}\right) = \bigcap_{i=1}^n f^{-1}(S_{i})
> \end{align*}
> $$
> which is the finite intersection of open sets and is thus open.
> Hence for all $V \in \mathcal{B}$,
> the preïmage $f^{-1}(V)$ is open.
> Now consider the entire generated topology $\mathcal{T}_{Y}$.
> Let $V \in \mathcal{T}_{Y}$, implying there exists an indexed family $(S_{i})_{i \in I} \in \mathcal{B}$ such that $V = \bigcup_{i \in I}S_{i}$.
> Then
> $$
> \begin{align*}
> f^{-1}(V) = f^{-1} \left( \bigcup_{i \in I}S_{i} \right) = \bigcup{i\in I} f^{-1}(S_{i}) 
> \end{align*}
> $$
> which is the union of open sets and thus open.
> Hence the preïmage of every open set is open,
> wherefore $f$ is continuous.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

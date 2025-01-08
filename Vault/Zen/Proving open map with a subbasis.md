---
tags:
  - public
---
[[Topological subbasis]]
# Proving open map with a subbasis

Let $(X, \mathcal{T}_{X})$ and $(Y, \mathcal{T}_{Y})$ each be a topological space,
let $\mathcal{S}$ be a [[Topological subbasis|subbasis]] of $\mathcal{T}_{X}$,
and let $f : X \to Y$.
Then $f$ is an [[Open and closed maps|open map]] iff the image $f(V)$ is open for every subbasic open set $V \in \mathcal{S}$. #m/thm/topology 

> [!check]- Proof
> Clearly if $f$ is [[Open and closed maps|open]] the image of every $V \in \mathcal{S}$ is open.
> For the converse, first consider the completed [[Topological basis|basis]] $\mathcal{B}$.
> Let $V \in \mathcal{B}$, implying there exists a finite sequence $(S_i)_{i=1}^n \in \mathcal{S}$ such that $V = \bigcap_{i=1}^n S_{i}$.
> Then
> $$
> \begin{align*}
> f(V) = f \left( \bigcap_{i=1}^n S_{i}\right) = \bigcap_{i=1}^n f(S_{i})
> \end{align*}
> $$
> which is the finite intersection of open sets and is thus open.
> Hence $f(V)$ is open for all $V \in \mathcal{B}$.
> Now consider the whole generated topology $\mathcal{T}_{X}$.
> Let $V \in \mathcal{T}_{X}$, implying there exist $(S_{i})_{i \in I} \in \mathcal{B}$ such that $V = \bigcup_{i \in I}S_{i}$.
> Then
> $$
> \begin{align*}
> f(V) = f \left( \bigcup_{i \in I} S_{i} \right) = \bigcup_{i \in I} f(S_{i})
> \end{align*}
> $$
> which is the union of open sets and thus open.
> Hence the image of every open set is open,
> wherefore $f$ is open.
> <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr

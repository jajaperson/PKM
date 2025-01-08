---
tags:
  - public
---
[[Topology MOC]]
# Quotient topology

The **quotient topology** is the canonical way of defining a topology on a [[Algebraic quotient]],
as defined by an [[Equivalence relation]] or [[Equivalence relation#Natural projection|projection]].
Let $(X, \mathcal{T}_{X})$ be a topological space, and $\pi : X \twoheadrightarrow S$[^fibres] be a surjective function.
The **quotient topology** on $S \cong X / \pi$ is the [[Coarseness and fineness of topologies|finest topology]] for which $\pi$ is continuous.[^br] #m/def/topology 
$$
\begin{align*}
\mathcal{T}_{\pi} = \{ U \sube S : \pi^{-1}U \in \mathcal{T}_{X} \}
\end{align*}
$$
[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], pp. 28–29
[^fibres]: where $S$ is often constructed as the fibres of $\pi$, which is precisely the [[Algebraic quotient]]ient]] $X / {\sim}$

## Further characterisations

### Universal property

For every topological space $(Z, \mathcal{T}_{Z})$ and $f : S \to Z$, 
then $f$ is continuous iff $f\pi : X \to Z$. #m/thm/topology 
![[quotient topology universal property (bradley).png#invert]]

> [!check]- Proof
> First we will prove that the quotient topology as characterised above satisfies the universal property.
> Let $(X, \mathcal{T}_{X})$ be a topological space,
> $\pi : X \twoheadrightarrow S$ be a surjective function,
> and $S$ be endowed with the quotient topology $\mathcal{T}_{\pi}$.
> Let $(Z, \mathcal{T}_{Z})$ be some topological space,
> and let $f : S \to Z$ be a function.
> If $f$ is continuous,
> then so is the composition $f\pi$ of continuous functions.
> Now suppose $f\pi : X \to Z$ is continuous,
> and let $U \in \mathcal{T}_{Z}$.
> Then $(f\pi)^{-1} U = \pi^{-1} f^{-1} U \in \mathcal{T}_X$ whence $f^{-1} \in \mathcal{T}_{S}$.
> Thus $f$ is continuous.
> Therefore $f$ is continuous iff $f\pi$ is continuous.
> 
> Now let $\mathcal{T}'$ be a topology on $S$ satisfying the universal property.
> In particular, let $(Z, \mathcal{T}_{Z}) = (S, \mathcal{T}_{\pi})$ and $f = \id_{S} : s \mapsto s$.
> Then since $f\pi = \pi$ is continuous so is $f$,
> wherefore $\mathcal{T}'$ is finer than $\mathcal{T}_{\pi}$
> Now let $(Z, \mathcal{T}_{Z}) = (S, \mathcal{T}')$ and $f = \id_{Y}$.
> Since $\id_{Y}$ is continuous, so too is $\id_{Y}\pi = \pi$.
> But $\mathcal{T}_{\pi}$ is the finest topology for which $\pi$ is continuous, so $\mathcal{T}_{\pi} = \mathcal{T}'$.
> <span class="QED"/>

## Further terminology

- An equivalence relation is called a [[Closed equivalence relation]] iff it is closed regarded as a subset of $X \times X$

## Properties

- From the universal property, a function $f : S \to Z$ is continuous iff $\pi: X \to Z$ is continuous and constant for the fibres of $\pi : X \twoheadrightarrow S$.
- A function $g : S \to Z$ is said to factor through $\pi$ iff it is constant for fibres of $\pi : X \twoheadrightarrow S$.

## Spaces constructed as quotients

- [[Unit circle topology]] as defined by $[0,1]$ with $0 \sim 1$
- [[Möbius strip]], [[Klein bottle]], and other shapes constructed using a [[Fundamental polygon]]
- [[Projective space]]

#
---
#state/tidy | #lang/en | #SemBr

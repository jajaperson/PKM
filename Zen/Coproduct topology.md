---
tags:
  - public
---
[[Topology MOC]]
# Coproduct topology

The **coproduct topology** or **sum topology** is the canonical way of defining a topology on the [[Disjoint union]] of spaces.
Let $\{ (X_{\alpha}, \mathcal{ T}_{\alpha}) \}_{\alpha \in A}$ be an arbitrary collection of topological spaces with disjoint union
$$
\begin{align*}
X = \coprod_{\alpha \in A} X_{\alpha}
\end{align*}
$$
and $\iota_{\alpha} : X_{\alpha} \rightarrowtail X$ as canonical inclusions.
The **coproduct topology** on $X$ is the [[Coarseness and fineness of topologies|finest topology]] on $X$ for which all inclusions $\iota_{\alpha}$ are continuous.[^br] #m/def/topology 
$$
\begin{align*}
\mathcal{T}_{X} = \{ U \sube X : \iota_{\alpha}^{-1} U \in \mathcal{T}_{\alpha} \quad \forall \alpha \in A \}
\end{align*}
$$

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], pp. 32–33

## Further characterisations

### Explicit

The open sets in the coproduct topology correspond exactly to the unions of images of open sets in the constituent topologies, i.e.
$$
\begin{align*}
\mathcal{T}_{X} &= \{ \bigcup_{\alpha \in A} \iota_{\alpha} U_{\alpha} : U_{\alpha} \in \mathcal{T}_{\alpha} \} \\
&= \{ \coprod_{\alpha \in A} U_{\alpha} : U_{\alpha} \in \mathcal{T}_{\alpha} \}
\end{align*}
$$

> [!info]- Bases for the coproduct topology
> The images of open sets form a [[topological basis]]:
> $$
> \begin{align*}
> \mathcal{B}_{X} = \{ \iota_{\alpha}U_{\alpha} : U_{\alpha} \in \mathcal{T}_{\alpha} :\alpha \in A \}
> \end{align*}
> $$
> It follows that if $\mathcal{B}_{\alpha}$ is a basis of $X_{\alpha}$ for each $\alpha \in A$, the following is also a basis of $X$:
> $$
> \begin{align*}
> \mathcal{B}_{X}' = \{ \iota_{\alpha} U_{\alpha} : U_{\alpha} \in \mathcal{B}_{\alpha} : \alpha \in A \}
> \end{align*}
> $$

### Universal property for the coproduct topology

For every topological space $(Z, \mathcal{T}_{Z})$ and function $f : X \to Z$,
then $f$ is continuous iff $f\iota_{\alpha} : X_{\alpha} \to Z$ is continuous for all $\alpha \in A$. #m/thm/topology 
![[coproduct topology universal construction (bradley).png#invert]]

> [!check]- Proof
> First we will prove that the coproduct topology as characterised above satisfies the universal property.
> Let $\{ (X_{\alpha}, \mathcal{T}_{\alpha}) \}_{\alpha \in A}$ be topological spaces and let $X = \coprod_{\alpha \in A}$ be their disjoint union endowed with the coproduct topology and with canonical inclusions $\iota_{\alpha} : X_{\alpha} \rightarrowtail X$.
> Let $(Z, \mathcal{T}_{Z})$ be some topological space,
> and let $f : X \to Z$ be a function.
> If $f$ is continuous, then so are the compositions $f\iota_{\alpha}$ of continuous functions for all $\alpha \in A$.
> Now suppose $f\iota_{\alpha} : X_{\alpha} \to Z$ is continuous for all $\alpha \in A$,
> and let $U \in \mathcal{T}_{Z}$.
> Then $(f\iota_{\alpha})^{-1}U = \iota_{\alpha}^{-1}f^{-1} U \in \mathcal{T}_{\alpha}$ for all $\alpha \in A$,
> whence $f^{-1}U \in \mathcal{T}_{X}$.
> Thus $f$ is continuous.
> Therefore $f$ is continuous iff $f\iota_{\alpha}$ are continuous for all $\alpha \in A$.
> 
> Now let $\mathcal{T}'$ be a topology on $X$ satisfying the same universal property.
> In particular, let $(Z, \mathcal{T}_{Z}) = (X, \mathcal{T}_{X})$ and $f = \id_{X} : (X, \mathcal{T}') \to (X, \mathcal{T}_{X})$.
> Then since $\id_{X}\iota_{\alpha}$ is continuous for all $\alpha \in A$, so is $\id_{X} : (X, \mathcal{T}') \to (X, \mathcal{T}_{X})$,
> wherefore $\mathcal{T}'$ is finer than $\mathcal{T}_{X}$
> Now let $(Z, \mathcal{T}_{Z}) = (X, \mathcal{T}_{X})$ and $f = \id_{X}: (X, \mathcal{T}') \to (X, \mathcal{T}')$.
> Since $\id_{X}$ is continuous, so too is $\id_{X} \iota_{\alpha} = \iota_{\alpha}$ for all $\alpha \in A$.
> But $\mathcal{T}_{X}$ is the finest topology for which all $\iota_{\alpha}$ are continuous,
> so $\mathcal{T}' = \mathcal{T}_{X}$
> <span class="QED"/>

## Spaces constructed as coproducts

- The [[Discrete topology]] is the coproduct of all its points viewed as singletons.

#
---
#state/tidy | #lang/en | #SemBr

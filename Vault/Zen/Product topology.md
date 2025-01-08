---
tags:
  - public
---
[[Topology MOC]]
# Product topology

The **product topology** is the canonical way of defining a topology on the [[Cartesian product]] of spaces.
Let $\{ (X_{\alpha}, \mathcal{T}_{\alpha}) \}_{\alpha \in A}$ be an arbitrary collection of topological spaces with cartesian product
$$
\begin{align*}
X = \prod_{\alpha \in A} X_{\alpha}
\end{align*}
$$
and $\pi_{\alpha} : X \twoheadrightarrow X_{\alpha}$ as projections.
The **product topology** on $X$ is the [[Coarseness and fineness of topologies|coarsest topology]] on $X$ for which all projections $\pi_{\alpha}$ are continuous.[^br] #m/def/topology 
Thus it has [[Topological subbasis]]
$$
\begin{align*}
\mathcal{A}_{X} = \{ \pi_{\alpha}^{-1}U : U \in \mathcal{T}_{\alpha} : \alpha \in A \}
\end{align*}
$$

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], pp. 30–31

## Further characterisations

### Explicit

The explicit characterisation is a little clunky due to the quirks of uncountable cartesian products.
The product topology may be defined with the following [[topological basis]] #m/thm/topology 
$$
\begin{align*}
\mathcal{B}_{X} = \left\{  \prod_{\alpha \in A} U_{\alpha} : U_{\alpha} \in \mathcal{T}_{\alpha} \text{ where $U_{\alpha} \neq X_{\alpha}$ for finitely many $\alpha$}  \right\}
\end{align*}
$$

> [!check]- Proof of basis
> It follows from the first characterisation that the following forms a [[Topological subbasis]]
> $$
> \begin{align*}
> \mathcal{A}_{X} &= \{ \pi^{-1}_{\alpha} U : U \in \mathcal{T}_{\alpha} : \alpha \in A \} \\
> &= \left\{ \prod_{\beta \in A} \begin{cases}
> U & \beta = \alpha \\
> X_{\alpha} & \beta \neq \alpha
> \end{cases} : U \in \mathcal{T}_{\alpha} : \alpha \in A \right\}
> \end{align*}
> $$
> When this is completed to a [[Topological basis]] via finite intersections,
> one obtains the explicit characterisation above.
> <span class="QED"/>

### Universal property for the product topoloogy

For every topological space $(Z, \mathcal{T}_{Z})$ and function $f : Z \to X$,
then $f$ is continuous iff $\pi_{\alpha} f : Z \to X_{\alpha}$ is continuous for all $\alpha \in A$. #m/thm/topology 
![[product topology universal property (bradley).png#invert]]

> [!check]- Proof
> We will first prove that the product topology satisfies the universal property.
> Let $\{ X_{\alpha}, \mathcal{T}_{\alpha} \}_{\alpha \in A}$ be topological spaces
> and let $X = \prod_{\alpha \in A} X_{\alpha}$ be the cartesian product endowed with the product topology $\mathcal{T}_{X}$.
> Let $(Z, \mathcal{T}_{Z})$ be a topological space, and $f : Z \to X$ be a function.
> If $f$ is continuous, then so are the compositions $\pi_{\alpha}f$ of continuous functions for all $\alpha \in A$.
> Now suppose $\pi_{\alpha} f : Z \to X_{\alpha}$ is continuous for all $\alpha \in A$.
> We use the method of [[Proving continuity with a subbasis]].
> Let $U \in \mathcal{A}_{X}$.
> Then $U = \pi^{-1}_{\alpha}V$ for some $\alpha \in A$ and $V \in X_{\alpha}$.
> Since $\pi_{\alpha} f$ is continuous,
> $f^{-1}U = (\pi_{\alpha}f)^{-1}V \in \mathcal{T}_{Z}$.
> Thus the preïmage $f^{-1}U$ of every subbasic open set $U \in \mathcal{A}_{X}$ is open,
> whence $f$ is continuous.
> Therefore $f$ is continuous iff $\pi_{\alpha}f$ is continuous for all $\alpha \in A$.
> 
> Now let $\mathcal{T'}$ be a topology on $X$ satisfying the same universal property.
> In particular, let $(Z, \mathcal{T}_{Z}) = (X, \mathcal{T}_{X})$ and $f = \id_{X} : (X, \mathcal{T}_{X}) \to (X, \mathcal{T}')$.
> Then since $\pi_{\alpha} \id_{X} = \pi_{\alpha} : (X, \mathcal{T}_{X}) \to X_{\alpha}$ is continuous for all $\alpha \in A$, so is $\id_{X} : (X, \mathcal{T}_{X}) \to (X, \mathcal{T}')$,
> wherefore $\mathcal{T}'$ is coarser than $\mathcal{T}_{X}$.
> Now let $(Z, \mathcal{T}_{Z})=(X, \mathcal{T}')$ and $f = \id_{X} : (X, \mathcal{T}') \to (X, \mathcal{T}')$.
> Since $\id_{X}$ is continuous, so too is $\pi_{\alpha}f$ for all $\alpha \in A$.
> But $\mathcal{T}_{X}$ is the coarsest topology on $X$ such that $\pi_{\alpha}f$ is continuous for all $\alpha \in A$,
> so $\mathcal{T}_{X} = \mathcal{T}'$.
> <span class="QED"/>

## Spaces constructed as products

- [[Real coördinate space]] as products of $\mathbb{R}$ with the standard topology, e.g. $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$.
- [[Torus topology]] $\mathbb{T}^1 = \mathbb{S}^1 \times \mathbb{S}^1$

## Properties

- Continuous maps from the product topology are continuous in each argument
- [[Canonical projections are open]]

#
---
#state/tidy | #lang/en | #SemBr

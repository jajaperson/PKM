---
tags:
  - public
---
[[Group representation theory MOC]]
# Generalized projection operator of a representation

Given a (unitary) [[representation of a compact group]] $U : G \to \mathrm{GL}(V)$, the **generalized projection operators**[^kep] $P^\mu_{jk}$ are given by #m/def/rep
$$
\begin{align*}
P^\mu_{jk} &= d_{\mu} \int_{G} [\Gamma^\mu(g)^{-1}]_{jk}U(g) \,d\mu(g) \\ &= d_{\mu}\int_{G}\overline{\Gamma^\mu_{kj}(g)}U(g) \,d\mu(g) \\
U(g) &= \sum_{\mu;j,k} \Gamma^{\mu}_{kj}(g)P^\mu_{jk}
\end{align*}
$$
where the second line is allowed for finite groups since [[Every finite complex representation of a compact group is equivalent to a unitary representation]], and $d\mu$ is the normalized [[Haar measure]].

> [!missing] #to/complete 
> While the definition above is for all compact groups, I haven't fully formulated this yet.

[^kep]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations]], pp. 50–51.

## Explanation

Considering [[Irreducible orthonormal basis]] $e^{\mu\alpha}_{j}$ for each $V^{\mu\alpha}$,
then the generalized projection operator $P^{\mu}_{\ell k}$ sends $e^{\mu\alpha}_{\ell}$ to $e^{\mu\alpha}_{k}$ and all other basis vectors to $\vab 0$, that is
$$
\begin{align*}
P^{\mu}_{\ell k}e^{\nu\alpha}_{j} = \delta_{\mu\nu}\delta_{\ell j}e^{\mu\alpha}_{k}
\end{align*}
$$
As a notational mnemonic one can imagine $P^{\mu}_{\ell\to k}$.
We may then define [[Projection operator|projection operators]],
$$
\begin{align*}
P^{\mu}_{j} &= P^{\mu}_{jj} \\
P^{\mu} &= \sum_{j=1}^{d_{\mu}}P^{\mu}_{j}
\end{align*}
$$
the former onto the subspace spanned by $e^{\mu\alpha}_{j}$,
the latter being onto the subspace $\bigoplus_{\alpha} V^{\mu\alpha}$ transforming under irrep $\Gamma^\mu$.

If $P^\mu_{jk} \psi \neq 0$ for any $j,k$, then $\{ P^\mu_{jk} \}_{k=1}^{d_{\mu}}$ with fixed $j$ transform in $\Gamma^\mu$.

## Properties

- For given $\psi \in V$ and fixed $\mu,j$, either $P^{\mu}_{jk}\psi$ vanish for all $1 \leq k \leq d_{\mu}$ or they transform under $U$ in the irrep $\Gamma^\mu$ carried by an invariant subspace $V^{\mu\alpha}$ for some $\alpha$
  $$
  \begin{align*}
  U(g) P^{\mu}_{jk} = \sum_{\ell} P^{\mu}_{j\ell} \Gamma^{\mu}_{\ell k}
  \end{align*}
  $$
- $P^{\nu}_{ji}P^{\mu}_{\ell k} = \delta_{\mu\nu}\delta_{jk}P^{\mu}_{\ell i}$
- $\sum_{\mu}P^{\mu} = \mathbf{I}$, assuming $U$ is completely reducible.

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
aliases:
  - the order of a subgroup divides the order of a group
  - the order of an element divides the order of a group
  - subgroup index
---
[[Subgroup]]
# Lagrange's Theorem

Given a group $G$ and subgroup $H \sube G$, the order of the subgroup divides the order of the group. #m/thm/group 
This is often stated as
$$
\begin{align*}
\abs{G} = [G:H] \abs{H}
\end{align*}
$$
where $[G : H]$ is the number of unique (left or right) [[coset|cosets]] of $H$,
and is called the **subgroup index**.

> [!check]- Proof
> Let $H \sube G$.
> Any element $g \in G$ is contained at least in the [[coset]] $gH$.
> Since [[Cosets are either identical or disjoint]],
> cosets form a [[Partition]] of $G$.
> Since $G$ is finite there is a finite number of cosets in the partition $[G : H]$.
> The number of elements in each coset is equal to $\abs{H}$.
> Therefore, $\abs{G} = [G : H] \abs{H}$.
> <span class="QED"/>

## Corollary

The order $\abs{g}$ of an element $g \in G$ divides the order $\abs{G}$ of a finite group $G$,
since $\langle g \rangle$ forms a [[Cyclic subgroup]].

## Consequences

- [[Group of prime order|All prime-ordered groups are cyclic]]

#
---
#state/tidy | #lang/en | #SemBr
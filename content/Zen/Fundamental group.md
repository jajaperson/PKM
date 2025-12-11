---
tags:
  - public
---
[[Homotopy theory MOC]]
# Fundamental group

The **fundamental group** $\pi_{1}(X,x_{0})$ of a topological space $X$ with base point[^de] $x_{0} \in X$
is the automorphism group of $x_{0}$ in the [[Fundamental groupoid]],
i.e. the set of [[Homotopy of paths|homotopy classes]] of [[continuous loop|continuous loops]] with base point $x_{0}$ together with the joining operation to form a [[group]]. #m/def/homotopy 

2. **Associative** $[\alpha]([\beta] [\gamma]) = ([\alpha][\beta])[\gamma]$
3. **Identity** $[c_{x_{0}}T]$
4. **Inverse** by reverse paths

[^de]: German _die Fundamentalgruppe_ mit _Aufpunkt_ $x_{0}$

The fundamental group is the first in a series of higher [[Homotopy group|homotopy groups]].

## Functor

$\pi_{1} : \Top_{•} \to \Grp$ is a covariant [[functor]] from [[Category of pointed topological spaces]] to [[Category of groups]].
A basepoint-respecting continuous map $f \in \Top_{•}((X, x_{0}), (Y, y_{0}))$ is mapped as follows
$$
\begin{align*}
\pi_{1}(f) : \pi_{1}(X, x_{0}) &\to \pi_{1}(Y, y_{0}) \\
[\alpha] &\mapsto [f \circ \alpha]
\end{align*}
$$

> [!missing]- Proof of functor
> #missing/proof

## Properties

- If $X$ is [[Path connectedness|path-connected]] then all fundamental groups are isomorphic, so we write $\pi_{1}(X)$.
- A space is [[Simple connectedness|simply connected]] iff its fundamental group is trivial.
- [[Fundamental group respects products]]

#
---
#state/develop | #lang/en | #SemBr

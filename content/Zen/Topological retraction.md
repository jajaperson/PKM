---
aliases:
  - retract
  - retraction
tags:
  - public
---
[[Topology MOC]]
# Retraction

A **retraction** $r : X \to Y$ is a continuous map from a topological space $X$ to a subspace $Y \sube X$ that does not move points in the subspace,
i.e. $r(y) = y$ for all $y \in Y$. 
Alternatively, if $\iota : Y \hookrightarrow X$ is the natural inclusion of the [[subspace topology]],
then a retraction $r : X \twoheadrightarrow Y$ is a continuous left-inverse of $\iota$, i.e. $r\iota = \id_{Y}$. #m/def/topology 
A subspace $Y \sube X$ for which such a retraction exists is called a **retract** of $X$.

A special kind of retraction is a [[Deformation retraction]], which has the additional property that $\iota r \simeq \id_{X}$.

## Examples

- [[The boundary of a ball is not a retract]]
- Every one-point subset of $X$ is a retract, but only a deformation retract if $X$ is [[Contractible space|contractible]].

#
---
#state/tidy | #lang/en | #SemBr

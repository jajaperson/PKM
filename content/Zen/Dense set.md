---
tags:
  - public
---
[[Topology MOC]]
# Dense set
A subset $A$ of a [[topological space]] $X$ is said to be **dense** iff every point of $X$ is either in $X$ or arbitrarily close to an element of $X$. #m/def/topology 
This is defined formally using the following equivalent conditions:
1. $A$ is dense in $X$ iff the smallest [[Topological space|closed]] subset of $X$ containing $A$ is the whole of $X$.
2. $A$ is dense in $X$ iff the [[Closure]] of $A$ in $X$ is $X$ itself, i.e. $\Cl_{X}(A) = X$.
3. $A$ is dense in $X$ iff the [[Interior and exterior|exterior]] of $A$ is empty, i.e. $\Int(X \setminus A) = \0$.
4. $A$ is dense in $X$ with [[Topological basis|basis]] $\mathcal{B}$ iff very basic neighbourhood $B \in \mathcal{B}$ intersects with $A$ so that $A \cap B \neq \0$. ^D4

> [!missing]- Proof of equivalence
> #missing/proof

## Examples
### Metric topology
In a [[metric space]] $(M, d)$,
$A \sube M$ is dense in $M$ iff.
every [[Open ball]] in $M$ contains an element of $A$.
This is the same as condition [[#^D4]] above.

The set of rationals $\mathbb{Q}$ is _dense_ in the real numbers $\mathbb{R}$ with the standard euclidean metric.
A consequence of this is that a real number can be approximated to arbitrary precision by a rational number.

#
---
#state/develop | #lang/en | #SemBr

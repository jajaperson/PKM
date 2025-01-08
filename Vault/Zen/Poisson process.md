---
tags:
  - public
---
[[Poisson distribution]]
# Poisson process

A process of arrivals in continuous time is called a **Poisson process** with rate $\lambda$ iff both of the following conditions holds:

- The number of arrivals in an interval of length $t$ is distributed according to the [[Poisson distribution]] $\mathrm{Pois}(\lambda t)$
- The number of arrivals that occur in disjoint intervals are independent of each other

It follows that the number of arrivals in an interval of length 1 is distributed according to $\mathrm{Pois}(\lambda)$
and the time between arrivals are [[Independence of random variables|independently distributed]] according to the [[exponential distribution]] $\Exp(\lambda)$. #m/thm/prob 

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr

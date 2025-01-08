---
tags:
  - public
---
[[Number theory MOC]]
# Numeric partition

A **partition** of a number $n \in \mathbb{N}_{0}$ is just a set of numbers adding to $n$. #m/def/num
In order to have uniqueness, a partition is defined as an infinite [[sequence]] $(\lambda_{i})_{i=1}^\infty$ in $\mathbb{N}_{0}$ that adds to $n$ and is non-increasing.

1. $\lambda_{i} \geq \lambda_{i+1}$ for all $i \in \mathbb{N}$
2. $\sum_{i = 1}^{n} \lambda_{i} = n$

A graphical portrayal of a partition is a [[Young diagram]].

## Ordering

Partitions can be ordered by

- $\lambda = \mu$ iff $\lambda_{i} = \mu_{i}$ for all $i \in \mathbb{N}$
- $\lambda > \mu$ iff the first non-vanishing $\lambda_{i} - \mu_{i}$ is positive

#
---
#state/tidy | #lang/en | #SemBr

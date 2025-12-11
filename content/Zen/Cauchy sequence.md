---
tags:
  - public
---
[[Sequence]]
# Cauchy sequence

A [[sequence]] over a [[metric space]] $(X, d)$ is said to be **Cauchy** 
iff its terms get arbitrarily close together.
More formally, a sequence $(a_{n})_{n=1}^\infty$ is a Cauchy sequence
iff. for every $\epsilon > 0$
there exists an integer $N$
such that $d(a_{m}, a_{n}) < \epsilon$
for any $m > n > N$. #m/def/anal 

It is easy to prove that every [[Convergence|convergent sequence]] is a Cauchy sequence using the triangle inequality.
A metric space in which every convergent sequence is a Cauchy sequence is called a [[Complete metric space]].

#
---
#state/tidy | #lang/en | #SemBr

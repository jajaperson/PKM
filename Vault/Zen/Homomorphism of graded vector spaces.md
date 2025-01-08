---
mathLink-blocks:
  graded: graded
  homogenous: homogenous
tags:
  - public
---
[[Graded vector space]]
# Homomorphism of graded vector spaces

Let $f : V \to W$ be a [[linear map]] of $S$-graded vector spaces over $\mathbb{K}$.

-  $f$ is **graded** or **grade-preserving** iff $f(V_{\alpha}) \leq f(W_{\alpha})$ for all $\alpha \in S$. #m/def/linalg  
  See [[Strict category of graded vector spaces]]. ^graded
- If $(S, +)$ is a [[monoid]],
  then $f$ is **homogenous** of degree $\beta \in S$ iff $f(V_{\alpha}) \leq f(W_{\alpha+\beta})$
  and we write $\deg f = \beta$. #m/def/linalg  
  See [[Closed category of graded vector spaces]] ^homogenous

See [[Degree operator#Properties|Degree operator properties]].


#
---
#state/tidy | #lang/en | #SemBr

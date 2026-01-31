---
mathLink-blocks:
  symmetric: symmetric
  nondegenerate: nondegenerate
tags:
  - public
---
[[Multilinear map]]
# Bilinear form

A **bilinear form** $B : V \times V \to \mathbb{K}$ is a [[multilinear map]] from a vector space $V$ to its underlying field $\mathbb{K}$, #m/def/linalg 
i.e. linear in both arguments separately
$$
\begin{align*}
B(\alpha u + \beta v, w) &= \alpha B(u,w) + \beta B(v,w) \\
B(u,\alpha v + \beta w) &= \alpha B(u,v) + \beta B(u,w)
\end{align*}
$$

## Further terminology

- A bilinear form is called **symmetric** iff $B(x,y) = B(y,x)$. ^symmetric
- A bilinear form is called **nondegenerate** iff $V \to V^* : v \mapsto B(v,-)$ is an isomorphism, equivalently $B(v,w)=0$ for all $w \in V$ implies $v=0$. ^nondegenerate

## Properties

- [[Correspondence between quadratic forms and symmetric bilinear forms away from 2]]

## See also

- [[Quadratic space]]

#
---
#state/tidy | #lang/en | #SemBr

---
tags:
  - public
---
[[Number field]]
# Quadratic field

A **quadratic field** $K$ is a [[number field]] of degree 2, #m/def/ring 
i.e. $[K : \mathbb{Q}] = 2$ whence $K = \mathbb{Q}[\sqrt{ d }]$ for some [[Squarefree integer|squarefree]] $d \in \mathbb{Z}$.

> [!missing]- Proof
> Let $\alpha \in \mathcal{O}_{K} \setminus \mathbb{Z}$.
> Then $\alpha^2 = m + n\alpha$ for $m,n \in \mathbb{Z}$.
> Now
> $$
> \begin{align*}
> (-n+2\alpha)^2 = n^2 + 4m
> \end{align*}
> $$


## Ring of integers

The [[Algebraic integer|ring of integers]] of $\mathbb{Q}(\sqrt{ d })$ is
$$
\begin{align*}
\mathcal{O}_{\mathbb{Q}(\sqrt{ d })} = \begin{cases}
\mathbb{Z}[\sqrt{ d }] & d \equiv 2,3 \mod 4 \\
\mathbb{Z}\left[ \frac{1+\sqrt{ d }}{2} \right] & d=1  \mod 4 
\end{cases}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof 


#
---
#state/develop | #lang/en | #SemBr

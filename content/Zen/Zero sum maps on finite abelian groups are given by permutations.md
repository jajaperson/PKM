---
tags:
  - public
---
[[Abelian group]]
# Zero sum maps on finite abelian groups are given by permutations

Let $A=\{ a_{i} \}_{i=1}^n$ be a finite [[abelian group]] of order $n$ and $\varphi : \mathbb{N}_{n} \to A : i \mapsto b_{i}$ be a function.
Then $\varphi$ satisfies $\sum_{i=1}^n \varphi(i) = 0$
iff there exists a permutation
$$
\sigma = \begin{align*}
\begin{pmatrix}
a_{1},\dots,a_{n} \\
c_{1},\dots,c_{n}
\end{pmatrix}
\end{align*}
\in A!
$$
of $A$ such that $c_{i}-a_{i} = b_{i}$.[^1952] #m/thm/comb 

  [^1952]: 1952\. [[Sources/@hallCombinatorialProblemAbelian1952|A Combinatorial Problem on Abelian Groups]]

> [!missing]- Proof
> We first show that given a permutation
> $$
> \begin{align*}
> \sigma = \begin{pmatrix}
> a_{1},\dots,a_{n} \\ 
> c_{1},\dots,c_{n}
> \end{pmatrix}
> \end{align*}
> $$
> whose differences are $b_{1},\dots,b_{n}$,
> we can find another $\sigma'$ whose differences are $b_{1}', b_2', b_{3},\dots,b_{n}$ such that $b_{2}'=b_{1}+b_{2}-b_{1}'$, i.e. the same except in two places.
> 
> See op. cit.

#
---
#state/develop | #lang/en | #SemBr

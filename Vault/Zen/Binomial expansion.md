---
aliases:
  - binomial coëfficient
  - binomial theorem
tags:
  - public
---
[[Combinatorics MOC]]
# Binomial expansion

The **binomial expansion** states that #m/thm/num
$$
\begin{align*}
(x+y)^n = \sum_{k=0}^n \begin{pmatrix}
n \\
k
\end{pmatrix} x^n y^{n-k}
\end{align*}
$$
where the so-called **binomial coëfficients** are given by
$$
\begin{align*}
\begin{pmatrix}
n \\
k
\end{pmatrix} = \frac{n!}{k!(n-k)!} = {^n}\mathrm{C}_{k}
\end{align*}
$$
and $^n \mathrm{C}_{k}$ is the number of ways to choose $k$ elements of a set of size $n$.
See also [[Generalized binomial coëfficient]].

> [!missing]- Proof
> #missing/proof

## Properties

1. $$
  \begin{align*}
  {n \choose k} = {n \choose n-k}
  \end{align*}
  $$ 
  ^P1
2. $$
  \begin{align*}
  n {n-1 \choose n-1} = k {n \choose k}
  \end{align*}
  $$
  ^P2
3. $$
  \begin{align*}
  {m+n\choose k} = \sum_{j=0}^k {m \choose j}{n \choose k-j}
  \end{align*}
  $$
  ^P3
4. $$
  \begin{align*}
  \sum_{m=k}^n {n \choose k}{n-m \choose k-j} = {n + 1 \choose k+1}
  \end{align*}
  $$
^P4
5. $$
  \begin{align*}
  \sum_{m=k}^n {m \choose k} = {n+1 \choose k+1}
  \end{align*}
  $$
  ^P5

> [!check]- Proof of 1–3, 5
> Clearly choosing $k$ elements from a set of size $n$ is the same as choosing $n-k$ elements to be excluded, proving [[#^P1]].
> 
> Consider choosing a team of size $k$ from a set of $n$ people, where one member of the team is the captain.
> One can either first choose a captain and then the rest of the team (LHS),
> or the team and thence the captain (RHS),
> proving [[#^P2]].
> 
> Consider a set of $m$ red marbles and $n$ blue marbles.
> The number of arbitrary choices of $k$ marbles is the LHS,
> but this is the same as every possible way of choosing $j$ red marbles and $k-j$ blue marbles (RHS).
> This proves [[#^P3]].
> 
> A proof of [[#^P4]] is missing, but [[#^P5]] follows directly for $j=k$.
> <span class="QED"/>

> [!missing]- Proof of 4
> #missing/proof


#
---
#state/develop | #lang/en | #SemBr
